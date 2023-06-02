import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import CarCardsMain from "../components/CarCardsMain";
import Newsletter from "../components/Newsletter";
import Homepage from "../components/Homepage";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Homepage />
    {/* <Navbar />
      <Hero />
      <CardSection />
      <CarCardsMain />
      <Newsletter /> */}

</div>
  )
}
