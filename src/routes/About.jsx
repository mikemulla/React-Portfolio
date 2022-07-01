import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar2 />
      <Hero heading="About." text="I'm an experienced Front-end Developer" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
