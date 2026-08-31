import React from 'react'
import CarsTypes from '../components/homeLanding/CarsTypes'
import CarSliding from '../components/homeLanding/CarSliding'
import HomeAbout from '../components/homeLanding/homeAbout'
import Features from '../components/homeLanding/Features'
import TrustedBrands from '../components/homeLanding/TrustedBrands'
import BhubaneswarCarRental from '../components/homeLanding/BhubaneswarCarRental'
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
        title="Best Self Drive Car Rental in KIIT, Bhubaneswar"
        description="Book the best self-drive car rental in KIIT, Bhubaneswar. Choose from hatchbacks, sedans, SUVs and bikes with flexible 12-hour and 24-hour rental options."
        url="https://rentridecar.com/"
        canonical="https://rentridecar.com/"
        keywords="self drive car rental KIIT, car rental KIIT Bhubaneswar, self drive car rental Bhubaneswar, rent car Bhubaneswar, car rental near KIIT, luxury car rental Bhubaneswar"
        schemaType="homepage"
      />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>

        {/* Fleet Section */}
        <section aria-labelledby="fleet-heading">
          <CarsTypes />
          <div className="sr-only">
            <h2 id="fleet-heading">Our Fleet - Self Drive Car Rental Fleet in Bhubaneswar</h2>
            <p>Choose from our wide range of vehicles including sedans, SUVs, sports cars, and premium vehicles for self-drive rental in Bhubaneswar.</p>
          </div>
        </section>


        <HomeAbout />
        <CarSliding />

        {/* Featured Vehicles Section */}
        <section aria-labelledby="vehicles-heading">
          <div className="sr-only">
            <h2 id="vehicles-heading">Featured Rental Vehicles</h2>
            <p>Browse our latest and most popular self-drive rental vehicles available in Bhubaneswar.</p>
          </div>
        </section>

        <Features />
        <TrustedBrands />
        <BhubaneswarCarRental />
        <VideoSection />

        {/* Service Overview Section */}
        <section aria-labelledby="service-heading">
          <div className="sr-only">
            <h2 id="service-heading">How Our Self-Drive Car Rental Service Works</h2>
            <p>Simple and transparent car rental process in Bhubaneswar. Book online, pick up your car, and enjoy the freedom of self-drive.</p>
          </div>
        </section>

        <HowItWorks />
        <Feedback />
        <FAQ />
      </main>
    </>
  )
}

export default Home