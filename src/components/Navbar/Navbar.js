import React, { useState } from "react";
import "./Navbar.css";
import whiteLogo from "../../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  window.onscroll = () => {
    if (clicked) {
      setClicked(!clicked);
    }
  };

  const handleClick = (e) => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="navbar">
        <a href="#header">
          <img
            className="logo"
            src={whiteLogo}
            alt="Matias Julian Godoy Web Developer"
          />
        </a>
        <FontAwesomeIcon
          icon={!clicked ? faBars : faTimes}
          id="navbar__bars"
          onClick={handleClick}
        />
        <ul className={`navbar__menu ${clicked && "navbar__active"}`}>
          <li>
            <a className="navbar__menu__a " href="#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="navbar__menu__a " href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a className="navbar__menu__a " href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
