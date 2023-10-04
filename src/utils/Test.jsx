import react from "react"
import { useForm } from "react-hook-form"

export default function Test() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={"hola"} {...register("example", {required: true})} />

      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={'como estas'}{...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.example && <span>el campo es requerido</span>}
      {errors.exampleRequired && <span>el campo es requerido</span>}

      <input type="submit" />
    </form>
  )
}