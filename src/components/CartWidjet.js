import React from "react"
import "./CartWidjet.css"

const CartWidjet = ({ cantidad }) =>{
  return(
   <div className="ContainerCartWidjet">
     <button className="cart"><i class="fas fa-shopping-cart"></i></button>
     <div className= "cart__fly">{cantidad}</div>
   </div>
  )

}
export default CartWidjet