import React from "react";

const NiralPortfolio = () => {
  return (
    <div
      style={{
        border: "2px solid #4CAF50",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "#f6fff6",
      }}
    >
      <h2>Niral Patel 👨‍💻</h2>
      <p>
        <b>MCA Student | DevOps Enthusiast</b>
      </p>

      <h3>Skills</h3>
      <ul>
        <li>Docker</li>
        <li>Git & GitHub</li>
        <li>CI/CD Pipelines</li>
        <li>React</li>
      </ul>

      <h3>Project Contribution</h3>
      <p>
        Built the DevOps CI/CD pipeline using GitHub Actions, Docker, and GitHub
        Pages. Implemented containerization and automated deployment workflow.
      </p>
    </div>
  );
};

export default NiralPortfolio;
