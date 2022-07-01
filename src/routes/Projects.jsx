import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero from "../components/HeroSection";
import Works from "../components/Works";
import Footer from "../components/Footer";
const Projects = () => {
  return (
    <div>
      <Navbar2 />
      <Hero heading="PROJECTS." text="Some of the works i have done." />
      <Works />
      <Footer />
    </div>
  );
};

export default Projects;
