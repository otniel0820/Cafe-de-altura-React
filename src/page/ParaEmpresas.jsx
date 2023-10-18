import React from 'react'
import bgEmpresas from '../assets/bgEmpresas.jpg'
import { Link } from 'react-router-dom'
const ParaEmpresas = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center gap-24' style={{backgroundImage:`url(${bgEmpresas})`}}>
      <div className="flex flex-col justify-center items-center bg-white w-[60em] p-24 gap-5">
        <h1 className='text-[#374151] text-[2em] not-italic font-semibold'>Soluciones de Café para Empresas</h1>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Bienvenido a nuestra sección especialmente diseñada para satisfacer las necesidades de tu empresa. En Cafe de Altura, entendemos que el café es esencial para mantener a tu equipo enérgico y productivo. Nuestra selección premium de café y servicios personalizados están aquí para impulsar la cultura de tu empresa.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Nuestros Servicios:</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Suministro de Café de Calidad:</strong> Ofrecemos una amplia variedad de granos de café de origen único y mezclas especiales, todos seleccionados con los más altos estándares de calidad. Proporcionamos granos frescos y tostados a la perfección para asegurarnos de que cada taza sea una experiencia excepcional.</p>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Equipos y Accesorios:</strong> Además de nuestros excepcionales granos de café, también ofrecemos una gama de equipos de café de alta calidad y accesorios. Desde máquinas de espresso hasta prensas francesas y molinillos, te ayudamos a crear un rincón de café perfecto en tu espacio de trabajo.</p>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Programa de Entrega Personalizada:</strong> Nuestro equipo comprende lo ocupado que puede ser dirigir una empresa. Es por eso que ofrecemos un programa de entrega personalizada que garantiza que nunca te quedes sin café. Nos encargamos de reponer tus suministros de café de manera puntual para que tú y tu equipo puedan concentrarse en lo que realmente importa.</p>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Personalización de Etiquetas:</strong> Haz que el café de tu empresa sea único con nuestras opciones de personalización de etiquetas. Agrega el logotipo y los colores de tu empresa a las bolsas de café para una experiencia verdaderamente exclusiva.</p>
    
        <div className=" flex flex-col justify-center items-center">
          <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Contacto y Consulta</h2>
          <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Sabemos que cada empresa tiene necesidades únicas. Nuestro equipo de expertos está listo para trabajar contigo para encontrar la solución de café perfecta para tu empresa. ¡Contáctanos hoy mismo para una consulta personalizada!</p>
          <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Teléfono:</strong> +34 919 49 05 18</p>
          <p className='text-[#374151] text-[0.9em] not-italic font-normal'><strong>Correo Electrónico:</strong> hola@cafedealtura.com</p>
        </div>
    
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>En Cafe de Altura, nos enorgullece ser tu socio en el camino hacia una experiencia de café excepcional en tu empresa.</p>
    <Link to={'/'}>
    <button className='flex py-[0.75em] px-[1.5em] gap-[0.5em] items-center bg-[#515051] rounded text-[#FFFFFF] text-[0.8em] not-italic font-semibold'>Inicio</button>
    </Link>
        
      </div>
    </div>
  )
}

export default ParaEmpresas
