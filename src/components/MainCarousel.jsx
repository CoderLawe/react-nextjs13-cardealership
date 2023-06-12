import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Hero from "./Hero";
import ElectronicsHero from "../components/ElectronicsHero";
function MainCarousel() {
  return (
    <Carousel
    className="mx-0 mt-3"
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={true}
    showThumbs={false}
    interval={5000}
    >

      <Hero />

      <ElectronicsHero />
    </Carousel> )
}

export default MainCarousel