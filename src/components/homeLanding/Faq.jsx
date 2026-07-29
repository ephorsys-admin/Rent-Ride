import React, { useEffect, useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import carVideo from "../../assets/car3.mp4";
import { motion } from "framer-motion";
import TypingText from "../../shared/helpers/TypingText";

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
      question: "Why choose Rent Ride Cars for self drive car rental in KIIT, Bhubaneswar?",
      answer:
        "Rent Ride Cars offers affordable, well maintained self drive cars with flexible rental plans, transparent pricing, and convenient pickup locations near KIIT, Patia, Chandrasekharpur, Infocity, and across Bhubaneswar.",
    },
    {
      question: "How can I book a self drive car in KIIT, Bhubaneswar?",
      answer:
        "Booking is simple and hassle free with Rent Ride Cars. Choose your preferred car, select your rental dates and time, upload the required documents, complete the payment, and confirm your reservation online or by contacting our team.",
    },
    {
      question: "What documents are required to rent a self drive car?",
      answer:
        "You need a valid Driving License, an Aadhaar Card or other government-issued ID, and any additional documents requested during the booking process.",
    },
    {
      question: "What is the minimum age to rent a self drive car?",
      answer:
        "Drivers must generally be at least 21 years old and hold a valid driving license. Certain premium vehicles may have higher eligibility requirements.",
    },
    {
      question: "Do you offer doorstep pickup and drop services?",
      answer:
        "Yes. We provide doorstep pickup and drop services in selected areas of Bhubaneswar, including KIIT, Patia, Infocity, Chandrasekharpur, and nearby locations.",
    },
    {
      question: "Can I rent a car for outstation travel from Bhubaneswar?",
      answer:
        "Absolutely. Our self drive cars are available for outstation trips, weekend getaways, business travel, and family vacations, subject to our rental terms.",
    },
    {
      question: "What types of cars are available for rent?",
      answer:
        "We offer hatchbacks, sedans, SUVs, premium cars and automatic vehicles to suit every budget and travel requirement.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No. Rent Ride Cars follows a transparent pricing policy. All applicable charges are clearly communicated before you confirm your booking.",
    },
    {
      question: "Can I rent a car for a few hours or an entire month?",
      answer:
        "Yes. We offer hourly, daily, weekly, and monthly self drive car rental plans to match your travel needs.",
    },
    {
      question: "Is fuel included in the rental price?",
      answer:
        "Fuel is generally not included unless specifically mentioned in your booking package. Vehicles are provided with a defined fuel level and should be returned accordingly.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes. Booking modifications and cancellations are available according to our cancellation policy. Please contact our support team as early as possible.",
    },
    {
      question: "What happens if I return the car late?",
      answer:
        "Late returns may incur additional rental charges depending on the delay. Inform our team in advance if you expect to return the vehicle later than scheduled.",
    },
    {
      question: "Are your rental cars insured?",
      answer:
        "Yes. All vehicles are covered under the required insurance. Customers are expected to follow the rental agreement and drive responsibly throughout the rental period.",
    },
    {
      question: "Which areas do you serve in Bhubaneswar?",
      answer:
        "We provide self drive car rental services across KIIT, Patia, KISS, Infocity, Chandrasekharpur, Nayapalli, Rasulgarh, the Airport area, Railway Station, and other major locations in Bhubaneswar.",
    },
    {
      question: "Why is Rent Ride Cars one of the best self drive car rental services in Bhubaneswar?",
      answer:
        "Our commitment to clean and well maintained vehicles, affordable pricing, quick booking, excellent customer support, and convenient pickup locations has made Rent Ride Cars a trusted choice for students, professionals, families, and tourists across Bhubaneswar.",
    }

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
          <div
            className="space-y-4 text-left md:px-6"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-4"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span
                    className="
                      text-white
                      font-medium
                      text-sm sm:text-base
                      pr-4
                      transition-colors
                      group-hover:text-[#FF0000]
                    "
                    itemProp="name"
                  >
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
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-white/70 text-xs sm:text-sm leading-relaxed"
                    itemProp="text"
                  >
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
