import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css"
import productos from '../data/productos';
import { useParams, Navigate } from 'react-router-dom';

 
const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItems] = useState(productos[id - 1]);
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(productos[id - 1 ]);
      }, 2000);
    });

    return response;
  };

  useEffect(() => {
    const getItems = async () => {
      const result = await loadItems();
      setIsLoading(false);
      setItems(result);
    };
    getItems();
  }, [loadItems]);

  return (
    <div className="itemDetail__container">
      
      {isLoading ? (
        <h2>...CARGANDO</h2>
      ) : productos[id - 1] ? (
        <ItemDetail item={item} />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  )
}
export default ItemDetailContainer;