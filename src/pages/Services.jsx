import React, { useEffect, useState, memo } from "react";

import about from "../assets/about.avif";
import one from "../assets/Services/one.avif";
import FeaturesSection from "../components/Services/FeatureServices";
import OurService from "../components/Services/Ourservice";
import BgHero from "../helpers/BgHero";
import TypingText from "../Shared/Helpers/TypingText";
import { Helmet } from "react-helmet-async";

const MemoTypingText = memo(TypingText);
function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Helmet>
        <title>Services | Rent Ride</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/about" />
      </Helmet>
      {/* Hero Section */}
      <BgHero
        imgSrc={about}
        imgAlt=""
        heading="Explore Our Services"
        Home="Home"
        service="Services"
      />
      {/* Services Intro Section */}
      <section className="bg-black py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute inset-0  to-transparent blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative  rounded-3xl p-4 shadow-2xl">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={one}
                  loading="eager"
                  decoding="async"
                  alt="Car Rental Services"
                  className="
      w-full max-w-xl
      h-[320px]
      sm:h-[380px]
      md:h-[400px]
      lg:h-[480px]
      object-contain
      rounded-2xl
    "
                />


                {/* Shining Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-100%",
                    background:
                      "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                    animation: "shineMove 2.5s ease-in-out infinite",
                    pointerEvents: "none",
                    transform: "rotate(25deg)",
                  }}
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-6 -left-6 bg-zinc-800 px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-white">
                  🚗 Instant Booking
                </p>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-6 -right-6 bg-zinc-800 px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-white">
                  🛡️ Fully Insured
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-white space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white">
              <MemoTypingText
                text="Premium Car Rental Experience"
                show={isVisible}
                speed={30}
                color="#ffffff"
              />
            </h2>
            <h2 className=""></h2>

            {/* Feature Item */}
            <div className="flex gap-4 md:gap-5 items-start">
              <div className="p-3 md:p-4 bg-violet-600/20 rounded-xl text-xl md:text-2xl">
                🚀
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold">
                  Instant Car Booking
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Book your ride in seconds with live availability and quick
                  confirmation.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex gap-4 md:gap-5 items-start">
              <div className="p-3 md:p-4 bg-green-600/20 rounded-xl text-xl md:text-2xl">
                🛡️
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold">
                  Safe & Insured Vehicles
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  All cars are insured, sanitized, and safety-checked before
                  delivery.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex gap-4 md:gap-5 items-start">
              <div className="p-3 md:p-4 bg-orange-600/20 rounded-xl text-xl md:text-2xl">
                💳
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold">
                  Flexible Rental Plans
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Choose hourly, daily, or monthly plans with transparent
                  pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}

      <FeaturesSection />

      <section>
        <OurService />
      </section>
    </>
  );
}

export default Services;
