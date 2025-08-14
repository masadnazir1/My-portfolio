"use client";

import { useState } from "react";
import styles from "../styles/Backendfolio.module.css";
import Model from "./Model";

const Backendfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const backendProjects = [
    {
      title: "BlogBook Backend",
      description:
        "A fully functional backend built with Node.js and Express for BlogBook to create, post, delete blogs, and manage user profiles with image uploads, cover photos, and more. PostgreSQL is used as the database.",
      techStack: ["Node.js", "Express", "PostgreSQL"],
      link: "https://github.com/yourusername/e-commerce-api",
    },
    {
      title: "Tic-Tac-Toe Backend",
      description:
        "Handles all operations for a real online Tic-Tac-Toe game including registration, login, game creation, live gameplay, scoring, and profile updates.",
      techStack: ["Node.js", "Express", "MySQL"],
      link: "https://github.com/yourusername/blog-backend",
    },
    {
      title: "Email Sending API",
      description:
        "API for sending automated emails like OTPs or order info using Gmail SMTP, built on Express.js and hosted on Vercel.",
      techStack: ["Node.js", "Gmail", "Express"],
      link: "https://github.com/yourusername/sms-marketing-app",
    },
    {
      title: "Daily Stats Automation",
      description:
        "Automation script to read data, calculate stats, and send emails daily at 8 AM using Node Cron and PostgreSQL.",
      techStack: ["Node.js", "Express", "PostgreSQL"],
      link: "https://github.com/yourusername/weather-forecast-api",
    },
    {
      title: "Browser Automation",
      description:
        "Node.js script using Puppeteer to automate daily tasks on websites like unsubscribing users or interacting with web elements.",
      techStack: ["Node.js", "Express", "Puppeteer"],
      link: "https://github.com/yourusername/weather-forecast-api",
    },
  ];

  return (
    <section className={styles.backendfolio}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>Backend Projects</h2>
        <p className={styles.subtitle}>
          Some of my backend work with modern tech stack and automation scripts
        </p>
      </div>

      <div className={styles.projects}>
        {backendProjects.map((project, index) => (
          <div
            className={styles.projectCard}
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.projectHeader}>
              <h3>{project.title}</h3>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
            {/* <button
              className={styles.projectLink}
              onClick={() => openModal(project)}
            >
              View Code
            </button> */}
          </div>
        ))}
      </div>

      <Model
        isOpen={isModalOpen}
        closeModal={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Backendfolio;
