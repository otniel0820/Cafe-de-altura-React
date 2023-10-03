import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Form = () => {
  return (
    <div className="flex w-[36.75em] pt-[2em] pr-[2em] pb-[2em] pl-[3em] flex-col justify-center items-center bg-[#fff] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)]">
      <form action="" className="flex flex-col items-start gap-[1.5em] w-11/12 group/input ">
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="nombre"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
          />
        </div>
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="email"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
          />
        </div>
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="telefono"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Teléfono
          </label>
          <div className="flex w-full box-border border-solid border-[1px] border-[#D1D5DB] shadow-sm focus:outline-[#3F8F6B] rounded-[6px]">
            <select name="codigo" id="telefono" className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center  border-0 focus:outline-none text-[#111827] rounded-[6px]">
                <option value="+1">US</option>
                <option value="+34">ES</option>
                <option value="+32">BEL</option>
                <option value="+43">AU</option>
            </select>
            <input type="tel" id="telefono" className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center border-0 focus:outline-none  w-full rounded-[6px]" placeholder="+1 (555) 987-6543"/>
          </div>
        </div>
        <div>
            <textarea name="" id="messageArea" cols="60" rows="10" className="flex h-[7.6em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] mt-[2.75em]" placeholder="¿En qué podemos ayudarte?"></textarea>
        </div>
        <div className="flex items-start gap-[0.75em] w-full">
            <input type="checkbox" id="politicas" className="w-[1em] h-[1.25em] border-[#D1D5DB] accent-[#2A5B45]"/>
            <label htmlFor="politicas" className="text-[0.9em] not-italic font-normal text-[#374151] w-full flex gap-[0.2em]">Acepto la<Link to={'/politica_de_privacidad'}><p className="text-[0.9em] not-italic font-semibold text-[#374151]">Política de Privacidad</p></Link>y los<Link to={'/terminos_y_condiciones'}><p className="text-[0.9em] not-italic font-semibold text-[#374151]">Términos y condiciones.</p></Link></label>
        </div>
        <Button style={'comprarCafe'} text={'Enviar'}/>
      </form>
    </div>
  );
};

export default Form;
