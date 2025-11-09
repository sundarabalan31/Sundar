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
          <p>I am a Postdoctoral Fellow in the Department of Biology at the University of Massachusetts Boston, USA. My research focuses on ocean color remote sensing, aquatic optics, hyperspectral imaging, and the application of machine learning for aquatic environmental monitoring.</p>
          <p>I have over a decade of experience in satellite remote sensing, optical modeling, and data-driven environmental analysis. I have worked with leading institutions including NASA Goddard Space Flight Center (GSFC), GESTAR-II/UMBC, and IIT Madras. My work connects field observations, satellite product validation, and AI-based modeling frameworks to better understand complex aquatic systems.</p>
        </>
      ),
    },
    {
      title: "Research Interests",
      icon: <FaFlask />,
      content: (
        <>
          <p>Ocean Satellite Remote Sensing and applications for aquatic systems</p>
          <p>Aquatic Optics and bio-optical modeling of natural waters</p>
          <p>Water Quality Assessment using multi-sensor satellite data</p>
          <p>Machine Learning (ML) and Deep Learning (DL) for data analysis</p>
          <p>Field Measurements for optical and biogeochemical parameter validation</p>
          <p>Drone (UAV) Imagery and Underwater Imaging for coastal and inland waters</p>
        </>
      ),
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      content: (
        <>
          <p> Ph.D. in Ocean Engineering (Ocean Optics), IIT Madras, India</p>
          <p>M.E. in Digital Communication Engineering, Anna University, Chennai</p>
          <p>B.E. in Electronics and Communication Engineering, Anna University, Chennai</p>
        </>
      ),
    },
    {
      title: "Professional Experience",
      icon: <FaBriefcase />,
      content: (
        <>
          <p> May 2025 – Present : Postdoctoral Fellow, Department of Biology, University of Massachusetts Boston, USA. Advisor: Prof. Jarrett Byrnes</p>
          <p> Nov 2022 – Nov 2023 : Postdoctoral Fellow, GESTAR-II, UMBC, USA. Advisor: Dr. Nima Pahlevan</p>
          <p> Mar 2017 – Nov 2019 : Postdoctoral Fellow, GSFC, NASA / UMD, USA. Advisor: Dr. Nima Pahlevan</p>
          <p> Jan 2016 – Jan 2017 : Postdoctoral Fellow, Laboratory of Oceanology and Geoscience (LOG), ULCO, France. Advisor: Prof. Cedric Jamet</p>
          <p> May 2014 – Nov 2014 : Pre-doctoral Fellow, IIT Madras, India. Advisor: Prof. Palanisamy Shanmugam</p>
          <p> 2020 – 2025 : Project Lead, GeoSensing & Imaging (GeoSI), India</p>
          <p> 2009 – 2010 : Project Associate, IIT Madras, Chennai, India</p>
          <p> 2007 – 2009 : Software Engineer, Sheeba Computers, Bangalore, India</p>
        </>
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
