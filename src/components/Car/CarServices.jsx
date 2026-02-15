import React, { useEffect, useState } from "react";
import SedanCars from "../../Shared/ui/Car/SedanCars";
import SUVCars from "../../Shared/ui/Car/SUVCars";
import { Car, Truck } from "lucide-react";
import { useLocation } from "react-router-dom";

const CarServices = () => {
  const location = useLocation()
  const defaultTab = location.state?.activeTab || "sedan";
  const [active, setActive] = useState(defaultTab);

    useEffect(() => {
    if (location.state?.activeTab) {
      setActive(location.state.activeTab);
    }
  }, [location.state]);

  return (
    <div className="bg-black min-h-screen">
      {/* Modern Category Toggle */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Mobile & Desktop Toggle */}
          <div className="flex justify-center items-center">
            {/* Toggle Container */}
            <div className="relative inline-flex items-center bg-black rounded-full p-1.5 ">
              {/* Background Slider */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r transition-all duration-300 ease-out  ${
                  active === "sedan" ? "left-1.5" : "left-[calc(50%+0.75px)]"
                }`}
              />

              {/* Sedan Button */}
              <button
                onClick={() => setActive("sedan")}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  active === "sedan"
                    ? "text-[#ff0000]"
                    : "text-white hover:text-[#ff0000]"
                }`}
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Sedan Cars</span>
                <span className="xs:hidden">Sedan</span>
              </button>

              {/* SUV Button */}
              <button
                onClick={() => setActive("suv")}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  active === "suv"
                    ? "text-[#ff0000]"
                    : "text-white hover:text-[#ff0000]"
                }`}
              >
                <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">SUV Cars</span>
                <span className="xs:hidden">SUV</span>
              </button>
            </div>
          </div>

          {/* Optional: Category Info */}
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="animate-fadeIn">
        {active === "sedan" && <SedanCars />}
        {active === "suv" && <SUVCars />}
      </div>
    </div>
  );
};

export default CarServices;
