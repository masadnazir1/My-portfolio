"use client";

import React, { useRef } from "react";
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
  // Create refs for each section
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const backendfolioRef = useRef(null);
  const soonRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to a section when called
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass the scrollToSection function and refs to the header */}
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
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={experienceRef}>
        <div className={styles.divider}></div>
        <ExperienceSkills />
      </div>
      <div ref={portfolioRef}>
        <div className={styles.divider}></div>
        <Portfolio />
      </div>
      <div ref={backendfolioRef}>
        <div className={styles.divider}></div>
        <Backendfolio />
      </div>
      <div ref={soonRef}>
        <div className={styles.divider}></div>
        <Soon />
      </div>
      <div ref={contactRef}>
        <div className={styles.divider}></div>
        <ContactUsForm />
      </div>
      <ScrollToTop />
    </div>
  );
}
