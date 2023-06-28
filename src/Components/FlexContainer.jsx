import React from "react";
import "../SCSS/flex.scss";
import { Button } from "./Button";
const FlexContainer = (props) => {
  return (
    <div className="section-flex">
      <div className="section2text">
        <h2>{props.h2}</h2>
        <div className="section-2-text">{props.flexText}</div>
        <div>
          <Button text={props.buttonText} />
        </div>
      </div>
      <div className="section2Image">
        <img src={props.image} />
      </div>
    </div>
  );
};

export default FlexContainer;
