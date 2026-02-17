import React from "react";
import brand from "../../../assets/SUVCars/carens.avif";

function ImageAndLogo({ imgAlt, heading, Home, service }) {
  const indianCarBrands = [
    { name: "Tata Motors", logo: "https://www.carlogos.org/car-logos/tata-logo.png" },
    { name: "Mahindra", logo: "https://www.carlogos.org/car-logos/mahindra-logo.png" },
    { name: "Hyundai", logo: "https://www.carlogos.org/car-logos/hyundai-logo.png" },
    { name: "Kia", logo: "https://www.carlogos.org/car-logos/kia-logo.png" },
    { name: "Honda", logo: "https://www.carlogos.org/car-logos/honda-logo.png" },
    { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo.png" },
    { name: "MG Motor", logo: "https://www.carlogos.org/car-logos/mg-logo.png" },
    { name: "Renault", logo: "https://www.carlogos.org/car-logos/renault-logo.png" },
 
  ];

  const duplicatedBrands = [...indianCarBrands, ...indianCarBrands];

  return (
<section className="relative w-full overflow-hidden bg-black px-3 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14">
  <div className="relative overflow-hidden bg-black">

    {/* HERO */}
<div className="relative h-[42vh] sm:h-[45vh] md:h-[52vh] lg:h-[58vh] overflow-hidden rounded-3xl bg-black">
<div
  className="relative h-[42vh] sm:h-[45vh] md:h-[52vh] lg:h-[58vh] rounded-3xl bg-black bg-cover bg-[center_65%]"
  style={{ backgroundImage: `url(/brand.webp)` }}
/>


z

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl animate-hero">
              {heading}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm md:text-base animate-hero-delay">
              {Home}
              <span className="text-gray-400">/</span>
              <span className="text-[#ff0000] font-semibold">{service}</span>
            </div>
          </div>
        </div>

        {/* LOGO SLIDER */}
        <div className="relative bg-black/95 py-8 sm:py-10 md:py-14 px-3 sm:px-6 border-t border-gray-800/60">

       

          <div className="relative overflow-hidden max-w-7xl mx-auto">

            {/* fades */}
            <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex gap-6 sm:gap-10 md:gap-14 animate-scroll py-2 mt-9">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="
                    flex-shrink-0
                    w-16 h-16
                    sm:w-20 sm:h-20
                    md:w-24 md:h-24
                    lg:w-28 lg:h-28

                    flex items-center justify-center
                    rounded-xl
               
                    p-3
                    grayscale opacity-60
                    
                    transition-all duration-500
                    
                  "
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-[50px] h-[50px] max-w-full max-h-full"
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>

      {/* ANIMATIONS */}
      <style >{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes hero {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-hero {
          animation: hero 0.8s ease-out forwards;
        }

        .animate-hero-delay {
          opacity: 0;
          animation: hero 0.8s ease-out 0.3s forwards;
        }

        @media (max-width: 640px) {
          .animate-scroll { animation-duration: 22s; }
        }

        @media (min-width: 1280px) {
          .animate-scroll { animation-duration: 42s; }
        }
      `}</style>
    </section>
  );
}

export default ImageAndLogo;
