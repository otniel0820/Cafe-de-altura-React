import React, { useContext, useState } from "react";
import carr from "../assets/carr.png";
import ModalCart from "./ModalCart";
import { CartContext } from "../context/CartContext";


const Cart = () => {
  
  
  const[isOpen,setIsOpen]=useState(false)
  const {openModal, setOpenModal}=useContext(CartContext)

  const openCart = ()=>{
    
    setOpenModal(!openModal)
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
      {openModal && <ModalCart />}
        
      
      

      
      
    </div>
  );
};

export default Cart;
