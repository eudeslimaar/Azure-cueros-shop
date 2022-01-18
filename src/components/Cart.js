import { useCart } from "../context/CartContext";
import CartWidgetItem from "./CartWidjetItem"
import OptionButton from "./OptionButton"
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem } = useCart();

  return (
    <div className="container__Cart">
      <div className="cart__items">
        <h3>Carrito</h3>
        <ul>
          {cart.addedItems.length !== 0 ? (
            cart.addedItems.map((producto) => {
              return (
                <CartWidgetItem producto={producto} removeItem={removeItem} />
              );
            })
          ) : (
            <p>No hay productos en tu carrito</p>
          )}
        </ul>
      </div>
      <div className="total">
        <h3>Total: {cart.totalPrice} ARS</h3>
        {cart.addedItems.length !== 0 ? (
          <>
            <OptionButton
              text="Finalizar pedido"
              isLink={true}
              
            />
            <OptionButton
              text="Continuar"
              isLink={true}
              to="/shop"
            />
          </>
        ) : (
          <OptionButton
            text="Ver más"
            isLink={true}
            to="/shop"
          />
        )}
      </div>
    </div>
  );
};

export default Cart;