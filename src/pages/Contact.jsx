import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

import about from "../assets/about.avif";
import LocationMap from "../components/Contact/LocationMap";

import { carModels } from "../components/contact/carData";
import BgHero from "../helpers/BgHero";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    selectedCar: "",
    rentalDuration: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "selectedCar") {
      setFormData({
        ...formData,
        selectedCar: value,
        rentalDuration: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCarDetails = carModels.find(
      (car) => car.name === formData.selectedCar
    );

    const message = `
*NEW CAR RENTAL BOOKING REQUEST*
================================

*CUSTOMER INFORMATION:*
Name: ${formData.fullname}
Phone: ${formData.phone}

*RENTAL DETAILS:*
Selected Car: ${formData.selectedCar}
Duration: ${formData.rentalDuration}

${selectedCarDetails && formData.rentalDuration === "12 Hours"
        ? `Price: ${selectedCarDetails.price12}`
        : ""
      }
${selectedCarDetails && formData.rentalDuration === "24 Hours"
        ? `Price: ${selectedCarDetails.price24}`
        : ""
      }

*ADDITIONAL REQUIREMENTS:*
${formData.message || "No additional requirements"}

================================
Booking inquiry from website
Please confirm availability
    `.trim();

    const phoneNumber = "919658041110";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      fullname: "",
      phone: "",
      selectedCar: "",
      rentalDuration: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Rent Ride</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/contact" />
      </Helmet>

      <BgHero
        imgSrc={about}
        imgAlt=""
        heading="Book Your Dream Ride"
        Home="Home"
        service="Contact us"
      />

      <div className="bg-black text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          {/* LEFT SECTION */}
          <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Contact information
              </p>
              <p className="text-white/70 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">
                Say something to start a live chat!
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" />
                  <p className="text-sm sm:text-base break-all text-white/70">+91 9658041110</p>
                </div>

                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" />
                  <p className="text-sm sm:text-base break-all text-white/70 ">info@domain.com</p>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base leading-relaxed text-white/70">
                    KIIT SQUARE, KIIT Rd, Patia,
                    <br /> Bhubaneswar, Odisha 751024
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#ff0000] flex items-center justify-center bg-[#ff0000] hover:text-black transition"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Row 1 - Full Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm mb-2">
                    Full Name
                    <span className="w-1 h-1 bg-[#ff0000] rounded-full inline-block ml-1"></span>
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm mb-2">
                    Phone
                    <span className="w-1 h-1 bg-[#ff0000] rounded-full inline-block ml-1"></span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Row 2 - Car Selection & Duration */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
                {/* Custom Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs sm:text-sm mb-2">
                    Select Car
                    <span className="w-1 h-1 bg-[#ff0000] rounded-full inline-block ml-1"></span>
                  </label>

                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full min-h-[40px] sm:min-h-[44px] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between rounded-md bg-[#1a1a1a] border border-gray-600 text-white cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-base ${formData.selectedCar ? "text-white" : "text-gray-400"
                        }`}
                    >
                      {formData.selectedCar || "Choose Vehicle"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute z-50 mt-2 w-full max-h-48 sm:max-h-60 overflow-y-auto bg-[#1a1a1a] border border-gray-600 rounded-md shadow-lg">
                      {carModels.map((car, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              selectedCar: car.name + car.specs,
                              rentalDuration: "",
                            });
                            setIsOpen(false);
                          }}
                          className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base hover:bg-[#ff0000] hover:text-white cursor-pointer transition"
                        >
                          {car.name + car.specs}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-xs sm:text-sm mb-2 sm:mb-3">
                    Duration
                    <span className="w-1 h-1 bg-[#ff0000] rounded-full inline-block ml-1"></span>
                  </label>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                    {["12 Hours", "24 Hours"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rentalDuration: time })
                        }
                        className={`px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-full border transition ${formData.rentalDuration === time
                          ? "bg-[#ff0000] border-[#ff0000] text-white"
                          : "border-gray-600 text-gray-300 hover:border-[#ff0000]"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm mb-2">
                  Message
                  <span className="w-1 h-1 bg-[#ff0000] rounded-full inline-block ml-1"></span>
                </label>

                <textarea
                  name="message"
                  placeholder="Enter your query...."
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-600 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:border-[#ff0000] focus:outline-none transition resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center sm:justify-end pt-2">
                <button
                  type="submit"
                  disabled={
                    !formData.fullname ||
                    !formData.phone ||
                    !formData.selectedCar ||
                    !formData.rentalDuration
                  }
                  className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition ${formData.fullname &&
                    formData.phone &&
                    formData.selectedCar &&
                    formData.rentalDuration
                    ? "bg-[#ff0000] text-white hover:bg-[#cc0000]"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                    }`}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="bg-black w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
          <LocationMap />
        </div>
      </section>
    </>
  );
};

export default ContactPage;