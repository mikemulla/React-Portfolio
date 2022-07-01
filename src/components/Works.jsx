import "./Works.css";
import React from "react";
import Cards from "./Cards";
import Milky from "../assets/milky.jpg";
import Space from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
const Works = () => {
  return (
    <div>
      <div className="works-container">
        <div className="works-section">
          <div className="cards">
            <Cards title="Card hello" image={Milky} />
          </div>
          <div className="cards">
            <Cards title="Card hello" image={Space} />
          </div>
          <div className="cards">
            <Cards title="Card hello" image={Milky} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
