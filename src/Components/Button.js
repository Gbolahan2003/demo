import React from "react";
import "../SCSS/flex.scss";
export const Button = (props) => {
  return (
    <button style={props.style} onClick={props.onClick} className="button">
      {props.text}
    </button>
  );
};
