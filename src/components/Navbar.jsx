import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
      <div className="nav-logo">
        <a href="#home" onClick={() => setIsOpen(false)} style={{ textDecoration: "none", color: "inherit" }}>
          Sundarabalan. V. Balasubramanian
        </a>
      </div>
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          </li>
          <li>
            <a href="#research" onClick={() => setIsOpen(false)}>RESEARCH</a>
          </li>
          <li>
            <a href="#publications" onClick={() => setIsOpen(false)}>PUBLICATIONS</a>
          </li>
          <li>
            <a href="#teaching" onClick={() => setIsOpen(false)}>TEACHING</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
