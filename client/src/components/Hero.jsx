import React from "react";
import heroImg from "../assets/hero-image.png";
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";

const Hero = () => {
  return (
    <section className="hero container">
      {/* LEFT SIDE */}
      <div className="hero-blue">
        <div>
          <h1>
            <small>Hi, I'm </small>
            Niral Patel
          </h1>

          <p>
            A passionate developer focused on building responsive websites and
            real-time applications. I enjoy turning ideas into functional,
            user-friendly digital experiences using modern tools like HTML, CSS,
            JavaScript, Node.js, and MongoDB.
            <span> Always learning, always building.</span>
          </p>

          <div className="call-to-action">
            <a
              href="/devops-react-cicd-project/Sample-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button black"
            >
              View Resume
            </a>

            <a href="mailto:patelniral0231@gmail.com" className="button white">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/NiralPatel-15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="GitHub" width="48" />
            </a>

            <a
              href="https://www.linkedin.com/in/niral15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinImg} alt="LinkedIn" width="48" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-yellow">
        <img src={heroImg} alt="Niral Patel" width="100%" />
      </div>
    </section>
  );
};

export default Hero;
