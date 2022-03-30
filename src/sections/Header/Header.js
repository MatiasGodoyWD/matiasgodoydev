import React from "react";
import Hero from "../../components/Navbar/Navbar";
import Navbar from "../../components/Hero/Hero";
import "./Header.css";
const Header = () => {
  return (
    <div id="header" className="header">
      <div className="filler"></div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
