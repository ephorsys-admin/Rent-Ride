import { motion } from "framer-motion";
import CarCard from "../../shared/ui/Services/CardCard";
import { useNavigate } from "react-router-dom";

const cars = [
 { id: 1, title: "SEDAN", image: "/homecars/sedan.webp",  },
  { id: 2, title: "SUV", image: "/homecars/SUV.webp",  },
  { id: 3, title: "SPORTS",image: "/homecars/one.webp",  },
  { id: 4, title: "PREMIUM",image: "/homecars/two.webp",  },
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
        onClick={() => navigate("/cars")}
        
      >
        <CarCard title={car.title} image={car.image} />
      </motion.div>
    ))}
  </div>
</section>


  );
}