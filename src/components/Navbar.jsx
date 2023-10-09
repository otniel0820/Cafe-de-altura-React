import React, { useContext } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Links from "./Links";
import Cart from "./Cart";
import Telf from "./Telf";
import { QuantityContext } from "../context/QuantityContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const {cart}=useContext(CartContext)
  const {quantity : {cantidad}}=useContext(QuantityContext)
  return (
    <div className="sticky top-0">
      <header className="flex py-[0.8em] px-[2.5em] justify-between items-center bg-[#2B2A2B]   w-full">
        <Logo/>
        <Links />
        <div className="flex items-center gap-[1.5em]">
          <Telf/>
          <Button style={'nav'} text={'Iniciar sesión'}/>
        </div>
        <div className="flex gap-[1em]">
          <Cart/>
        <p className="text-[white]">{cantidad>0?cantidad:''}</p>
         
        </div>
        
      </header>
    </div>
  );
};

export default Navbar;
