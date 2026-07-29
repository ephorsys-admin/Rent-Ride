import React, { useEffect, useState, memo } from "react";
import aboutushero from "../../assets/aboutushero.png";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";
import { useNavigate } from "react-router-dom";

const MemoTypingText = memo(TypingText);

const CarRentalAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const reasons = [
    "Affordable self drive car rental in KIIT with no hidden charges.",
    "Preferred by students, professionals, business travelers and tourists.",
    "Wide range of hatchbacks, sedans, SUVs, and premium cars.",
    "Easy online booking with flexible hourly, daily, weekly, and monthly rentals.",
    "Convenient pickup near KIIT University, Patia, Infocity, and Chandrasekharpur.",
    "Well-maintained, clean, and insured vehicles.",
    "24/7 customer support for a smooth rental experience.",
  ];

  const highlights = [
    "Doorstep Pickup & Drop",
    "Affordable Rental Plans",
    "Fully Insured Vehicles",
    "Easy Online Booking",
    "24/7 Customer Support"
  ];

  return (
    <section className="relative w-full bg-black text-white py-12 sm:py-16 lg:py-20 overflow-hidden flex flex-col justify-between min-h-[90vh]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">

          {/* LEFT IMAGE - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block relative w-full">
            <div
              className={`relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <img
                src="/Aboutpage/aboutushero.webp"
                loading="lazy"
                decoding="async"
                alt="About us"
                className="w-full h-auto object-contain shadow-2xl will-change-transform"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            {/* ABOUT BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2"
            >
            </motion.div>

            {/* HEADING */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
              <MemoTypingText
                text="Why Choose Rent Ride Cars for Self Drive Car Rental in KIIT?"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>

            {/* REASONS LIST */}
            <motion.ul
              className="space-y-3 sm:space-y-4 pt-4 text-left max-w-xl ml-4 sm:ml-6 md:ml-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-white/80"
                  variants={itemVariants}
                >
                  {/* Custom Red Circle Check Bullet Icon */}
                  <span className="text-[#ff0000] flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/cars")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gray-600/90 bg-black/50 backdrop-blur text-white text-sm sm:text-base font-medium overflow-hidden group relative"
              >
                <span className="relative z-10">Explore our Fleet</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              </motion.button>
            </motion.div>
          </div>

          {/* MOBILE IMAGE - Only visible on mobile */}
          <div className="md:hidden relative w-full mt-8">
            <div
              className={`relative w-full max-w-sm mx-auto transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
            >
              <img
                src="/Aboutpage/aboutushero.webp"
                loading="lazy"
                decoding="async"
                alt="About us"
                className="w-full h-auto object-contain shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sliding Highlights Section */}
      <div className="w-full bg-[#0d0d0d] py-6 sm:py-8 border-y border-white/5 overflow-hidden flex items-center mt-12 sm:mt-16">
        <div className="flex whitespace-nowrap animate-marquee-scroll">
          {/* First set */}
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 mx-8 sm:mx-12 text-sm sm:text-lg font-bold tracking-wider text-white select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000] flex-shrink-0 shadow-[0_0_10px_#ff0000]" />
              {highlight}
            </div>
          ))}
          {/* Second duplicate set for infinite marquee loop */}
          {highlights.map((highlight, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3 mx-8 sm:mx-12 text-sm sm:text-lg font-bold tracking-wider text-white select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000] flex-shrink-0 shadow-[0_0_10px_#ff0000]" />
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRentalAbout;