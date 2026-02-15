import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollY =
        window.lenis?.scroll || window.scrollY || 0;

      setVisible(scrollY > window.innerHeight);
    };

    // Initial check
    checkScroll();

    // Listen to scroll (Lenis updates scroll via raf)
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        immediate: false, // smooth
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-20 right-5 z-[99999]
        w-14 h-14
        rounded-full
        bg-[#ff0000] backdrop-blur
        border border-white
        flex items-center justify-center
        text-white
        shadow-lg
        hover:scale-110
        transition-transform
        mb-4
      "
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
