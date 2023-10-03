import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const actualCart = JSON.parse(localStorage.getItem("Coffee")) || [];

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(actualCart);

  useEffect(() => {
    localStorage.setItem("Coffee", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
