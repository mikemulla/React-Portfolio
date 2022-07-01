import React from "react";
import Navbar2 from "../components/Navbar2";
import Hero from "../components/HeroSection";
import Form from "../components/Form";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar2 />
      <Hero
        heading="CONTACT"
        text="Leave a message, I'd respond as soon as possible."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
