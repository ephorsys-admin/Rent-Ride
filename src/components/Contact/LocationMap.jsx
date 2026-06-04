import { useState } from "react";

const MapCard = ({ title, src }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10">
      <div className="px-5 py-4 border-b border-white/10">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>

      <div
        className="relative w-full h-[280px] md:h-[380px]"
        onClick={() => setActive(true)}
      >
        {!active && (
          <div className="absolute inset-0 z-10 cursor-pointer bg-transparent flex items-center justify-center">
            <div className="bg-black/70 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
              Click to interact with map
            </div>
          </div>
        )}

        <iframe
          title={title}
          src={src}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default function LocationMap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 bg-black">
      {/* Office Location */}
      <MapCard
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.589248543133!2d85.8242942!3d20.3533368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190918647a4cff%3A0xf3c129c2f8983e2e!2sRENT%20RIDE!5e0!3m2!1sen!2sin!4v1700000000000"
      />

      {/* Parking Location */}
      <MapCard
        title="Parking Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3740.606678539053!2d85.83275837501229!3d20.357861081128796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDIxJzI4LjMiTiA4NcKwNTAnMDcuMiJF!5e0!3m2!1sen!2sin!4v1780555846275!5m2!1sen!2sin  "
      />
    </div>
  );
}