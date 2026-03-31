import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills container">
      <h2>
        <small>About me</small>
        Skills
      </h2>

      <div className="holder-blue">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <h3>Frontend</h3>
          <ul>
            
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            
          </ul>

          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PHP</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <h3>A bit about me</h3>

          <p>
            I'm Niral Patel, a passionate and curious developer with a strong
            interest in building impactful digital experiences. From clean,
            responsive websites to real-time applications, I enjoy every part of
            the development process — from designing intuitive user interfaces
            to writing efficient backend logic.
          </p>

          <p>
            Beyond coding, I’m a continuous learner who believes in improving
            one project at a time. Whether it’s exploring new technologies,
            debugging late into the night, or collaborating on creative ideas,
            I’m always excited to build and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
