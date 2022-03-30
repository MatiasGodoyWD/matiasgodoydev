import React from "react";
import "./Main.css";
const Main = ({ children }) => {
  return (
    <main className="main-content" id="main">
      {children}
    </main>
  );
};

export default Main;
