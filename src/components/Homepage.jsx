import React from 'react'
import CardSection from './CardSection'
import CarCardsMain from './CarCardsMain'
import Newsletter from './Newsletter'
import Hero from './Hero'
import Navbar from './Navbar'
import Testiomonials from './Testimonials'
import Categories from "./Categories"
import MainCarousel from './MainCarousel';
import ElectronicsCardsMain from "./ElectronicsCardsMain";
import Testimonials from './Testimonials'
function Homepage() {
  return (
    <div>
      <Navbar link="/"/>
        {/* <Hero/> */}
        <MainCarousel />
        <Categories />
        <CardSection />
        <CarCardsMain />
        <ElectronicsCardsMain />
        <Newsletter />
        <Testimonials />

        
    </div>
  )
}

export default Homepage