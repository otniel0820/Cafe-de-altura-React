import React, { useContext} from "react";
import Button from "./Button";
import { CartContext } from "../context/CartContext";

const CardCafe = ({ img, name, price, id, available }) => {
  const { cart, setCart } = useContext(CartContext);

  const newCoffe = {
    id: id,
    cantidad: 1,
    urlImg: img,
    name: name,
    price: price,
    available: available,
  };
  const handleClick = () => {
    setCart((cart) => {
      const holdPrev = [...cart];
      const existingCoffee = holdPrev.find((cafe) => cafe.id === id);
      if (existingCoffee) {
        existingCoffee.cantidad++;
      } else {
        return [...holdPrev, newCoffe];
      }
      return holdPrev;
    });
  };
  return (
    <div>
      {available === true ? (
        <div className="flex flex-col p-[1.5em] justify-end items-center gap-[1.5em] rounded-[0.5em] border border-solid border-[#E3DED7] group/card hover:bg-[#f7f5f3] cursor-pointer">
          <img className="w-[13.6em] h-[13.6em]" src={img} alt="" />
          <h4 className="text-[0.9em] font-semibold leading-4">{name}</h4>
          <p className="text-[0.9em] font-normal">{price},00 €</p>
          <Button
            style={"añadir"}
            text={"Añadir"}
            handleClickAñadir={handleClick}
          />
        </div>
      ) : (
        <div className="flex flex-col p-[1.5em] justify-end items-center gap-[1.5em] rounded-[0.5em] border border-solid border-[#E3DED7] bg-[#E3DED7] bg-opacity-60 cursor-no-drop ">
          <img className="w-[13.6em] h-[13.6em] -z-20" src={img} alt="" />
          <h4 className="text-[0.9em] font-semibold leading-4 -z-20">{name}</h4>
          <p className="text-[0.9em] font-normal -z-20">{price},00 €</p>
          <Button style={"agotado"} text={"Agotado"} />
        </div>
      )}
    </div>
  );
};

export default CardCafe;
