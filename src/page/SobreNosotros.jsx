import React from 'react'
import bgSobre from "../assets/bgSobre.jpg"
import { Link } from 'react-router-dom'

const SobreNosotros = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center gap-24' style={{backgroundImage:`url(${bgSobre})`}}>
        <div className="flex flex-col justify-center items-center bg-white w-[60em] p-24 gap-5">
        <h1 className='text-[#374151] text-[2em] not-italic font-semibold'>Sobre Nosotros</h1>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>¡Bienvenido a Café del Mundo! Somos un apasionado equipo de amantes del café que busca brindarte las mejores experiencias y los sabores más excepcionales.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Nuestra Pasión</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Desde nuestros humildes comienzos, hemos estado en una búsqueda constante para descubrir y compartir los tesoros ocultos de los cafetales de todo el mundo. Cada taza que servimos es el resultado de nuestra dedicación a la calidad y la artesanía.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Nuestros Cafés</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Seleccionamos cuidadosamente granos de café de origen único y mezclas exclusivas de las regiones más renombradas. Nuestro proceso de tostado artesanal resalta los perfiles de sabor únicos de cada grano, brindándote una experiencia de café inigualable en cada taza.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Compromiso con la Sostenibilidad</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Estamos comprometidos con la sostenibilidad en cada paso del camino. Trabajamos en estrecha colaboración con agricultores locales para asegurarnos de que nuestros granos sean cultivados de manera responsable y respetuosa con el medio ambiente. Además, apoyamos iniciativas que mejoren las condiciones de vida de las comunidades cafeteras.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Nuestro Equipo</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Nuestro equipo está formado por apasionados expertos en café, desde baristas hasta catadores. Cada miembro de nuestro equipo comparte el mismo amor por la cultura del café y está comprometido a brindarte una experiencia excepcional en cada interacción.</p>
    
        <h2 className='text-[#374151] text-[1.5em] not-italic font-semibold'>Únete a Nuestra Comunidad</h2>
        <p className='text-[#374151] text-[0.9em] not-italic font-normal'>Te invitamos a unirte a nuestra comunidad de amantes del café. Explora nuestra amplia selección de cafés, descubre nuevas formas de preparar tu bebida favorita y comparte tus experiencias con nosotros en las redes sociales. Juntos, creamos un mundo lleno de sabor y pasión por el café.</p>
        <Link to={'/'}>
        <button className='bg-[#6a8d7d] pt-[0.5em] pb-[0.6em] pl-[0.5em] pr-[0.5em] flex gap-[0.5em] rounded-[4px] items-center justify-center font-semibold text-white leading-4 group-hover/card:bg-[#2A5B45]'>Inicio</button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default SobreNosotros
