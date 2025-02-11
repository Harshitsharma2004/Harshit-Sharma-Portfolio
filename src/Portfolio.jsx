import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import { Sun, Moon, Download, Linkedin, GitHub } from "react-feather";
import profileImage from "./profile.png";
import resume from "./resume.pdf";
import "./Portfolio.css";
import Projects from "./Project";
import Contact from "./Contact";

const Portfolio = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : true;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Navbar */}
      <motion.nav
        className={`navbar navbar-expand-lg shadow-sm p-3 sticky-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        ref={navRef}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-uppercase" href="#">
            Harshit Sharma
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse text-center ${isNavOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto" onClick={() => setIsNavOpen(false)}>
              {["Home", "Skills", "Projects", "About", "Contact"].map((section, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link fw-bold mx-2" href={`#${section.toLowerCase()}`}>
                    {section}
                  </a>
                </li>
              ))}
              {/* LinkedIn & GitHub Icons */}
              <li className="nav-item ms-lg-3">
                <a href="https://www.linkedin.com/in/harshit-sharma-303a36276" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <Linkedin size={22} />
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <a href="https://github.com/Harshitsharma2004" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <GitHub size={22} />
                </a>
              </li>
              {/* Resume Download Button */}
              <li className="nav-item ms-lg-3">
                <a href={resume} download="Harshit_Sharma_Resume.pdf" className="btn btn-outline-primary fw-bold">
                  <Download size={20} /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Floating Dark/Light Mode Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? <Sun size={24} color="white" /> : <Moon size={24} color="black" />}
      </button>

      {/* Hero Section */}
      <section id="home" className="container py-5">
        <div className="row align-items-center text-center text-lg-start">
          {/* Text Content */}
          <motion.div className="col-lg-6 mb-4 mb-lg-0" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="fw-bold display-4">
              Hi, I'm <span className="text-warning">Harshit Sharma</span>
            </h1>
            <p className="lead fs-4">Full Stack Python Developer 🚀</p>
            <p className="fs-6">
              Passionate about building scalable web applications with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-4">
              <a href="#contact" className="btn btn-warning me-3 px-4 py-2 fw-bold">
                <Send size={18} className="me-2" />
                Hire Me
              </a>
              <a href={resume} download="Harshit_Sharma_Resume.pdf" className="btn btn-outline-light px-4 py-2 fw-bold">
                <Download size={18} className="me-2" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div className="col-lg-6 d-flex justify-content-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <img
              src={profileImage}
              alt="Profile"
              className="profile-img img-fluid rounded-circle"
              style={{
                maxWidth: "200px",
                width: "80%",
                height: "auto",
                objectFit: "cover",
                boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.3)",
                border: "5px solid white",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Portfolio;
