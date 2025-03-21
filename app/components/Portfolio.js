import styles from "../styles/Portfolio.module.css";
import gamenow from "../assets/projects/gamenow.png";
import Image from "next/image";
import quizapp from "../assets/projects/quizapp.png";
import BlogBook from "../assets/projects/Blogbook.png";

const projects = [
  {
    id: 1,
    title: "Gamig portal",
    description:
      "A react js based gamning portal prividing the verity of HTML5 games and download able games",
    image: gamenow, // Replace with your image path
    link: "https://casual.gamenow.com.pk/",
  },
  {
    id: 2,
    title: "React Quiz App",
    image: quizapp,
    description:
      "A online Quiz app build with react and node js express to play the quizes online deployed with Zong pakistan",
    link: "https://quiz.ntgarage.com/",
  },
  {
    id: 3,
    title: "BlogBook",
    description:
      "A react js and Express js baed web and mobile app for posting, reading and sharing the blogs in a amazing way UI inspired by Facebook and instagram",
    image: BlogBook,
    link: "https://dblob.digihut.store/",
  },
  // {
];

const Portfolio = () => {
  return (
    <div className={styles.portfolioSection}>
      <h2 className={styles.title}>Portfolio</h2>
      <p className={styles.subtitle}>Check out some of my work right here</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Image
              width={1000}
              height={1000}
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <h4 className={styles.description}>{project.description}</h4>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Check Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
