import React from 'react'
import bgCookies from '../assets/bgCookies.jpg'
import { Link } from "react-router-dom"
const PoliticaCookies = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ' style={{backgroundImage:`url(${bgCookies})`}}>
      <div className="flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[40em] justify-center items-center">
        <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Política de Cookies</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>En Café de Altura, utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las utilizamos y cómo puedes administrarlas.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>¿Qué Son las Cookies?</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas cookies se utilizan para recopilar información sobre tu navegación y mejorar la funcionalidad del sitio.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>¿Cómo Utilizamos las Cookies?</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Utilizamos cookies para analizar el tráfico del sitio, personalizar tu experiencia y brindarte contenido relevante. También utilizamos cookies de terceros para funciones como el análisis de sitios y la integración con redes sociales.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>¿Cómo Puedes Administrar las Cookies?</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Puedes configurar tu navegador para rechazar todas las cookies o para recibir una notificación cuando se envía una cookie. Sin embargo, ten en cuenta que algunas funciones del sitio pueden no funcionar correctamente sin cookies.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Si tienes preguntas sobre nuestra política de cookies, no dudes en <Link className='font-semibold text-[blue] underline-offset-2' to={'/contacto'}>contactarnos.</Link></p>
        <Link to={'/'}>
        <button className='flex py-[0.75em] pl-[1.5em] pr-[1.8em] items-start gap-[0.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold text-[#fff]'>Inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default PoliticaCookies
