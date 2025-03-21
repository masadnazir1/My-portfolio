"use client";

import React, { useState } from "react";

import styles from "../styles/Header.module.css";
import { FaBars } from "react-icons/fa"; // Mobile menu icon
import Image from "next/image";
import asad from "../assets/asad.png";

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    onNavigate(section); // Call the parent scroll function
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={asad}
          alt="M Asad Nazir"
          width={40}
          height={40}
          className={styles.logoimage}
        />
        <p className={styles.name} href="/">
          M Asad Nazir
        </p>
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
            <p> Backend Projects</p>
          </li>

          <li onClick={() => handleNavigation("contact")}>
            <p className={styles.contactbtn}>Contact Us</p>
          </li>
        </ul>
      </nav>

      {/* Mobile menu icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars size={30} />
      </div>

      {/* Mobile menu modal */}
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
              <p> Frontend Projects</p>
            </li>
            <li onClick={() => handleNavigation("backendfolio")}>
              <p> Backend Projects</p>
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
