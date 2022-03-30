import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="hero flex-center">
      <div className="hero__text">
        <h1 className="hero__title">
          Hola, soy <span className="hero__title--name"> Matías Godoy</span>
        </h1>
        <p className="hero__paragraph">Soy Desarrollador Web Fullstack</p>
        <a href="#main" className="main__button">
          <p>Ver Más</p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
