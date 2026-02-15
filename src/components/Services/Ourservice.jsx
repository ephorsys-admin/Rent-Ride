import { Car, Briefcase, Plane, User, MapPin, Clock, Shield, Headphones } from "lucide-react";
import ServiceCard from "../../shared/ui/Home/ServiceCard";
import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
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
    {
        id: 5,
        title: "City Tour Services",
        desc: "Enhance your rental experience with additional options.",
    },
    {
        id: 6,
        title: "Hourly Rental",
        desc: "Enhance your rental experience with additional options.",
    },
    {
        id: 7,
        title: "Safe & Secure",
        desc: "Enhance your rental experience with additional options.",
    },
    {
        id: 8,
        title: "24/7 Support",
        desc: "Enhance your rental experience with additional options.",
    },
];

//   Icon Mapping used in the cards
const serviceIcons = {
    1: Car,
    2: Briefcase,
    3: Plane,
    4: User,
    5: MapPin,
    6: Clock,
    7: Shield,
    8: Headphones,
};
const MemoTypingText = memo(TypingText);
const OurService = () => {
       const [isVisible, setIsVisible] = useState(false);
       useEffect(() => {
          const timer = setTimeout(() => setIsVisible(true), 150);
          return () => clearTimeout(timer);
        }, []);
    return (
        <div className="bg-[#000000] py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f] text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 rounded-2xl sm:rounded-3xl shadow-xl">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                                      <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2"
            >
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
                            Services We Provide
                        </span>
                    </div>
   </motion.div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-200 mt-3 sm:mt-4 px-4 leading-tight">
                      <MemoTypingText
                text=" Premium Car Rental Services Tailored For Your Needs"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
                        
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
                    {servicesData.map((service) => {
                        const Icon = serviceIcons[service.id];
                        return (
                            <ServiceCard
                                key={service.id}
                                Icon={Icon}
                                title={service.title}
                                desc={service.desc}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OurService;