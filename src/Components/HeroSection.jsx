import React from "react";
import { Button } from "./Button";
import "../SCSS/hro.scss";
const HeroSection = (props) => {
  const containerStyle = {
    height: "96vh",
    backgroundImage: `Linear-gradient(rgba(20, 39, 74, 0.50),rgba(20, 39, 74, 0.50)),url("${props.backgroundImage}")`,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    // flexDirection: "column",
  };
  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="text-container">
          <div className="hero-section-header">{props.header}</div>
          <div className="hero-section-text">{props.text}</div>
          <div className="hero-section-place">{props.place}</div>
          <div className="hero-section-description">{props.description}</div>
        </div>
        <div className="button-container">
          <Button text={props.buttontext} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
