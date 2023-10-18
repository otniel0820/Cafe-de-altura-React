import React from 'react'
import bgTerminos from '../assets/bgTerminos.jpg'
import { Link } from 'react-router-dom'

const TerminosCondiciones = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ' style={{backgroundImage:`url(${bgTerminos})`}}>
      <div className='flex flex-col rounded-md bg-white p-[5em] gap-[1em] w-[50em] justify-center items-center'>
        <h1 className='text-center text-[#374151] text-[2em] not-italic font-semibold'>Términos y Condiciones</h1>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Bienvenido a Café de Altura. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, te recomendamos que no utilices nuestro sitio.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Uso del Sitio</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>El contenido de este sitio web es solo para fines informativos. No garantizamos la exactitud ni la completitud de la información y no somos responsables de cualquier pérdida o daño derivado de su uso.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Propiedad Intelectual</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Los contenidos, imágenes, logotipos y demás elementos del sitio son propiedad exclusiva de Café de Altura. No está permitido el uso no autorizado de estos elementos sin nuestro consentimiento.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Enlaces a Terceros</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Nuestro sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido o las prácticas de privacidad de estos sitios y no somos responsables de ellos.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Modificaciones</h2>
        <p className='text-center text-[#374151] text-[0.9em] not-italic font-normal'>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos al momento de su publicación en el sitio.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto</h2>
        <p className=''>Si tienes preguntas sobre nuestros términos y condiciones, no dudes en <Link className='font-semibold text-[blue] underline-offset-2' to={'/contacto'}>contactarnos.</Link></p>
        <Link to={'/'}>
        <button className='flex py-[0.75em] pl-[1.5em] pr-[1.8em] items-start gap-[0.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold text-[#fff]'>Inicio</button>
        </Link>
      </div>
    </div>
  )
}

export default TerminosCondiciones
