import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bizum from "../assets/bizum.png";

const FormPayment = () => {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
    reset,
  } = useForm();
  //   const selectOption = watch('tarjeta') || watch('transferencia') || watch('bizum')
  const [selectOption, setSelectOption] = useState("");
  const radioChange = (value) => {
    setSelectOption(value);
  };

  const handleChangeCardNumber = (e) => {
    let inputValueCardNumber = e.target.value;
    inputValueCardNumber = inputValueCardNumber.replace(/\D/g, "");

    const formattedNumber = inputValueCardNumber.replace(
      /(\d{4})(?=\d)/g,
      "$1 "
    );

    setValue("number", inputValueCardNumber);
    setValue("number", formattedNumber);

    if (inputValueCardNumber.length === 16) {
      e.target.blur();
    }
  };

  const handleChangeDate = (e) => {
    const inputValueDate = e.target.value;

    const formattedDate = inputValueDate
      .replace(/\D/g, "") //esta expresion regular elimina cualquier caracter que no sea numerico
      .replace(/(\d{2})(\d{2})/, "$1/$2"); // y con esta se le da el formato de fecha de mm/aa

    setValue("cardExpiration", formattedDate);
    if (formattedDate.length === 5) {
      e.target.blur();
    }
  };

  const handleChangeCvc = (e) => {
    const inputValueCvc = e.target.value;
    const formattedCvc = inputValueCvc.replace(/\d/g, "●");

    setValue("cvc", inputValueCvc);
    setValue("cvc", formattedCvc);

    if (inputValueCvc.length === 3) {
      e.target.blur();
    }
  };
  return (
    <form
      
      className="flex flex-col p-[0.5em] gap-[1.5em] items-start"
    >
      <h3 className=" text-[1.1em] not-italic font-semibold">
        Seleccionar método de pago
      </h3>
      <section className="flex items-center gap-[1em]">
        <input
          type="radio"
          name="paymentOption"
          value={"tarjeta"}
          checked={selectOption === "tarjeta"}
          className="w-[1.5em] h-[1.5em] accent-[#2A5B45]"
          {...register("tarjeta")}
          onChange={() => radioChange("tarjeta")}
        />
        <article className="flex flex-col items-start gap-[0.25] w-[41.56em]">
          <label
            htmlFor="tarjeta"
            className="text-[0.9em] not-italic font-semibold"
          >
            Tarjeta de débito
          </label>
          <p className="text-[0.9em] not-italic font-normal">
            Opción estándar sin seguimiento
          </p>
        </article>
      </section>
      {selectOption === "tarjeta" && (
        <div className="flex flex-col">
          <article className="flex flex-col w-[17.5em] items-start gap-[3px]">
            <label
              htmlFor="titular"
              className="text-[0.75em] not-italic font-normal"
            >
              Titular
            </label>
            <input
              type="text"
              id="titular"
              className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
              {...register("titular", {
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
              onBlur={() => trigger("titular")}
              placeholder="Nombre del titular"
            />
            {errors.titular && (
              <span className="text-[red] text-[0.7em]">
                {errors.titular.message}
              </span>
            )}
          </article>
          <article className="flex flex-col w-[17.5em] items-start gap-[3px]">
            <label
              htmlFor="number"
              className="text-[0.75em] not-italic font-normal"
            >
              Número de la tarjeta
            </label>
            <input
              type="text"
              name="number"
              className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] "
              {...register("number", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
              onChange={handleChangeCardNumber}
              onBlur={() => trigger("number")}
              placeholder="1234 1234 1234 1234"
            />
            {errors.number && (
              <span className="text-[red] text-[0.7em]">
                {errors.number.message}
              </span>
            )}
          </article>
          <section className="flex w-full items-start gap-[1.5em]">
            <div className="flex flex-col items-start gap-[3px]">
              <label
                htmlFor="fecha"
                className="text-[0.75em] not-italic font-normal"
              >
                Fecha de caducidad
              </label>
              <input
                type="text"
                name="fecha"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[8em] focus:outline-[#3F8F6B]"
                {...register("cardExpiration", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                onChange={handleChangeDate}
                placeholder="MM/AA"
                onBlur={() => trigger("cardExpiration")}
              />
              {errors.cardExpiration && (
                <span className="text-[red] text-[0.7em]">
                  {errors.cardExpiration.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start gap-[3px]">
              <label
                htmlFor="cvc"
                className="text-[0.75em] not-italic font-normal"
              >
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                className="flex py-[0.62em] px-[0.5em] items-center gap-[0.5em] rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-[8em] focus:outline-[#3F8F6B]"
                {...register("cvc", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                onBlur={() => trigger("cvc")}
                onChange={handleChangeCvc}
                placeholder="123"
              />
              {errors.cvc && (
                <span className="text-[red] text-[0.7em]">
                  {errors.cvc.message}
                </span>
              )}
            </div>
          </section>
        </div>
      )}

      <div className="w-full h-[1px] bg-[#E3DED7]"></div>

      <section className="flex items-center gap-[1em]">
        <input
          type="radio"
          name="paymentOption"
          value={"transferencia"}
          checked={selectOption === "transferencia"}
          className="w-[1.5em] h-[1.5em] accent-[#2A5B45]"
          {...register("transferencia")}
          onChange={() => radioChange("transferencia")}
        />
        <article>
          <label htmlFor="transferencia">Transferencia bancaria</label>
        </article>
      </section>
      {selectOption === "transferencia" && (
        <div className="flex flex-col">
          <label
            htmlFor="cuenta"
            className="text-[0.9em] not-italic font-semibold"
          >
            La cuenta bancaria es: ES12 1234 1234 123457890
          </label>
          <label
            htmlFor="comprobante"
            className="text-[0.9em] not-italic font-normal"
          >
            Será necesario recibir el comprobante de la transferencia para
            preparar tu pedido
          </label>
        </div>
      )}
      <div className="w-full h-[1px] bg-[#E3DED7]"></div>
      <section className="flex items-center gap-[1em]">
        <input
          type="radio"
          name="paymentOption"
          value={"bizum"}
          checked={selectOption === "bizum"}
          className="w-[1.5em] h-[1.5em] accent-[#2A5B45]"
          {...register("bizum")}
          onChange={() => radioChange("bizum")}
        />
        <h1 className="text-[0.9em] not-italic font-semibold">Bizum</h1>
        <img src={bizum} alt="" />
      </section>
      {selectOption === "bizum" && (
        <div className="flex flex-col">
          <label
            htmlFor="telefono"
            className="text-[1em] not-italic font-normal"
          >
            Puede realizar el bizum al siguiente numero:{" "}
            <span className="text-[1em] not-italic font-semibold">
              +34 695 382 534
            </span>
          </label>
          <label
            htmlFor="comprobante"
            className="text-[0.9em] not-italic font-normal"
          >
            Será necesario recibir el comprobante de la transferencia para
            preparar tu pedido
          </label>
        </div>
      )}
    </form>
  );
};

export default FormPayment;
