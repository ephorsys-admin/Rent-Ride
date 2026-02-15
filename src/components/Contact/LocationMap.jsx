import { useState } from "react";

export default function LocationMap() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden w-full h-[300px] md:h-[420px]"
      onClick={() => setActive(true)}
    >
      {/* Overlay (blocks scroll until clicked) */}
      {!active && (
        <div className="absolute inset-0 z-10 cursor-pointer bg-transparent" />
      )}

      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.589248543133!2d85.8242942!3d20.3533368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190918647a4cff%3A0xf3c129c2f8983e2e!2sRENT%20RIDE!5e0!3m2!1sen!2sin!4v1700000000000"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
