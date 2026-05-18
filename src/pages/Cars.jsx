import React from "react";
import Bghero from "../helpers/BgHero";
import about from "../assets/about.avif";
import CarServices from "../components/Car/CarServices";
import { Helmet } from "react-helmet-async";
function Cars() {
  return (
    <>
      <Helmet>
        <title>Cars | Rent Ride Car</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/cars" />
      </Helmet>
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
