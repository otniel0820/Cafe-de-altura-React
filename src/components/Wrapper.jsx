import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import LinkArrow from "./LinkArrow";
import ImgCafeteriaPlanta from "./ImgCafeteriaPlanta";

const Wrapper = ({ section }) => {
  return (
    <div>
      {section === "taza" ? (
        <div className="flex justify-center items-center gap-[10em] py-[3em] px-[2.5em]">
          <section className="flex flex-col items-start gap-[1em] w-[36.75em]">
            <h3 className="text-[1.1em] not-italic font-semibold  text-[#2A5B45]">
              De la planta a tu taza
            </h3>
            <h1 className="text-[2.5em] not-italic font-semibold  text-[#000000]">
              El mejor café del mundo, ahora en tu casa.
            </h1>
            <p className="text-[#111827] text-[0.87em] not-italic font-normal ">
              Trabajamos con agricultores de todo el mundo para seleccionar los
              mejores granos de café y que puedas viajar desde la comodidad de
              tu hogar.
            </p>
            <div className="flex items-start gap-[1em]">
              <Link to={"/tienda"}>
                <Button
                  style={"descubrirOrigenes"}
                  text={"Descubrir orígenes"}
                />
              </Link>
              <Link to={"tienda"}>
                <Button style={"comprarCafe"} text={"Comprar café"} />
              </Link>
            </div>
          </section>
          <section>
            <ImgCafeteriaPlanta imgWrapper={"planta"} />
          </section>
        </div>
      ) : (
        <div className="flex py-[2.8em] px-[2.5em] justify-between items-center
        ">
          <section className="flex justify-center gap-[10em] items-center w-[100%] ">
            <div className="w-[28em] flex flex-col gap-[1em]">
              <h2 className="text-[1.5em] not-italic font-medium text-[#2A5B45]">
                Pruébalo en nuestro coffee shop
              </h2>
              <p className="text-[0.9em] not-italic font-normal">
                Visita nuestra cafetería en el centro de la ciudad para probar
                los granos de café antes de hacer tu pedido y llévate un
                descuento
              </p>
              <LinkArrow
                colorArrow={"black"}
                text={"Cómo llegar"}
                colorText={"black"}
                ruta={'como llegar'}
              />
            </div>
            <div>
              <ImgCafeteriaPlanta imgWrapper={"cafeteria"} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Wrapper;
