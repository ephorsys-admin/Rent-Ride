import { useEffect, useState } from "react";
import carVideo from "../../assets/car1.mp4";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [show, setShow] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

    useEffect(() => {
    // Only show content when video is ready
    if (videoLoaded) {
      const t = setTimeout(() => setShow(true), 150);
      return () => clearTimeout(t);
    }
  }, [videoLoaded]);
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">
      {/* ===== Background Video ===== */}
      <div className="absolute inset-0 z-0">
           <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover scale-105 brightness-[1.25] contrast-[1.5]"
        >
          <source src={carVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black/90" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-28">
        <div className="max-w-4xl">
          {/* ===== Tagline ===== */}
          <div
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease-out 0.2s",
            }}
          >
            <span className="inline-flex items-center gap-2 px-2 py-1 text-xs  rounded-full border border-red-500/10 bg-black-500/10 backdrop-blur text-white">
              <span className="text-[#ff0000]">•</span>Rent Ride Car Car - Best Car Rental Service in Bhubaneswar
            </span>
          </div>

          {/* ===== Headline ===== */}
          <h1
            className="mt-6 font-extrabold tracking-tight leading-[1.05] text-white
                         text-2xl sm:text-2xl md:text-4xl lg:text-6xl"
          >
            <TypingText
              text="Luxury Self-Drive Car  "
              show={show}
              color="white"
            />
            <br />
            <TypingText
              text="Rentals in Bhubaneswar"
              show={show}
              delay={600}
              color="#FF0000"
            />
          </h1>

          {/* ===== Description ===== */}
          <p
            className="
    mt-6 
    sm:mt-8 
    max-w-full 
    sm:max-w-md 
    md:max-w-2xl 
    text-white
    text-sm 

    md:text-md
     lg:text-lg
    leading-relaxed
    break-words
  "
          >
            {"Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
              .split("")
              .map((char, i) => (
             <span
  key={i}
  style={{
    display: "inline", // allow normal wrapping
    opacity: show ? 1 : 0,
    filter: show ? "blur(0px)" : "blur(6px)",
    transition: `all 0.35s ease-out ${0.9 + i * 0.012}s`,
  }}
>
  {char}
</span>

              ))}
          </p>

          {/* ===== Buttons ===== */}
          <div
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease-out 1.1s",
            }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-start"
          >
            {/* Primary */}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/cars")}
              className="
      w-full sm:w-30 md:w-40 lg:w-40 
      h-12 sm:h-11 
      rounded-full
       border border-gray-600/90
      bg-black/50 backdrop-blur
      text-white text-sm sm:text-base md:text-lg font-medium
      relative overflow-hidden
      group
      text-center
    "
            >
              <span className="relative z-10">Book a Ride</span>
              <div
                className="absolute inset-0 bg-gradient-to-r
      from-red-500/0 via-red-500/40 to-red-500/0
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-1000 ease-out"
              />
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="
     w-full sm:w-20 md:w-40 lg:w-40 
      h-12 sm:h-11
      rounded-full
       border border-gray-600/90
      bg-black/50 backdrop-blur
      text-white text-sm sm:text-base md:text-lg font-medium
      relative overflow-hidden
      group
      text-center
    "
            >
              <span className="relative z-10">Contact Us</span>
              <div
                className="absolute inset-0 bg-gradient-to-r
      from-red-500/0 via-red-500/40 to-red-500/0
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-1000 ease-out"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
