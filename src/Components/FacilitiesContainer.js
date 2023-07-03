import React from "react";
import Facilities from "./Facilities";
import gymimage from "../images/gym.png";
import pool from "../images/pool.png";
import spa from "../images/spa.png";
import swimming from "../images/swimming.png";
import resturant from "../images/resturant.png";
import machine from "../images/machine.png";
const FacilitiesContainer = () => {
  return (
    <div>
      <Facilities image={gymimage} text={"THE GYM"} />
      <Facilities image={pool} text={"POOLSIDE BAR"} />
      <Facilities image={spa} text={"THE SPA"} />
      <Facilities image={swimming} text={"SWIMMING POOL"} />
      <Facilities image={resturant} text={"RESTURANT"} />
      <Facilities image={machine} text={"LAUNDARY"} />
    </div>
  );
};

export default FacilitiesContainer;
