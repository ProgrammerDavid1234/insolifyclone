import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left Section: Logo + Social Icons */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <span className={styles.bluePart}>Insol</span>
          <span className={styles.orangePart}>ify</span>
        </div>
        <div className={styles.socialIcons}>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Center Section: Navigation Links */}
      <div className={styles.centerSection}>
        <a href="#">About</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>

      {/* Right Section: Status Button */}
      <div className={styles.rightSection}>
        <button className={styles.statusButton}>Status</button>
      </div>
    </footer>
  );
};

export default Footer;
