import React from "react";
import { motion } from "framer-motion";
import { Code } from "react-feather";
import "./Portfolio.css"; // Ensure you have a CSS file for styles
import Project1 from './Project1.png';
import Project2 from './Project2.png';
import Project3 from './Project3.png';
import Project4 from './Project4.png';
import Project5 from './Project5.png';
import Project6 from './Project6.png';
import Project7 from './Project7.png';
import Project8 from './Project8.png';
import Project9 from './Project9.png';

const projectsData = [
  {
    name: "Car Rental Website",
    description: "Built using React and TailwindCSS.",
    image: Project1,
    link: "https://github.com/Harshitsharma2004/GoCarz-repo",
    technologies: ["React", "TailwindCSS"],
  },
  {
    name: "Consumerist E-Commerce Website",
    description: "Built using React, Bootstrap and CSS.",
    image: Project2,
    link: "https://github.com/Harshitsharma2004/Consumerist-repo",
    technologies: ["React", "Bootstrap","CSS"],
  },
  {
    name: "Shopholic E-Commerce Website",
    description: "Built using React and TailwindCSS.",
    image: Project3,
    link: "https://github.com/Harshitsharma2004/Shopoholic-repo",
    technologies: ["React", "TailwindCSS"],
  },
  {
    name: "Cart E-Commerce Website",
    description: "Built using React and TailwindCSS.",
    image: Project4,
    link: "https://github.com/Harshitsharma2004/CART-the-shopping-place-repo",
    technologies: ["React", "TailwindCSS"],
  },
  {
    name: "Event Creator Website",
    description: "Built using React, Bootstrap and CSS.",
    image: Project5,
    link: "https://github.com/Harshitsharma2004/EventCalendar-repo",
    technologies: ["React", "Bootstrap","CSS"],
  },
  {
    name: "Hospital Website",
    description: "Built using React and TailwindCSS.",
    image: Project6,
    link: "https://github.com/Harshitsharma2004/Hospital-repo",
    technologies: ["React", "TailwindCSS","EmailJS","JavaScript"],
  },
  {
    name: "Image Uploader Website",
    description: "Built using Python and Django.",
    image: Project7,
    link: "https://github.com/Harshitsharma2004/ImageUploader-repo",
    technologies: ["Python", "Django","HTML","Bootstrap","CSS"],
  },
  {
    name: "Bite & Go Restaurant Website",
    description: "Built using Python and Django.",
    image: Project8,
    link: "https://github.com/Harshitsharma2004/Bite-Go-restro",
    technologies: ["Python", "Django","HTML","Bootstrap","CSS","MySQL"],
  },
  {
    name: "Personal Portfolio Website",
    description: "Built using React, CSS and Bootstrap.",
    image: Project9,
    link: "#",
    technologies: ["React", "CSS","HTML","Bootstrap"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="container py-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="fw-bold text-center mb-4">Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-4">
            <motion.div
              className="card project-card p-3 text-center shadow-lg border-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="img-fluid rounded mb-3 project-image"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h5>{project.name}</h5>
              <p className="text-muted">{project.description}</p>
              <div className="technologies mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="badge bg-primary me-1">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="btn btn-primary mt-3">
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
