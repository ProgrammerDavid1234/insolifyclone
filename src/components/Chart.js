import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./Chart.module.css";

const data = [
  { value: 39.1, color: "#007bff" },
  { value: 32.51, color: "#ff8c00" },
  { value: 13.68, color: "#28a745" },
  { value: 8.71, color: "#dc3545" },
  { value: 6.01, color: "#6f42c1" },
];

const Chart = () => {
  return (
    <div className={styles.general}>
      <div className={styles.chartContainer}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <section className={styles.hero}>
          <h1>Powering Businesses.</h1>
          <p>Powerful software to power your business.</p>
          <p>
            Collection of software designed to work individually, together and with
            third-party services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Chart;
