import React, { useContext, useRef } from "react";
import { QuantityContext } from "../context/QuantityContext";

const DeliveryBasket = () => {
  const {setDelivery} = useContext(QuantityContext)
 

  
  return (
    <div className="flex flex-col gap-[1.5em]">
      <section className="flex items-center gap-[1em]">
        <input type="radio" id="envioGratis" className="w-[1.5em] h-[1.5em] accent-[#2A5B45]" name="typeDelivery"  onChange={(e)=> {
          if (e.target.checked=== true) {
            setDelivery('GRATIS')
          }
        }}/>
        <div className="flex flex-col items-start gap-[0.25em] pr-[28.9em]">
          <label htmlFor="envioGratis" className="text-[0.9em] not-italic font-semibold">
            Envío 5-7 días
          </label>
          <p className="text-[0.9em] not-italic font-normal">
            Opción estándar sin seguimiento
          </p>
        </div>
        <h3 className="text-[1.2em] not-italic font-semibold">GRATIS</h3>
      </section>
      <section className="w-[48.5] h-[1px] bg-[#E3DED7]"></section>
      <section className="flex items-center gap-[1em]">
        <input type="radio" id="envioPago" className="w-[1.5em] h-[1.5em] accent-[#2A5B45]" name="typeDelivery" onChange={(e)=>{
          if (e.target.checked === true){
            setDelivery(9)
          }
        }}/>
        <div className="flex flex-col items-start gap-[0.25em] pr-[9.8em]">
          <label htmlFor="envioPago" className="text-[0.9em] not-italic font-semibold">
            Envío urgente 24h
          </label>
          <p className="text-[0.9em] not-italic font-normal">
            Recibe tu pedido en las siguientes 24h (Para pedidos realizados
            antes de las 13:00).
          </p>
        </div>
        <h3 className="text-[1.2em] not-italic font-semibold">9,00 €</h3>
      </section>
    </div>
  );
};

export default DeliveryBasket;
