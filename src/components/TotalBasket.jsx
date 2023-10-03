import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { QuantityContext } from "../context/QuantityContext";
import { fixed } from "../utils/fixed";

const TotalBasket = () => {
  const {quantity: {precioTotal}}=useContext(QuantityContext)
  const iva = precioTotal *21/100
  
  return (
    <div className="flex flex-col p-[1.5em] w-[24em] items-start gap-[1em] bg-[#F7F5F3]">
      <article className="flex flex-col items-start gap-[1em]">
        <h3 className="text-[1.1em] not-italic font-semibold">
          Total del carrito
        </h3>
        <div className="w-[21em] h-[1px] bg-[#E3DED7]"></div>
        <section className="flex w-[21em] justify-between items-start">
            <p className="text-[0.9em] not-italic font-normal">SUBTOTAL</p>
            <p className="text-[0.9em] not-italic font-semibold">{fixed(precioTotal)}€</p>

        </section>
        <section className="flex w-[21em] justify-between items-start">
            <p className="text-[0.9em] not-italic font-normal">ENVÍO</p>
            <p className="text-[0.9em] not-italic font-semibold">GRATIS</p>
        </section>
        <div className="w-[21em] h-[1px] bg-[#E3DED7]"></div>
        <section className="flex w-[21em] justify-between items-start">
            <p className="text-[0.9em] not-italic font-semibold">TOTAL</p>
            <div className="flex flex-col items-end gap-[0.5em]">
                <p className="text-[0.9em] not-italic font-semibold">{fixed(precioTotal)} €</p>
                <p className="text-[#515051] text-[0.75em] not-italic font-normal">Incluye {fixed(iva)}€ de IVA</p>
            </div>
        </section>
      </article>
      <article className="flex items-start gap-[1em]">
            <Button style={'checkout'} text={'Ir a checkout'}/>
           <Link to={'/tienda'}>
           <Button text={'Seguir comprando'} style={'seguirComprando'}/>
           </Link> 
      </article>
    </div>
  );
};

export default TotalBasket;
