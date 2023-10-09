import React, { useContext } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { QuantityContext } from "../context/QuantityContext";
import { fixed } from "../utils/fixed";

const TotalBasket = ({handleClickPagar}) => {
  const {
    quantity: { precioTotal },
    delivery,
  } = useContext(QuantityContext);
  let iva;
  if (delivery === 9) {
    iva = ((precioTotal + delivery) * 21) / 100;
  } else {
    iva = (precioTotal * 21) / 100;
  }
  const location = useLocation();
  const isBasketPage = location.pathname === "/cesta";

  return (
    <div className="flex flex-col p-[1.5em] w-[24em] items-start gap-[1em] bg-[#F7F5F3]">
      <article className="flex flex-col items-start gap-[1em]">
        <h3 className="text-[1.1em] not-italic font-semibold">
          Total del carrito
        </h3>
        <div className="w-[21em] h-[1px] bg-[#E3DED7]"></div>
        <section className="flex w-[21em] justify-between items-start">
          <p className="text-[0.9em] not-italic font-normal">SUBTOTAL</p>
          <p className="text-[0.9em] not-italic font-semibold">
            {fixed(precioTotal)} €
          </p>
        </section>
        <section className="flex w-[21em] justify-between items-start">
          <p className="text-[0.9em] not-italic font-normal">ENVÍO</p>
          <p className="text-[0.9em] not-italic font-semibold">
            {delivery === 9 ? `${fixed(delivery)} €` : delivery}
          </p>
        </section>
        <div className="w-[21em] h-[1px] bg-[#E3DED7]"></div>
        <section className="flex w-[21em] justify-between items-start">
          <p className="text-[0.9em] not-italic font-semibold">TOTAL</p>
          <div className="flex flex-col items-end gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold">
              {delivery === 9
                ? fixed(precioTotal + delivery)
                : fixed(precioTotal)}
              €
            </p>
            <p className="text-[#515051] text-[0.75em] not-italic font-normal">
              Incluye {fixed(iva)} € de IVA
            </p>
          </div>
        </section>
      </article>
      {isBasketPage ? (
        <article className="flex items-start gap-[1em]">
          <Link to="/checkout">
            <Button style={"btnTotal"} text={"Ir a checkout"} />
          </Link>
          <Link to={"/tienda"}>
            <Button text={"Seguir comprando"} style={"seguirComprando"} />
          </Link>
        </article>
      ) : (
        <article className="flex items-start gap-[1em]">
          <Link to="/pedido_realizado">
            <Button style={"btnTotal"} text={"Pagar y realizar pedido"} handleClickPagar={handleClickPagar} />
          </Link>
        </article>
      )}
    </div>
  );
};

export default TotalBasket;
