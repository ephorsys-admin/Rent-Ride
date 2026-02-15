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

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
        </svg>
      ),
      title: "Easy Booking Process",
      description:
        "We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 -ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 17h14v-5a2 2 0 00-2-2H7a2 2 0 00-2 2v5z" />
          <path d="M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      title: "Convenient Pick-up & Return Process",
      description:
        "We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block relative w-full">
        <div
  className={`relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
  }`}
>
  <img
    src={aboutushero}
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
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="redGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff0000" />
                    <stop offset="100%" stopColor="#ff0000" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,15 L55,45 L85,50 L55,55 L50,85 L45,55 L15,50 L45,45 Z"
                  fill="url(#redGradient)"
                />
              </svg>
              <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase animate-fade-in">
                About Us
              </span>
            </motion.div>

            {/* HEADING */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700">
              <MemoTypingText
                text="Your trusted partner in reliable car rental"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>

            {/* DESCRIPTION */}
<p
  className="
    text-white/70
    text-sm
    sm:text-sm
    md:text-base
    lg:text-lg
    leading-relaxed
    max-w-xl
    text-left
    ml-4 sm:ml-6 md:ml-0
  "
>
  Reliable car rentals made easy. Choose from well-maintained vehicles at affordable prices,
  with flexible booking and hassle-free pickup for every journey.
</p>



            {/* FEATURES */}
            <motion.div
              className="space-y-4 sm:space-y-5 pt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 text-left"
                  variants={itemVariants}
                >
                  <div className="text-[#ff0000] flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-md font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gray-900/80 bg-black/50 backdrop-blur text-white text-sm sm:text-base font-medium overflow-hidden group relative"
              >
                <span className="relative z-10">Contact Us</span>
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
                src={aboutushero}
                loading="lazy"
                decoding="async"
                alt="About us"
                className="w-full h-auto object-contain shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CarRentalAbout;