import React, { useState } from "react";
import "./Teaching.css";
import { FaChalkboardTeacher, FaUserGraduate, FaBrain, FaMicrophone } from "react-icons/fa";

const Teaching = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Teaching Experience",
      icon: <FaChalkboardTeacher />,
      content: (
        <>
          <p>
            <span className="gold-text"> University of Massachusetts Boston, USA</span> 
            <span className="gold-text"> - Teaching Assistant</span> – Handled Kelp Remote Sensing Lab for undergraduate students, Department of Biology. Guided students in radiometric data collection, satellite imagery processing, and research-based learning.
          </p>
          <p>
            <span className="gold-text">National Institute of Technology (NIT), Calicut, India</span> 
            <span className="gold-text"> - Adhoc Faculty</span> – Taught Digital Image Processing for M.Tech (ECE) students. Designed assignments, conducted lab sessions, and evaluated project-based assessments.
          </p>
          <p>
            <span className="gold-text"> Indian Institute of Information Technology (IIIT), Kurnool, India</span> 
            <span className="gold-text"> - Visiting Faculty</span> – Handled Basic Electrical Engineering for Computer Science undergraduates. Introduced fundamental electrical concepts through demonstrations and problem-solving sessions.
          </p>
        </>
      )
    },
    {
      title: "Workshops Conducted",
      icon: <FaBrain />,
      content: (
        <>
          <p>
            <span className="gold-text">March 2024</span> – Fundamentals of Machine Learning and its Applications in Ocean Color Remote Sensing. Organized a one-day workshop for undergraduate students at Kalasalingam University, India.
          </p>
          <p>
            <span className="gold-text">December 2024</span> – Integrated Remote Sensing and Radiative Transfer Modeling Framework for Coastal Water Studies. Conducted a one-day winter workshop for Ph.D. scholars at the Department of Ocean Engineering, IIT Madras, India.
          </p>
        </>
      )
    },
    {
      title: "Mentorship & Supervision",
      icon: <FaUserGraduate />,
      content: (
        <>
          <p><span className="gold-text"> 2025 – Present</span> – Mentor for Ph.D. student Nivedita Priyadarshini, Virginia Tech, USA</p>
          <p><span className="gold-text"> 2023</span> – Mentor for Sandhani, Ph.D. student, IIT Madras</p>
          <p><span className="gold-text"> 2020 – 2024</span> – Supervised undergraduate interns (Catherine, Manjunath) on remote sensing and image analysis projects</p>
          <p><span className="gold-text"> 2020 – 2025</span> – Project Lead, GeoSI, supervised junior engineers and interns on satellite image processing and ML projects</p>
        </>
      )
    },
    {
      title: "Guest Lectures Delivered",
      icon: <FaMicrophone />,
      content: (
        <>
          <p><span className="gold-text"> 2024</span> – Ocean Color Remote Sensing, Saveetha University, India</p>
          <p><span className="gold-text"> 2023</span> – Mixture Density Networks (MDN) for Water Quality Parameter Retrieval, VIT, Chennai</p>
          <p><span className="gold-text"> 2019</span> – Satellite Image Processing for Ocean Applications, Chennai Institute of Technology</p>
          <p><span className="gold-text"> 2018</span> – Aquatic Remote Sensing, Adhiyamaan Engineering College</p>
          <p><span className="gold-text"> 2017</span> – Satellite Image Processing for Ocean Applications, Rohini Engineering College, Chennai</p>
        </>
      )
    },
  ];

  return (
    <section className="teaching-section" id="teaching">
      <div className="teaching-overlay"></div>

      <div className="teaching-container">
        <h2 className="teaching-heading">Teaching & Mentorship</h2>

        {sections.map((item, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <div className="accordion-title">
                <span className="icon">{item.icon}</span> {item.title}
              </div>
              <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>&#9662;</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;
