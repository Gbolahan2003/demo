import React, { useState } from "react";
import "../SCSS/image.scss";
import roomOne from "../images/DoubleRoom/room0.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import roomtwo from "../images/DoubleRoom/room1.jpg";
import roomtthree from "../images/DoubleRoom/room2.jpg";
import { Button } from "./Button";
import { IconContext } from "react-icons/lib";
const ImageContainer = (props) => {
  const images = [
    {
      id: 1,
      imageSrc: roomOne,
    },
    {
      id: 2,
      imageSrc: roomtwo,
    },
    {
      id: 3,
      imageSrc: roomtthree,
    },
  ];

  const image = [
    {
      id: 1,
      imageSrc: props.image1,
    },
    {
      id: 2,
      imageSrc: props.image2,
    },
    {
      id: 3,
      imageSrc: props.image3,
    },
  ];

  const [room, setRoom] = useState(0);
  console.log(image.length);
  const buttonClickRight = () => {
    setRoom((prevdata) => {
      if (prevdata < image.length - 1) {
        return (prevdata = prevdata + 1);
      } else {
        return 0;
      }
    });
  };
  const style = {
    transition: "all 1s",
  };
  const onChange = () => {
    const style = {
      transition: "all 1s",
    };
  };
  const buttonClickLeft = () => {
    console.log(` left${room}`);
    setRoom((prevdata) => {
      if (prevdata > 0) {
        return (prevdata = prevdata - 1);
      } else {
        return 0;
      }
    });
  };
  console.log(room);
  return (
    <div className="container">
      <section className="image-container">
        <div className="image">
          <img onChange={onChange} style={style} src={image[room].imageSrc} />
        </div>
        <div className="buttons">
          <Button className="button" onClick={buttonClickLeft} text="<" />
          <Button className="button" onClick={buttonClickRight} text=">" />
        </div>
        <div className="local-container">
          <div className="image-text">{props.room}</div>
        </div>
        <div className="second-local-container">
          <div className="local-text-2">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <div>
                <BsFillPlusCircleFill />
              </div>
            </IconContext.Provider>
            <div className="second-text-1">View for more details </div>
          </div>
          <div>
            <button className="second-text-2">$155 Avg/night</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageContainer;
