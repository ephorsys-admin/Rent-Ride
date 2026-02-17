import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CarCard({ title, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[340px] xs:h-[380px] sm:h-[420px] md:h-[440px] lg:h-[460px] rounded-2xl xs:rounded-3xl sm:rounded-[32px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          loading="lazy"
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.15)" : "scale(1)",
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 xs:p-5 sm:p-6">
        <h3 className="text-black text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
          {title}
        </h3>

        <button
          className={`
            w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12
            rounded-full
            flex items-center justify-center
            transition-colors duration-500 ease-in-out
            shadow-lg
            ${isHovered ? "bg-black" : "bg-[#ff0000]"}
          `}
        >
          <ArrowUpRight
            className={`
              w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5
              origin-center
              transition-transform transition-colors
              duration-500 ease-in-out
              ${isHovered
                ? "text-red-500 rotate-45"
                : "text-white rotate-0"}
            `}
          />
        </button>
      </div>
    </div>
  );
} 