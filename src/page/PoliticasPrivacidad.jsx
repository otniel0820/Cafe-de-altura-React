import React from 'react'
import { Link } from 'react-router-dom'
import privacidad from '../assets/privacidad.jpg'

const PoliticasPrivacidad = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ' style={{backgroundImage:`url(${privacidad})`}}>
        <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[50em] justify-center items-center'>
            <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Política de Privacidad</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>En Café de Altura, reconocemos la importancia de tu privacidad y nos comprometemos a protegerla. Esta política explica cómo recopilamos, usamos, compartimos y protegemos la información personal que recopilamos a través de nuestro sitio web.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Información Recopilada</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Recopilamos información personal cuando completas formularios en nuestro sitio web, como nombre, dirección de correo electrónico y otros datos relevantes para brindarte nuestros servicios.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Uso de la Información</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Utilizamos la información recopilada para comunicarnos contigo, proporcionarte información sobre nuestros productos y servicios, y mejorar tu experiencia en nuestro sitio web.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Compartir de Información</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Seguridad</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Tomamos medidas de seguridad para proteger tu información personal contra pérdida, uso indebido y acceso no autorizado.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Cookies</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Utilizamos cookies para mejorar la experiencia de navegación en nuestro sitio web. Puedes configurar tu navegador para que rechace las cookies, pero esto podría afectar algunas funcionalidades del sitio.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si tienes preguntas sobre nuestra política de privacidad, no dudes en <Link className='font-semibold text-[blue] underline-offset-2' to={'/contacto'}>contactarnos.</Link> </p>
        <Link to={'/'}>
        <button className='flex py-[0.75em] pl-[1.5em] pr-[1.8em] items-start gap-[0.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold text-[#fff]'>Inicio</button>
        </Link>
        
        </div>
        
      </div>
  )
}

export default PoliticasPrivacidad
