import React from 'react'
import CardList from '../components/CardList'
import Info from '../components/Info'
import Footer from '../components/Footer'


const Store = () => {
  return (
    <div>
      <CardList wrap={'store'} isShow={false}/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default Store
