import React, { useState, useEffect, memo } from 'react';
import { Car, MapPin, Users, Shield } from 'lucide-react';
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";

const MemoTypingText = memo(TypingText);
export default function AboutChooseus() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation trigger
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

const features = [
  {
    icon: Car,
    title: "Extensive Fleet Options",
    description: "Choose from our diverse collection of vehicles, from compact sedans to luxury SUVs. Every car is meticulously maintained to ensure peak performance and comfort for your journey."
  },
  {
    icon: Users,
    title: "Exceptional Customer Service",
    description: "Our dedicated team is available 24/7 to assist you. From booking to drop-off, we ensure a seamless rental experience with personalized support at every step."
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    description: "With multiple pickup and drop-off points across the city, renting a car has never been easier. We're strategically located to get you on the road faster."
  },
  {
    icon: Shield,
    title: "Reliability And Safety",
    description: "Your safety is our priority. All vehicles undergo rigorous inspections and come with comprehensive insurance coverage, giving you complete peace of mind on every ride."
  }
];
  return (
    <div className="bg-black py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header - Simplified animation */}
        <div className={`text-center mb-12 sm:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2"
            >
               <div className="flex items-center justify-center gap-2 mb-4">
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
            <h2 className="text-xs sm:text-sm md:text-base font-semibold text-[#ff0000] uppercase tracking-[0.2em]">
              Why Choose Us
            </h2>
          </div>
            </motion.div>
       
        
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-4">
             <MemoTypingText
                text=" Unmatched quality and service for your needs"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 items-center">

          {/* Left Features */}
          <div className="space-y-6 lg:space-y-12 order-2 md:order-1">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg flex-shrink-0 transition-colors duration-300 group-hover:bg-[#ff0000]">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 transition-colors duration-300 group-hover:text-[#ff0000]">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Car Image with Shine Effect */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 group hover:shadow-blue-500/40 transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80"
                  alt="Red Luxury Car"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Diagonal Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-out">
                    <div className="w-32 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 transform origin-center"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6 lg:space-y-12 order-3">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg flex-shrink-0 transition-colors duration-300 group-hover:bg-[#ff0000]">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 transition-colors duration-300 group-hover:text-[#ff0000]">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}