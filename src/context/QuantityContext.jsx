import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";


export const QuantityContext = createContext();
const QuantityContextProvider = ({ children }) => {
  const { cart, pago } = useContext(CartContext);
  const [quantity, setQuantity] = useState(cart);
  const [quantityPayment, setQuantityPayment]=useState(pago)
  const [delivery, setDelivery] = useState('GRATIS')

  useEffect(() => {
    const total = cart?.reduce(
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
    if (cart.length === 0) {
      
      const totalPago = pago?.reduce(
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
        setQuantityPayment(totalPago)
    }
  }, [cart,pago]);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity, delivery, setDelivery, quantityPayment, setQuantityPayment }}>
      {children}
    </QuantityContext.Provider>
  );
};

export default QuantityContextProvider;
