import {React, useContext, useEffect, useState} from "react";
import ProductBasket from "../components/ProductBasket";
import DeliveryBasket from "../components/DeliveryBasket";
import TotalBasket from "../components/TotalBasket";
import { QuantityContext } from "../context/QuantityContext";
import { CartContext } from "../context/CartContext";


const Basket = () => {
  const {cart}=useContext(CartContext)
  const {quantity : {cantidad}}=useContext(QuantityContext)

 
  
  
  return (
    <div className="flex p-[2.5em] flex-col items-center min-h-screen gap-[1.5em] ">
      <h1 className="text-[#2A5B45] text-[1.5em] not-italic font-medium">
        Cesta({cantidad > 0? cantidad: 0})
      </h1>
      <div className="flex justify-center items-start gap-[1.5em]">
        <div className="flex p-[0.5em] flex-col items-start gap-[1.5em]">
            <h3 className="text-[1.2em] not-italic font-semibold">Productos</h3>
          <ProductBasket />
          <h3 className="text-[1.2em] not-italic font-semibold">Seleccionar envío</h3>
          <DeliveryBasket />
        </div>
        <TotalBasket />
      </div>
    </div>
  );
};

export default Basket;
