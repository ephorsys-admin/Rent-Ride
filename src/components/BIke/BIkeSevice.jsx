import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ================= IMAGE COMPONENT ================= */
const BikeImage = ({ src, alt, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-50 overflow-hidden">
      {/* Skeleton */}
      {/* test */}
      {!loaded && (
        <div className="absolute inset-0 bg-zinc-300 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={index < 2 ? "eager" : "lazy"}
        fetchpriority={index < 2 ? "high" : "auto"}
        decoding="async"
        width="400"
        height="300"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700
          ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"}
        `}
      />
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const BikeService = () => {
  const [priceMode, setPriceMode] = useState({});

  const bikes = [
    {
      id: 1,
      name: "Bajaj Pulsar 150",
      image: "/Bikes/pulsar150.webp",
      fuel: "Petrol",
      price12h: 699,
      price24h: 999,
    },
    {
      id: 2,
      name: "Royal Enfield Meteor 350",
      image: "/Bikes/Meteor.webp",
      fuel: "Petrol",
      price12h: 999,
      price24h: 1199,
    },
    {
      id: 3,
      name: "Royal Enfield Classic 350",
      image: "/Bikes/classic.webp",
      fuel: "Petrol",
      price12h: 999,
      price24h: 1199,
    },
    {
      id: 4,
      name: "TVS Jupiter 125",
      image: "/Bikes/jupiter.webp",
      fuel: "Petrol",
      price12h: 699,
      price24h: 999,
    },
    {
      id: 5,
      name: "Bajaj Pulsar 220F",
      image: "/Bikes/f220.webp",
      fuel: "Petrol",
      price12h: 899,
      price24h: 1099,
    },
  ];

  /* ================= WHATSAPP HANDLER ================= */
  const HandleClick = (bike) => {
    const phoneNumber = "919658041110";
    const mode = priceMode[bike.id] || "24h";
    const price = mode === "12h" ? bike.price12h : bike.price24h;

    const message = `Hi, I would like to book the following bike:

Bike Details:
- Model: ${bike.name}
- Fuel Type: ${bike.fuel}
- Rental Duration: ${mode}
- Rental Price: ₹${price}

Please confirm availability and booking details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <h1 className="text-white text-3xl lg:text-4xl font-bold mb-2">
          Premium Bikes
        </h1>
        <p className="text-white/70 mb-8">
          Choose from our premium collection
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center xl:justify-start">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 w-full max-w-[360px]"
            >
              {/* IMAGE */}
              <BikeImage
                src={bike.image}
                alt={bike.name}
                index={index}
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-black text-xl font-bold mb-4">
                  {bike.name}
                </h2>

                {/* DETAILS */}
                <div className="space-y-2 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Fuel</span>
                    <span className="font-medium text-black">{bike.fuel}</span>
                  </div>
                </div>

                {/* PRICE */}
                <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
                  <div>
                    {/* TOGGLE */}
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setPriceMode((prev) => ({
                            ...prev,
                            [bike.id]: "12h",
                          }))
                        }
                        className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-205 ${
                          (priceMode[bike.id] || "24h") === "12h"
                            ? "bg-[#ff0000] text-white shadow-md shadow-[#ff0000]/20 scale-105 border border-[#ff0000]"
                            : "border border-zinc-300 hover:border-black bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-black"
                        }`}
                      >
                        12h
                      </button>
                      <button
                        onClick={() =>
                          setPriceMode((prev) => ({
                            ...prev,
                            [bike.id]: "24h",
                          }))
                        }
                        className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-205 ${
                          (priceMode[bike.id] || "24h") === "24h"
                            ? "bg-[#ff0000] text-white shadow-md shadow-[#ff0000]/20 scale-105 border border-[#ff0000]"
                            : "border border-zinc-300 hover:border-black bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-black"
                        }`}
                      >
                        24h
                      </button>
                    </div>

                    {/* PRICE VALUE */}
                    <div className="text-xl sm:text-2xl font-bold mt-1 text-black flex items-baseline gap-0.5">
                      <span>
                        ₹
                        {(priceMode[bike.id] || "24h") === "12h"
                          ? bike.price12h
                          : bike.price24h}
                      </span>
                      <span className="text-zinc-500 text-xs sm:text-sm font-semibold">
                        /{(priceMode[bike.id] || "24h") === "12h" ? "12h" : "24h"}
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    onClick={() => HandleClick(bike)}
                    whileHover={{ backgroundColor: "#ff0000" }}
                    className="md:w-24 w-20 h-12 text-sm md:text-base rounded-md flex items-center justify-center bg-black text-white"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeService;
