import React, { useContext, useId, useRef, useState } from "react";
import carr from "../assets/carr.png";
import { CoffeeContext } from "../context/CoffeeContext";
import CardCafe from "./CardCafe";
import ModalCart from "./ModalCart";


const Cart = () => {
  
  const {coffeeCard, setCoffeeCard}= useContext(CoffeeContext)
  const[isOpen,setIsOpen]=useState(false)
  const modalRef = useRef(null)

  const openCart = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      <button onClick={openCart}>
        <img
        src={carr}
        alt=""
        className="flex h-[1.5em] w-[1.5em] justify-center items-center"
      />
      </button>
      {isOpen && <ModalCart />}
        
      
      

      
      
    </div>
  );
};

export default Cart;
