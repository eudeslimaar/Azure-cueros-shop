import React from "react";
import { Link } from "react-router-dom";
import "./CartWidjetItem.css"




const CartWidgetItem = ({ producto, removeItem }) => {
  return (

    <div className="CartWidjet" key={producto.id}>
      <Link to={`/item/${producto.id}`}>
        <img src={producto.image} alt={producto.nombre} />
        <div className="description__final">
          <p>{producto.nombre}</p>
            
            <div className="cantidad"><p>{producto.precio} ARS</p><p>x {producto.cantidad}</p> </div>
        </div>
        
      </Link>
      <span
        className="close"
        onClick={() => removeItem(producto.id)}
      >
        x
      </span>
    </div>
  );
};
export default CartWidgetItem