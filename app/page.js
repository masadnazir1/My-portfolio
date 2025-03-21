"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "./components/ScrollToTop";
import ContactUsForm from "./components/ContactUsForm";
import ExperienceSkills from "./components/ExperienceSkills";
import Soon from "./components/Soon";
import Portfolio from "./components/Portfolio";
import Backendfolio from "./components/Backendfolio";
import Header from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const backendfolioRef = useRef(null);
  const soonRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Header
        onNavigate={(section) => {
          switch (section) {
            case "hero":
              scrollToSection(heroRef);
              break;
            case "experience":
              scrollToSection(experienceRef);
              break;
            case "portfolio":
              scrollToSection(portfolioRef);
              break;
            case "backendfolio":
              scrollToSection(backendfolioRef);
              break;
            case "soon":
              scrollToSection(soonRef);
              break;
            case "contact":
              scrollToSection(contactRef);
              break;
            default:
              break;
          }
        }}
      />
      <motion.div
        ref={heroRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        ref={experienceRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.divider}></div>
        <ExperienceSkills />
      </motion.div>
      <motion.div
        ref={portfolioRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.divider}></div>
        <Portfolio />
      </motion.div>
      <motion.div
        ref={backendfolioRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.divider}></div>
        <Backendfolio />
      </motion.div>
      <motion.div
        ref={soonRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.divider}></div>
        <Soon />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.divider}></div>
        <ContactUsForm />
      </motion.div>
      <ScrollToTop />
    </div>
  );
}
