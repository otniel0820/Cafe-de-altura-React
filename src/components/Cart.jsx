import React, { useContext} from "react";
import carr from "../assets/carr.png";
import cartFull from "../assets/cartFull.png";
import ModalCart from "./ModalCart";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { openModal, setOpenModal, cart } = useContext(CartContext);

  const openCart = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <button onClick={openCart}>
          <img
            src={carr}
            alt=""
            className="flex h-[1.5em] w-[1.5em] justify-center items-center"
          />
        </button>
      ) : (
        <button onClick={openCart}>
          <img
            src={cartFull}
            alt=""
            className="flex h-[1.5em] w-[1.5em] justify-center items-center"
          />
        </button>
      )}

      {openModal && <ModalCart />}
    </div>
  );
};

export default Cart;
