import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <h2>Powering Businesses.</h2>
            <p>Powerful software to power your business.</p>
            <p>Collection of software designed to work individually, together, and with third-party services.</p>
        </section>
    );
};

export default HeroSection;
