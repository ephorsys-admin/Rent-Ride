import React, { useEffect, useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import carVideo from "../../assets/car3.mp4";
import { motion } from "framer-motion";
import TypingText from "../../shared/Helpers/TypingText";

const MemoTypingText = memo(TypingText);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "What documents do I need to rent a luxury vehicle?",
      answer:
        "You'll need a valid driver's license, a major credit card in your name, and proof of insurance. International customers require a passport and international driving permit.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 48 hours before your reservation. Cancellations within 48 hours incur a 50% fee. No-shows are charged the full rental amount.",
    },
    {
      question: "Are there any mileage restrictions?",
      answer:
        "Our premium packages include unlimited mileage. Standard rentals come with 200 miles per day, with additional miles charged at $0.50 per mile.",
    },
    {
      question: "Can I extend my rental period?",
      answer:
        "Yes, subject to availability. Contact us at least 24 hours before your return date.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black px-4 sm:px-6 md:px-10 lg:px-10 mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* VIDEO */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="
                w-full
                h-[220px] sm:h-[280px] md:h-[320px] lg:h-auto
                object-cover
                rounded-lg
                shadow-2xl
                transition-transform duration-500
                group-hover:scale-[1.02]
              "
            >
              <source src={carVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          {/* FAQ LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start mb-3"
          >
            <div className="inline-flex items-center gap-3">
              <svg className="w-7 h-7" viewBox="0 0 100 100">
                <path
                  d="M50,15 L55,45 L85,50 L55,55 L50,85 L45,55 L15,50 L45,45 Z"
                  fill="#ff0000"
                />
              </svg>
              <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
                FAQ
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <h2 className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:pb-3 md:pb-3
            font-bold
            leading-tight
            mb-8
          ">
            <MemoTypingText
              text="Frequently Asked Questions"
              show={isVisible}
              speed={30}
              color="#ffffff"
            />
          </h2>

          {/* FAQ ITEMS */}
          <div className="space-y-4 text-left md:px-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="
                    text-white
                    font-medium
                    text-sm sm:text-base
                    pr-4
                    transition-colors
                    group-hover:text-[#FF0000]
                  ">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-[#FF0000] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-40 mt-3 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
