import React from 'react'
import CardSection from './CardSection'
import CarCardsMain from './CarCardsMain'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Navbar from './Navbar'
import Categories from "./Categories"
import MainCarousel from './MainCarousel'
function Homepage() {
  return (
    <div>
      <Navbar link="/"/>
        {/* <Hero/> */}
        <MainCarousel />
        <Categories />
        <CardSection />
        <CarCardsMain />
        <Newsletter />
    </div>
  )
}

export default Homepage