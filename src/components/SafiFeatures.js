import React from "react";
import styles from "./SafiFeatures.module.css";

const intelligenceFeatures = [
  {
    title: "Intelligence",
    description:
      "Business intelligence capabilities including Support, Sales, Project management and more.",
    icon: "📊",
  },
  {
    title: "Fraud Detection",
    description:
      "Smart Suspicious activity Detection, Prevention, Learning and Protection.",
    icon: "🔓",
  },
  {
    title: "Analysis",
    description:
      "Deep, valuable and meaningful Business insights, Sales forecast to boost business growth.",
    icon: "📈",
  },
  {
    title: "Multilingual",
    description:
      "English, Hausa, French, Yoruba, Igbo, Pidgin and many more languages fully supported.",
    icon: "🌍",
  },
];

const businessFeatures = [
  {
    title: "Banking",
    description:
      "All in one banking platform for Bank of any scale. Integrates with processors, applications and more.",
    icon: "🏦",
  },
  {
    title: "Messaging",
    description:
      "Inbox, file sharing, groups and collaboration for teams of any scale.",
    icon: "💬",
  },
  {
    title: "Projects management",
    description:
      "Workflows, tasks, and Projects management, kanban and time tracking.",
    icon: "📋",
  },
  {
    title: "Human Resource",
    description:
      "Manage Recruitment, Payroll, Attendance, Checkin, Leave, Holidays and more.",
    icon: "📝",
  },
];

const SafiFeatures = () => {
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        {/* Safi Section */}
        <div className={`${styles.section} ${styles.safi}`}>
          <div className={styles.top}>
            <h2 className={styles.sectionTitle}>Safi</h2>
            <p>An Artificial Intelligence agent and assistance platform for businesses. Automates customer support, research, meetings, projects and much more.</p>
            <p style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>View here</p>
          </div>
          <div className={styles.featureGrid}>
            {intelligenceFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <span className={styles.icon}>{feature.icon}</span>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suite Section */}
        <div className={styles.hidemobile}>
          <div className={`${styles.section} ${styles.siute}`}>
            <div className={styles.featureGrid}>
              {businessFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.icon}>{feature.icon}</span>
                  <div className={styles.featureText}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.top}>
              <h2 className={styles.sectionTitle}>Suite</h2>
              <p>Business management suite for businesses of any scale. Useful for internal communication, business automation and more.</p>
              <p style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Explore Suite</p>
            </div>
          </div>
        </div>
        <div className={styles.hidedesktop}>

          <div className={styles.section}>
            <div className={styles.top}>
              <h2 className={styles.sectionTitle}>Suite</h2>
              <p>Business management suite for businesses of any scale. Useful for internal communication, business automation and more.</p>
              <p style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Explore Suite</p>
            </div>

            {/* Move the featureGrid below this */}
            <div className={styles.featureGrid}>
              {businessFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.icon}>{feature.icon}</span>
                  <div className={styles.featureText}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SafiFeatures;
