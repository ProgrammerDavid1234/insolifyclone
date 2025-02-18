import React from 'react';
import styles from '../styles/ChartSection.module.css';
import chart from '../assets/chart.png';

const ChartSection = () => {
    return (
        <section className={styles.chart}>
            <img src={chart} alt="Chart" />
        </section>
    );
};

export default ChartSection;
