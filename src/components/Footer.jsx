import "./Footer.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="footer-container">
          <div className="contact-info">
            <div className="location-info">
              <FaHome />
              <b>123 Bolanle Street, Lagos</b>
            </div>
            <div className="phone-info">
              <FaPhone />
              <b>0704-XXX-XXXX</b>
            </div>
            <div className="mail-info">
              <FaMailBulk />
              <b>info@gmail.com</b>
            </div>
          </div>
          <div className="company-info">
            <b>About the company</b>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique aliquid accusantium praesentium odio impedit quaerat
              perferendis, esse veritatis distinctio illum! Ullam, eum
              voluptates. Expedita quam voluptas molestiae minus unde eos.
            </p>
            <div className="company-icons">
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
