import React from "react";
import { Link } from "react-router-dom";
import "./CartWidjet.css";
import { useCart } from "../context/CartContext";
import { useState } from "react"

const CartWidjet = () => {
  
  const { cart, removeItem, clear} = useCart();
  const [showCartList, setShowCartList] = useState(false);
  return(

   <div className="ContainerCartWidjet">

      <div className="cart"
          onClick={() => setShowCartList(!showCartList)}>

            <i class="fas fa-shopping-cart"></i>
            <div>{cart.addedItems.length}</div>
      </div>

      {showCartList && (
            <div className= "cart__list" >
              <p className="limpiar" onClick={clear}>
            Limpiar
          </p>
          <ul>
            {cart.addedItems.length !== 0 ? (
              cart.addedItems.map((producto) => {
                return (
                  <li key={producto.id}>
                    <Link to={`/item/${producto.id}`}>
                      <img src={producto.image} alt={producto.title} />
                      <div>
                        <p>{producto.nombre}</p>
                        <div precio={producto.precio}>
                        </div>                    
                        
                      </div>
                      
                      <span>{producto.cantidad}</span>
                    </Link>
                    <span
                      onClick={() => removeItem(producto.id)}
                    >
                      Cerrar
                    </span>
                  </li>
                );
              })
            ) : (
              <p> Carrito Vacío </p>
            )}
          </ul>

          <div className="cart__list-btn">
            <span>TOTAL: {cart.totalPrice}</span>
            <Link to="/cart">Comprar</Link>
          </div>
        </div>
     
      )}
   </div>
   

  )

}
export default CartWidjet;