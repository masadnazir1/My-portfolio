import styles from "../styles/ContactUsForm.module.css";
import Image from "next/image";
import letter from "../assets/letter.png";

const ContactUsForm = () => {
  return (
    <div className={styles.contactFormSection}>
      <div className={styles.textheading}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.paragraph}>
          We would love to hear from you! Please fill out the form below.
        </p>
      </div>
      <div className={styles.boxinternal}>
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="EX: M Asad Nazir"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EX: asad@galaxydev.pk"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.labeltextarea}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="EX: I would like to ..."
                className={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        <section className={styles.image_giff}>
          <Image
            src={letter}
            className={styles.letter}
            alt="letter icon"
            width={"100%"}
            height={"100%"}
          ></Image>
        </section>
      </div>
    </div>
  );
};

export default ContactUsForm;
