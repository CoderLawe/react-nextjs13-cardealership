import React from 'react'
import CardSection from './CardSection'
import CarCardsMain from './CarCardsMain'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Navbar from './Navbar'

function Homepage() {
  return (
    <div>
      <Navbar link="/"/>
        <Hero/>
        <CardSection />
        <CarCardsMain />
        <Newsletter />
    </div>
  )
}

export default Homepage