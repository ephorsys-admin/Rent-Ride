import { useEffect, useState, memo } from "react";
import TestimonialSlider from "../../shared/ui/Feedback/TestimonialSlider.jsx";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText.jsx";

const testimonialsData = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "I had an excellent experience with Rent Ride for a self-drive car rental in KIIT, Bhubaneswar. The car was spotless, well-maintained, and delivered on time. The booking process was smooth, and the pricing was transparent with no hidden charges. I highly recommend Rent Ride to anyone looking for a reliable self-drive car rental in KIIT, Patia, or Chandrasekharpur.",
    name: "Pratikshya Rout",
    role: "Verified Customer",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Rent Ride provides one of the best self-drive car rental services in KIIT. The vehicle was in excellent condition, the customer support was very responsive, and the entire rental process was hassle-free. If you're searching for an affordable and trusted self-drive car rental in Bhubaneswar, this is the perfect choice.",
    name: "Shantanu Swain",
    role: "Local Explorer",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Booked a self-drive car from Rent Ride KIIT, and the experience exceeded my expectations. The car was clean, fuel-efficient, and comfortable for a weekend trip. Their professional service, competitive pricing, and quick pickup made the journey stress-free. Highly recommended for anyone needing a self-drive car in KIIT or Patia.",
    name: "Swapnajit Acharya",
    role: "Vacationer",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Rent Ride is my first choice whenever I need a self-drive car rental near KIIT Square. Their cars are well-maintained, the documentation process is simple, and there are no hidden costs. Excellent customer service and great value for money. Definitely the best self-drive car rental in Bhubaneswar.",
    name: "CHINMAYA DASH",
    role: "Frequent Renter",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "I rented a car from Rent Ride for a business trip around Bhubaneswar. The car was delivered on time, perfectly clean, and drove smoothly throughout the trip. If you're looking for a dependable self-drive car rental in KIIT, Infocity, or Chandrasekharpur, I strongly recommend Rent Ride.",
    name: "Biswanath Hansdah",
    role: "Verified Customer",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Amazing service from Rent Ride Self Drive Cars. The booking was quick, the vehicle was in excellent condition, and the staff was courteous and professional. Their affordable pricing and quality service make them one of the best self-drive car rental providers in KIIT and Patia.",
    name: "Ashutosh Sangramsingh",
    role: "Weekend Traveler",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Rent Ride made my trip around Bhubaneswar incredibly convenient. The self-drive car was clean, sanitized, and easy to book. Their transparent pricing and excellent customer support truly stand out. I highly recommend Rent Ride for self-drive car rentals in KIIT and nearby areas.",
    name: "Mangaraj Sahoo",
    role: "Tourist",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "If you're searching for the best self-drive car rental in KIIT, Bhubaneswar, Rent Ride is the right choice. The car was well-maintained, pickup was on time, and the entire process was fast and professional. Great experience from start to finish.",
    name: "Suraj Kumar",
    role: "Daily Commuter",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "I had a fantastic experience renting a self-drive car from Rent Ride. The vehicle was comfortable, the rates were reasonable, and the staff explained everything clearly. Whether you're in KIIT, Patia, or Infocity, Rent Ride offers one of the most reliable self-drive car rental services in Bhubaneswar.",
    name: "Ananda Bera",
    role: "Verified Customerr",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Rent Ride delivers outstanding self-drive car rental services in KIIT with excellent customer support and premium-quality vehicles. The booking process was simple, the pricing was fair, and the car performed perfectly throughout the trip. I would definitely recommend Rent Ride to anyone looking for a trusted self-drive car rental in Bhubaneswar.",
    name: "Subhashis Panda",
    role: "Premium Member",
    rating: 5,
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
      <div className="w-full max-w-4xl text-center mb-6 sm:mb-16">
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
