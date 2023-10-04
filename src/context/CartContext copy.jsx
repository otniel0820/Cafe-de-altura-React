import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([{
    id:'',
    cantidad: 1,
    urlImg: '',
    name: '',
    price: '',
  }]);
  
  return (
    <CartContext.Provider
      value={{ cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
