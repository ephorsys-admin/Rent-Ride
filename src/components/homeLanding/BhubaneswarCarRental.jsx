import React, { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";

const MemoTypingText = memo(TypingText);

const BhubaneswarCarRental = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black py-10 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-9xl">
        <div className="relative rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-gradient-to-br from-[#0c0c0c] via-[#121212] to-[#080808] border border-white/10 shadow-2xl overflow-hidden px-6 sm:px-10 md:px-16 py-10 sm:py-14 md:py-16">
          {/* Radial subtle red highlight background */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Heading with pre-animated icon badge */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mt-3 sm:mt-5">
                {/* Premium Animated Icon */}
                <div className="relative">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient
                        id="redGradientBhubaneswar"
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
                      fill="url(#redGradientBhubaneswar)"
                    />
                  </svg>
                </div>

                <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase animate-fade-in">
                  Self Drive Rental Info
                </span>
              </div>
            </motion.div>

            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700 mb-6 sm:mb-8 mt-2">
              <MemoTypingText
                text="Are You Looking For Self Drive Car Rental in Bhubaneswar ?"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-300 text-sm sm:text-base leading-relaxed md:leading-loose text-center mx-auto space-y-4 max-w-7xl"
          >
            <p>
              <span className="text-[#ff0000] font-semibold">Rent Ride</span> offers premium self-drive car rental services across Bhubaneswar, making your travel convenient, affordable, and hassle-free. Whether you're commuting for work, planning a weekend getaway, or exploring the city, you can easily book well-maintained, sanitized, and reliable self-drive cars at competitive prices. 
            </p>
            <p>
              We provide convenient pick-up and drop-off services from major locations, including{" "}
              <span className="text-[#ff0000] font-semibold">KIIT</span>,{" "}
              <span className="text-[#ff0000] font-semibold">KIIT Road</span>,{" "}
              <span className="text-[#ff0000] font-semibold">KIIT Square</span>,{" "}
              <span className="text-[#ff0000] font-semibold">Chandrasekharpur</span>,{" "}
              <span className="text-[#ff0000] font-semibold">Patia</span>,{" "}
              <span className="text-[#ff0000] font-semibold">Infocity</span>, and many other areas across Bhubaneswar. With a wide range of vehicles, flexible rental plans, and a quick booking process, Rent Ride ensures a smooth driving experience for every customer. Book your self-drive car with Rent Ride today and enjoy the freedom to travel across Bhubaneswar and Odisha on your own schedule.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BhubaneswarCarRental;
