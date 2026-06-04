import AboutChooseus from "../components/About/AboutChooseus";
import CarRentalVision from "../components/About/CarRentalVision";
import Feedback from "../components/homeLanding/Feedback";
import CarRentalAbout from "../components/homeLanding/homeAbout";
import Bghero from "../helpers/BgHero";

import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Rent Ride Car, Bhubaneswar's trusted self-drive rental service. We provide safe, well-maintained vehicles, transparent pricing, and 24/7 customer support."
        url="https://rentridecar.com/about"
        canonical="https://rentridecar.com/about"
        keywords="about rent ride car, car rental company bhubaneswar, self drive rental services, car rental safety" 
      />
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
