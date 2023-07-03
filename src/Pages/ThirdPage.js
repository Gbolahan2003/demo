import React from "react";
import HeroSection from "../Components/HeroSection";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import backgroundImage from "../images/thirdimage.png";
import FacilitiesContainer from "../Components/FacilitiesContainer";
import DoubleRoom from "../Components/DoubleRoom";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
const ThirdPage = () => {
  const style = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  };
  const button = (
    <div style={style}>
      {" "}
      <BsFillCalendar2CheckFill />
      BOOK NOW
    </div>
  );
  return (
    <div>
      <HeroSection
        backgroundImage={backgroundImage}
        header="WELCOME TO"
        text="LUXURY"
        place="HOTELS"
        description={
          "Book your stay and enjoy Luxury redefined at the most affordable rates."
        }
        buttontext={button}
        secondaryHeading={"ROOMS AND RATES"}
        secondaryText={
          "Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. "
        }
      />
      <DoubleRoom />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ThirdPage;
