import React from "react";
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
  { id: 3, name: "React native", icon: native },
  { id: 4, name: "JavaScript", icon: js },
  { id: 5, name: "React", icon: react },
  { id: 6, name: "GitHub", icon: github },
  { id: 7, name: "Wordpress", icon: wordpress },
  { id: 8, name: "git", icon: git },
  { id: 10, name: "Express Js", icon: expressjs },
  //linux
  { id: 12, name: "Linux ", icon: linux },
];

const ExperienceSkills = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.heading}>Experience / Skills</h2>
      <p className={styles.subheading}>
        These are the technologies I have worked with
      </p>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <Image
              src={skill.icon}
              alt={skill.name}
              className={styles.icon}
              width={30}
              height={30}
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSkills;
