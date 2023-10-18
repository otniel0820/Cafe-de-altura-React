import React from "react";
import Telf from "./Telf";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import phoneBlack from '../assets/phoneBlack.png'
import Form from "./Form";

const Direction = () => {
  return (
    <div className="bg-[#E3DED7] px-[2.3em] ">
      <article className="flex justify-center items-center gap-[1.5em]">
        <section className="flex w-[36.75em] flex-col items-start gap-[2em]">
          <div className="flex flex-col items-start gap-[0.75em]">
            <h3 className="text-[1.1em] not-italic font-semibold">
              Entra en contacto con nosotros
            </h3>
            <p className="text-[0.9em] text-[#6B7280] not-italic font-normal">
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[1.5em]">
            <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <article className="flex flex-col w-[21.5em] items-start">
              <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">
                742 Evergreen Terrace
              </p>
              <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">
                Springfield, OR 12345
              </p>
            </article>
            <article className="flex flex-col items-start gap-[0.75em]">
              <div className="flex justify-center items-center gap-[0.75em]">
                <img src={phoneBlack} alt="" className="w-[1.5em] h-[1.5em]"/>
                <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">+1 (555) 123-4567</p>
              </div>
              <div className="flex justify-center items-center gap-[0.75em]">
                <img src={mail} alt="" className="w-[1.5em] h-[1.5em] " />
                <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">
                  support@example.com
                </p>
              </div>
            </article>
            <article>
                <p className="text-[0.8em] not-italic font-normal text-[#6B7280]">¿Buscas un trabajo? <Link to={'/ofertas_trabajo'} className="text-[1.1em] not-italic font-bold underline text-[#111827]">Ver nuestras ofertas.</Link> </p>
            </article>
          </div>
        </section>
      <Form/>
      </article>
    </div>
  );
};

export default Direction;
