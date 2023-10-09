import React, { useContext } from 'react'
import TotalBasket from '../components/TotalBasket'
import FormPayment from '../components/FormPayment'
import DirectionForm from '../components/DirectionForm'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const {cart, setCart,setPago}=useContext(CartContext)
  
  const onSubmit = ()=>{
    setPago(cart)
    setCart([])
  }
  return (
    <div className="flex p-[2.5em] flex-col items-center min-h-screen gap-[1.5em] ">
      <h1 className="text-[#2A5B45] text-[1.5em] not-italic font-medium">
      Checkout
      </h1>
      <section className='flex justify-center items-start gap-[1.5em]'>
        <article className='flex flex-col items-start p-[0.5em gap-[1.5em]'>
            <FormPayment handleClickPagar={()=>onSubmit()}/>
            <DirectionForm/>
        </article>
        <TotalBasket handleClickPagar={()=>onSubmit()}/>
      </section>
    </div>
  )
}

export default Checkout
