import React from "react";
import "./Stack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const Stack = () => {
  return (
    <div className="about__stack">
      <div className="stack__container">
        <FontAwesomeIcon icon={faHtml5} />
        <p className="stack__text">HTML</p>
      </div>
      <div className="stack__container">
        <FontAwesomeIcon icon={faCss3} />
        <p className="stack__text">CSS</p>
      </div>
      <div className="stack__container">
        <FontAwesomeIcon icon={faJsSquare} />
        <p className="stack__text">Javascript</p>
      </div>

      <div className="stack__container">
        <FontAwesomeIcon icon={faReact} />
        <p className="stack__text">ReactJS</p>
      </div>
      <div className="stack__container">
        <FontAwesomeIcon icon={faNode} />
        <p className="stack__text">NodeJS</p>
      </div>
    </div>
  );
};

export default Stack;
