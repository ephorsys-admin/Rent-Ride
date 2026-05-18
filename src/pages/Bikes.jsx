import React from "react";
import Upcoming from "../helpers/Upcoming";
import BikeSevice from "../components/BIke/BIkeSevice";
import BgHero from "../helpers/BgHero";
import about from "../assets/about.avif";
import SEO from "../components/SEO";


const Bikes = () => {
  return (
    <>
      <SEO
        title="Bikes"
        description="Rent premium bikes in Bhubaneswar with Rent Ride Car. Enjoy convenient self-drive bike rental, affordable rates, and reliable service for short and long trips."
        url="https://rentridecar.com/bikes"
        canonical="https://rentridecar.com/bikes"
        keywords="bike rental bhubaneswar, self drive bike rental, bike hire bhubaneswar, bike rental service" 
      />
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
