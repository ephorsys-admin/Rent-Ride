import { useEffect, useState, useRef } from "react";

const TypingText = ({ text, speed = 50, color }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  // Detect when element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;

    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  // Split text into words
  const words = text.split(" ");

  // Keep a running index for character animation
  let charIndex = 0;

  return (
    <span ref={textRef} style={{ display: "inline" }}>
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }} // wrap word
        >
          {word.split("").map((char, cIdx) => {
            const currentIndex = charIndex;
            charIndex++; // increase for next char
            return (
              <span
                key={cIdx}
                style={{
                  display: "inline-block",
                  opacity: currentIndex < visibleCount ? 1 : 0,
                  transform:
                    currentIndex < visibleCount
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.6)",
                  transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  color,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default TypingText;
