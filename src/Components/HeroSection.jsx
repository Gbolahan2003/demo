import React from "react";
import { Button } from "./Button";
import "../SCSS/hro.scss";
import { NavBar } from "./NavBar";
const HeroSection = (props) => {
  const containerStyle = {
    height: "96vh",
    backgroundImage: `Linear-gradient(rgba(20, 39, 74, 0.50),rgba(20, 39, 74, 0.50)),url("${props.backgroundImage}")`,
    // overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  };
  return (
    <div>
      <div style={containerStyle}>
        <NavBar />
        <div className="container-section">
          <div className="text-container">
            <div className="hero-section-header">{props.header}</div>
            <div className="hero-section-text">{props.text}</div>
            <div className="hero-section-place">{props.place}</div>
            <div className="hero-section-description">{props.description}</div>
          </div>
          <div className="button-container">
            <Button className="header-button" text={props.buttontext} />
          </div>
        </div>
      </div>
      <div className="secondary">
        <div className="secondary-heading">{props.secondaryHeading}</div>
        <div className="secondary-text">{props.secondaryText}</div>
      </div>
    </div>
  );
};

export default HeroSection;
