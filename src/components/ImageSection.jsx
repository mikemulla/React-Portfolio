import React from "react";
import World from "../assets/video-2.mp4";
import "./ImageStyles.css";
import { Link } from "react-router-dom";
const ImageSection = () => {
  return (
    <div className="container1">
      <div className="img-container">
        <video autoPlay loop muted className="vid">
          <source src={World} type="video/mp4" />
        </video>
      </div>
      <div className="overlay-bg"></div>
      <div className="text-section">
        <div className="text-container">
          <p>HI, I'M A FREELANCER</p>
          <h2>
            React <br />
            Developer
          </h2>
          <div className="buttons">
            <Link to="/project" className="Link">
              Projects
            </Link>
            <Link to="/contact" className="Link1">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
