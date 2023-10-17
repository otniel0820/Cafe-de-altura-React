import React from "react";
import { useForm } from "react-hook-form";

const DirectionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
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
            {...register("nombre", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 2,
                message: "Debe contener al menos dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "Este campo puede tener maximo 20 caracteres",
              },
            })}
            id="nombre"
            onBlur={() => trigger("nombre")}
          />
          {errors.nombre && (
            <span className="text-[red] text-[0.7em]">
              {errors.nombre.message}
            </span>
          )}
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
            {...register("apellidos", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 2,
                message: "Debe contener al menos dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "Este campo puede tener maximo 20 caracteres",
              },
            })}
            id="apellidos"
            onBlur={() => trigger("apellidos")}
          />
          {errors.apellidos && (
            <span className="text-[red] text-[0.7em]">
              {errors.apellidos.message}
            </span>
          )}
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
            {...register("telefono", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[0-9!@#$%^&*()_+[\]{};:'"<>,.?/~\\-]+$/,
                message: "Este campo solo puede tener numeros y simbolos",
              },
            })}
            id="telefono"
            onBlur={() => trigger("telefono")}
          />
          {errors.telefono && (
            <span className="text-[red] text-[0.7em]">
              {errors.telefono.message}
            </span>
          )}
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
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es rquerido",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Correo no valido",
              },
            })}
            id="email"
            onBlur={() => trigger("email")}
          />
          {errors.email && (
            <span className="text-[red] text-[0.7em]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <label
            htmlFor="pais"
            className="text-[0.75em] not-italic font-normal"
          >
            País
          </label>
          <select
            name="pais"
            id="pais"
            className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
            {...register("pais", {
              required: "Este campo es requerido",
            })}
            onBlur={() => trigger("pais")}
          >
            <option value="" disabled selected>
              Seleccionar
            </option>
            <option value="es">España</option>
            <option value="ve">Venezuela</option>
            <option value="us">Estados Unidos</option>
            <option value="de">Alemania</option>
            <option value="pt">Portugal</option>
          </select>
          {errors.pais && (
            <span className="text-[red] text-[0.7em]">
              {errors.pais.message}
            </span>
          )}
          <div className="flex items-start gap-[1.5em]">
            <article className="flex flex-col items-start gap-[3px]">
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                Población
              </label>
              <input
                type="text"
                name="poblacion"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[15.8em] focus:outline-[#3F8F6B] "
                {...register("poblacion", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                onBlur={() => trigger("poblacion")}
              />
              {errors.poblacion && (
                <span className="text-[red] text-[0.7em]">
                  {errors.poblacion.message}
                </span>
              )}
            </article>
            <article className="flex flex-col items-start gap-[3px] ">
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                CP
              </label>
              <input
                type="text"
                name="cp"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[15.8em] focus:outline-[#3F8F6B] "
                {...register("cp", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Este campo solo acepta numeros",
                  },
                })}
                onBlur={() => trigger("cp")}
              />
              {errors.cp && (
                <span className="text-[red] text-[0.7em]">
                  {errors.cp.message}
                </span>
              )}
            </article>
          </div>
          <div className="flex items-start gap-[1.5em]">
            <article>
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                Calle
              </label>
              <input
                type="text"
                id="calle"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] "
                {...register("calle", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                onBlur={() => trigger("calle")}
              />
              {errors.calle && (
                <span className="text-[red] text-[0.6em]">
                  {errors.calle.message}
                </span>
              )}
            </article>
            <article>
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                Nº
              </label>
              <input
                type="text"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B]"
                {...register("number", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Este campo solo acepta numeros",
                  },
                })}
                onBlur={() => trigger("number")}
              />
              {errors.number && (
                <span className="text-[red] text-[0.6em]">
                  {errors.number.message}
                </span>
              )}
            </article>
            <article>
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                Piso
              </label>
              <input
                type="text"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] "
                {...register("piso", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Este campo solo acepta numeros",
                  },
                })}
                onBlur={() => trigger("piso")}
              />
              {errors.piso && (
                <span className="text-[red] text-[0.6em]">
                  {errors.piso.message}
                </span>
              )}
            </article>
            <article>
              <label
                htmlFor="poblacion"
                className="text-[0.75em] not-italic font-normal"
              >
                Puerta
              </label>
              <input
                type="text"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[7.16em] focus:outline-[#3F8F6B] "
                {...register("puerta", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                onBlur={() => trigger("puerta")}
              />
              {errors.puerta && (
                <span className="text-[red] text-[0.6em]">
                  {errors.puerta.message}
                </span>
              )}
            </article>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DirectionForm;
