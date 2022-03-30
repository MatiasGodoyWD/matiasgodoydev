import React from "react";
import Description from "../../components/Description/Description";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Stack from "../../components/Stack/Stack";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-me" id="about">
        <div className="filler"></div>
        <SectionTitle title="Sobre mí"></SectionTitle>
        <Description />
        <Stack />
      </section>
    </>
  );
};

export default About;
