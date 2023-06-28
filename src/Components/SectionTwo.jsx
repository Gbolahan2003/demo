import React from "react";
import FlexContainer from "./FlexContainer";
import firstbed from "../images/firstbedimage.png";
import secondbed from "../images/secondbed.png";
import HeroOne from "./HeroOne";
const SectionTwo = () => {
  return (
    <div>
      <HeroOne />
      <FlexContainer
        h2="Luxury redefined"
        flexText="Our rooms are designed to transport 
you into an environment made for leisure. 
Take your mind off the day-to-day of home 
life and find a private paradise for yourself."
        buttonText="Explore"
        image={firstbed}
      />
      <FlexContainer
        h2="Leave your worries in the sand"
        flexText="We love life at the beach. Being close
to the ocean with access to endless sandy
beach ensures a relaxed state of mind. It 
seems like time stands still watching the 
ocean. "
        image={secondbed}
        buttonText="Explore"
      />
    </div>
  );
};

export default SectionTwo;
