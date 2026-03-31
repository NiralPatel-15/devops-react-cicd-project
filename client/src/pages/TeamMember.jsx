import React from "react";
import memberImg from "../assets/vishwa.png";
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";
import Logos from "../components/Logos";

import travelmg from "../assets/travel.png";

const TeamMember = () => {
  return (
    <>
      {/* ===== HERO SECTION (UNCHANGED DESIGN) ===== */}
      <section className="hero container">
        <div className="hero-blue">
          <div>
            <h1>
              <small>Meet Our Team Member</small>
              Vishwa Tandel
            </h1>

            <p>
              A creative frontend developer passionate about building clean and
              responsive user interfaces. She enjoys working with modern web
              technologies like HTML, CSS, and JavaScript to create engaging
              user experiences.
              <span> Focused on design, performance, and usability.</span>
            </p>

            <div className="call-to-action">
              <a href="/" className="button black">
                View Niral Page
              </a>

              <a
                href="mailto:tandelvishwa398@gmail.com"
                className="button white"
              >
                Contact
              </a>
            </div>

            {/* ✅ SOCIAL ICONS FIXED */}
            <div className="social-links">
              <a href="https://github.com/TandelVishwa" target="_blank">
                <img src={githubImg} alt="GitHub" width="48" />
              </a>

              <a
                href="https://www.linkedin.com/in/vishwa-tandel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinImg} alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-yellow">
          <img src={memberImg} alt="Vishwa Tandel" width="100%" />
        </div>
      </section>

      <Logos />

      {/* ===== SKILLS SECTION (ADDED BELOW) ===== */}
      <section className="skills container">
        <h2>
          <small>About Vishwa</small>
          Skills
        </h2>

        <div className="holder-blue">
          {/* LEFT */}
          <div className="left-column">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>

            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="right-column">
            <h3>A bit about her</h3>

            <p>
              Vishwa is a dedicated frontend developer who enjoys transforming
              ideas into beautiful and functional user interfaces. She focuses
              on writing clean code and creating responsive layouts.
            </p>

            <p>
              She is always eager to learn new technologies, improve her design
              skills, and collaborate on creative projects to build meaningful
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="container">
        <h2>
          <small>Previous</small>
          Completed Projects
        </h2>

        <div className="projects-grid">
          <a
            href="https://github.com/TandelVishwa/travel-landing-page.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={travelmg} alt="Bakery Project" />
            <div className="project-title">Travel-Landing-page</div>
          </a>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
