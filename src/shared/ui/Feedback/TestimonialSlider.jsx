import React, { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// Simple cn helper
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ⭐ Star Rating
const StarRating = ({ rating, className }) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
        )}
      />
    ))}
  </div>
);

// 🎬 Animations
const slideVariants = {
  hidden: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

const TestimonialSlider = ({ testimonials, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentTestimonial = useMemo(
    () => testimonials[currentIndex],
    [currentIndex, testimonials]
  );

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, testimonials.length]);

  const handlePrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, testimonials.length]);

  // Autoplay Effect
  useEffect(() => {
    if (isHovered || isAnimating) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5500); // 5.5 seconds transition delay

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, isAnimating, handleNext]);

  return (
    <div className={cn("relative w-full max-w-5xl mx-auto px-2 mt-16 md:mt-8", className)}>
      <div className="relative min-h-[500px] xs:min-h-[460px] sm:min-h-[420px] md:min-h-[360px] lg:min-h-[300px] flex items-center justify-center overflow-visible">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center"
          >
            <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-0 px-2 sm:px-4">

              {/* 🖼 User Avatar */}
              <div className="
                absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0
                w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40
                md:-mr-16 lg:-mr-20
                z-20 flex-shrink-0 transition-all duration-300
              ">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-full border-4 border-red-600 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 📄 Content Card */}
              <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative w-full 
                  bg-zinc-900 border border-zinc-800 text-white rounded-2xl shadow-2xl
                  p-6 sm:p-8
                  pt-16 sm:pt-20 md:pt-8 md:pl-24 lg:pl-28 md:pr-8 md:pb-8
                  flex flex-col justify-between gap-4
                  min-h-[280px] xs:min-h-[240px] sm:min-h-[220px] md:min-h-[220px]
                "
              >
                {/* Decorative Quote Mark */}
                <span className="absolute top-4 right-4 text-red-600/10 pointer-events-none">
                  <Quote size={48} className="fill-current" />
                </span>

                <blockquote className="text-sm sm:text-base text-zinc-300 mb-2 leading-relaxed italic select-text">
                  "{currentTestimonial.quote}"
                </blockquote>

                <StarRating rating={currentTestimonial.rating} className="mb-1" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2 border-t border-zinc-800/80 pt-4">
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-red-500 font-semibold tracking-wide">
                      {currentTestimonial.role}
                    </p>
                  </div>

                  {/* ⬅➡ Controls */}
                  <div className="flex gap-2 justify-start sm:justify-end">
                    <button
                      disabled={isAnimating}
                      onClick={handlePrevious}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:bg-red-605 transition flex items-center justify-center disabled:opacity-50"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      disabled={isAnimating}
                      onClick={handleNext}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:bg-red-650 transition flex items-center justify-center disabled:opacity-50"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ⚫ Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "w-6 bg-red-600"
                : "bg-zinc-700 hover:bg-zinc-500"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
