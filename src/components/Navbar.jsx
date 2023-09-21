import React from "react";
import logoCafe from "../assets/logoCafe.png";
import phone from "../assets/phone.png";
import carr from "../assets/carr.png";

const Navbar = () => {
  return (
    <div>
      <header className="flex py-[0.8em] px-[2.5em] justify-between items-center bg-[#2B2A2B]">
        <div className="flex text-white items-center gap-[0.45em]">
          <p className="text-[1.5em] not-italic font-normal leading-[2.1em]">
            cafedealtura.com
          </p>
          <img src={logoCafe} alt="" className="w-[1.25em] h-[1.5em]" />
        </div>
        <div className="flex items-center gap-[1em] text-white">
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.8em] not-italic font-semibold leading-[1em]">
              Tienda
            </p>
          </section>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.8em] not-italic font-semibold leading-[1em]">
              Suscripción
            </p>
          </section>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.8em] not-italic font-semibold leading-[1em]">
              Para empresas
            </p>
          </section>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.8em] not-italic font-semibold leading-[1em]">
              Sobre nosotros
            </p>
          </section>
          <section className="flex items-start p-[0.5em] gap-[0.5em]">
            <p className="text-[0.8em] not-italic font-semibold leading-[1em]">
              Contacto
            </p>
          </section>
        </div>
        <div className="flex items-center gap-[1.5em]">
          <article className="flex items-center gap-[0.5em]">
            <img src={phone} alt="" className="w-[1.5em] h-[1.5em]" />
            <p className="text-[0.8em] not-italic font-semibold leading-[1em] text-white">
              +34 919 49 05 18
            </p>
          </article>
          <button className="flex justify-center items-center gap-[0.5em] rounded bg-[#515051] text-[0.8em] not-italic font-semibold leading-[1em] text-white w-[9em] h-[3.1em]">
            Iniciar sesión
          </button>
        </div>
        <div>
          <img
            src={carr}
            alt=""
            className="flex h-[1.5em] w-[1.5em] justify-center items-center"
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
