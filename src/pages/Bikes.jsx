import React from "react";
import Upcoming from "../helpers/Upcoming";
import BikeSevice from "../components/BIke/BIkeSevice";
import BgHero from "../helpers/BgHero";
import about from "../assets/about.avif";
import { Helmet } from "react-helmet-async";


const Bikes = () => {
  return (
    <>
      <Helmet>
        <title>Bikes | Rent Ride</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/about" />
      </Helmet>
      <BgHero
        imgSrc="/Bikes/bike-1.webp"
        imgAlt={""}
        heading={"Explore Our Services"}
        Home={"Home"}
        service={"Bikes"}
      />
      <div className="min-h-screen bg-black text-white flex items-center justify-center   ">
        <BikeSevice />
      </div>
    </>
  );
};

export default Bikes;
