import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const ServiceCard = ({ Icon, title, desc }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { backgroundColor: "#000000" },
        hover: { backgroundColor: "#ff0000" },
      }}
      transition={{ duration: 0.4 }}
      className="
        relative rounded-2xl sm:rounded-3xl 
        p-5 sm:p-6 md:p-7 lg:p-8 
        overflow-hidden cursor-pointer 
        flex flex-col justify-between 
        min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]
        w-full
        hover:scale-[1.02] transition-transform duration-300
      "
    >
      {/* Moving Oval Blob */}
      <motion.div
        variants={{
          initial: { y: 80, opacity: 0.2 },
          hover: { y: -140, opacity: 0.4 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="
          absolute 
          w-[160px] h-[160px] 
          sm:w-[180px] sm:h-[180px] 
          md:w-[200px] md:h-[200px]
          lg:w-[240px] lg:h-[240px]
          bg-white/30 rounded-full blur-3xl 
          left-1/2 -translate-x-1/2 top-1/2
        "
      />

      {/* Icon */}
      <div className="z-10">
        <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
      </div>

      {/* Text */}
      <div className="z-10 flex-grow mt-auto">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-white leading-snug">
          {title}
        </h3>
        <p className="text-white/80 mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Arrow Button */}
      <motion.button
        variants={{
          initial: { backgroundColor: "#ff0000" },
          hover: { backgroundColor: "#000000" },
        }}
        transition={{ duration: 0.3 }}
        className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center z-10 mt-4 sm:mt-5"
      >
        {/* Arrow ↗ */}
        <motion.div
          variants={{
            initial: { opacity: 1, scale: 1 },
            hover: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.div>

        {/* Arrow → */}
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <ArrowRight className="text-[#ff0000] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
