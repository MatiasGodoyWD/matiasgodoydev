import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <h3 className="project__name">
        {project.name} <FontAwesomeIcon icon={faLongArrowAltRight} />
      </h3>
      <div className="project__info__content">
        <div className="project__info__text">
          <h4 className="project__info__title">{project.name}</h4>
          <h5 className="project__info__subtitle">{project.description}</h5>
          <p className="project__info__stack">{project.stack}</p>
        </div>
        <div className="links__container">
          <a href={project.repo} className="project__link">
            <FontAwesomeIcon icon={faGithub} /> Repo
          </a>
          <a href={project.demo} className="project__link">
            <FontAwesomeIcon icon={faDesktop} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
