import React from "react";
import arrow from "../assets/arrow.png";
import arrowf from "../assets/arrowf.png";
import { Link } from "react-router-dom";

const LinkArrow = ({ colorArrow, text, colorText,ruta}) => {
  return (
    <div>
      <Link to={`${ruta==='como llegar'?'https://www.google.com/maps/search/742+Evergreen+Terrace++Springfield,+OR+12345/@44.0612331,-123.1301207,11z/data=!3m1!4b1?entry=ttu':ruta==='resolvemos'?'/contacto':'/tienda'}`}>
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
