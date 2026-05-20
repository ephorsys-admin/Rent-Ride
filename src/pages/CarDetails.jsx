import { useLocation, useParams, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import {
  ArrowLeft,
  Users,
  Settings,
  Fuel,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

const carDetailsBySlug = {
  "Swift-Dzire": {
    name: "Maruti Suzuki Swift Dzire",
    tabname: "Swift-Dzire",
    image: "/SedanCars/dzire.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1499,
    price24h: 1899,
    category: "sedan",
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
  "Ciaz-Delta": {
    name: "Maruti Suzuki Ciaz Delta",
    tabname: "Ciaz-Delta",
    image: "/SedanCars/ciaz.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1799,
    price24h: 2399,
    category: "sedan",
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
  "Tata-Nexon": {
    name: "Tata Nexon",
    tabname: "Tata-Nexon",
    image: "/SedanCars/Nexon.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    category: "sedan",
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },
  "Hyundai-Exter": {
    name: "Hyundai Exter",
    tabname: "Hyundai-Exter",
    image: "/SedanCars/exter.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    category: "sedan",
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },
  "Carens-Clavis": {
    name: "Kia Carens Clavis",
    tabname: "Carens-Clavis",
    image: "/SedanCars/clavis.webp",
    seater: "7 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 2499,
    price24h: 2999,
    category: "sedan",
    features: ["5 Star Safety", "Sunroof", "JBL Speakers", "360 Camera"],
  },
  "Tiago-XT-Rhythm": {
    name: "Tata Tiago XT Rhythm",
    tabname: "Tiago-XT-Rhythm",
    image: "/HatchbackCars/tiago.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1399,
    price24h: 1799,
    category: "Hatchback",
    features: [
      "AC",
      "Power Steering",
      "Harman Music System",
      "Bluetooth",
      "USB Charging",
      "Dual Airbags",
      "ABS",
    ],
  },
  "Swift-VXi": {
    name: "Maruti Suzuki Swift VXi ",
    tabname: "Swift-VXi",
    image: "/HatchbackCars/swift1.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1499,
    price24h: 1899,
    category: "Hatchback",
    features: [
      "AC",
      "Touchscreen Infotainment",
      "Bluetooth",
      "USB Charging",
      "Power Windows",
      "Dual Airbags",
      "ABS",
    ],
  },
  "Baleno-Zeta": {
    name: "Maruti Suzuki Baleno Zeta",
    tabname: "Baleno-Zeta",
    image: "/HatchbackCars/baleno.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1499,
    price24h: 1899,
    category: "Hatchback",
    features: [
      "AC",
      "Touchscreen Infotainment",
      "Android Auto / Apple CarPlay",
      "Bluetooth",
      "Rear Camera",
      "Dual Airbags",
      "ABS",
    ],
  },
  "i20-Asta": {
    name: "Hyundai i20 Asta",
    tabname: "i20-Asta",
    image: "/HatchbackCars/i20.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1499,
    price24h: 1899,
    category: "Hatchback",
    features: [
      "AC",
      "Touchscreen Infotainment",
      "Bluetooth",
      "USB Charging",
      "Rear Parking Sensors",
      "Dual Airbags",
      "ABS",
    ],
  },
  "i10-Nios": {
    name: "Hyundai i10 Nios",
    tabname: "i10-Nios",
    image: "/HatchbackCars/i10.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1499,
    price24h: 1899,
    category: "Hatchback",
    features: [
      "AC",
      "10.25-inch Touchscreen",
      "Bluetooth",
      "Wireless Charger",
      "Rear Camera",
      "Dual Airbags",
      "ABS",
    ],
  },
  "Mahindra-XUV-500": {
    name: "Mahindra XUV 500",
    tabname: "Mahindra-XUV-500",
    image: "/SUVCars/XUV.webp",
    seater: "7 Seater Car",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: 2999,
    price24h: 3599,
    category: "suv",
    features: ["AWD", "Sunroof", "Leather Seats", "Navigation System"],
  },
  "Mahindra-Thar": {
    name: "Mahindra Thar",
    tabname: "Mahindra-Thar",
    image: "/SUVCars/thar.webp",
    seater: "4 Seater Car",
    transmission: "Manual (RWD)",
    fuel: "Petrol",
    price12h: 3199,
    price24h: 3599,
    category: "suv",
    features: ["4x4 Mode", "Off-road Tyres", "Removable Roof", "Hill Assist"],
  },
  "Mahindra-Scorpio-N": {
    name: "Mahindra Scorpio N",
    tabname: "Mahindra-Scorpio-N",
    image: "/SUVCars/N.webp",
    seater: "7 Seater Car",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: 3499,
    price24h: 3999,
    category: "suv",
    features: ["4WD", "Sunroof", "Advanced Driver Assist", "Power Steering"],
  },
  "Maruti-Suzuki-Brezza": {
    name: "Maruti Suzuki Brezza (compact suv)",
    tabname: "Maruti-Suzuki-Brezza",
    image: "/SUVCars/brezza.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    category: "suv",
    features: ["Touchscreen", "ABS", "Airbags", "Rear Camera", "Cruise Control"],
  },
  "Hyundai-Venue": {
    name: "Hyundai Venue (compact suv)",
    tabname: "Hyundai-Venue",
    image: "/SUVCars/venue.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1899,
    price24h: 2399,
    category: "suv",
    features: ["Sunroof", "Wireless Android Auto", "Airbags", "Parking Sensors"],
  },
  "Maruti-Suzuki-Fronx": {
    name: "Maruti suzuki fronx",
    tabname: "Maruti-Suzuki-Fronx",
    image: "/SUVCars/fronx.webp",
    seater: "5 Seater Car",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: 1799,
    price24h: 2399,
    category: "suv",
    features: ["Sunroof", "Wireless Android Auto", "Airbags", "Parking Sensors"],
  },
};

const findCarBySlug = (slug) => {
  const normalizedSlug = decodeURIComponent(slug || "").toLowerCase();

  return Object.values(carDetailsBySlug).find(
    (car) => car.tabname.toLowerCase() === normalizedSlug,
  );
};

const CarDetails = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [priceMode, setPriceMode] = useState(null);

  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const car = state || findCarBySlug(id);

  const mode = priceMode || car?.selectedMode || "24h";
  const priceToShow = mode === "12h" ? car?.price12h : car?.price24h;

  // WhatsApp booking handler
  const handleBookNow = () => {
    const phoneNumber = "919658041110"; // WhatsApp number (country code + number, no spaces or special chars)

    // Create the message with car specifications
    const message = `Hi, I would like to book the following car:

*Car Details:*
- Model: ${car.name}
- Transmission: ${car.transmission}
- Fuel Type: ${car.fuel}
- Seating Capacity: ${car.seater}
- Rental Price: ₹${priceToShow} / ${mode}

*Features:*
${car.features?.map((feature) => `- ${feature}`).join("\n")}

Please confirm availability and booking details.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Car not found</h1>
        <button
          onClick={() => navigate("/cars")}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl"
        >
          Back to Cars
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={car?.name ? `${car.name} Rental Details` : "Car Details"}
        description={
          car?.name
            ? `Book ${car.name} in Bhubaneswar with Rent Ride Car. Flexible 12h/24h self-drive rental plans, premium features, and fast online booking.`
            : "Discover premium self-drive car rental details with Rent Ride Car. Choose the right vehicle and book your ride easily."
        }
        url={
          car?.tabname
            ? `https://rentridecar.com/cars/${car.tabname}`
            : "https://rentridecar.com/cars"
        }
        canonical={
          car?.tabname
            ? `https://rentridecar.com/cars/${car.tabname}`
            : "https://rentridecar.com/cars"
        }
        image={car?.image}
        keywords="car rental details bhubaneswar, self drive car rental bhubaneswar, book rental car, premium car rental"
      />
      <div className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <button
              onClick={() => {
                const category = car?.category || "sedan";
                navigate("/cars", { state: { activeTab: category } });
              }}
              className="flex items-center gap-2 text-white/70 hover:text-red-500 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* IMAGE */}
              <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-900 aspect-[16/9]">
                {/* Skeleton */}
                {!heroLoaded && (
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse z-10" />
                )}

                <img
                  loading="eager"
                  fetchpriority="high"
                  src={car.image}
                  alt={car.name}
                  onLoad={() => setHeroLoaded(true)}
                  className="w-full h-full object-cover"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    filter: heroLoaded ? "blur(0px)" : "blur(14px)",
                    transition: "opacity 0.4s ease, filter 0.4s ease",
                  }}
                />

                <div className="absolute top-3 left-3 z-20">
                  <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                    {car.seater}
                  </span>
                </div>
              </div>

              {/* SPEC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Transmission",
                    value: car.transmission,
                    icon: <Settings />,
                  },
                  { label: "Fuel Type", value: car.fuel, icon: <Fuel /> },
                  { label: "Capacity", value: car.seater, icon: <Users /> },
                  { label: "Available", value: "Now", icon: <Calendar /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 grid grid-cols-[auto_1fr] gap-3"
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center row-span-2">
                      {item.icon}
                    </div>
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-lg">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {/* TITLE */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {car.name}
                </h1>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-white/70 text-sm">
                    (4.8 - 128 reviews)
                  </span>
                </div>
              </div>

              {/* PRICE CARD */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 text-sm">Rental Price</span>
                  
                  {/* Toggle Button */}
                  <div className="flex border border-red-600 rounded-lg overflow-hidden text-xs font-semibold">
                    <button
                      onClick={() => setPriceMode("12h")}
                      className={`px-3 py-1 transition-all ${
                        (priceMode || car?.selectedMode || "24h") === "12h"
                          ? "bg-red-600 text-white"
                          : "bg-transparent text-red-600 hover:bg-red-600/10"
                      }`}
                    >
                      12h
                    </button>
                    <button
                      onClick={() => setPriceMode("24h")}
                      className={`px-3 py-1 border-l border-red-600 transition-all ${
                        (priceMode || car?.selectedMode || "24h") === "24h"
                          ? "bg-red-600 text-white"
                          : "bg-transparent text-red-600 hover:bg-red-600/10"
                      }`}
                    >
                      24h
                    </button>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                  ₹{priceToShow}
                  <span className="text-white/60 text-lg"> / {mode}</span>
                </h2>

                <div className="space-y-3 mt-5 ">
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition mb-3"
                  >
                    Book Now
                  </button>

                  <a href="tel:+919658041110">
                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl border border-zinc-700 flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 text-red-500" />
                      Call Us
                    </button>
                  </a>
                </div>
              </div>

              {/* FEATURES */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <h3 className="font-bold text-lg mb-4">Features Included</h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-zinc-300">
                  {car.features?.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-[#ff0000] rounded-full"></span>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <span className="flex items-center gap-2">
                    <Phone className="text-red-500 w-4 h-4" /> +91 9658041110
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="text-red-500 w-4 h-4" />{" "}
                    support@carrental.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
