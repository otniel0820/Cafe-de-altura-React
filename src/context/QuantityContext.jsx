import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const QuantityContext = createContext();
const QuantityContextProvider = ({ children }) => {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(cart);

  useEffect(() => {
    let total = cart.reduce(
      (acc, cafe) => {
        acc.cantidad += cafe.cantidad;
        acc.precioTotal += cafe.price * cafe.cantidad;

        return acc;
      },
      {
        cantidad: 0,
        precioTotal: 0,
      }
    );
    setQuantity(total);
  }, [cart]);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};

export default QuantityContextProvider;
