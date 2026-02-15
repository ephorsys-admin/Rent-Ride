	import React, { useState } from "react";
import { motion } from "framer-motion";
// Images
import pulsar150 from "../../assets/Bikes/pulsar150.avif";
import f220 from "../../assets/Bikes/f220.avif";
import Jupiter from "../../assets/Bikes/jupiter.avif";
import classic from "../../assets/Bikes/classic.avif";
import Meteor from "../../assets/Bikes/Meteor.avif";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const BikeService = () => {
  const [priceMode, setPriceMode] = useState({});

  const bikes = [
    {
      id: 1,
      name: "Bajaj Pulsar 150",
      image: pulsar150,
      fuel: "Petrol",
      price12h: 699,
      price24h: 999,
    },
    {
      id: 2,
      name: "Royal Enfield Meteor 350",
      image: Meteor,
      fuel: "Petrol",
      price12h: 999,
      price24h: 1199,
    },
    {
      id: 3,
      name: "Royal Enfield Classic 350",
      image: classic,
      fuel: "Petrol",
      price12h: 999,
      price24h: 1199,
    },
    {
      id: 4,
      name: "TVS Jupiter 125",
      image: Jupiter,
      fuel: "Petrol",
      price12h: 699,
      price24h: 999,
    },
    {
      id: 5,
      name: "Bajaj Pulsar 220F",
      image: f220,
      fuel: "Petrol",
      price12h: 899,
      price24h: 1099,
    },
  ];

  // WhatsApp booking handler
  const HandleClick = (bike) => {
    const phoneNumber = "919658041110"; // WhatsApp number (country code + number, no spaces)
    
    // Get the current price mode for this bike
    const mode = priceMode[bike.id] || "24h";
    const price = mode === "12h" ? bike.price12h : bike.price24h;
    
    // Create the message with bike specifications
    const message = `Hi, I would like to book the following bike:

*Bike Details:*
- Model: ${bike.name}
- Fuel Type: ${bike.fuel}
- Rental Duration: ${mode}
- Rental Price: ₹${price}

Please confirm availability and booking details.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <h1 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2">Premium Bikes</h1>
        <p className="text-white/70 mb-8">Choose from our premium collection</p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center xl:justify-start">
          {bikes.map((bike, index) => (
            <div
              key={bike.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 w-full max-w-[360px]"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-50 overflow-hidden">
                <img
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-black text-xl font-bold mb-4">
                  {bike.name}
                </h2>

                {/* Details */}
                <div className="space-y-2 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Fuel</span>
                    <span className="font-medium text-black">{bike.fuel}</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
                  <div>
                    {/* Toggle */}
                    <div className="flex border rounded-lg overflow-hidden text-xs font-semibold">
                      <button
                        onClick={() =>
                          setPriceMode((prev) => ({
                            ...prev,
                            [bike.id]: "12h",
                          }))
                        }
                        className={`px-3 py-1 ${
                          (priceMode[bike.id] || "24h") === "12h"
                            ? "bg-black text-white"
                            : "bg-white text-zinc-600"
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
                        className={`px-3 py-1 border-l ${
                          (priceMode[bike.id] || "24h") === "24h"
                            ? "bg-black text-white"
                            : "bg-white text-zinc-600"
                        }`}
                      >
                        24h
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold mt-1 text-black">
                      ₹
                      {(priceMode[bike.id] || "24h") === "12h"
                        ? bike.price12h
                        : bike.price24h}
                      <span className="text-sm text-zinc-500"> /day</span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => HandleClick(bike)}
                    initial="initial"
                    whileHover="hover"
                    whileTap="hover"
                    variants={{
                      initial: { backgroundColor: "#000000" },
                      hover: { backgroundColor: "#ff0000" },
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative md:w-24 w-20 h-12 md:text-base text-sm rounded-md flex items-center justify-center z-10 "
                  >
                    Book Now
                    {/* Arrow ↗ */}
                    {/* <motion.div
                      variants={{
                        initial: { opacity: 1, scale: 1, rotate: 0 },
                        hover: { opacity: 0, scale: 0.7, rotate: 20 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </motion.div> */}

                    {/* Arrow → */}
                    {/* <motion.div
                      variants={{
                        initial: { opacity: 0, scale: 0.7, x: -6 },
                        hover: { opacity: 1, scale: 1, x: 0 },
                      }}
                      transition={{ duration: 0.25 }}
                      className="absolute"
                    >
                      <ArrowRight className="text-white w-6 h-6 " />
                    </motion.div> */}
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
