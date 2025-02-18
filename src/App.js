import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Chart from "./components/Chart";
import "./App.module.css";
import SafiFeatures from "./components/SafiFeatures";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Chart />
        {/* <HeroSection /> */}
        <SafiFeatures />
        <Footer />
      </div>
    </div>
  );
}

export default App;
