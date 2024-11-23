"use client";

import { useState } from "react";
import styles from "../styles/Backendfolio.module.css";
import Model from "./Model";

const Backendfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //

  const backendProjects = [
    {
      title: "BlogBook Backend",
      description:
        "A fully functional backend built with Node.js and Express for BlogBook to create, post, delete blogs, and manage the user profile section, such as uploading pictures, changing the cover photo, and updating names and other details. It also allows users to share posts, comment on posts, convert pictures to binary, and decode them into image URLs. PostgreSQL is used for the database, with Node.js and Express as the framework.",
      techStack: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/e-commerce-api",
    },
    {
      title: "Tic-tack-toe Backend",
      description:
        "A backend for my upcoming project, Tic-Tac-Toe. This application handles all operations for a real online Tic-Tac-Toe game, including user registration, user login, game creation, live gameplay with real online players, updating scores accordingly, and profile updates.",
      techStack: ["Node.js", "Express", "MySQL"],
      link: "https://github.com/yourusername/blog-backend",
    },
    {
      title: "Email sending api",
      description:
        "A fully functional API for sending emails, such as OTPs, order information, and other similar automations, built using the Express.js framework and hosted on Vercel. It uses Gmail SMTP for sending the emails.",
      techStack: ["Node.js", "Twilio", "Express"],
      link: "https://github.com/yourusername/sms-marketing-app",
    },
    {
      title: "Daily stats Automation",
      description:
        "An Express.js and Node.js automation script to read yesterday's data from the database, calculate it, and send the stats via email to the team daily at 8 AM. I have used Node Cron for scheduling the task, and PostgreSQL is used for the database.",
      techStack: ["Node.js", "Express", "OpenWeatherMap API"],
      link: "https://github.com/yourusername/weather-forecast-api",
    },
    {
      title: "Browser Automation",
      description:
        "A Node.js script that logs into websites to perform actions, such as unsubscribing a user from a service. I have developed this application to automate daily tasks and save time. It uses Node.js and Puppeteer for browser automation.",
      techStack: ["Node.js", "Express", "Puppeteer"],
      link: "https://github.com/yourusername/weather-forecast-api",
    },
  ];

  return (
    <section className={styles.backendfolio}>
      <h1 className={styles.title}>My Backend Projects</h1>

      <p className={styles.subtitle}>
        Here are some backend applications I have built, each demonstrating
        different functionality and technologies.
      </p>

      <div className={styles.projects}>
        {backendProjects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.clipath}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech, idx) => (
                <span className={styles.techItem} key={idx}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              onClick={openModal}
              // href={project.link}
              className={styles.projectLink}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
      <Model isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
};

export default Backendfolio;
