import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="logo-holder">
        <div className="logo">L</div>
        <div className="logo-text">portfolio-website</div>
      </div>

      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("skills");
              }}
            >
              Skills
            </a>
          </li>

          <li>
            <Link to="/team">Team</Link>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
            >
              Projects
            </a>
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
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </a>
      </nav>
    </header>
  );
};

export default Header;