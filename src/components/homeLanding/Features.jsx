import { Sparkles, Car, Briefcase, Plane, User } from "lucide-react";
import React, {  memo, useEffect, useState } from "react";
import ServiceCard from "../../shared/ui/Home/ServiceCard";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";
// Data for the card mapping
const servicesData = [
  {
    id: 1,
    title: "Car Rental With Driver",
    desc: "Enhance your rental experience with additional options.",
  },
  {
    id: 2,
    title: "Business Car Rental",
    desc: "Enhance your rental experience with additional options.",
  },
  {
    id: 3,
    title: "Airport Transfer",
    desc: "Enhance your rental experience with additional options.",
  },
  {
    id: 4,
    title: "Chauffeur Services",
    desc: "Enhance your rental experience with additional options.",
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Icon Mapping used in the cards
const serviceIcons = {
  1: Car,
  2: Briefcase,
  3: Plane,
  4: User,
};
const MemoTypingText = memo(TypingText);
const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="min-h-screen bg-[#000000] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="min-h-screen bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f] text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 rounded-2xl sm:rounded-3xl shadow-xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
             <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}> 
          <div className="inline-flex items-center gap-2 sm:gap-3 mt-3 sm:mt-5">
            {/* Premium Animated Icon */}
           
            <div className="relative">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="redGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ff0000", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ff0000", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M50,15 L55,45 L85,50 L55,55 L50,85 L45,55 L15,50 L45,45 Z"
                  fill="url(#redGradient)"
                />
              </svg>
            </div>
            
            <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase animate-fade-in">
              Our Services
            </span>
          </div>
          </motion.div>

    <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
              <MemoTypingText
                text=" Explore our wide range of rental services"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>
        
        </div>

        {/* Cards */}
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {servicesData.map((service) => {
    const Icon = serviceIcons[service.id];
    return (
      <motion.div key={service.id} variants={cardVariants}>
        <ServiceCard
          Icon={Icon}
          title={service.title}
          desc={service.desc}
        />
      </motion.div>
    );
  })}
</motion.div>

      </div>
    </div>
  );
};

export default Features;