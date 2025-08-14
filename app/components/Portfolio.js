"use client";

import React from "react";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import gamenow from "../assets/projects/gamenow.png";
import quizapp from "../assets/projects/quizapp.png";
import BlogBook from "../assets/projects/Blogbook.png";
import hsfImage from "../assets/projects/Tour.png";

const projects = [
  {
    id: 1,
    title: "HSF Tourism Website",
    image: hsfImage,
    description:
      "A professional tourism website developed for HSF Company using modern web technologies. Features include tour listings, contact forms, and responsive design. Deployed at GalaxyDev.",
    link: "https://hsf.galaxydev.pk/",
  },
  {
    id: 2,
    title: "Gaming Portal",
    description:
      "A React.js based gaming portal providing a variety of HTML5 games and downloadable games.",
    image: gamenow,
    link: "https://casual.gamenow.com.pk/",
  },
  {
    id: 3,
    title: "React Quiz App",
    image: quizapp,
    description:
      "An online Quiz app built with React and Node.js/Express to play quizzes online, deployed with Zong Pakistan.",
    link: "https://quiz.ntgarage.com/",
  },
  {
    id: 4,
    title: "BlogBook",
    description:
      "A React.js and Express.js based web/mobile app for posting, reading, and sharing blogs with an amazing UI inspired by social media.",
    image: BlogBook,
    link: "https://dblob.digihut.store/",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.subtitle}>Some of my recent works</p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={styles.projectCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.checkBtn}
              >
                Check Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
