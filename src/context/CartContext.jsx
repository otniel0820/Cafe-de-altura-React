import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const actualCart = JSON.parse(localStorage.getItem("Coffee")) || [];

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(actualCart);
  const [pago, setPago]= useState()

  useEffect(() => {
    localStorage.setItem("Coffee", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, pago, setPago }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
