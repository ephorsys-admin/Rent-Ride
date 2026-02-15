import two from "../../assets/Services/two.avif";
import three from "../../assets/Services/three.avif";
import Four from "../../assets/Services/Four.avif";
import Five from "../../assets/Services/Five.avif";
import TypingText from "../../shared/helpers/TypingText";
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const MemoTypingText = memo(TypingText);
export default function FeaturesSection() {
   const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, []);
  const features = [
    {
      title: "Instant Booking",
      desc: "Book your car instantly with real-time availability and quick confirmation.",
      img: Four,
    },
    {
      title: "Well-Maintained Cars",
      desc: "Clean, serviced, and safety-checked vehicles for a smooth driving experience.",
      img: three,
    },
    {
      title: "Flexible Pricing",
      desc: "Hourly, daily, and monthly rental plans with transparent pricing.",
      img: Five,
    },
    {
      title: "Self-Drive Rentals",
      desc: "Enjoy total freedom with self-drive cars—no driver, no restrictions.",
      img: two,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-black">
      <div className="font-['Poppins']">
        {/* Heading with SVG */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
              <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-0"
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
              Our Car Rental
            </h2>
          </div>
            </motion.div>
         
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-200  sm:mt-0 px-4 leading-tight">
               <MemoTypingText
                text="Our Car Rental Services"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
          </h1>
          <p className="text-sm sm:text-base text-white/70 mt-4 sm:mt-5">
            Everything you need for a comfortable, safe, and flexible car rental
            experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full transition-transform duration-300 will-change-transform hover:-translate-y-1"
            >
              <img
                className="rounded-xl w-full h-48 sm:h-56 object-cover"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              
              <h3 className="text-base sm:text-lg font-semibold text-white mt-3 sm:mt-4">
                {item.title}
              </h3>
              <p className="text-sm  text-white/70 mt-4 sm:mt-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}