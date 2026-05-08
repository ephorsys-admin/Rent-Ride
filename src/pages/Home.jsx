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
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rent Ride | LuxurySelf-DriveCar
          Rentals in Bhubaneswar </title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/" />
      </Helmet>
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