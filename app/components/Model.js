import React, { useState } from "react";
import styles from "../styles/Model.module.css"; // Assuming you'll create the CSS for the modal

const Model = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Apologies</h2>
        <p>
          I apologize, but the GitHub source code is not available for public
          access. It will only be provided to individuals who are genuinely
          interested in exploring the project.
        </p>
        <button onClick={closeModal} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Model;
