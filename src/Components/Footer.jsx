import React from "react";
import "../SCSS/footer.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="square"></div>
        <div className="footer-container">
          <ul className="grid-cols-1">
            <li className="lux">LUXURUY</li>
            <li className="hotel">HOTELS</li>
            <li className="first-text">
              497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
              luxury_hotels@gmail.com
            </li>
          </ul>
          <ul className="footer-links">
            <li>About us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
          <ul>
            <li className="flex">
              {" "}
              <div>
                <BiLogoFacebook />
              </div>
              <div>Facebook</div>
            </li>
            <li className="flex">
              <div>
                <BiLogoTwitter />
              </div>
              <div>Twitter</div>
            </li>
            <li className="flex">
              <div>
                <BiLogoInstagram />
              </div>
              <div>Intagram</div>
            </li>
          </ul>
          <ul className="">
            <li className="subscribe">Subscribe to our news letter</li>
            <li className="email">
              <input type="email" placeholder="Email address" />
              <button className="emailbutton">ok</button>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
