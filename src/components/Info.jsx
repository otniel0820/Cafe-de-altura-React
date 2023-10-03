import React from 'react'
import bgcoffee from '../assets/bgcoffee.jfif'
import table from '../assets/table.png'
import truck from "../assets/truck.png";
import reward from '../assets/reward.png'



const Info = () => {
    const arrInfo = [
        {
            img: table,
            h3: 'Recibe tu pedido sin preocuparte',
            p: 'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'
        },
        {
            img: truck,
            h3: 'Envío en 24/48h',
            p: 'Pide tu café antes de las 12h y lo recibirás al día siguiente.'
        },
        {
            img: reward,
            h3: 'Descuentos y beneficios',
            p: 'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'
        }
    ]
  return (
    <div className='flex py-[3em] p-x[9.1em] flex-col justify-center items-center gap-[1.5em] h-[24em] bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${bgcoffee})`}}>
        <h2 className='text-[1.5em] not-italic font-medium text-[white]'>Café con las mejores condiciones</h2>
        <article className='flex gap-[1.5em]'>
            {arrInfo.map((element, i)=>{
                return(
                    <div key={i} className='flex flex-col p-[1.5em] justify-center items-center gap-[1em] rounded-[0.5em] border-[1px] border-solid border-[#F7F5F3] bg-[#FFF] shadow-[0px 1px 4px 0px] shadow-[rgba(227, 222, 215, 0.80)] w-[20.2em] h-[15.4em]'>
                        <img src={element?.img} alt="" className='rounded-[1.25em]'/>
                        <h3 className='text-[#2B2A2B] text-[1.1em] not-italic font-semibold'>
                            {element?.h3}
                        </h3>
                        <p className='text-[0.9em] not-italic font-normal text-center'>
                            {element?.p}
                        </p>

                    </div>
                )
            })}
            
        </article>
      
    </div>
  )
}

export default Info
