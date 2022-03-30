import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 data-aos="fade-right" className="section-title">
        {title}
      </h2>
      <div data-aos="fade-right" className="section-title__underscore"></div>
    </>
  );
};

export default SectionTitle;
