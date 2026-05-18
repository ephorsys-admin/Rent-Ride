import React from 'react'
import CarsTypes from '../components/homeLanding/CarsTypes'
import CarSliding from '../components/homeLanding/CarSliding'
import HomeAbout from '../components/homeLanding/homeAbout'
import Features from '../components/homeLanding/Features'
import TrustedBrands from '../components/homeLanding/TrustedBrands'
import VideoSection from '../components/homeLanding/VideoSection'
import HowItWorks from '../components/homeLanding/HowItWorks'
import Feedback from '../components/homeLanding/Feedback'
import FAQ from '../components/homeLanding/Faq'
import Hero from '../components/homeLanding/Hero'
import { motion } from 'framer-motion'
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Luxury Self-Drive Car Rentals in Bhubaneswar"
        description="Book self-drive car rentals in Bhubaneswar with Rent Ride Car. Choose from hatchbacks, sedans, SUVs and bikes with flexible 12h/24h pricing and fast online booking."
        url="https://rentride.com/"
        canonical="https://rentride.com/"
        keywords="car rental bhubaneswar, self drive car rental, rent car bhubaneswar, luxury car rental, hatchback rental, sedan rental, suv rental"
      />
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>

        <HomeAbout />
        <CarSliding />
        <CarsTypes />
        <Features />
        <TrustedBrands />
        <VideoSection />

        <HowItWorks />
        <Feedback />
        <FAQ />
      </div>
    </>
  )
}

export default Home