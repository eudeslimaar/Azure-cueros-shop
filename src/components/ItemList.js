import React, { useState, useEffect } from "react";
import Item from "./Item"
import "./ItemList.css"
import productos from "../data/productos.js"
import { Link } from "react-router-dom";


const ItemList = ({ soloCategoria }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const loadItems = async () => {     
    const response = await new Promise((resolve, reject) => {
      setTimeout(() =>{
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
      {soloCategoria
        ? items.map((item) => {
            return (
              item.categoria === soloCategoria && (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Item item={item} />
                </Link>
              )
            );
          })
        : items.map((item) => {
            return (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Item item={item} />
              </Link>
            );
          })}
      {isLoading && (
        <h2>CARGANDO...</h2>
      )}
    </div>
  );
};
export default ItemList;