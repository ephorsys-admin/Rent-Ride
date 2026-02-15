import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Users,
  Settings,
  Fuel,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";

const CarDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const priceToShow = state?.selectedPrice || state?.price24h;
  const mode = state?.selectedMode || "24h";

  // WhatsApp booking handler
  const handleBookNow = () => {
    const phoneNumber = "919658041110"; // WhatsApp number (country code + number, no spaces or special chars)

    // Create the message with car specifications
    const message = `Hi, I would like to book the following car:

*Car Details:*
- Model: ${state.name}
- Transmission: ${state.transmission}
- Fuel Type: ${state.fuel}
- Seating Capacity: ${state.seater}
- Rental Price: ₹${priceToShow} / ${mode}

*Features:*
${state.features?.map(feature => `- ${feature}`).join('\n')}

Please confirm availability and booking details.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };

  if (!state) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Car not found</h1>
        <button
          onClick={() => navigate("/cars")}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl"
        >
          Back to Cars
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Car Details | Rent Ride</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/about" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <button
              onClick={() => {
                const category = state?.category || "sedan";
                navigate("/cars", { state: { activeTab: category } });
              }}
              className="flex items-center gap-2 text-white/70 hover:text-red-500 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* IMAGE */}
              <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-900 aspect-[16/9]">
                <img
                  loading="eager"
                  fetchPriority="high"
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                    {state.seater}
                  </span>
                </div>
              </div>

              {/* SPEC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Transmission",
                    value: state.transmission,
                    icon: <Settings />,
                  },
                  { label: "Fuel Type", value: state.fuel, icon: <Fuel /> },
                  { label: "Capacity", value: state.seater, icon: <Users /> },
                  { label: "Available", value: "Now", icon: <Calendar /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 grid grid-cols-[auto_1fr] gap-3"
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center row-span-2">
                      {item.icon}
                    </div>
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-lg">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {/* TITLE */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {state.name}
                </h1>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-white/70 text-sm">
                    (4.8 - 128 reviews)
                  </span>
                </div>
              </div>

              {/* PRICE CARD */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <span className="text-white/70 text-sm">Rental Price</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                  ₹{priceToShow}
                  <span className="text-white/60 text-lg"> / {mode}</span>
                </h2>

                <div className="space-y-3 mt-5 ">
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition mb-3"
                  >
                    Book Now
                  </button>

                  <a href="tel:+919658041110">
                    <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl border border-zinc-700 flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 text-red-500" />
                      Call Us
                    </button>
                  </a>
                </div>
              </div>

              {/* FEATURES */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <h3 className="font-bold text-lg mb-4">Features Included</h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-zinc-300">
                  {state.features?.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-[#ff0000] rounded-full"></span>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <span className="flex items-center gap-2">
                    <Phone className="text-red-500 w-4 h-4" /> +91 9658041110
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="text-red-500 w-4 h-4" />{" "}
                    support@carrental.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
