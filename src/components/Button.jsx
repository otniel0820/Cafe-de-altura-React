import React, { useContext } from 'react'
import mailWhite from '../assets/mailWhite.png'
import phone from '../assets/phone.png'
import add from '../assets/add.png'
import sub from '../assets/sub.png'


const Button = ({text,style,icon, handleClickAñadir, count, handleClickEliminar,handleClickPagar}) => {
 
const handleClick= ()=>{
  if (handleClickAñadir) {
    handleClickAñadir()
  }
  else if (count) {
    count()
  }
  else if (handleClickEliminar) {
    handleClickEliminar()
  }
  else if (handleClickPagar) {
    handleClickPagar()
  }
}
  
  
  const nav = 'flex justify-center items-center gap-[0.5em] pt-[0.5em] pb-[0.5em] pl-[0.5em] pr-[1.1em] rounded bg-[#515051] text-[0.9em] not-italic font-semibold leading-[1em]  text-white w-[9em] h-[3.1em]'
  const descubrirOrigenes = 'flex justify-center items-center  rounded bg-[#1F1815] text-[0.9em] not-italic font-semibold  text-white w-[10.5em] h-[2.5em]'
  const comprarCafe = 'flex justify-center items-center w-[8.5em] h-[2.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold  text-white'
  const añadir = 'bg-[#6a8d7d] pt-[0.5em] pb-[0.6em] pl-[0.5em] pr-[1em] flex gap-[0.5em] rounded-[4px] items-center justify-center font-semibold text-white leading-4 group-hover/card:bg-[#2A5B45]'
  const footer= 'flex py-[0.75em] px-[1.5em] gap-[0.5em] items-center bg-[#515051] rounded text-[#FFFFFF] text-[0.8em] not-italic font-semibold'
  const checkout = 'flex py-[0.75em] pl-[1.5em] pr-[1.8em] items-start gap-[0.5em] rounded bg-[#2A5B45] text-[0.9em] not-italic font-semibold text-[#fff]'
  const seguirComprando = 'flex py-[0.75em] px-[1.5em] items-start gap-[0.5em] rounded bg-[] text-[#2A5B45] text-[0.9em] not-italic font-semibold'
  const addAndSub =' w-[1.5em] h-[1.5em]'
  const agotado = 'bg-[#E3DED7] pt-[0.5em] pb-[0.6em] pl-[0.5em] pr-[1em] flex gap-[0.5em] rounded-[4px] items-center justify-center font-semibold text-white leading-4 cursor-no-drop'
 
  return (
    <div>
      
      <button className={`${style==='nav'?nav:style==='descubrirOrigenes'?descubrirOrigenes:style==='comprarCafe'?comprarCafe:style==='añadir'?añadir:style==='footer'?footer:style==='btnTotal'?checkout: style=== 'seguirComprando'? seguirComprando: style=== 'masMenos'?addAndSub:style==='agotado'?agotado:''}`} onClick={handleClick}><img src={icon==='tel'?phone:icon==='mail'?mailWhite: icon=== 'add'? add: icon==='sub'? sub:null} alt=""  />{text}</button>
    </div>
  )
}

export default Button
