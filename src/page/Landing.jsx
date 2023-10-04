import React from 'react'
import Navbar from '../components/Navbar'
import Wrapper from '../components/Wrapper'
import Info from '../components/Info'
import CardList from '../components/CardList'
import Faq from '../components/Faq'
import Direction from '../components/Direction'
import Footer from '../components/Footer'
import Test from '../utils/Test'

const Landing = () => {
  return (
    <div>
      
      <Wrapper section={'taza'}/>
      <Info/>
      <CardList title={'nov'} cantCoffee={'landing'} isShow={true}/>
      <Faq/>
      <Wrapper/>
      <Direction/>
      <Footer/>
      <Test/>
    </div>
  )
}

export default Landing
