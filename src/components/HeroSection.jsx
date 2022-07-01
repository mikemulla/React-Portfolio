import "./HeroSection.css";
import Space from "../assets/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg";
import React, { Component } from "react";

class HeroSection extends Component {
  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="hero-image">
            <img src={Space} alt="Space" className="hero" />
          </div>
          <div className="overlay-bg1"></div>
          <div className="text-container1">
            <div className="text-section1">
              <div className="heading">
                <h4>{this.props.heading}</h4>
              </div>
              <div className="text">
                <h6>{this.props.text}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroSection;
