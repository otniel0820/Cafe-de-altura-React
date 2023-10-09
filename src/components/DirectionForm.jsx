import React from "react";
import { useForm } from "react-hook-form";

const DirectionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setvalue,
    reset,
  } = useForm();

  return (
    <div className="flex flex-col gap-[1.5em]">
      <h1 className="text-[1.1em] not-italic font-semibold">
        Dirección de envío
      </h1>
      <form action="" className="w-[33em] flex flex-col gap-[0.5em]">
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="nombre"
            className="text-[0.75em] not-italic font-normal"
          >
            Nombre
          </label>
          <input
            type="text"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
          />
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="nombre"
            className="text-[0.75em] not-italic font-normal"
          >
            Apellidos
          </label>
          <input
            type="text"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
          />
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="nombre"
            className="text-[0.75em] not-italic font-normal"
          >
            Teléfono
          </label>
          <input
            type="text"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
            placeholder="+31 600 600 600"
          />
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="nombre"
            className="text-[0.75em] not-italic font-normal"
          >
            Email
          </label>
          <input
            type="text"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
          />
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="nombre"
            className="text-[0.75em] not-italic font-normal"
          >
            País
          </label>
          <select name="pais" id="" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] ">
            <option value="se">Seleccionar</option>
            <option value="es">España</option>
            <option value="ve">Venezuela</option>
            <option value="us">Estados Unidos</option>
            <option value="de">Alemania</option>
            <option value="pt">Portugal</option>
          </select>
          <div className="flex items-start gap-[1.5em]">
            <article className="flex flex-col items-start gap-[3px]">
                <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">Población</label>
                <input type="text" name="poblacion" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[15.8em] focus:outline-[#3F8F6B] "/>
            </article>
            <article className="flex flex-col items-start gap-[3px] ">
                <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">CP</label>
                <input type="text" name="cp" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[15.8em] focus:outline-[#3F8F6B] "/>
            </article>
          </div>
          <div className="flex items-start gap-[1.5em]">
            <article>
            <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">Calle</label>
             <input type="text" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] " />   
            </article>
            <article>
            <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">Nº</label>
             <input type="text" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B]" />  
            </article>
            <article>
            <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">Piso</label>
             <input type="text" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] " />  
            </article>
            <article>
            <label htmlFor="poblacion" className="text-[0.75em] not-italic font-normal">Puerta</label>
             <input type="text" className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] " />  
            </article>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DirectionForm;
