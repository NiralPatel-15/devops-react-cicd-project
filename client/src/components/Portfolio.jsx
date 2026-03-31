import React, { useEffect, useState } from "react";
import "../style.css";

// ✅ IMAGES
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";
import heroImg from "../assets/hero-image.png";
import bakeryImg from "../assets/bakery.png";
import projectImg from "../assets/bento-3.jpg";

const Portfolio = () => {
  // ✅ MOBILE MENU
  useEffect(() => {
    window.toggleMobileMenu = function () {
      document.getElementById("menu").classList.toggle("active");
    };
  }, []);

  // ✅ CHATBOT STATE
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi, I'm your AI assistant 👋" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { type: "user", text: input };

    let botReply = "I can help with your portfolio, skills, or projects.";

    if (input.toLowerCase().includes("skill")) {
      botReply = "I am skilled in React, Node.js, and DevOps.";
    } else if (input.toLowerCase().includes("project")) {
      botReply =
        "I have built multiple web apps including portfolio and bakery website.";
    } else if (input.toLowerCase().includes("hello")) {
      botReply = "Hello 👋 nice to meet you!";
    }

    setMessages([...messages, userMsg, { type: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">portfolio-website</div>
        </a>

        <nav>
          <ul id="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:patelniral0231@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="mobile-toggle"
            onClick={() => window.toggleMobileMenu()}
          >
            ☰
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi, I'm </small>
                Niral Patel
              </h1>

              <p>
                A passionate developer building responsive websites and
                real-time applications.
              </p>

              <div className="call-to-action">
                <a href="#" className="button black">
                  View Resume
                </a>
                <a
                  href="mailto:patelniral0231@gmail.com"
                  className="button white"
                >
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <img src={githubImg} width="40" />
                <img src={linkedinImg} width="40" />
              </div>
            </div>
          </div>

          <div className="hero-yellow">
            <img src={heroImg} width="100%" />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills container">
          <h2>
            <small>About me</small>Skills
          </h2>

          <div className="holder-blue">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>

              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div>
              <h3>About Me</h3>
              <p>I build modern web applications and love DevOps.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="container">
          <h2>
            <small>Previous</small>Projects
          </h2>

          <div className="project-grid">
            <div className="project-card">
              <img src={bakeryImg} />
              <h3>Bakery Website</h3>
              <p>Responsive website using HTML, CSS, JS.</p>
            </div>

            <div className="project-card">
              <img src={projectImg} />
              <h3>Portfolio</h3>
              <p>Modern React portfolio project.</p>
            </div>
          </div>
        </section>

        {/* CHATBOT */}
        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>Chatbot
          </h2>

          <div className="chat-box">
            <div className="scroll-area">
              <ul>
                {messages.map((msg, i) => (
                  <li
                    key={i}
                    style={{
                      textAlign: msg.type === "user" ? "right" : "left",
                    }}
                  >
                    <div className="message">{msg.text}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="chat-message">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;