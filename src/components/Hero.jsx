import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImg from "../assets/images/profile3.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="hello-text">— HELLO</p>
            <h1 className="hero-title">
              I'm <span className="highlight">Sundarabalan V. Balasubramanian</span>
            </h1>
            <h2 className="hero-subtitle">
              Postdoctoral Fellow, The Byrnes Lab, Department of Biology
            </h2>

            <p className="hero-description">
              I am a remote sensing scientist specializing in ocean satellite remote sensing
              and aquatic optics, currently a Postdoctoral Fellow at UMass Boston focusing on
              hyperspectral modeling of kelp forests and machine learning for water quality.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="explore-btn">
                Explore More
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={profileImg} alt="Dr. Sundarabalan" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
