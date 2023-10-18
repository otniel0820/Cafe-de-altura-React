import React from 'react'
import { Link } from 'react-router-dom'
import logoCafe from "../assets/logoCafe.png";

const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
      <div className="flex text-white items-center gap-[0.45em]">
          <p className="text-[1.5em] not-italic font-normal leading-[2.1em]">
            cafedealtura.com
          </p>
          <img src={logoCafe} alt="" className="w-[1.25em] h-[1.5em]" />
        </div>
      </Link>
    </div>
  )
}

export default Logo
