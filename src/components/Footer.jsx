import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Telf from "./Telf";
import Links from "./Links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex pt-[1.75em] pb-[2.3em] px-[2.5em]  flex-col justify-end items-center gap-[2.5em] bg-[#1F1815] ">
      <section className="flex flex-col items-start gap-[1em] min-w-full">
        <Logo />
        <div className=" flex min-w-full  justify-between">
          <article className="flex flex-col w-[16em] items-start gap-[1em]">
            <h3 className="text-[1.12em] not-italic font-semibold text-[#fff]">
              Te ayudamos en
            </h3>
            <Button text={"+34 919 49 05 18"} icon={"tel"} style={'footer'}/>
            <Button text={"hola@cafedealtura.com"} icon={"mail"} style={'footer'}/>
          </article>
          <article className="pl-[10.5em]">
            <Links direction={'col'}/>
          </article>
          
          <article className="flex  items-start flex-col gap-[1em] pr-[12.5em]  ">
            <Link to={'/politicas_de_privacidad'}>
                <p className="text-[0.9em] not-italic font-semibold text-[#fff]">Política de privacidad</p>
            </Link>
            <Link to={'/política_de_cookies'}>
                <p className="text-[0.9em] not-italic font-semibold text-[#fff]">Política de cookies</p>
            </Link>
            <Link to={'/términos_y_condiciones'}>
                <p className="text-[0.9em] not-italic font-semibold text-[#fff]">Términos y condiciones</p>
            </Link>

          </article>
        </div>
      </section>
    </div>
  );
};

export default Footer;
