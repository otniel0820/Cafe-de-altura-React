import React, { useContext } from "react";
import table from "../assets/table.png";
import { CartContext } from "../context/CartContext";
import { fixed } from "../utils/fixed";
import { QuantityContext } from "../context/QuantityContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const PedidoRealizado = () => {
  const { pago, setPago } = useContext(CartContext);
  const {
    quantityPayment,
    delivery,
  } = useContext(QuantityContext);
  let iva;
  if (delivery === 9) {
    iva = ((quantityPayment?.precioTotal + delivery) * 21) / 100;
  } else {
    iva = (quantityPayment?.precioTotal * 21) / 100;
  }

  const handleClickEliminar = ()=>{
    setPago([])
  }

  return (
    <div className="flex p-[2.5em] flex-col items-center gap-[1.5em]  h-screen">
      <img src={table} alt="" />
      <h1 className="text-[#2A5B45] text-[1.5em] not-italic font-medium">
        El pedido ha sido realizado con éxito
      </h1>
      <p className="text-[0.9em] not-italic font-normal w-[24em] text-center">
        El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las
        fechas acordadas en tu envío. Hemos enviado un ticket a tu correo
        electrónico.
      </p>
      <div className="flex p-[1.5em] flex-col  gap-[1.5em] rounded-[10px] w-[75em] bg-[#F7F5F3]">
        <h1 className="text-[1.1em] not-italic font-semibold">Tu pedido</h1>
        {pago?.map((cafe, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-start justify-between gap-[1.5em] w-full"
            >
              <div className="flex items-start  gap-[1.5em] w-full">
                <div className="flex justify-center items-start">
                  <img
                    src={cafe.urlImg}
                    alt=""
                    className="w-[3.5em] h-[3.5em] "
                  />
                </div>
                <article className="flex justify-between w-full">
                   <div className="flex flex-col ">
                  <h3 className="flex items-start justify-start w-[12em] text-center font-semibold">
                    {cafe.name}
                  </h3>
                  <p className="text-[0.9em] not-italic font-normal ">
                    Paquete de café, 250 gr
                  </p>
                </div>
                <p className=" text-[1.2em] not-italic font-semibold ">
                  {fixed(cafe.price * cafe.cantidad)} €
                </p> 
                </article>
                
              </div>
            </div>
          );
        })}
        <section className="w-full h-[1px] bg-[#E3DED7]"></section>
        <div className="flex flex-col  gap-[1.5em]">
           <article className="flex items-start justify-between">
          <p className="text-[0.9em] not-italic font-normal">SUBTOTAL</p>
          <p className="text-[0.9em] not-italic font-semibold">{fixed(quantityPayment?.precioTotal)} €</p>
        </article>  
        <article className="flex w-full justify-between items-start">
          <p className="text-[0.9em] not-italic font-normal">ENVÍO</p>
          <p className="text-[0.9em] not-italic font-semibold">
            {delivery === 9 ? `${fixed(delivery)} €` : delivery}
          </p>
        </article>
        <article className="flex w-full justify-between items-start">
          <p className="text-[0.9em] not-italic font-semibold">TOTAL</p>
          <div className="flex flex-col items-end gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold">
              {delivery === 9
                ? fixed(quantityPayment?.precioTotal + delivery)
                : fixed(quantityPayment?.precioTotal)}
              €
            </p>
            <p className="text-[#515051] text-[0.75em] not-italic font-normal">
              Incluye {fixed(iva)} € de IVA
            </p>
          </div>
        </article>
        </div>
      </div>
      <Link to={'/tienda'}>
      
      <Button style={'btnTotal'} text={'Volver a la tienda'} handleClickEliminar={()=>handleClickEliminar()}/>
      </Link>
    </div>
  );
};

export default PedidoRealizado;
