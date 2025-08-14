"use client";

import React, { useEffect } from "react";
import styles from "../styles/ExperienceSkills.module.css";
import Image from "next/image";
import HHTML from "../assets/HTML.png";
import CSS from "../assets/css.png";
import native from "../assets/native.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import wordpress from "../assets/wordpress.png";
import git from "../assets/git.png";
import expressjs from "../assets/express.png";
import linux from "../assets/linux.png";

const skills = [
  { id: 1, name: "HTML", icon: HHTML },
  { id: 2, name: "CSS", icon: CSS },
  { id: 3, name: "React Native", icon: native },
  { id: 4, name: "JavaScript", icon: js },
  { id: 5, name: "React", icon: react },
  { id: 6, name: "GitHub", icon: github },
  { id: 7, name: "WordPress", icon: wordpress },
  { id: 8, name: "Git", icon: git },
  { id: 10, name: "Express.js", icon: expressjs },
  { id: 12, name: "Linux", icon: linux },
];

const ExperienceSkills = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Experience & Skills</h2>
        <p className={styles.subheading}>
          Technologies I work with to build modern web apps
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={styles.skillCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className={styles.icon}
              width={60}
              height={60}
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSkills;
