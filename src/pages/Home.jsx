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
        url="https://rentridecar.com/"
        canonical="https://rentridecar.com/"
        keywords="car rental bhubaneswar, self drive car rental, rent car bhubaneswar, luxury car rental, hatchback rental, sedan rental, suv rental"
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