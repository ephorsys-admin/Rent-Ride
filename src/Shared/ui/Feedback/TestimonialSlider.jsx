import React, { useState, useCallback, useMemo } from "react";
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
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
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

  return (
    <div className={cn("relative w-full max-w-5xl mx-auto px-2", className)}>
      <div className="relative min-h-[420px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-4 md:gap-0 px-2 sm:px-4">

              {/* 🖼 Image */}
              <div className="
                w-32 h-32
                sm:w-40 sm:h-40
                md:w-56 md:h-56
                md:mr-[-4rem]
                z-10
              ">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* 📄 Content */}
              <div className="
                relative 
                bg-white rounded-2xl shadow-xl
                p-4 sm:p-6
                md:pt-8 md:pl-24 md:pr-6 md:pb-6
              ">
                

                <blockquote className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                  {currentTestimonial.quote}
                </blockquote>

                <StarRating rating={currentTestimonial.rating} className="mb-4" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-bold text-base sm:text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {currentTestimonial.role}
                    </p>
                  </div>

                  {/* ⬅➡ Controls */}
                  <div className="flex gap-2 justify-start sm:justify-end">
                    <button
                      disabled={isAnimating}
                      onClick={handlePrevious}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center disabled:opacity-50"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      disabled={isAnimating}
                      onClick={handleNext}
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center disabled:opacity-50"
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

      {/* ⚫ Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentIndex === index
                ? "w-5 bg-white"
                : "bg-white/60 hover:bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
