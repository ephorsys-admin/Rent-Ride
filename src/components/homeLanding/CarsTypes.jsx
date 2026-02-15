import { motion } from "framer-motion";
import CarCard from "../../Shared/ui/Services/CardCard";
import one from "../../assets/cars/one.avif";
import two from "../../assets/cars/two.avif";
import three from "../../assets/cars/three.avif";
import { useNavigate } from "react-router-dom";

const cars = [
  { id: 1, title: "SEDAN", image: one, path: "/cars" },
  { id: 2, title: "SUV", image: two, path: "/cars/" },
  { id: 3, title: "SPORTS", image: three, path: "/cars" },
  { id: 4, title: "PREMIUM", image: three, path: "/cars" },
];


export default function CarsTypes() {
  const navigate = useNavigate();
  return (
   <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20 bg-black overflow-hidden">
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-2
    lg:grid-cols-4
    
      gap-4 sm:gap-5 md:gap-6
    "
  >
    {cars.map((car, index) => (
      <motion.div
        key={car.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: index * 0.12,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ willChange: "transform, opacity" }}
        onClick={() => navigate(car.path)}
        
      >
        <CarCard title={car.title} image={car.image} />
      </motion.div>
    ))}
  </div>
</section>


  );
}