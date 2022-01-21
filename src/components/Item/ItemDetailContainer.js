import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';
import useGetItems from "../../firebase/hooks/useGetItems";

 
const ItemDetailContainer = () => {
  const { id } = useParams()
  const [items] = useGetItems();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState();


  useEffect(() => {
    items.map((producto) => {
      if (producto.id === id) {
        return setItem(producto);
      }
      return producto;
    });
    return item && setIsLoading(false);
  }, [items, item, setIsLoading, id]);

  return (
    <div className="itemDetail__container">
      
      {isLoading ? (
        <h2>...CARGANDO</h2>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  )
}
export default ItemDetailContainer;