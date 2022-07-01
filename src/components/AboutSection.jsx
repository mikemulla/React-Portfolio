import "./AboutSection.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Nasa from "../assets/space.jpg";
function AboutSection() {
  return (
    <div>
      <div className="about-section">
        <div
          className="txt-section"
          data-aos="fade-in"
          data-aos-duration="5000"
        >
          <h4>Who Am I</h4>
          <p>
            I'm a react front-end developer. i create responsive secufre
            websites for my clients.
          </p>
          <Link to="/contact" className="Link">
            CONTACT
          </Link>
        </div>
        <div className="img-section">
          <div className="img-section1">
            <img src={Nasa} alt="Nasa" />
          </div>
        </div>
      </div>
    </div>
  );
}

AOS.init();
export default AboutSection;
