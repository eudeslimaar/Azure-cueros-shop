import React, { useState, createContext, useContext } from "react";


const CartContext = createContext();
const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item, cantidad) => {
    let itemToAdd = Object.assign(item, { cantidad: cantidad });


    if (isInCart(itemToAdd.id)) {
      const updateItemsAdded = cart.addedItems.map((producto) => {
        if (producto.id === itemToAdd.id)
          return {
            ...producto,
            cantidad:
              producto.cantidad < producto.stock
                ? producto.cantidad + cantidad
                : producto.stock,
          };
        return producto;
      });
      return setCart({
        addedItems: updateItemsAdded,
        totalPrice: calculoTotalPrice(itemToAdd, cantidad),
      });
    }

    setCart({
      addedItems: [...cart.addedItems, itemToAdd],
      totalPrice: calculoTotalPrice(itemToAdd, cantidad),
    });
  };


  const calculoTotalPrice = (item, cantidad) => {

    if (item.envio === "") return cart.totalPrice + item.precio * cantidad;

    let costoEnvio = item.precio + item.envio 
    return cart.totalPrice + costoEnvio * cantidad;
  };

  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
      ? true
      : false;
  };

  const removeItem = (id) => {
    let updateTotalPrice = 0;
    const updateItemsAdded = cart.addedItems.filter((producto) => {
      if (producto.id !== id) {
      
        updateTotalPrice += decrementTotalPrice(producto);
      }
      return producto.id !== id;
    });
    setCart({
      totalPrice: updateTotalPrice,
      addedItems: updateItemsAdded,
    });
  };

  const decrementTotalPrice = (item) => {
    let updateTotalPrice = 0;
    if (item.envio === "")
      return (updateTotalPrice += item.precio * item.cantidad);

    let costoEnvio = item.precio + item.envio
    return (updateTotalPrice += costoEnvio * item.cantidad);
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export { CartContextProvider, useCart };