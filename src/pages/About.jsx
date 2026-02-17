import AboutChooseus from "../components/About/AboutChooseus";
import CarRentalVision from "../components/About/CarRentalVision";
import Feedback from "../components/homeLanding/Feedback";
import CarRentalAbout from "../components/homeLanding/homeAbout";
import Bghero from "../helpers/BgHero";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Rent Ride</title>
        <meta
          name="description"
          content="Rent the world's most exclusive sports cars and luxury vehicles. Feel the power, embrace the speed, live the dream."
        />
        <link rel="canonical" href="https://rentride.com/about" />
      </Helmet>
      <div className="scroll-smooth">
        <Bghero
          imgSrc="/Aboutpage/aboutmain.webp"
          imgAlt={""}
          heading={"About Us"}
          Home={"Home"}
          service={"About us"}
        />

        <CarRentalAbout />
        <CarRentalVision />
        <AboutChooseus />
        <Feedback />

      </div>
    </>
  );
}
