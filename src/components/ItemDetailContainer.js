import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css"
import productos from "../data/productos"

 
const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    const response = await new Promise((resolve) => {
      setTimeout(function () {
        resolve(productos);
      }, 2000);
    });

    return response;
  };

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const result = await loadItems();
      setIsLoading(false);
      setItems(result);
    };
    getItems();
  }, []);

  return (
    <div className="itemDetail__container">
      
      <div className="card_detail">
      {item.map((detail) => {
          return <ItemDetail key={item.id} item={detail} />;
        })}
      </div>
    </div>
  )
}
export default ItemDetailContainer;