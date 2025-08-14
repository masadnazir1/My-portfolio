"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import asad from "../assets/asad.png";

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Lock/unlock scroll
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Image
          src={asad}
          alt="M Asad Nazir"
          width={40}
          height={40}
          className={styles.logoimage}
        />
        <p className={styles.name}>M Asad Nazir</p>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li onClick={() => handleNavigation("hero")}>
            <p>Home</p>
          </li>
          <li onClick={() => handleNavigation("experience")}>
            <p>Skills</p>
          </li>
          <li onClick={() => handleNavigation("portfolio")}>
            <p>Frontend Projects</p>
          </li>
          <li onClick={() => handleNavigation("backendfolio")}>
            <p>Backend Projects</p>
          </li>
          <span onClick={() => handleNavigation("contact")}>
            <p className={styles.contactbtn}>Contact Us</p>
          </span>
        </ul>
      </nav>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars size={30} />
      </div>

      {isMenuOpen && (
        <div className={styles.menuModal}>
          <button onClick={toggleMenu} className={styles.closebtn}>
            X
          </button>
          <ul>
            <li onClick={() => handleNavigation("hero")}>
              <p>Home</p>
            </li>
            <li onClick={() => handleNavigation("experience")}>
              <p>Skills</p>
            </li>
            <li onClick={() => handleNavigation("portfolio")}>
              <p>Frontend Projects</p>
            </li>
            <li onClick={() => handleNavigation("backendfolio")}>
              <p>Backend Projects</p>
            </li>
            <li
              onClick={() => handleNavigation("contact")}
              className={styles.contactbtnmobile}
            >
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
