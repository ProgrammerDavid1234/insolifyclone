import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    // Toggle dark mode for the entire document
    document.body.classList.toggle(styles.darkMode, !isDarkMode);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.themeToggleBtn} onClick={toggleTheme}>
        {isDarkMode ? "🌙" : "☀️"}
      </button>
      <div className={styles.logo}>
        <span className={styles.bluePart}>Insol</span>
        <span className={styles.orangePart}>ify</span>
      </div>

      <div className={styles.links}>
        <a href="#">Contact</a>
        <a href="#">Settle</a>
        <a href="#">Safi</a>
        <a href="#">Blog</a>
      </div>
      <div className={styles.actions}>
        <button className={styles.languageBtn}>EN</button>
        <span className={styles.searchIcon}>🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;
