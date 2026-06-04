import React from "react";
import Bghero from "../helpers/BgHero";
import about from "../assets/about.avif";
import CarServices from "../components/Car/CarServices";
import SEO from "../components/SEO";
function Cars() {
  return (
    <>
      <SEO
        title="Cars"
        description="Find the best self-drive cars in Bhubaneswar with Rent Ride Car. Choose premium hatchbacks, sedans, and SUVs with easy online booking and transparent pricing."
        url="https://rentridecar.com/cars"
        canonical="https://rentridecar.com/cars"
        keywords="car rental bhubaneswar, sedan rental bhubaneswar, suv rental bhubaneswar, hatchback rental bhubaneswar, car hire" 
      />
      <Bghero
        imgSrc="/SedanCars/car.webp"
        imgAlt={"Sedan Car"}
        heading={"Explore Our Services"}
        Home={"Home"}
        service={"Cars"}
      />
      <div className="min-h-screen bg-black text-white flex items-center justify-center   ">
        <CarServices />
      </div>
    </>
  );
}

export default Cars;
