import React from 'react'
import CardSections from '../../components/CardSections/CardSections'
import Companies from '../../components/Companies/Companies'
import Home from '../../components/Home/Home'

const Landing = () => {
  return (
    <div className='main-landing'>
      <Home />
      <Companies />
      <CardSections />
    </div>
  )
}

export default Landing
