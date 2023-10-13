import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';

function Test() {
  const methods = useForm();

  const { control, handleSubmit, errors } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Este campo es requerido' }}
            render={({ field }) => (
              <div>
                <input {...field} type="text" id="username" />
                {errors.username && <p>{errors.username.message}</p>}
              </div>
            )}
          />
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Este campo es requerido', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }}
            render={({ field }) => (
              <div>
                <input {...field} type="text" id="email" />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            )}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
}

export default Test;