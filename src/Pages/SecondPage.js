import React from "react";
import HeroSection from "../Components/HeroSection";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import backgroundImage from "../images/secondpageImage.png";
import FacilitiesContainer from "../Components/FacilitiesContainer";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
const SecondPage = () => {
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
          secondaryHeading={"FACILITIES"}
          secondaryText={
            "We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all. "
          }
        />

        <FacilitiesContainer />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default SecondPage;
