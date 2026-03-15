import React from "react";
import vishwaImg from "../assets/vishwa.jpeg";

const VishwaPortfolio = () => {
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
        src={vishwaImg}
        alt="vishwa"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px", 
          marginBottom: "10px",
        }}
      />

      <h2>Vishwa Tandel </h2>
      <p>
        <b>DevOps Project Collaborator</b>
      </p>

      <h3>Skills</h3>
      <ul style={{ textAlign: "left" }}>
        <li>Git Collaboration</li>
        <li>Docker Containers</li>
        <li>CI/CD Workflow</li>
        <li>React Development</li>
      </ul>
    </div>
  );
};

export default VishwaPortfolio;
