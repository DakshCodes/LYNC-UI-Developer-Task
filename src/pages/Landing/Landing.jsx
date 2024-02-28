import React from 'react'
import CardSections from '../../components/CardSections/CardSections'
import Community from '../../components/Community/Community'
import Companies from '../../components/Companies/Companies'
import Footer from '../../components/Footer/Footer'
import Home from '../../components/Home/Home'
import PeoplesSection from '../../components/PeoplesSection/PeoplesSection'
import Products from '../../components/Products/Products'

const Landing = () => {
  return (
    <div className='main-landing'>
      <Home />
      <Companies />
      <CardSections />
      <Products />
      <PeoplesSection />
      <Community />
      <Footer />
    </div>
  )
}

export default Landing
