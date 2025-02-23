import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle(styles.darkMode, !isDarkMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.brand}>Insolify</span>
      </div>

      <div className={styles.links}>
        <a href="#">Contact</a>
        <a href="#">Settle</a>
        <a href="#">Safi</a>
        <a href="#">Blog</a>
      </div>
      
      <div className={styles.actions}>
        <button className={styles.themeToggleBtn} onClick={toggleTheme}>
        </button>
        <button className={styles.languageBtn}>EN</button>
        <span className={styles.searchIcon}>🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;
