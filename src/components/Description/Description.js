import React from "react";
import profilePicture from "../../assets/img-principal.png";
import "./Description.css";

const Description = () => {
  return (
    <div data-aos="fade-right" className="about__info ">
      <div className="info__img__container ">
        <img src={profilePicture} alt="Profile" className="info__img" />
      </div>
      <div className="info__text ">
        <p className="info__text__p">
          Mi nombre es Matías Julián Godoy y soy un Desarrollador Web Fullstack
          con residencia en Buenos Aires, Argentina. Soy un apasionado por el
          diseño y desarrollo web orientado a la creación de productos con
          interfaces dinamicas y de gran calidad estetica , que se adapten a
          todo tipo de dispositivos y se enfoquen en la generación de una
          experiencia de usuario agil e intuitiva.
        </p>
      </div>
    </div>
  );
};

export default Description;
