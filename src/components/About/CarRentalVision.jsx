import { memo, useEffect, useState } from "react";
import TypingText from "../../Shared/Helpers/TypingText";
import { Car, Target, Compass, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";

const MemoTypingText = memo(TypingText);



export default function CarRentalVision() {
  const [activeTab, setActiveTab] = useState('vision');

         const [isVisible, setIsVisible] = useState(false);
       useEffect(() => {
          const timer = setTimeout(() => setIsVisible(true), 150);
          return () => clearTimeout(timer);
        }, []);

  const content = {
    vision: {
      title: 'Pioneering excellence in car rental services',
      description: 'We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      points: [
        'Our customers are our top priority',
        'Quality is at the heart of everything we do',
        'Every vehicle leaves care looking its absolute best'
      ]
    },
    mission: {
      title: 'Delivering exceptional service every time',
      description: 'Our mission is to provide reliable, affordable, and convenient car rental solutions that exceed customer expectations. We are committed to building lasting relationships through transparency, integrity, and outstanding customer service. Every interaction matters to us.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      points: [
        'Building trust through transparency',
        'Affordable solutions without compromise',
        'Available 24/7 for your convenience'
      ]
    },
    approach: {
      title: 'Innovation meets customer satisfaction',
      description: 'We combine cutting-edge technology with personalized service to create the ultimate car rental experience. Our approach focuses on simplicity, efficiency, and putting you in control. From booking to return, we make every step effortless.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      points: [
        'Smart technology for seamless booking',
        'Flexible rental options tailored to you',
        'Comprehensive support at every step'
      ]
    }
  };

  return (
    <div className=" bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
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
              Vision Mission
            </h2>
          </div>
            </motion.div>
              
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
            
     <MemoTypingText
                text=" Driving excellence and innovation in car rental services"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
          </h1>

        </div>

        {/* Tab Buttons - Fully Mobile Responsive */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 sm:p-1.5 gap-1 border border-zinc-800 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            {[
              { key: 'vision', label: 'Vision' },
              { key: 'mission', label: 'Mission' },
              { key: 'approach', label: 'Approach' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${activeTab === tab.key
                  ? 'bg-[#FF0000] text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
                 <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2"
            >
            <div className="inline-flex items-center gap-2">
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
              <p className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Our {activeTab}
              </p>
            </div>
</motion.div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {content[activeTab].title}
            </p>

            <p   className="text-white/70 leading-relaxed text-xs sm:text-sm">
              {content[activeTab].description}
            </p>

            {/* Points */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              {content[activeTab].points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <p><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff0000] flex-shrink-0 mt-0.5" /></p>
                  <p className="text-white/70 text-xs sm:text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Smaller Size */}
          <div className="relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg mx-auto group cursor-pointer">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/50">
              <img
                key={activeTab}
                src={content[activeTab].image}
                alt={`${activeTab} illustration`}
                className="w-full h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[480px] object-cover transition-all duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

              {/* Diagonal Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-out">
                  <div className="w-32 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 transform origin-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}