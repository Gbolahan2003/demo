import React from "react";
import HeroSection from "./HeroSection";
import backgroundImage from "../images/landingimage.png";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
const HeroOne = () => {
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
      />
    </div>
  );
};

export default HeroOne;
