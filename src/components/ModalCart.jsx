import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";
import Count from "./Count";
import { QuantityContext } from "../context/QuantityContext";
import { fixed } from "../utils/fixed";

const ModalCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const {
    quantity: { precioTotal },
  } = useContext(QuantityContext);

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
    const confirmDeletCart = window.confirm(
      "¿Esta seguro que quiere eliminar todos los productos?"
    );
    if (confirmDeletCart) {
      setCart([]);
    }
  };

  return (
    <div className="fixed w-[37.5em] h-[40em] p-[1em] bg-[#FFEBCD] top-[4.8em] right-[0.2em] rounded-[1.5em] flex flex-col justify-center items-center gap-[1em] bg-opacity-90">
      <h1 className="text-[1.5em] not-italic font-semibold">Carrito 🛒</h1>
      <div className=" w-full h-full flex flex-col px-[1em] overflow-y-auto gap-[1em]">
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
            );
          })
        ) : (
          <p className="text-[2em] not-italic font-semibold pt-[7em] text-center">
            El carrito esta vacio
          </p>
        )}
      </div>
      <div>
        <h1 className="text-[1.3em] not-italic font-semibold">SubTotal a Pagar {fixed(precioTotal)} €</h1>
      </div>
      <div className="flex gap-[1em]">
        
        <Link to={cart.length===0?null: "/cesta"}>
          <Button text={"ir a la cesta"} style={"checkout"} />
        </Link>
        <Button
          text={"Vaciar Carrito"}
          style={"nav"}
          handleClickEliminar={() => deleteCart()}
        />
      </div>
    </div>
  );
};

export default ModalCart;
