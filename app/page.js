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
import { useScrollAnimation } from "./Hooks/useScrollAnimation";

export default function Home() {
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const backendfolioRef = useRef(null);
  const soonRef = useRef(null);
  const contactRef = useRef(null);

  // Apply scroll animations
  useScrollAnimation(heroRef);
  useScrollAnimation(experienceRef);
  useScrollAnimation(portfolioRef);
  useScrollAnimation(backendfolioRef);
  useScrollAnimation(soonRef);
  useScrollAnimation(contactRef);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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

      {/* Sections with fade-in animation */}
      <div ref={heroRef} className="fadeInUp">
        <HeroSection />
      </div>

      <div ref={experienceRef} className="fadeInUp">
        <div className={styles.divider}></div>
        <ExperienceSkills />
      </div>

      <div ref={portfolioRef} className="fadeInUp">
        <div className={styles.divider}></div>
        <Portfolio />
      </div>

      <div ref={backendfolioRef} className="fadeInUp">
        <div className={styles.divider}></div>
        <Backendfolio />
      </div>

      <div ref={soonRef} className="fadeInUp">
        <div className={styles.divider}></div>
        <Soon />
      </div>

      <div ref={contactRef} className="fadeInUp">
        <div className={styles.divider}></div>
        <ContactUsForm />
      </div>

      <ScrollToTop />
    </div>
  );
}
