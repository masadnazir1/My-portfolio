"use client";
import { useState } from "react";
import styles from "../styles/ContactUsForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [adminemail] = useState("masadnazir1@gmail.com");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const clear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill all the details");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      await axios.post("https://api-email.galaxydev.pk/send-email/", {
        to: adminemail,
        subject: `Message from ${name}, ${email}`,
        text: message,
      });

      setLoading(false);
      clear();
      toast.success("Email sent successfully!", { position: "bottom-left" });
    } catch (error) {
      setLoading(false);
      toast.error("Error sending email. Try again!");
    }
  };

  return (
    <section className={styles.contactFormSection}>
      <ToastContainer />
      <div className={styles.textheading}>
        <h2 className={styles.heading}>
          Contact <span className={styles.gradientText}>Us</span>
        </h2>
        <p className={styles.paragraph}>
          We&apos;d love to hear from you! Fill out the form below.
        </p>
      </div>
      <div className={styles.boxinternal}>
        <div className={styles.formContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
