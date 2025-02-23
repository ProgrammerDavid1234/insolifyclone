import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./Chart.module.css";

const data = [
  { value: 39.1, color: "#8B5CF6" }, // HashiCorp's primary color
  { value: 32.51, color: "#F59E0B" },
  { value: 13.68, color: "#10B981" },
  { value: 8.71, color: "#EF4444" },
  { value: 6.01, color: "#6366F1" },
];

const Chart = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <section className={styles.heroText}>
          <h1>Powering Businesses.</h1>
          <p className={styles.subtext}>
            Scalable infrastructure. Seamless integrations.
          </p>
          <p className={styles.description}>
            A suite of powerful tools designed to automate and optimize workflows, enabling businesses to innovate at scale.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>

        <div className={styles.chartContainer}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
  