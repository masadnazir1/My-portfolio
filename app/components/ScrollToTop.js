"use client";

import { useState, useEffect } from "react";
import styles from "../styles/ScrollToTop.module.css";
import Image from "next/image";
import up from "../assets/up.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <Image src={up} width={30} height={30} alt="Scroll to Top" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
