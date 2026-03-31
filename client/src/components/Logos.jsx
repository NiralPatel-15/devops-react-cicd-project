import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import next from "../assets/nextjs.png";
import azure from "../assets/azure.png";
import vscode from "../assets/vscode.png";
import python from "../assets/python.png";

const Logos = () => {
  return (
    <section className="logos container">
      <div className="marquee">
        <div className="track">
          {/* First Set */}
          <img src={html} alt="HTML" width="128" />
          <img src={css} alt="CSS" width="128" />
          <img src={js} alt="JS" width="128" />
          <img src={reactImg} alt="React" width="128" />
          <img src={next} alt="Next JS" width="128" />
          <img src={azure} alt="Azure" width="128" />
          <img src={vscode} alt="VS Code" width="128" />
          <img src={python} alt="Python" width="128" />

          {/* Duplicate (for infinite scroll effect) */}
          <img src={html} alt="HTML" width="128" />
          <img src={css} alt="CSS" width="128" />
          <img src={js} alt="JS" width="128" />
          <img src={reactImg} alt="React" width="128" />
          <img src={next} alt="Next JS" width="128" />
          <img src={azure} alt="Azure" width="128" />
          <img src={vscode} alt="VS Code" width="128" />
          <img src={python} alt="Python" width="128" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
