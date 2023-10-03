import React from 'react'
import phone from "../assets/phone.png";
import { Link } from 'react-router-dom'

const Telf = () => {
  return (
    <div>
        <Link to={'/telefono'}>
        <article className="flex items-center gap-[0.5em]">
            <img src={phone} alt="" className="w-[1.5em] h-[1.5em]" />
            <p className="text-[0.8em] not-italic font-semibold leading-[1em] text-white">
              +34 919 49 05 18
            </p>
          </article>
        </Link>
      
    </div>
  )
}

export default Telf
