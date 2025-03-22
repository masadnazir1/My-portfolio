import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import asad from "../assets/asad.png";
import laptop from "../assets/3d_project.png";

const HeroSection = () => {
  //
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "../../public/Masad-Frontend-Developer.pdf"; // Replace with the actual path
    link.download = "Masad-Frontend-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  //
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.ImageSection}>
          <Image
            src={asad}
            width={100}
            height={100}
            alt="Profile Picture"
            className={styles.profileImage}
          />
          <h2>M Asad Nazir</h2>
        </div>

        <div className={styles.heroContent}>
          <h1>Frontend Developer | React.js | WordPress | Node.js</h1>
          <p>
            Passionate about crafting seamless user experiences. I thrive in
            team collaborations and diverse projects. Available for freelance &
            consulting—let’s build something great together!
          </p>

          <a href="../../public/Masad-Frontend-Developer.pdf" download>
            <button className={styles.Download}>Download PDF</button>
          </a>
          <button className={styles.Download} onClick={downloadPDF}>
            Download CV
          </button>

          <div className={styles.socialLinks}></div>
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
