import React, { useState } from 'react'
import Button from './Button'

const Count = ({cantidad, onSub, onAdd}) => {
    

  return (
    <div className='flex justify-center items-center gap-[0.5em]'>
      <Button icon={'sub'} style={'sub'} count={onSub}/>
      <p className='flex w-[1.5em] h-[1.5em] p-[0.5em] flex-col justify-center items-center gap-[0.5em] rounded-full bg-[#e0e5e3]'>{cantidad}</p>
      <Button icon={'add'} style={'add'} count={onAdd}/>

    </div>
  )
}

export default Count
