import React from "react";
import "../SCSS/footer.scss";
const Footer = () => {
  return (
    <div>
      <footer>
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
            <li className="flex">Facebook</li>
            <li className="flex">Twitter</li>
            <li className="flex">Instagram</li>
          </ul>
          <ul>
            <li>Subscribe to our news letter</li>
            <li>
              <input placeholder="Email address" />
              <button>ok</button>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
