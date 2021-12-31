import React, { useState, useEffect } from "react";
import Item from "./Item"
import "./ItemList.css"
import productos from "../data/productos"

const ItemList = () => {
  const [items, setItems] = useState([]);
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
    <div className="itemlist__container">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};
export default ItemList;