import React from 'react'
import bgContacto from '../assets/bgContacto.jpg'
import { Link } from 'react-router-dom'
const Contacto = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center' style={{backgroundImage:`url(${bgContacto})`}}>
    <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[40em]'>
        <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Contacto</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Estamos aquí para responder a tus preguntas y atender tus necesidades relacionadas con el café. No dudes en ponerte en contacto con nosotros a través de los siguientes métodos:</p>
    
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Información de Contacto</h2>
          <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Teléfono:</strong> +34 919 49 05 18</p>
          <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Correo Electrónico:</strong> hola@cafedealtura.com</p>
        </div>
      <label htmlFor="user" className='text-[#374151] text-[1.5em] not-italic font-normal'>Nombre de Usuario</label>
      <input type="text" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
      <label htmlFor="email" className='text-[#374151] text-[1.5em] not-italic font-normal'>Email</label>
      <input type="email" className='flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'/>
      <label htmlFor="pass" className='text-[#374151] text-[1.5em] not-italic font-normal'>Mensaje</label>
      <textarea name="" id="" cols="10" rows="5" className='flex py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]'></textarea>
      
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

export default Contacto
