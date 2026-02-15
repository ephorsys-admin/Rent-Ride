import { useEffect, useState, memo } from "react";
import TestimonialSlider from "../../Shared/ui/Feedback/TestimonialSlider.jsx";
import { motion } from "framer-motion";
import TypingText from "../../Shared/Helpers/TypingText";

const testimonialsData = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "The booking process was super smooth and the car was spotless.",
    name: "Rahul Sharma",
    role: "Business Traveler",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Affordable prices and excellent customer support!",
    name: "Ananya Verma",
    role: "Software Engineer",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "Best car rental service I’ve used during my trips.",
    name: "Michael Chen",
    role: "Frequent Traveler",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Cars were well-maintained and delivered on time.",
    name: "Sophia Rodriguez",
    role: "UX Designer",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    quote: "Loved the premium car options available.",
    name: "Amit Patel",
    role: "Entrepreneur",
    rating: 4,
  },
];

const MemoTypingText = memo(TypingText);

export default function Feedback() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full bg-black px-4 sm:px-6 lg:px-12  flex flex-col items-center">
      
      {/* Heading */}
      <div className="w-full max-w-4xl text-center mb-1 sm:mb-1">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 justify-center">
            
            {/* Icon */}
            <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 100 100">
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

            <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase ">
              Testimonials
            </span>
          </div>
        </motion.div>

        <h2 className="font-bold leading-snug text-white
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <MemoTypingText
            text="What our customers are saying about us"
            show={isVisible}
            speed={30}
            color="#ffffff"
          />
        </h2>
      </div>

      {/* Slider */}
      <div className="w-full max-w-6xl">
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
}
