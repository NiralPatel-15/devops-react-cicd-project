import React from "react";
import projectImg from "../assets/project.jpg";
import githubImg from "../assets/github.webp";

const WorkExperience = () => {
  return (
    <section className="work-experience container">
      <h2>
        <small>Recent</small>
        Work Experience
      </h2>

      <div className="jobs">
        {/* JOB 1 */}
        <article>
          <figure>
            <div>
              <img src={projectImg} alt="Personal Web Projects" width="100%" />
              <figcaption>Personal & Client Projects</figcaption>
            </div>
          </figure>

          <h3>Web Developer & Project Builder</h3>
          <div>2020 - Present</div>

          <p>
            Designed and developed multiple full-stack projects using HTML, CSS,
            JavaScript, Node.js, MongoDB, and more. Created dynamic web
            applications like to-do lists, eCommerce platforms, and portfolio
            sites. Focused on responsive design, performance optimization, and
            user experience.
          </p>
        </article>

        {/* JOB 2 */}
        <article>
          <figure>
            <div>
              <img
                src={githubImg}
                alt="Freelance Web Development"
                width="100%"
              />
              <figcaption>Open Source Contributor</figcaption>
            </div>
          </figure>

          <h3>Open Source Contributor</h3>
          <div>2021 - Present</div>

          <p>
            Contributed to GitHub repositories focused on web development.
            Helped fix bugs, enhance features, and review code for accessibility
            and performance.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkExperience;
