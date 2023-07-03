import React from "react";
import "../SCSS/FourthPage.scss";
import Footer from "../Components/Footer";
import { Button } from "../Components/Button";
import { NavBar } from "../Components/NavBar";
export const PageFour = () => {
  return (
    <div>
      <div className="forth-container">
        <div className="container-4">
          <NavBar />
          <div className="forth-header-container">
            <div className="forth-header">CONTACT-US</div>
          </div>
        </div>
        <div className="forth-section-1">
          <div className="footer-text">WE ARE HERE FOR YOU</div>
          <div className="forth-text-1">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </div>
        </div>
        <div className="forth-section-2">
          <div className="forth-address-container">
            <div className="forth-address">
              <div className="address-1">
                497 Evergreen Rd. Roseville, CA 95673
              </div>
              <div className="address-2">View map &rarr;</div>
              <div className="address-1">
                Phone: +44 345 678 903 Email: luxury_hotels@gmail.com
              </div>
            </div>
            <form className="input-container">
              <div className="input-field">
                <label>Name</label>
                <input type="text" />
              </div>
              <div type="email" className="input-field">
                <label>Email Address</label>
                <input />
              </div>
              <div className="input-field">
                <label>Message</label>
                <textarea className="textarea"></textarea>
              </div>
              <div className="forth-buton">
                <Button text={"submit"} />
              </div>
            </form>
          </div>
          {/* ////////// */}
        </div>
      </div>
      <div className="forth-footer">
        <Footer />
      </div>
    </div>
  );
};
