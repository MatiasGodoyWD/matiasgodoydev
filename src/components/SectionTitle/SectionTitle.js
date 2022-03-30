import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 class="section-title">{title}</h2>
      <div class="section-title__underscore"></div>
    </>
  );
};

export default SectionTitle;
