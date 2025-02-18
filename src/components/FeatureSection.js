import React from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = ({ title, description }) => {
    return (
        <div className={styles.feature}>
            <h2 className={styles.featureTitle}>{title}</h2>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
};

export default FeatureSection;