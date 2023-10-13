import React, { useContext, useState, useEffect } from "react";
import Count from "./Count";
import { CartContext } from "../context/CartContext";
import TotalBasket from "./TotalBasket";
import { QuantityContext } from "../context/QuantityContext";
import { fixed } from "../utils/fixed";

const ProductBasket = () => {
  const { cart, setCart } = useContext(CartContext);

  const productsInBasket = cart && cart.length > 0;

  const handleAdd = (cafeIndex) => {
    const updatedCart = [...cart];

    updatedCart[cafeIndex].cantidad += 1;

    setCart(updatedCart);
  };

  const handleSub = (cafeIndex) => {
    const updatedCart = [...cart];

    if (updatedCart[cafeIndex].cantidad > 0) {
      const firstProduct = { ...updatedCart[cafeIndex] };
      updatedCart[cafeIndex].cantidad -= 1;

      if (updatedCart[cafeIndex].cantidad === 0) {
        const confirmDelete = window.confirm(
          "¿Desea eliminar este producto por completo?"
        );
        if (confirmDelete) {
          updatedCart.splice(cafeIndex, 1);
        } else {
          updatedCart[cafeIndex] = firstProduct;
        }
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="flex items-start gap-[1.5em] flex-col w-full">
      {productsInBasket ? (
        cart?.map((cafe, i) => {
          return (
            <div key={i} className="flex flex-col gap-[1.5em] w-full">
              <div className="flex items-center gap-[1.5em]">
                <Count
                  cantidad={cafe.cantidad}
                  onAdd={() => handleAdd(i)}
                  onSub={() => handleSub(i)}
                />
                <div className="flex justify-center items-start">
                  <img
                    src={cafe.urlImg}
                    alt=""
                    className="w-[3.5em] h-[3.5em] "
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

                <p className="pl-[16.5em] text-[1.2em] not-italic font-semibold">
                  {fixed(cafe.price * cafe.cantidad)} €
                </p>
              </div>
              <section className="w-[48.5] h-[1px] bg-[#E3DED7]"></section>
            </div>
          );
        })
      ) : (
        <p className="text-[1em] not-italic font-semibold ">
          Todavia no ha añadido ningun producto
        </p>
      )}
    </div>
  );
};

export default ProductBasket;
