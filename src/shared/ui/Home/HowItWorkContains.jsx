import React from "react";
import { Search, Calendar, Wrench, Smile } from "lucide-react";

/* ===================== Timeline Card ===================== */
const TimelineCard = ({ number, icon: Icon, title, description, isLast }) => {
  return (
    <div className="relative flex flex-col items-center w-full mt-9">
      {/* CARD */}
      <div
        className="
          relative
          w-full max-w-xs mx-auto
          sm:w-72
          rounded-2xl
          bg-gray-900/20
          border border-gray-800
          p-8
          transition-all duration-300
          z-20
          sm:hover:scale-105
        "
      >
        {/* NUMBER BADGE */}
        <div className="absolute -top-6 -right-6 z-30">
          <div className="w-14 h-14 rounded-full bg-[#ff0000] flex items-center justify-center text-white font-bold text-lg">
            {number}
          </div>
        </div>

        {/* ICON */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center">
            <Icon className="w-12 h-12 text-[#ff0000]" strokeWidth={1.5} />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* MOBILE CONNECTING DOT */}
      {!isLast && (
        <div className="sm:hidden w-5 h-5 bg-red-600 rounded-full my-6 shadow-lg shadow-red-500/50" />
      )}
    </div>
  );
};

/* ===================== Timeline ===================== */
export default function TimelineComponent() {
  const cards = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Car",
      description:
        "Browse our premium fleet and select the perfect vehicle for your journey.",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Book & Confirm",
      description:
        "Pick your dates, complete the booking, and receive instant confirmation.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Pick Up",
      description:
        "Collect your keys at our luxury lounge or opt for complimentary delivery.",
    },
    {
      number: "04",
      icon: Smile,
      title: "Enjoy the Ride",
      description:
        "Experience the thrill of driving excellence with complete peace of mind.",
    },
  ];

  return (
    <section className="bg-black  py-10 sm:py-20 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* MOBILE = VERTICAL | DESKTOP = HORIZONTAL */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 relative bg-black">
          {cards.map((card, index) => (
            <div key={index} className="relative bg-black">
              <TimelineCard
                {...card}
                isLast={index === cards.length - 1}
              />

              {/* DESKTOP CONNECTORS */}
              {index < cards.length - 1 && (
                <>
                  {/* LINE */}
                  <div className="hidden sm:block absolute left-full top-1/2 w-10 h-[2px] bg-red-600 -translate-y-1/2" />
                  {/* DOT */}
                  <div className="hidden sm:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-600 rounded-full shadow-lg shadow-red-500/50 z-50" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
