import React from "react";

import bakeryImg from "../assets/bakery.png";
import resumeImg from "../assets/Airesume.png";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>
        <small>Previous</small>
        Completed Projects
      </h2>

      <div className="projects-grid">
        <a
          href="https://github.com/NiralPatel-15/Online-Bakery-Management.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={bakeryImg} alt="Bakery Project" />
          <div className="project-title">Bakery Website</div>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={resumeImg} alt="AI Resume Builder" />
          <div className="project-title">AI Resume Builder</div>
        </a>
      </div>
    </section>
  );
};

export default Projects;