import React from "react";
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaGithub,FaFilePdf  } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi"; 
import oceanVideo from "../assets/images/deep.mp4";
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-message">
            I’m always happy to connect with fellow researchers, collaborators, 
            and students interested in remote sensing, ocean optics, or 
            environmental data analysis. Please feel free to reach out by email 
            or connect through my academic profiles below.
          </p>

          <div className="contact-details">
            <p className="contact-title">Contact Me</p>
            <p>Sundarabalan. V. Balasubramanian</p>
            <p>Postdoctoral Fellow, Department of Biology,</p>
            <p>University of Massachusetts Boston</p>
            <p>100 Morrissey Blvd, Boston, MA 02125, USA</p>
            <p><strong>Email:</strong> <a href="mailto:vbsbalanin@gmail.com" className="email-link">vbsbalanin@gmail.com</a></p>
          </div>

          <div className="contact-icons">
            <a
              href="https://scholar.google.com/citations?hl=en&user=-_-rEs0AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Google Scholar"
            >
              <GiGraduateCap />
            </a>
            <a
              href="https://github.com/sundarabalan31"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sundar-balan-ba5a91143/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:vbsbalanin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
            href="/files/CV_Sundarabalan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="CV"
          >
            <FaFilePdf />
          </a>
            </div>
        </div>
        <div className="contact-right">
<video src={oceanVideo} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
};

export default Contact;
