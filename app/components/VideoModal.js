"use client";

import styles from "./VideoModal.module.css";

export default function VideoModal({ videoSrc, show, onClose }) {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <button className={styles.closeBtn} onClick={onClose}>
        &times;
      </button>

      <video className={styles.videoPlayer} src={videoSrc} autoPlay controls />
    </div>
  );
}
