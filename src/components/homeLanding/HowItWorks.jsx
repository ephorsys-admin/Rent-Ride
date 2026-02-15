import React, { useEffect, useState , memo } from "react";
import TimelineComponent from "../../shared/ui/Home/HowItWorkContains";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";
const MemoTypingText = memo(TypingText);
const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);

  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="bg-[#000000] text-white px-4 sm:px-0 lg:px-16 py-2">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
               <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 relative overflow-hidden cursor-pointer group mb-1"
                      >
          <div className="inline-flex items-center gap-2 ">
            {/* Premium Animated Icon */}
            <div className="relative">
              <svg className="w-8 h-8" viewBox="0 0 100 100">
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
            <span className="text-[#ff0000] text-xs sm:text-sm  font-bold tracking-[0.3em] uppercase animate-fade-in">
              How It Works
            </span>
          </div>
          </motion.div>
               <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
              <MemoTypingText
                text=" Get Behind the wheels in four simple steps"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>
   
        </div>
        <TimelineComponent/>
      </div>
    </div>
  );
};

export default HowItWorks;
