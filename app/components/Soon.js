import React from "react";
import styles from "../styles/Soon.module.css";
import node from "../assets/node.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import pg from "../assets/pg.png";

//ws.png
import ws from "../assets/ws.png";
import Image from "next/image";
//pg.png
import { FaGamepad, FaUserEdit, FaTrophy, FaSearch } from "react-icons/fa"; // Importing icons for a better visual

const Soon = () => {
  //

  //

  return (
    <section className={styles.soon}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tic-Tac-Toe Game: Coming Soon!</h1>
        <p className={styles.subtitle}>
          Get ready to experience real-time multiplayer Tic-Tac-Toe! Play with
          real players from around the world.
        </p>

        <div className={styles.flow}>
          <h2 className={styles.howh2}>How the Game Works:</h2>
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
            <div className={styles.step}>
              <FaUserEdit className={styles.icon} />
              <h3>Customize Your Profile</h3>
              <p>
                Change your username and personadivze your gaming experience.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.techStack}>
          <h2>Technologies Used:</h2>

          <section className={styles.techbox}>
            <div className={styles.box}>
              <Image src={node} alt="" width={100} height={100} />
              Node.js
            </div>
            <div className={styles.box}>
              <Image src={express} alt="" width={100} height={100} />
              Express.js
            </div>
            <div className={styles.box}>
              <Image src={js} alt="" width={100} height={100} />
              JavaScript
            </div>
            <div className={styles.box}>
              <Image src={pg} alt="" width={100} height={100} />
              PostgreSQL
            </div>
            <div className={styles.box}>
              <Image src={ws} alt="" width={100} height={100} />
              WebSocket (WS) for real-time updates
            </div>
          </section>
        </div>

        <div className={styles.footer}>
          <p>
            Stay tuned for more updates and get ready to play with real players
            across the globe!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Soon;
