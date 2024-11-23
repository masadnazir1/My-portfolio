import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import asad from "../assets/asad.png";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkden.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import laptop from "../assets/laptop.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Image
          src={asad}
          width={100}
          height={100}
          alt="Profile Picture"
          className={styles.profileImage}
        />

        <div className={styles.heroContent}>
          <h1>Software Developer, React JS, TypeScript</h1>
          <p>
            am a passionate and dedicated Frontend Developer with a strong
            foundation in React.js, WordPress, and Node.js. I have experience
            collaborating with diverse teams and contributing to various
            projects. I am currently available for freelance opportunities and
            consulting projects. Feel free to reach out to discuss your project
            or explore how I can help!
          </p>

          <div className={styles.socialLinks}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/@masadnazir10"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcons}
            >
              <Image
                src={fb}
                alt="Facebook"
                width={40}
                height={40}
                className={styles.icon}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/masadnazir10/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcons}
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={40}
                height={40}
                className={styles.icon}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/masadnazir1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcons}
            >
              <Image
                src={github}
                alt="GitHub"
                width={40}
                height={40}
                className={styles.icon}
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+923208648637"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcons}
            >
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={40}
                height={40}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section Image */}
      <div className={styles.heroimage}>
        <Image
          src={laptop}
          width={300}
          height={300}
          alt="Laptop"
          className={styles.heroSectionimage}
        />
      </div>
    </div>
  );
};

export default HeroSection;
