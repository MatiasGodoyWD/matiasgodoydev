import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { projects } from "../../data/data";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
      <div className="filler"></div>
      <SectionTitle title="Proyectos" />
      <div data-aos="fade-left" className="projects__container">
        {projects.map((p, index) => (
          <ProjectCard key={index} project={p}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
