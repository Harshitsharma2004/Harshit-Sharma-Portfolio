import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import {
  FaComments,
  FaLightbulb,
  FaUsers,
  FaPalette,
  FaHandshake,
  FaClock,
  FaSyncAlt,
  FaBrain,
} from "react-icons/fa";
import {
  Sun,
  Moon,
  Download,
  Linkedin,
  GitHub,
  Code,
  Mail,
  Phone,
} from "react-feather";
import profileImage from "./profile.png";
import resume from "./resume.pdf";
import "./Portfolio.css"; // Ensure you have this CSS file
import Projects from "./Project";
import Contact from "./Contact";

const Portfolio = () => {
  // Load theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // Apply theme to the body
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  // Close navbar when clicking outside
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
        className={`navbar navbar-expand-lg shadow-sm p-3 sticky-top ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        ref={navRef}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-uppercase" href="#">
            Harshit Sharma
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse text-center ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul
              className="navbar-nav ms-auto"
              onClick={() => setIsNavOpen(false)}
            >
              {["Home", "Skills", "Projects", "About", "Contact"].map(
                (section, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link fw-bold mx-2"
                      href={`#${section.toLowerCase()}`}
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
              {/* LinkedIn & GitHub Icons */}
              <li className="nav-item ms-lg-3">
                <a
                  href="https://www.linkedin.com/in/harshit-sharma-303a36276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <Linkedin size={22} />
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <a
                  href="https://github.com/Harshitsharma2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <GitHub size={22} />
                </a>
              </li>
              {/* Resume Download Button */}
              <li className="nav-item ms-lg-3">
                <a
                  href={resume}
                  download="Harshit_Sharma_Resume.pdf"
                  className="btn btn-outline-primary fw-bold"
                >
                  <Download size={20} /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Floating Dark/Light Mode Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? (
          <Sun size={24} color="white" />
        ) : (
          <Moon size={24} color="black" />
        )}
      </button>

      {/* Hero Section */}
      <section
        id="home"
        className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-5"
        style={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          borderRadius: "20px",
          padding: "3rem 2rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Text Content */}
        <motion.div
          className="text-center text-lg-start mb-5 mb-lg-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="fw-bold display-4">
            Hi, I'm <span style={{ color: "#ffcc00" }}>Harshit Sharma</span>
          </h1>
          <p className="lead fs-4">Full Stack Python Developer 🚀</p>
          <p className="fs-6">
            Passionate about building scalable web applications with modern
            technologies.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4">
            <a
              href="#contact"
              className="btn btn-warning me-3 px-4 py-2 fw-bold"
              style={{ color: "#1e3c72" }}
            >
              <Send size={18} className="me-2" />
              Hire Me
            </a>
            <a
              href={resume}
              download="Harshit_Sharma_Resume.pdf"
              className="btn btn-outline-light px-4 py-2 fw-bold"
            >
              <Download size={18} className="me-2" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="profile-img-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img img-fluid rounded-circle"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.3)",
              border: "5px solid white",
            }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="container py-5 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(40,40,40,0.8))",
          borderRadius: "15px",
          backdropFilter: "blur(15px)",
          padding: "4rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          color: "#fff", // Ensures text stays white
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 10%, rgba(0,0,0,0) 80%)",
            zIndex: 0,
          }}
        ></div>

        {/* Attractive Title with Gradient Effect */}
        <motion.h2
          className="fw-bold mb-4"
          style={{
            fontSize: "2.5rem",
            background: "linear-gradient(90deg, #ffcc00, #ff6600)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            zIndex: 1,
            textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)", // Enhances readability
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          About Me
        </motion.h2>

        {/* About Card with Icons */}
        <motion.div
          className="card glass-card p-4 border-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            padding: "2rem",
            boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
            zIndex: 1,
            color: "#fff", // Ensures text remains white inside the card
          }}
        >
          <p
            className="lead"
            style={{
              color: "#fff", // Ensures text remains white
              textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)",
            }}
          >
            I am a <strong>Full Stack Python Developer</strong> with a passion
            for building scalable, secure, and high-performance web
            applications. Specializing in both <strong>frontend</strong> and{" "}
            <strong>backend</strong>, I create dynamic, responsive, and seamless
            user experiences.
          </p>

          {/* Tech Icons Row */}
          <div className="d-flex justify-content-center mt-4 gap-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaPython size={40} color="#3776AB" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaReact size={40} color="#61DBFB" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaDatabase size={40} color="#FFA500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaCode size={40} color="#FFFFFF" />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="container py-5 text-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="fw-bold mb-4 text-uppercase">Technical Skills</h2>

        <div className="row justify-content-center">
          {[
            { name: "ReactJS", icon: <FaReact />, percentage: "85%" },
            { name: "Django", icon: <FaPython />, percentage: "80%" },
            { name: "Python", icon: <FaPython />, percentage: "80%" },
            { name: "MySQL", icon: <FaDatabase />, percentage: "80%" },
            { name: "Bootstrap", icon: <FaCode />, percentage: "90%" },
            { name: "TailwindCSS", icon: <FaCode />, percentage: "90%" },
            { name: "HTML", icon: <FaCode />, percentage: "95%" },
            { name: "JavaScript", icon: <FaCode />, percentage: "80%" },
            { name: "CSS", icon: <FaCode />, percentage: "95%" },
            { name: "GitHub", icon: <FaCode />, percentage: "60%" },
            { name: "Web Scraping", icon: <FaCode />, percentage: "60%" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-lg-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card glass-card p-3 text-center shadow-lg">
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="fs-1 text-primary">{skill.icon}</span>
                </motion.div>
                <h5 className="mt-3">{skill.name}</h5>
                <motion.div
                  className="progress mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: skill.percentage }}
                  transition={{ duration: 1.5 }}
                >
                  <div
                    className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    style={{ width: skill.percentage }}
                  >
                    {skill.percentage}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Soft Skills Section */}
      <motion.section
        id="soft-skills"
        className="container py-5 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="fw-bold mb-4 text-uppercase">Soft Skills</h2>

        <div className="row justify-content-center">
          {[
            { name: "Communication", icon: <FaComments /> },
            { name: "Problem Solving", icon: <FaLightbulb /> },
            { name: "Leadership", icon: <FaUsers /> },
            { name: "Creativity", icon: <FaPalette /> },
            { name: "Teamwork", icon: <FaHandshake /> },
            { name: "Time Management", icon: <FaClock /> },
            { name: "Adaptability", icon: <FaSyncAlt /> },
            { name: "Critical Thinking", icon: <FaBrain /> },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-lg-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card glass-card p-3 text-center shadow-lg">
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="fs-1 text-primary">{skill.icon}</span>
                </motion.div>
                <h5 className="mt-3">{skill.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Portfolio; 