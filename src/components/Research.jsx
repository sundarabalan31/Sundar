import React from "react";
import "./Research.css";
import research1 from "../assets/images/research1.jpg";
import research2 from "../assets/images/research2.jpg";

const Research = () => {
  return (
    <section className="research-section" id="research">
      <div className="research-overlay"></div>
      <h2 className="section-title">Research Highlights</h2>

      <div className="research-container">
        <div className="research-item">
          <div className="research-image left">
            <img src={research1} alt="Hyperspectral Modeling of Kelp Forests" />
          </div>
          <div className="research-content right">
            <h3>Hyperspectral Modeling of Kelp Forests</h3>
            <p>
              Developing PRISMA-based hyperspectral models validated using UAV
              imagery to map kelp canopy structure and health along coastal
              regions.
            </p>
            <span className="research-tag">(Ongoing, UMass Boston)</span>
          </div>
        </div>
        <div className="research-item reverse">
          <div className="research-image right">
            <img src={research2} alt="Machine Learning for Water Quality Retrieval" />
          </div>
          <div className="research-content left">
            <h3>Machine Learning for Water Quality Retrieval</h3>
            <p>
              Applying Mixture Density Networks (MDN) for estimating
              chlorophyll-a and turbidity from multispectral imagery in optically
              complex waters.
            </p>
            <span className="research-tag">(Collaboration: NASA)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
