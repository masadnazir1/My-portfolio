"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import asad from "../assets/asad.png";
import laptop from "../assets/3d_project.png";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const canvasRef = useRef(null);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Masad-Frontend-Developer.pdf";
    link.download = "Masad-Frontend-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const nodes = [];
    const lines = [];

    canvas.width = window.innerWidth;
    canvas.height = 500;

    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"];

    // Create more random nodes (extended)
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    const connectNodes = () => {
      lines.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            lines.push({
              x1: nodes[i].x,
              y1: nodes[i].y,
              x2: nodes[j].x,
              y2: nodes[j].y,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // Draw nodes with shiny effect
      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );
        gradient.addColorStop(0, "#fff"); // bright center
        gradient.addColorStop(0.2, node.color);
        gradient.addColorStop(1, "rgba(255,255,255,0)"); // fade edge

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      connectNodes();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>

      <section className={styles.RowCollum}>
        <div className={styles.heroContainer}>
          {/* Profile Section with radial wave */}
          <div className={styles.ImageSection}>
            <div className={styles.profileWrapper}>
              <Image
                src={asad}
                width={150}
                height={150}
                alt="Profile Picture"
                className={styles.profileImage}
              />
            </div>
            <h2 className={styles.heroTitle}>M Asad Nazir</h2>
          </div>

          {/* Hero Text */}
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading}>
              Frontend Developer | React.js | WordPress | Node.js
            </h1>
            <p className={styles.heroText}>
              Passionate about crafting seamless user experiences. I thrive in
              team collaborations and diverse projects. Available for freelance
              & consulting—let’s build something great together!
            </p>
            <button className={styles.Download} onClick={downloadPDF}>
              Download CV
            </button>
          </div>
        </div>

        {/* 3D Laptop / web dev image */}
        <div className={styles.heroimage}>
          <Image
            src={laptop}
            width={300}
            height={300}
            alt="Laptop"
            className={styles.heroSectionimage}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
