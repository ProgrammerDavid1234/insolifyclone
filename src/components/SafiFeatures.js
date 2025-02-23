import React from "react";
import styles from "./SafiFeatures.module.css";

const features = [
  {
    category: "Intelligence",
    items: [
      { title: "AI Assistance", description: "Automate customer support, research, meetings, and more.", icon: "🤖" },
      { title: "Fraud Detection", description: "Detect and prevent suspicious activities using AI.", icon: "🔍" },
      { title: "Deep Analytics", description: "Gain valuable business insights and sales forecasts.", icon: "📈" },
      { title: "Multilingual", description: "Supports English, Hausa, French, Yoruba, Igbo, and more.", icon: "🌍" },
    ]
  },
  {
    category: "Business Suite",
    items: [
      { title: "Banking", description: "A complete banking platform for institutions of any scale.", icon: "🏦" },
      { title: "Messaging", description: "Team collaboration through inbox, file sharing, and groups.", icon: "💬" },
      { title: "Project Management", description: "Kanban boards, time tracking, and workflow automation.", icon: "📋" },
      { title: "HR Management", description: "Manage payroll, recruitment, and attendance effortlessly.", icon: "📝" },
    ]
  }
];

const SafiFeatures = () => {
  return (
    <div className={styles.container}>
      {features.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.category}</h2>
          <div className={styles.featureGrid}>
            {section.items.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <span className={styles.icon}>{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SafiFeatures;
