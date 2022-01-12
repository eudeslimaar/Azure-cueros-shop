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
            <div className="cart__fly">{cart.addedItems.length}</div>
      </div>

      {showCartList && (
        <div className= "cart__list" >
              <div className="cart_inner">
              <p className="limpiar" onClick={clear}>
            Limpiar Carrito
          </p>
          <ul className="inner__card">
            {cart.addedItems.length !== 0 ? (
              cart.addedItems.map((producto) => {
                return (
                  <li key={producto.id} className="cardInner_row">
                    <Link to={`/item/${producto.id}`}>
                      <img src={producto.image} alt={producto.title} />
                      <div>
                        <p>{producto.nombre}</p>
                        <div><p>{producto.precio} ARS</p>
                      </div>                    
                        
                      </div>
                      
                      <span>Cant: {producto.cantidad}</span>
                    </Link>
                    
                    <div className="close__innerCard">
                    <span 
                      onClick={() => removeItem(producto.id)}
                    >
                      X
                    </span>
                    </div>
                   
                  </li>
                );
              })
            ) : (
              <p> Carrito Vacío </p>
            )}
          </ul>
              </div>
              <div>
              <span>Total: {cart.totalPrice}</span>
              </div>
          <div className="cart__list-btn">
           
            <Link to="/cart">Finalizar</Link>
          </div>
        </div>
     
      )}
   </div>
   

  )

}
export default CartWidjet;