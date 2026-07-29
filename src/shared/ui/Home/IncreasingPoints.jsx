import React, { useEffect, useState, memo } from "react";
import { useInView } from "react-intersection-observer";

// Stats data
const statsData = [
  { value: 10, suffix: "+", label: "Premium Brands" },
  { value: 500, suffix: "+", label: "Satisfied Customers" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: " Star", label: "Average Rating" },
];

// ✅ Memoized counter item
const CounterItem = memo(({ value, suffix, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1000; // 1s animation
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [start, value]);

  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {count}
        {suffix}
      </h2>
      <p className="text-white/70 text-xs lg:text-md">{label}</p>
    </div>
  );
});

// ✅ Main section
const IncreasingPoints = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // smoother trigger
  });

  return (
    <section ref={ref} className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsData.map((item, index) => (
          <CounterItem key={index} {...item} start={inView} />
        ))}
      </div>
    </section>
  );
};

export default IncreasingPoints;
