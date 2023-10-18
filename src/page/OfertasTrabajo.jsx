import React from 'react'
import bgOfertas from '../assets/bgOfertas.jpg'
import { Link } from "react-router-dom"

const OfertasTrabajo = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ' style={{backgroundImage:`url(${bgOfertas})`}}>
        <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[40em] justify-center items-center'>
            <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Ofertas de Trabajo</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Únete al equipo de Café del Mundo y forma parte de una experiencia única en el mundo del café. A continuación, encontrarás nuestras ofertas de trabajo actuales:</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Barista</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Buscamos baristas apasionados por el café y con habilidades excepcionales en la preparación de bebidas. Experiencia previa en el campo es preferible.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Gerente de Tienda</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Estamos en busca de un gerente de tienda con experiencia en la gestión de equipos y en la administración de establecimientos de comida y bebida.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Recepcionista</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si eres amable, organizado y te gusta interactuar con las personas, esta posición es para ti. La recepcionista será la cara amigable de Café del Mundo.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Cómo Aplicar</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si estás interesado en alguna de nuestras ofertas de trabajo, por favor envía tu currículum vitae a <Link className='font-semibold text-[blue] underline-offset-2'>
        hola@cafedealtura.com
        </Link> indicando el puesto al que estás aplicando en el asunto del correo.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si tienes preguntas sobre nuestras ofertas de trabajo, no dudes en <Link className='font-semibold text-[blue] underline-offset-2' to={'/contacto'}>contactarnos.</Link></p>
        <Link to={'/'}>
        <button className='flex py-[0.75em] pl-[1.5em] pr-[1.9em] items-start gap-[0.5em] rounded bg-[red] text-[0.9em] not-italic font-semibold text-[#fff]'>Inicio</button>
        </Link>
        
        </div>
        
      </div>
  )
}

export default OfertasTrabajo
