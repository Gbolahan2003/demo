import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../SCSS/Nav.scss";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

export const NavBar = () => {
  const [button, setButton] = useState(<IoIosMenu />);
  const display = {};
  const styles = {
    display: "none",
  };
  const open = {
    display: "flex",
    transform: "translateX(-150px)",
  };
  const [style, setStyle] = useState(display);
  const [nav, setNav] = useState(true);
  const openStyle = () => {
    setNav((prevNav) => (prevNav === true ? false : !prevNav));
    console.log(nav);
    setStyle(() => (nav === true ? open : styles));

    setButton(() => (nav === true ? <IoIosClose /> : <IoIosMenu />));
  };
  console.log(style);
  const { pathname } = useLocation();
  return (
    <div className="glory">
      <div className="nav-container">
        <div className="luxury">
          <div className="p">LUXURY</div>
          <div className="p2">Hotels</div>
        </div>
        <nav>
          <NavLink
            className={`link nav-${
              pathname === "/" ? "link-active" : undefined
            }`}
            to="/"
          >
            Home{" "}
          </NavLink>
          <NavLink
            className={`link nav-${
              pathname === "/facilities" ? "link-active" : undefined
            }`}
            to="/facilities"
          >
            Facilities
          </NavLink>
          <NavLink
            className={`link nav-${
              pathname === "/rooms" ? "link-active" : undefined
            }`}
            to="/rooms"
          >
            {" "}
            Rooms
          </NavLink>
          <NavLink
            className={`link ${
              pathname === "/contact" ? "link-active" : undefined
            }`}
            to={"/contact"}
          >
            Contact-us
          </NavLink>
        </nav>

        <div className="nav-site">
          <div onClick={openStyle} className="nav-button">
            {button}
          </div>
          <section className="nav" style={style}>
            <NavLink
              className={`link nav-${
                pathname === "/" ? "link-active" : undefined
              }`}
              to="/"
            >
              Home{" "}
            </NavLink>
            <NavLink
              className={`link nav-${
                pathname === "/facilities" ? "link-active" : undefined
              }`}
              to="/facilities"
            >
              Facilities
            </NavLink>
            <NavLink
              className={`link nav-${
                pathname === "/rooms" ? "link-active" : undefined
              }`}
              to="/rooms"
            >
              {" "}
              Rooms
            </NavLink>
            <NavLink
              className={`link ${
                pathname === "/contact" ? "link-active" : undefined
              }`}
              to={"/contact"}
            >
              Contact-us
            </NavLink>
          </section>
        </div>
      </div>
    </div>
  );
};
