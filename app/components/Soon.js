import React, { useState } from "react";
import styles from "../styles/Soon.module.css";
import node from "../assets/node.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import pg from "../assets/pg.png";
import ws from "../assets/ws.png";
import VideoModal from "./VideoModal";
import Image from "next/image";
import {
  FaGamepad,
  FaUserEdit,
  FaTrophy,
  FaSearch,
  FaSms,
  FaMailBulk,
} from "react-icons/fa";

const Soon = () => {
  const [showFullSnappit, setShowFullSnappit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <VideoModal
        videoSrc="Snappit_MArketing_video.mp4" // path to your video in public folder
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      <section className={styles.soon}>
        <div className={styles.container}>
          <h1 className={styles.title}>Snappit & Tic-Tac-Toe Coming Soon!</h1>
          <p className={styles.subtitle}>
            Explore Snappit – your smart email companion – and get ready for
            real-time multiplayer Tic-Tac-Toe!
          </p>

          {/* Snappit Overview */}
          <div className={styles.snappitOverview}>
            <h2>About Snappit</h2>
            <p
              className={`${styles.snappitText} ${
                showFullSnappit ? styles.expanded : ""
              }`}
            >
              Snappit is an innovative email companion app that ensures you
              never miss important emails, even offline. It summarizes emails,
              sends notifications via SMS, and helps you manage your inbox
              efficiently. Features include:
            </p>

            <ul
              className={`${styles.snappitFeatures} ${
                showFullSnappit ? styles.expanded : ""
              }`}
            >
              <li>📩 Email Summaries via SMS (works offline)</li>
              <li>🔔 Important Email Notifications</li>
              <li>📁 Organize Emails by Priority</li>
              <li>⚡ Fast Search & Quick Access</li>
              <li>🔒 Secure Authentication with Google OAuth</li>
              <li>📊 Analytics on Email Open & Read</li>
            </ul>

            {showFullSnappit ? (
              <button
                className={styles.toggleBtn}
                onClick={() => setShowFullSnappit(false)}
              >
                Show Less
              </button>
            ) : (
              <button
                className={styles.toggleBtn}
                onClick={() => setShowFullSnappit(true)}
              >
                Read More
              </button>
            )}

            <button
              className={styles.VideBtn}
              onClick={() => setShowModal(true)}
            >
              Watch A Video
            </button>
          </div>

          {/* Tic-Tac-Toe Steps */}
          <div className={styles.flow}>
            <h2 className={styles.howh2}>How Tic-Tac-Toe Works:</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <FaGamepad className={styles.icon} />
                <h3>Create a Game</h3>
                <p>
                  Start a new game as a host and wait for a challenger to join.
                </p>
              </div>
              <div className={styles.step}>
                <FaSearch className={styles.icon} />
                <h3>Join a Game</h3>
                <p>
                  Find an active game and join to compete with another player in
                  real-time.
                </p>
              </div>
              <div className={styles.step}>
                <FaTrophy className={styles.icon} />
                <h3>Track Your Wins</h3>
                <p>Earn points and track your progress after each match.</p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className={styles.techStack}>
            <h2>Technologies Used</h2>
            <section className={styles.techbox}>
              <div className={styles.box}>
                <Image src={node} alt="" width={80} height={80} /> Node.js
              </div>
              <div className={styles.box}>
                <Image src={express} alt="" width={80} height={80} /> Express.js
              </div>
              <div className={styles.box}>
                <Image src={js} alt="" width={80} height={80} /> JavaScript
              </div>
              <div className={styles.box}>
                <Image src={pg} alt="" width={80} height={80} /> PostgreSQL
              </div>
              <div className={styles.box}>
                <Image src={ws} alt="" width={80} height={80} /> WebSocket
                (Real-time)
              </div>
            </section>
          </div>

          <div className={styles.footer}>
            <p>
              Stay tuned for Snappit updates and Tic-Tac-Toe launches!
              Experience next-level email management and real-time multiplayer
              gaming.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Soon;
