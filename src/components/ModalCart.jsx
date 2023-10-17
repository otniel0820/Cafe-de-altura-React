import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";
import Count from "./Count";
import { QuantityContext } from "../context/QuantityContext";
import { fixed } from "../utils/fixed";
import sadCart from '../assets/sad-cart.svg'

const ModalCart = () => {
  const { cart, setCart, openModal, setOpenModal } = useContext(CartContext);
  const {
    quantity: { precioTotal },
  } = useContext(QuantityContext);

  
  const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     console.log("Aqui estoy");

  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       console.log(!modalRef.current.contains(event.target));
        
  //       setOpenModal(!openModal);
        
  //     }
  //   };
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [openModal]);

  const coffeInCart = cart && cart.length > 0;

  const handleAdd = (cafeIndex) => {
    const updatedCart = [...cart];

    updatedCart[cafeIndex].cantidad += 1;

    setCart(updatedCart);
  };

  const handleSub = (cafeIndex) => {
    const updatedCart = [...cart];

    if (updatedCart[cafeIndex].cantidad > 0) {
      const firstCart = { ...updatedCart[cafeIndex] };
      updatedCart[cafeIndex].cantidad -= 1;

      if (updatedCart[cafeIndex].cantidad === 0) {
        const confirmDelete = window.confirm(
          "¿Desea eliminar el producto por completo?"
        );
        if (confirmDelete) {
          updatedCart.splice(cafeIndex, 1);
        } else {
          updatedCart[cafeIndex] = firstCart;
        }
      }
      setCart(updatedCart);
    }
  };

  const deleteCart = () => {
    if (cart.length>0) {
      const confirmDeletCart = window.confirm(
      "¿Esta seguro que quiere eliminar todos los productos?"
    );
    if (confirmDeletCart) {
      setCart([]);
    }
    }
    
  };

  return (
    <>
      {/* {openModal && (
        <div
          ref={modalRef}
          className="fixed w-[37.5em] z-50 h-[40em] p-[1em] bg-[#FFEBCD] top-[4.8em] right-[0.2em] rounded-[1.5em] flex flex-col justify-center items-center gap-[1em] bg-opacity-90"
        >
          <h1 className="text-[1.5em] not-italic font-semibold">Carrito 🛒</h1>
          <div className=" w-full h-full flex flex-col px-[1em] overflow-auto scrollbar-hide gap-[1em]">
            {coffeInCart ? (
              cart?.map((cafe, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-around items-center
                     gap-[2em] w-full h-[8em]"
                  >
                    <Count
                      cantidad={cafe.cantidad}
                      onSub={() => handleSub(i)}
                      onAdd={() => handleAdd(i)}
                    />
                    <div className="flex justify-center items-start">
                      <img
                        src={cafe.urlImg}
                        alt=""
                        className="w-[6em] h-[6em] "
                      />
                    </div>

                    <div className="flex flex-col gap-[0.5em]">
                      <h3 className="flex items-start justify-start w-[12em] text-center font-semibold">
                        {cafe.name}
                      </h3>
                      <p className="text-[0.9em] not-italic font-normal ">
                        Paquete de café, 250 gr
                      </p>
                    </div>

                    <p>{fixed(cafe.price * cafe.cantidad)}€</p>
                  </div>
                );
              })
            ) : (
              <p className="text-[2em] not-italic font-semibold pt-[7em] text-center">
                El carrito esta vacio
              </p>
            )}
          </div>
          <div>
            <h1 className="text-[1.3em] not-italic font-semibold">
              SubTotal a Pagar {fixed(precioTotal)} €
            </h1>
          </div>
          <div className="flex gap-[1em]">
            <Link to={cart.length === 0 ? null : "/cesta"}>
              <Button text={"ir a la cesta"} style={"btnTotal"} />
            </Link>
            <Button
              text={"Vaciar Carrito"}
              style={"nav"}
              handleClickEliminar={() => deleteCart()}
            />
          </div>
        </div>
      )} */}
      {openModal&&<div onMouseLeave={()=>setOpenModal(false)} className="fixed w-[37.5em] z-50 h-[40em] p-[1em] bg-[#FFEBCD] top-[4.8em] right-[0.2em] rounded-[1.5em] flex flex-col justify-center items-center gap-[1em] bg-opacity-90 border-double border-4 border-[#FFBB1D] shadow-lg shadow-slate-500">
      <h1 className="text-[1.5em] not-italic font-semibold " >Carrito 🛒</h1>
      <div className=" w-full h-full flex flex-col px-[1em] overflow-auto scrollbar-hide gap-[1em]">
      
        {coffeInCart ? (
          cart?.map((cafe, i) => {
            return (
              <div key={i} className="flex flex-col gap-[0.5em] w-full">
                <div
                
                className="flex justify-around items-center
                     gap-[2em] w-full h-[8em]"
              >
                <Count
                  cantidad={cafe.cantidad}
                  onSub={() => handleSub(i)}
                  onAdd={() => handleAdd(i)}
                />
                <div className="flex justify-center items-start">
                  <img src={cafe.urlImg} alt="" className="w-[6em] h-[6em] " />
                </div>

                <div className="flex flex-col gap-[0.5em]">
                  <h3 className="flex items-start justify-start w-[12em] text-center font-semibold">
                    {cafe.name}
                  </h3>
                  <p className="text-[0.9em] not-italic font-normal ">
                    Paquete de café, 250 gr
                  </p>
                </div>

                <p>{fixed(cafe.price * cafe.cantidad)}€</p>
                
              </div>
              <section className="w-[48.5] h-[1px] bg-[#E3DED7]"></section>
              </div>
              
              
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center gap-3 pt-[6em]">
            <img src={sadCart} alt="" className="w-[8em] h-[8em]" />
          <p className="text-[2em] not-italic font-semibold text-center">
            El carrito esta vacio
          </p>
          </div>
          
        )}
      </div>
      <section className="w-full h-[1px] bg-[black]"></section>
      <div>
        <h1 className="text-[1.3em] not-italic font-semibold">SubTotal a Pagar {fixed(precioTotal)} €</h1>
      </div>
      <div className="flex gap-[1em]">
        
        <Link to={cart.length===0?null: "/cesta"}>
          <Button text={"ir a la cesta"} style={"btnTotal"} />
        </Link>
        <Button
          text={"Vaciar Carrito"}
          handleClickEliminar={() => deleteCart()}
        />
      </div>
    </div>}
    </>
  );
};

export default ModalCart;
