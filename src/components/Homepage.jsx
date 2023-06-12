import React from 'react'
import CardSection from './CardSection'
import CarCardsMain from './CarCardsMain'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Navbar from './Navbar'
import Categories from "./Categories"
function Homepage() {
  return (
    <div>
      <Navbar link="/"/>
        <Hero/>
        <Categories />
        <CardSection />
        <CarCardsMain />
        <Newsletter />
    </div>
  )
}

export default Homepage