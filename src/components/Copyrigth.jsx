import React from 'react'
import { Link } from 'react-router-dom'

const Copyrigth = () => {
  return (
    <div className='h-[2.5em] flex pt-[0.75em] pb-[0.75em] pl-[34.90em] pr-[10.75em] bg-[#2B2A2B]'>
      <Link to={'/copyright'}>
        <p className='text-[0.9em] not-italic font-semibold text-[#fff]'>Todos los derechos reservados - Café de Altura SL - 2022</p>
      </Link>
    </div>
  )
}

export default Copyrigth
