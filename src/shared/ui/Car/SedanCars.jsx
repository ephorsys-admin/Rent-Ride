import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Filter, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SedanCars = () => {
  const [filterType, setFilterType] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceMode, setPriceMode] = useState({});
  const [loadedImages, setLoadedImages] = useState(false);

  const navigate = useNavigate();

  // car data

  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki Swift Dzire",
      image: "/SedanCars/dzire.webp",
      seater: "5 Seater Car",
      transmission: "Manual",
      fuel: "Petrol",
      price12h: 1499,
      price24h: 1899,
      features: [
        "AC",
        "Touchscreen Infotainment",
        "Bluetooth",
        "USB Charging",
        "Rear Camera",
        "Dual Airbags",
        "ABS",
      ],
    },
    {
      id: 2,
      name: "Maruti Suzuki Ciaz Delta",
      image: "/SedanCars/ciaz.webp",
      seater: "5 Seater Car",
      transmission: "Manual",
      fuel: "Petrol",
      price12h: 1799,
      price24h: 2399,
      features: [
        "AC",
        "Touchscreen Infotainment",
        "Bluetooth",
        "USB Charging",
        "Rear Camera",
        "Dual Airbags",
        "ABS",
      ],
    },
      {
    id: 3,
    name: "Tata Nexon",
    image: "/SedanCars/Nexon.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },
      {
    id: 3,
    name: "Hundai Exter",
    image: "/SedanCars/exter.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },

      {
    id: 5,
    name: "Kia Carens Clavis",
    image: "/SedanCars/clavis.webp",
    seater: "7 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 2499,
    price24h: 2999,
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },
  ];

  // Filter logic
  let filteredCars = cars;

  if (filterType !== "all") {
    filteredCars = filteredCars.filter(
      (car) => car.fuel.toLowerCase() === filterType,
    );
  }

  const HandleClick = (car) => {
    const selectedMode = priceMode[car.id] || "24h";
    const selectedPrice = selectedMode === "12h" ? car.price12h : car.price24h;
    console.log("Selected price :", selectedPrice);
    navigate(`/cars/${car.id}`, {
      state: {
        ...car,
        selectedMode,
        selectedPrice: selectedMode === "12h" ? car.price12h : car.price24h,
        category: "sedan",
      },
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Left Sidebar - Sticky Filter */}
          <aside
            className={`
              fixed lg:sticky
              top-16 lg:top-8   /* ✅ Push sidebar below navbar on mobile */
              left-0
              h-[calc(100vh-64px)] lg:h-fit
              w-[220px]
              transition-transform duration-300 ease-in-out
              z-40 lg:z-30
              flex-shrink-0
             bg-black
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <div className="p-6 space-y-6">
              {/* Mobile Header */}
              <div className="lg:hidden flex items-center justify-between pb-4 border-b border-zinc-800">
                <h2 className="text-white text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5 text-zinc-400" />
                </button>
              </div>

              {/* Filter Header */}
              <div className="hidden lg:block">
                <h2 className="text-white text-lg font-semibold mb-1">
                  Filter By
                </h2>
                <span className="text-zinc-500 text-sm">
                  {filteredCars.length} vehicles available
                </span>
              </div>

              {/* Fuel Type Filter */}
              <div className="space-y-3">
                <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-3">
                  Fuel Type
                </h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Vehicles" },
                    { value: "petrol", label: "Petrol" },
                    { value: "diesel", label: "Diesel" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilterType(option.value);
                        setSidebarOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                        filterType === option.value
                          ? "text-[#ff0000] shadow-lg "
                          : " text-zinc-300 "
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Car Cards Grid */}
          <main className="flex-1 min-w-0">
            {/* Header with Mobile Filter Button */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
                  Sedan <span className="text-white">Cars</span>
                </h1>
                <span className="text-zinc-400">
                  Choose from our premium collection
                </span>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700"
                aria-label="Open filters"
              >
                <Filter className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Car Cards Grid */}
            {filteredCars.length === 0 ? (
              <div className="text-center py-20 bg-zinc-900/30 rounded-2xl border border-zinc-800">
                <Filter className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  No vehicles found
                </h3>
                <p className="text-zinc-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setFilterType("all")}
                  className="px-6 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center xl:justify-start">
                {filteredCars.map((car, index) => (
                  <div
                    key={car.id}
                    className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 w-full max-w-[360px]"
                  >
                    {/* Seater Badge */}
                    <div className="relative">
                      {/* Car Image */}
                      <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-50 overflow-hidden">
                        {/* ✅ Skeleton */}
                        {!loadedImages[car.id] && (
                          <div className="absolute inset-0 bg-zinc-200 animate-pulse z-10" />
                        )}

                        <img
                          loading={index < 2 ? "eager" : "lazy"}
                          fetchpriority={index < 2 ? "high" : "auto"}
                          src={car.image}
                          alt={car.name}
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [car.id]: true,
                            }))
                          }
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{
                            opacity: loadedImages[car.id] ? 1 : 0,
                            filter: loadedImages[car.id]
                              ? "blur(0px)"
                              : "blur(12px)",
                            transition: "opacity 0.4s ease, filter 0.4s ease",
                          }}
                        />
                      </div>

                      {/* Seater badge (UNCHANGED) */}
                      <div className="absolute top-40 left-4 z-10">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-black">
                          {car.seater}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Car Name */}
                      <h2 className="text-black text-2xl font-bold mb-4">
                        {car.name}
                      </h2>

                      {/* Car Details */}
                      <div className="space-y-3 mb-2">
                        {/* Transmission */}
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-600 text-sm">
                            Transmission
                          </span>
                          <span className="text-black font-medium text-sm">
                            {car.transmission}
                          </span>
                        </div>

                        {/* Fuel Type */}
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-600 text-sm">Fuel</span>
                          <span
                            className={`font-medium text-sm px-2 py-1 rounded-full ${
                              car.fuel === "Petrol"
                                ? "text-black"
                                : "text-black"
                            }`}
                          >
                            {car.fuel}
                          </span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="pt-4 border-t border-zinc-200">
                        <div className="flex items-center justify-between">
                          {/* LEFT: 12h / 24h + Price */}
                          <div className="space-y-1">
                            {/* Toggle */}
                            <div className="flex border border-zinc-300 rounded-lg overflow-hidden text-xs font-semibold w-fit">
                              <button
                                onClick={() =>
                                  setPriceMode((prev) => ({
                                    ...prev,
                                    [car.id]: "12h",
                                  }))
                                }
                                className={`px-3 py-1 ${
                                  (priceMode[car.id] || "24h") === "12h"
                                    ? "bg-black text-white"
                                    : "bg-white text-zinc-600 hover:bg-zinc-100"
                                }`}
                              >
                                12h
                              </button>

                              <button
                                onClick={() =>
                                  setPriceMode((prev) => ({
                                    ...prev,
                                    [car.id]: "24h",
                                  }))
                                }
                                className={`px-3 py-1 border-l border-zinc-300 ${
                                  (priceMode[car.id] || "24h") === "24h"
                                    ? "bg-black text-white"
                                    : "bg-white text-zinc-600 hover:bg-zinc-100"
                                }`}
                              >
                                24h
                              </button>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-1">
                              <span className="text-black text-2xl font-bold">
                                ₹
                                {(priceMode[car.id] || "24h") === "12h"
                                  ? car.price12h
                                  : car.price24h}
                              </span>
                              <span className="text-zinc-500 text-sm">
                                / day
                              </span>
                            </div>
                          </div>

                          {/* Right Arrow button for send the data of the car */}

                          <motion.button
                            onClick={() => HandleClick(car)}
                            initial="initial"
                            whileHover="hover"
                            whileTap="hover"
                            variants={{
                              initial: { backgroundColor: "#000000" },
                              hover: { backgroundColor: "#ff0000" },
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative w-12 h-12 rounded-full flex items-center justify-center z-10"
                          >
                            {/* Arrow ↗ */}
                            <motion.div
                              variants={{
                                initial: { opacity: 1, scale: 1, rotate: 0 },
                                hover: { opacity: 0, scale: 0.7, rotate: 20 },
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowUpRight className="text-white w-6 h-6" />
                            </motion.div>

                            {/* Arrow → */}
                            <motion.div
                              variants={{
                                initial: { opacity: 0, scale: 0.7, x: -6 },
                                hover: { opacity: 1, scale: 1, x: 0 },
                              }}
                              transition={{ duration: 0.25 }}
                              className="absolute"
                            >
                              <ArrowRight className="text-white w-6 h-6 " />
                            </motion.div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SedanCars;
