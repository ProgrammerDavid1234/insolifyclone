import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Safi</h1>
            <nav className={styles.nav}>
                <a href="#intelligence">Intelligence</a>
                <a href="#fraud-detection">Fraud Detection</a>
                <a href="#analysis">Analysis</a>
                <a href="#multilingual">Multilingual</a>
                <a href="#banking">Banking</a>
                <a href="#messaging">Messaging</a>
                <a href="#projects-management">Projects Management</a>
                <a href="#human-resource">Human Resource</a>
                <a href="#suite">Suite</a>
            </nav>
        </header>
    );
};

export default Header;