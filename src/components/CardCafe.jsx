import React from 'react'

const CardCafe = ({img,name,price}) => {
  return (
    <div>
      <div className='flex flex-col p-[1.5em] justify-end items-center gap-[1.5em] rounded-[0.5em] border border-solid border-[#E3DED7] group/card hover:bg-[#f7f5f3]'>
      <img className='w-[13.6em] h-[13.6em]' src={img} alt="" />
      <h4 className='text-[0.9em] font-semibold leading-4'>{name}</h4>
      <p className='text-[0.9em] font-normal'>{price},00 €</p>
      <button className='bg-[#6a8d7d] p-[0.5em] flex gap-[0.5em] rounded-[4px] items-start font-semibold text-white leading-4 group-hover/card:bg-[#2A5B45]'>Añadir</button>
    </div>
    </div>
  )
}

export default CardCafe
