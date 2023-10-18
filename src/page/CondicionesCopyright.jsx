import React from 'react'
import { Link } from 'react-router-dom'
import bgCopyright from '../assets/bgCopyright.jpg'

const CondicionesCopyright = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ' style={{backgroundImage:`url(${bgCopyright})`}}>
      <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[50em] justify-center items-center'>
        <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Derechos Reservados</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Todo el contenido, imágenes, logotipos y elementos visuales en el sitio web de Café de Altura están protegidos por derechos de autor y otros derechos de propiedad intelectual.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Uso de Contenido</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Está prohibido copiar, reproducir o utilizar cualquier contenido de este sitio web sin el permiso explícito de Café de Altura. Esto incluye, pero no se limita a, textos, imágenes y diseños.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Excepciones</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>El uso de contenido con fines personales y no comerciales está permitido, siempre que se mantengan intactos los avisos de derechos de autor y se dé crédito a Café de Altura.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si tienes preguntas sobre nuestros derechos reservados, no dudes en <Link className='font-semibold text-[blue] underline-offset-2' to={'/contacto'}>contactarnos.</Link></p>
        <Link to={'/'}>
        <button className='flex py-[0.75em] pl-[1.5em] pr-[1.8em] items-start gap-[0.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold text-[#fff]'>Inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default CondicionesCopyright
