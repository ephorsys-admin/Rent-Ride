import React, { useEffect, useState , memo } from "react";
import IncreasingPoints from "../../shared/ui/Home/IncreasingPoints";
import ImageAndLogo from "../../shared/ui/Home/ImageAndLogo";
import TypingText from "../../shared/helpers/TypingText";
import { motion } from "framer-motion";
const MemoTypingText = memo(TypingText);
const TrustedBrands = () => {
  const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, []);
  return (

    <div className=" bg-[#000000]">
        <IncreasingPoints />
      <div className=" bg-[#000000] text-white px-4 sm:px-8 lg:px-16 py-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
           <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}>
          <div className="inline-flex items-center gap-3 ">
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
            <span className="text-[#ff0000] text-xs  sm:text-sm font-bold tracking-[0.3em] uppercase animate-fade-in">
              Trusted Brands
            </span>
          </div>
          </motion.div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
              <MemoTypingText
                text="Premium Automotive Brands"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>
       
        </div>


        
        <ImageAndLogo/>
        
      </div>
    </div>
      
  );
};

export default TrustedBrands;
