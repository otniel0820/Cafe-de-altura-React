import React from "react";
import arrow from "../assets/arrow.png";
import arrowf from "../assets/arrowf.png";
import { Link } from "react-router-dom";

const LinkArrow = ({ colorArrow, text, colorText,ruta}) => {
  return (
    <div>
      <Link to={`${ruta==='como llegar'?'/como-llegar':ruta==='resolvemos'?'/resolvemos-tus-dudas':'/tienda'}`}>
        <section className="flex items-center gap-[1em]">
          <p
            className={`text-[0.9em] not-italic font-semibold underline ${
              colorText === "white" ? "text-[white]" : "text-[black]"
            }`}
          >
            {text}
          </p>
          <img
            src={colorArrow === "black" ? arrow : arrowf}
            alt=""
            className="w-[1.5em] h-[1.5em]"
          />
        </section>
      </Link>
    </div>
  );
};

export default LinkArrow;
