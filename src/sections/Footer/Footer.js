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
    <footer className="footer">
      <div className="footer__media">
        <a
          href="https://github.com/MatiasGodoyWD"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/matiasgodoywd/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a
          href="https://twitter.com/MatiasGodoyWD"
          target="_blank"
          rel="noreferrer"
        >
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
