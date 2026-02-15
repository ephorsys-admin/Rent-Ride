import { Link } from "react-router-dom";

import about from "../assets/about.avif"; // reuse same image

export default function Upcoming() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        loading="lazy"
        src={about}
        alt="Coming soon background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coming Soon
          </h1>

          <p className="text-lg text-gray-300 mb-10">
            This page is under construction. We’re launching it very soon.
          </p>

          <Link to="/">
            <button
              size="lg"
              rounded="pill"
              className=" text-[#ff0000] hover:text-white"
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
