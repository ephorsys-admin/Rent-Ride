import React, { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";

// Simple cn helper
const cn = (...classes) => classes.filter(Boolean).join(" ");

const colors = [
  "#4F46E5",
  "#7C3AED",
  "#2563EB",
  "#EC4899",
  "#F97316",
  "#06B6D4",
  "#10B981",
  "#DC2626",
];

// Helper to deterministically pick a color based on user name
const getAvatarColor = (name) => {
  if (!name) return colors[0];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return colors[sum % colors.length];
};

// Clean role strings to form Category Badges
const getCategoryBadge = (role) => {
  if (!role) return "Customer";
  if (role.toLowerCase().includes("customer")) return "Customer";
  if (role.toLowerCase().includes("explorer")) return "Explorer";
  if (role.toLowerCase().includes("traveler")) return "Traveler";
  if (role.toLowerCase().includes("renter")) return "Renter";
  if (role.toLowerCase().includes("member")) return "Premium";
  return role;
};

// ⭐ Star Rating
const StarRating = ({ rating, className }) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4.5 w-4.5",
          i < rating ? "text-[#FACC15] fill-[#FACC15]" : "text-zinc-600"
        )}
      />
    ))}
  </div>
);

// 🎬 Slide Transition Animations
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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

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

  // Autoplay effect (transitioning every 5 seconds)
  useEffect(() => {
    if (isHovered || isAnimating) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds interval limit

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, isAnimating, handleNext]);

  // Touch Swipe Handlers for mobile responsiveness
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;

    // Check if swipe is horizontal and substantial
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  // Extract initials (first letter of first and last name, e.g. "David Wong" -> "DW")
  const initials = useMemo(() => {
    if (!currentTestimonial?.name) return "R";
    const parts = currentTestimonial.name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }, [currentTestimonial]);

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 mt-6 sm:mt-8 select-none", className)}>
      <div className="relative w-full overflow-visible">
        
        {/* 👻 Ghost Card: Dictates dynamic layout height naturally, eliminating overlapping and hardcoded min-heights */}
        <div className="w-full opacity-0 pointer-events-none select-none">
          <div className="w-full max-w-2xl mx-auto bg-[rgba(255,255,255,0.08)] rounded-[24px] p-5 xs:p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-transparent">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-14 h-14 rounded-full flex-shrink-0" />
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-xl sm:text-[22px] leading-tight mb-0">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm mt-1 font-normal">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Rating */}
            <StarRating rating={currentTestimonial.rating} className="my-3 sm:my-4 justify-center sm:justify-start" />

            {/* Quotation */}
            <blockquote className="text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed font-normal text-center sm:text-left max-w-full tracking-wide">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Footer */}
            <div className="border-t border-transparent pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-auto">
              <span className="text-xs px-3 py-1.5 rounded-full">
                {getCategoryBadge(currentTestimonial.role)}
              </span>
              <span className="text-xs">
                Verified Review
              </span>
            </div>
          </div>
        </div>

        {/* 🎬 Active/Animated Card: Overlayed atop the ghost outline */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="
                  relative w-full h-full max-w-2xl mx-auto
                  bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px]
                  border border-[rgba(255,255,255,0.12)]
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  rounded-[24px] p-5 xs:p-6 sm:p-8 md:p-10
                  flex flex-col justify-between
                  hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                  transition-all duration-300 ease-out
                "
              >
                {/* Header (Avatar icon, Reviewer name, Role) */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  {/* Dynamic Color Initials Circular Avatar */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md border border-white/10"
                    style={{ backgroundColor: getAvatarColor(currentTestimonial.name) }}
                  >
                    {initials}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-xl sm:text-[22px] leading-tight text-white mb-0">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-[#A1A1AA] mt-1 font-normal">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating layout */}
                <StarRating rating={currentTestimonial.rating} className="my-3 sm:my-4 justify-center sm:justify-start" />

                {/* Review quotation */}
                <blockquote className="text-base sm:text-lg text-white mb-5 sm:mb-6 leading-relaxed font-normal text-center sm:text-left max-w-full tracking-wide">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Footer section (divider line + badges) */}
                <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-auto">
                  {/* Category badge */}
                  <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium uppercase tracking-wider">
                    {getCategoryBadge(currentTestimonial.role)}
                  </span>
                  {/* Verified check badge */}
                  <span className="flex items-center gap-1.5 text-xs text-[#A1A1AA] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                    Verified Review
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ⬅➡ Navigation Controls - Center-bottom on mobile, absolute flanking on larger screens */}
      <div className="flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-3 sm:-right-3 md:-left-6 md:-right-6 z-20 justify-center sm:justify-between items-center gap-6 sm:gap-0 mt-6 sm:mt-0 pointer-events-none px-0">
        <button
          disabled={isAnimating}
          onClick={handlePrevious}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition flex items-center justify-center disabled:opacity-50 pointer-events-auto shadow-lg backdrop-blur-md cursor-pointer"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <button
          disabled={isAnimating}
          onClick={handleNext}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition flex items-center justify-center disabled:opacity-50 pointer-events-auto shadow-lg backdrop-blur-md cursor-pointer"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
