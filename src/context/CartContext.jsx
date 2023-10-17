import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const actualCart = JSON.parse(localStorage.getItem("Coffee")) || [];
const compra = JSON.parse(localStorage.getItem("Compra")) || [];
const pedido = JSON.parse(localStorage.getItem("Pedido")) || 12387;


const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(actualCart);
  const [pago, setPago]= useState(compra)
  const [openModal, setOpenModal]=useState(false)
  const [registroCompra, setRegistroCompra]= useState(pedido || 12387)

  useEffect(() => {
    localStorage.setItem("Coffee", JSON.stringify(cart));
    if (cart.length === 0) {
      localStorage.setItem("Compra", JSON.stringify(pago));
      localStorage.setItem('Pedido', JSON.stringify(registroCompra))
    }
  }, [cart,pago, registroCompra]);

  return (
    <CartContext.Provider value={{ cart, setCart, pago, setPago, openModal, setOpenModal,registroCompra, setRegistroCompra }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
