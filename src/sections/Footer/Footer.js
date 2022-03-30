import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer data-aos="fade-left" className="footer">
      <div className="footer__media">
        <a href="about">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a href="about">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="about">
          <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
        </a>
      </div>
      <p className="footer__p">
        Matias Julian Godoy <span className="footer__p-span">&copy; 2022</span>
      </p>
    </footer>
  );
};

export default Footer;
