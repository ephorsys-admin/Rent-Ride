import React, { useState } from "react";
import TypingText from "../shared/helpers/TypingText";

function Bghero({
  imgSrc,
  imgAlt,
  heading,
  Home,
  service,
  typingSpeed = 50,
  headingColor = "#ffffff",
}) 
{
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
<section
  className="relative w-full bg-black overflow-hidden
             px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
             pt-[96px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px]
             pb-20"
>

      <div
        className="relative w-full mx-auto max-w-[1600px]
                   h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[70vh]
                   rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[48px]
                   rounded-b-[22px] sm:rounded-b-[28px]
                   overflow-hidden bg-black  "
      >
        {/* Background Image */}
    {/* Skeleton */}
{/* Skeleton (always visible first) */}
{!imgLoaded && (
  <div className="absolute inset-0 bg-zinc-800 animate-pulse z-10" />
)}

<img
  loading="eager"
 fetchpriority="high"

  src={imgSrc}
  alt={imgAlt}
  onLoad={(e) => {
    if (e.target.complete) {
      setImgLoaded(true);
    }
  }}
  onError={() => setImgLoaded(true)} // prevents infinite skeleton
  className="absolute inset-0 w-full h-full object-cover object-center"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 100vw,
         (max-width: 1536px) 1200px,
         1600px"
  style={{
    opacity: imgLoaded ? 1 : 0,
    filter: imgLoaded ? "blur(0px)" : "blur(16px)",
    transition: "opacity 0.6s ease, filter 0.6s ease",
  }}
/>



        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        {/* Content */}
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center
                        px-4 sm:px-6 md:px-10 text-center"
        >
          {/* Heading */}
          <h1
            className="font-bold leading-tight drop-shadow-2xl animate-hero
                       text-xl sm:text-lg md:text-4xl lg:text-6xl"
          >
            <TypingText
              text={heading}
              speed={typingSpeed}
              color={headingColor}
            />
          </h1>

          {/* Breadcrumb */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-2
                       text-xs sm:text-sm md:text-base animate-hero-delay"
          >
            <a
              href="/self-drive-car-rental-in-kiit"
              className="text-white hover:text-[#ff0000] transition-colors duration-300"
            >
              {Home}
            </a>
            <span className="text-white">/</span>
            <span className="text-[#ff0000] font-medium">{service}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bghero;
