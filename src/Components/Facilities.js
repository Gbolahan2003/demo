import React from "react";
import "../SCSS/Facilities.scss";
const Facilities = (props) => {
  const styles = {
    // backgroundColor: "rgba(20, 39, 74, 0.3)",
    overflow: "hidden",
    // border: `1px solid black`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "end",
  };
  return (
    <div className=" container">
      <div style={styles} className="image-container">
        <div className="image-contain">
          <img className="facilities-image" src={props.image} />
          <div className="image-p">
            <div className="pp">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
