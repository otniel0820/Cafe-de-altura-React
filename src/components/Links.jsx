import React from "react";
import { Link } from "react-router-dom";

const Links = ({direction}) => {
  return (
    <div>
      <div className={`flex items-start gap-[1em] text-white ${direction==='col'?'flex-col':'flex-row'}`}>
        <Link to={"/tienda"}>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold leading-[0.1em]">
              Tienda
            </p>
          </section>
        </Link>
        <Link to={'/suscripcion'}>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold leading-[0.1em]">
              Suscripción
            </p>
          </section>
        </Link>
        <Link to={'/para-empresas'}>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold leading-[0.1em]">
              Para empresas
            </p>
          </section>
        </Link>
        <Link to={'/sobre-nosotros'}>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold leading-[0.1em]">
              Sobre nosotros
            </p>
          </section>
        </Link>
        <Link to={'/contacto'}>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.9em] not-italic font-semibold leading-[0.1em]">
              Contacto
            </p>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default Links;
