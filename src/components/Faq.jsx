import React from 'react'
import arrowf from '../assets/arrowf.png'

const Faq = () => {
  return (
    <div className='flex flex-col items-center gap-[1.5em] bg-[#2a5b45] py-[3em]'>
      <h2 className='text-[1.5em] not-italic font-medium text-[#fff]'>Preguntas frecuentes</h2>
      <section>

      </section>
      <div className='flex items-center gap-[1em]'>
        <p className='text-[0.9em] not-italic font-semibold underline text-[#fff]'>Resolvemos tus dudas</p>
        <img src={arrowf} alt="" className='h-[1.5em] w-[1.5em] '/>

      </div>
    </div>
  )
}

export default Faq
