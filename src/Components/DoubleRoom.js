import React from "react";
import roomOne from "../images/DoubleRoom/room0.png";
import roomtwo from "../images/DoubleRoom/room1.jpg";
import roomtthree from "../images/DoubleRoom/room2.jpg";
import { Button } from "./Button";
import ImageContainer from "./ImageContainer";
import singleOne from "../images/oneRoom/singleOne.png";
import singleTwo from "../images/oneRoom/singleTwo.jpg";
import singleThree from "../images/oneRoom/SingleThree.jpg";
import TwinOne from "../images/Twinroom/TwinOne.jpg";
import TwinTwo from "../images/Twinroom/TwinTwo.png";
import TwinThree from "../images/Twinroom/TwinThree.jpg";
const DoubleRoom = () => {
  return (
    <div>
      <div>
        <ImageContainer
          image1={singleOne}
          image2={singleTwo}
          image3={singleThree}
          room={"SINGLE ROOM"}
        />
        <ImageContainer
          image1={roomOne}
          image2={roomtwo}
          image3={roomtthree}
          room={"DOUBLE ROOM"}
        />

        <ImageContainer
          image1={TwinOne}
          image2={TwinTwo}
          image3={TwinThree}
          room={"TWIN ROOM"}
        />
      </div>
    </div>
  );
};

export default DoubleRoom;
