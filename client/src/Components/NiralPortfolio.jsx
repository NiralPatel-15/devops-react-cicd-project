import React from "react";
import niralImg from "../assets/niral.jpeg"

const NiralPortfolio = () => {
  return (
    <div
      style={{
        width: "350px",
        border: "2px solid #2196F3",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
      }}
    >
      <img
        src={niralImg}
        alt="Niral"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <h2>Niral Patel </h2>
      <p>
        <b>MCA Student | DevOps Enthusiast</b>
      </p>

      <h3>Skills</h3>
      <ul style={{ textAlign: "left" }}>
        <li>Docker</li>
        <li>Git & GitHub</li>
        <li>CI/CD Pipelines</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default NiralPortfolio;
