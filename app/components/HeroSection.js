import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import asad from "../assets/asad.png";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkden.png";
import github from "../assets/github.png";
import whatapp from "../assets/whatsapp.png";
import laptop from "../assets/laptop.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Image
          src={asad}
          width={100}
          height={100}
          // Add your profile image in the `public` folder
          alt="Profile Picture"
          className={styles.profileImage}
        />

        <div className={styles.heroContent}>
          <h1>Software Developer, React JS, TypeScript</h1>
          <p>
            I am a passionate and dedicated software developer with a strong
            foundation in React JS, TypeScript, and Node.js. I have experience
            working with various teams and projects. I am currently available
            for freelance opportunities or consulting projects. Feel free to
            reach out if you would like to discuss a project or hire me!
          </p>

          <div className={styles.socialLinks}>
            <div style={styles.socialIcons}>
              <Image
                src={fb}
                alt="facebook"
                width={40}
                height={40}
                style={styles.icon}
              />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Facebook */}
              </a>
            </div>
            <div style={styles.socialIcons}>
              <Image
                src={linkedin}
                alt="facebook"
                width={40}
                height={40}
                style={styles.icon}
              />

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* LinkedIn */}
              </a>
            </div>
            <div style={styles.socialIcons}>
              <Image
                src={github}
                alt="facebook"
                width={40}
                height={40}
                style={styles.icon}
              />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* GitHub */}
              </a>
            </div>
            <div style={styles.socialIcons}>
              <Image
                src={whatapp}
                alt="facebook"
                width={40}
                height={40}
                style={styles.icon}
              />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* GitHub */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroimage}>
        <Image
          src={laptop}
          width={300}
          height={300}
          alt="laptop"
          className={styles.heroSectionimage}
        />
      </div>
    </div>
  );
};

export default HeroSection;
