import React from 'react'
import fondoSuscripcion from "../assets/fondoSuscripcion.jfif";
import { Link } from 'react-router-dom';

const Suscripcion = () => {
    
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center' style={{backgroundImage:`url(${fondoSuscripcion})`}}>
      <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[30em]'>
        <label htmlFor="user" className='text-[#374151] text-[1.5em] not-italic font-normal'>Nombre de Usuario</label>
        <input type="text" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
        <label htmlFor="email" className='text-[#374151] text-[1.5em] not-italic font-normal'>Email</label>
        <input type="email" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
        <label htmlFor="pass" className='text-[#374151] text-[1.5em] not-italic font-normal'>Contraseña</label>
        <input type="password" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
        <label htmlFor="rpass" className='text-[#374151] text-[1.5em] not-italic font-normal'>Repita la Contraseña</label>
        <input type="password" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
        <div className=' flex gap-5 justify-center items-center'>
            <button className='flex justify-center items-center  rounded bg-[#1F1815] text-[0.9em] not-italic font-semibold  text-white w-[10.5em] h-[2.5em]'>Enviar</button>
            <Link to={'/'}>
            <button className='flex justify-center items-center w-[8.5em] h-[2.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold  text-white'>Volver al Inicio</button>
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default Suscripcion
