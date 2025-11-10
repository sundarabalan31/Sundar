import React, { useState } from "react";
import "./About.css";
import { FaChevronDown, FaUser, FaFlask, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Profile2 from "../assets/images/Profile2.png";
import BackgroundVideo from "../assets/images/ocean.mp4";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const sections = [
  {
    title: "About Me",
    icon: <FaUser />,
    content: (
      <>
        <p>
          I am a <span className="highlight">Postdoctoral Fellow</span> in the Department of Biology at the
          <span className="highlight"> University of Massachusetts Boston, USA</span>. My research focuses on
          <span className="highlight"> ocean color remote sensing</span>, aquatic optics, hyperspectral imaging, and
          the application of <span className="highlight">machine learning</span> for aquatic environmental monitoring.
        </p>
        <p>
          I have over a decade of experience in satellite remote sensing, optical modeling, and data-driven environmental analysis.
          I have worked with leading institutions including
          <span className="highlight"> NASA Goddard Space Flight Center (GSFC)</span>,
          <span className="highlight"> GESTAR-II/UMBC</span>, and
          <span className="highlight"> IIT Madras</span>. My work connects field observations, satellite product validation,
          and AI-based modeling frameworks to better understand complex aquatic systems.
        </p>
      </>
    ),
  },
  {
    title: "Research Interests",
    icon: <FaFlask />,
    content: (
      <ul className="about-list">
        <li><span className="highlight">Ocean Satellite Remote Sensing</span> and applications for aquatic systems</li>
        <li><span className="highlight">Aquatic Optics</span> and bio-optical modeling of natural waters</li>
        <li>Water Quality Assessment using <span className="highlight">multi-sensor satellite data</span></li>
        <li><span className="highlight">Machine Learning (ML)</span> and <span className="highlight">Deep Learning (DL)</span> for data analysis</li>
        <li>Field Measurements for optical and biogeochemical parameter validation</li>
        <li><span className="highlight">Drone (UAV) Imagery </span> and Underwater Imaging for coastal and inland waters</li>
      </ul>
    ),
  },
  {
    title: "Education",
    icon: <FaGraduationCap />,
    content: (
      <ul className="about-list">
        <li><span className="highlight">Ph.D.</span> in Ocean Engineering (Ocean Optics), <span className="highlight">IIT Madras</span>, India</li>
        <li><span className="highlight">M.E.</span> in Digital Communication Engineering, <span className="highlight">Anna University</span>, Chennai</li>
        <li><span className="highlight">B.E.</span> in Electronics and Communication Engineering, <span className="highlight">Anna University</span>, Chennai</li>
      </ul>
    ),
  },
  {
  title: "Professional Experience",
  icon: <FaBriefcase />,
  content: (
    <ul className="about-list">
      <li>
        <span className="highlight">May 2025 – Present</span>: Postdoctoral Fellow, 
        <span className="highlight"> Department of Biology, University of Massachusetts Boston, USA</span>. Advisor: <span className="highlight">Prof. Jarrett Byrnes</span>
      </li>
      <li>
        <span className="highlight">Nov 2022 – Nov 2023</span>: Postdoctoral Fellow, 
        <span className="highlight"> GESTAR-II, UMBC, USA</span>. Advisor: <span className="highlight">Dr. Nima Pahlevan</span>
      </li>
      <li>
        <span className="highlight">Mar 2017 – Nov 2019</span>: Postdoctoral Fellow, 
        <span className="highlight"> GSFC, NASA / UMD, USA</span>. Advisor: <span className="highlight">Dr. Nima Pahlevan</span>
      </li>
      <li>
        <span className="highlight">Jan 2016 – Jan 2017</span>: Postdoctoral Fellow, 
        <span className="highlight"> Laboratory of Oceanology and Geoscience (LOG), ULCO, France</span>. Advisor: <span className="highlight">Prof. Cedric Jamet</span>
      </li>
      <li>
        <span className="highlight">May 2014 – Nov 2014</span>: Pre-doctoral Fellow, 
        <span className="highlight"> IIT Madras, India</span>. Advisor: <span className="highlight">Prof. Palanisamy Shanmugam</span>
      </li>
      <li>
        <span className="highlight">2020 – 2025</span>: Project Lead, 
        <span className="highlight"> GeoSensing & Imaging (GeoSI), India</span>
      </li>
      <li>
        <span className="highlight">2009 – 2010</span>: Project Associate, 
        <span className="highlight"> IIT Madras, Chennai, India</span>
      </li>
      <li>
        <span className="highlight">2007 – 2009</span>: Software Engineer, 
        <span className="highlight"> Sheeba Computers, Bangalore, India</span>
      </li>
    </ul>
  ),
},

];

  return (
    <section className="about-section" id="about">
      <video className="about-bg-video" autoPlay loop muted playsInline>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="about-overlay"></div>

      <div className="about-container">
        <div className="about-image">
          <img src={Profile2} alt="Profile" />
        </div>

        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          {sections.map((section, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-title">
                  <span className="icon">{section.icon}</span>
                  <span>{section.title}</span>
                </div>
                <FaChevronDown className={`arrow ${activeIndex === index ? "rotate" : ""}`} />
              </div>
              {activeIndex === index && (
                <div className="accordion-content">{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
