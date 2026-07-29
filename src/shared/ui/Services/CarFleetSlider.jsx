import { useEffect, useRef, useState, memo, forwardRef } from "react";
import TypingText from "../../helpers/TypingText";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "TATA Tiago",
    type: "Petrol",
    seater: 5,
    price12h: 1399,
    price24h: 1799,
    image: "/HatchbackCars/tiago.webp",
    category: "car",
  },
  {
    id: 2,
    name: "Maruti Suzuki Swift ",
    type: "Petrol",
    seater: 5,
    price12h: 1499,
    price24h: 1899,
    image: "/HatchbackCars/swift1.webp",
    category: "car",
  },
  {
    id: 3,
    name: "Maruti Suzuki Brezza",
    type: "Petrol",
    seater: 5,
    price12h: 1899,
    price24h: 2399,
    image: "/SUVCars/brezza.webp",
    category: "car",
  },

  {
    id: 4,
    name: "Kia Carens Clavis",
    type: "petrol",
    seater: 7,
    price12h: 2699,
    price24h: 3299,
    image: "/SedanCars/clavis.webp",
    category: "car",
  },


  {
    id: 5,
    name: "Fronx (Red)",
    type: "Petrol",
    seater: 5,
    price12h: 1599,
    price24h: 1999,
    image: "/SUVCars/1.webp",
    category: "car",
  },


    {
    id: 6,
    name: "Baleno (White/Blue)",
    type: "Petrol",
    seater: 5,
    price12h: 1499,
    price24h: 1799,
    image: "/HatchbackCars/baleno.webp",
    category: "car",
  },
    {
    id: 7,
    name: "Venue (Black/White)",
    type: "Petrol",
    seater: 5,
    price12h: 1799,
    price24h: 2399,
    image: "/SUVCars/venue.webp",
    category: "car",
  },

     {
    id: 8,
    name: "Fronx (White/Blue)",
    type: "Petrol",
    seater: 5,
    price12h: 1499,
    price24h: 1799,
    image: "/SUVCars/fronx.webp",
    category: "car",
  },
    {
    id: 9,
    name: "Hyundai i20 (White)",
    type: "Petrol",
    seater: 5,
    price12h: 1499,
    price24h: 1799,
    image: "/HatchbackCars/i20.webp",
    category: "car",
  },



  {
    id: 10,
    name: "Bajaj pulser 150",
    type: "Petrol",
    seater: 2,
    price12h: 699,
    price24h: 999,
    image: "/Bikes/pulsar150.webp",
    category: "bike",
  },

  {
    id: 11,
    name: "Jupiter 125",
    type: "Petrol",
    seater: 2,
    price12h: 699,
    price24h: 999,
    image: "/Bikes/jupiter.webp",
    category: "bike",
  },
];

const MemoTypingText = memo(TypingText);

export default function CarFleetSlider() {
  const sliderRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const container = sliderRef.current;
      const cardWidth =
        cardRef.current?.offsetWidth +
        parseInt(getComputedStyle(container).gap || 24);

      const maxScroll = container.scrollWidth - container.clientWidth;

      setScrollPosition((prev) =>
        prev + cardWidth >= maxScroll ? 0 : prev + cardWidth,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  useEffect(() => {
    sliderRef.current?.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [scrollPosition]);

  return (
    <section className="relative w-full overflow-hidden bg-black py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-3 ">
              {/* Premium Animated Icon */}
              <div className="relative">
                <svg className="w-8 h-8" viewBox="0 0 100 100">
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
              </div>
              <span className="text-[#ff0000] text-sm font-bold tracking-[0.3em] uppercase animate-fade-in">
                Premium Fleet
              </span>
            </div>
          </motion.div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <MemoTypingText
              text="Our Top Rented Cars"
              show={isVisible}
              speed={30}
              color="#ffffff"
            />
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoScroll(false)}
          onMouseLeave={() => setIsAutoScroll(true)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-4 sm:px-[7.5%]"
          >
            {cars.map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                navigate={navigate}
                ref={index === 0 ? cardRef : null}
              />
            ))}

            {/* Spacer so Jupiter fully scrolls into view */}
            <div className="flex-shrink-0 w-4 sm:w-[7.5%]" />
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: Math.ceil(cars.length / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setScrollPosition(i * 320)}
              className={`h-2 rounded-full transition-all duration-500 ${
                Math.floor(scrollPosition / 320) === i
                  ? "bg-white w-12 shadow-lg "
                  : "bg-gray-700 w-2 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
    </section>
  );
}
const CarCard = memo(
  forwardRef(function CarCard({ car, navigate }, ref) {
    const handleBookNow = () => {
      // Navigate to /bike for bikes, /cars for cars
      if (car.category === "bike") {
        navigate("/bike");
      } else {
        navigate("/cars");
      }
    };

    return (
      <div className=" relative w-[80vw] sm:w-72 md:w-80 flex-shrink-0 snap-center " >
        + <div
   ref={ref}
   className="relative w-[80vw] sm:w-72 md:w-80 flex-shrink-0 snap-center"
 >
        <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl border bg-black/60 shadow-lg border-gray-800/50">
          {/* Image */}
          <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
            <img
              src={car.image}
              alt={car.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
            />

            {/* Price Badge */}
            <div
              className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs font-bold 
                          bg-black/80 text-white "
            >
              <div className="flex justify-between gap-3">
                <span className="text-gray-400">12h</span>
                <span>₹{car.price12h}</span>
              </div>
              <div className="flex justify-between gap-3 text-red-600">
                <span className="text-gray-400">24h</span>
                <span>₹{car.price24h}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-4 bg-gradient-to-b from-transparent to-black/40">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {car.name}
              </h3>
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            </div>

            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold 
                           bg-black-900 text-gray-400 border border-gray-800"
            >
              {car.type}
            </span>

            {/* Button */}
            <button
              className="
              w-full py-3 rounded-lg font-bold text-sm tracking-wide
              bg-white text-black hover:bg-gray-200 transition
              active:scale-[0.98]
            "
              onClick={handleBookNow}
            >
              Book Now
            </button>

            {/* Info */}
            <div className="flex gap-2 pt-2">
              <div className="flex-1 text-center py-2.5 px-2 rounded-lg bg-black-900/50 border border-gray-800/50">
                <p className="text-xs text-gray-500 mb-1">Seater</p>
                <p className="text-sm font-bold text-white">{car.seater}</p>
              </div>

              <div className="flex-1 text-center py-2.5 px-2 rounded-lg bg-black-900/50 border border-gray-800/50">
                <p className="text-xs text-gray-500 mb-1">Service</p>
                <p className="text-sm font-bold text-white">24/7</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }),
);