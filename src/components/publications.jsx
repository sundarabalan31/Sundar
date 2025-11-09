import React, { useState } from "react";
import "./Publications.css";
import {
  FaBook,
  FaDatabase,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("refereed");
  const [showTimeline, setShowTimeline] = useState(false);

  const tabs = [
    { id: "refereed", label: "Refereed Publications", icon: <FaBook /> },
    { id: "reports", label: "Published Reports", icon: <FaFileAlt /> },
    { id: "datasets", label: "Published Datasets", icon: <FaDatabase /> },
  ];

  const refereed = [
    {
      year: "2025",
      title:
        "On the generalization ability of neural networks for hyperspectral remote sensing of absorption properties across optically complex waters",
      authors:
        "Werther, M., Burggraaff, O., Gurlin, D., Saranathan, A.M., Balasubramanian, S.V., et al.",
      journal: "Remote Sensing of Environment, 328",
      link: "https://doi.org/10.1016/j.rse.2025.114820",
    },
    {
      year: "2025",
      title:
        "Mixture density networks for reconstructing historical ocean-color products over inland and coastal waters: Demonstration and validation",
      authors: "Balasubramanian, S.V., et al.",
      journal: "Frontiers in Remote Sensing, 6",
      link: "https://www.frontiersin.org/articles/10.3389/frsen.2025.1488565/full",
    },
    {
      year: "2024",
      title:
        "Assessment of probabilistic neural networks for the dual estimation of water quality indicators and uncertainties from multi- and hyperspectral observations",
      authors:
        "Saranathan, A.M., Pahlevan, N., Werther, M., Odermatt, D., Balasubramanian, S.V.",
      journal: "Frontiers in Remote Sensing, 5",
      link: "https://www.frontiersin.org/articles/10.3389/frsen.2024.1383147/full",
    },
    {
      year: "2024",
      title:
        "Influence of the Bubbles on the Hyperspectral Reflectance and Watercolour Products",
      authors:
        "Sandhani, C.G., Shanmugam, P., Balasubramanian, S.V., Sannasiraj, S.A.",
      journal: "IEEE Access, 12",
      link: "https://ieeexplore.ieee.org/abstract/document/10530631",
    },
    {
      year: "2024",
      title:
        "A Retrospective Analysis of Remote-Sensing Reflectance Products in Coastal and Inland Waters",
      authors: "Pahlevan, N., Balasubramanian, S.V., et al.",
      journal: "IEEE Geoscience and Remote Sensing Letters, 21",
      link: "https://ieeexplore.ieee.org/abstract/document/10384403",
    },
    {
      year: "2023",
      title:
        "Towards global long-term water transparency products from the Landsat archive",
      authors:
        "Maciel, D.A., Pahlevan, N., Barbosa, C.C.F., Martins, V.S., Smith, B., O’Shea, R.E., Balasubramanian, S.V., et al.",
      journal: "Remote Sensing of Environment, 299, 113889",
      link: "https://doi.org/10.1016/j.rse.2023.113889",
    },
    {
      year: "2023",
      title:
        "GLORIA — A globally representative hyperspectral in situ dataset for optical sensing of water quality",
      authors: "Moritz, K.L., Pahlevan, N., Balasubramanian, S.V., et al.",
      journal: "Scientific Data, 10(1)",
      link: "https://www.nature.com/articles/s41597-023-01973-y",
    },
    {
      year: "2021",
      title:
        "ACIX-Aqua: A global assessment of atmospheric correction methods for Landsat-8 and Sentinel-2 over lakes, rivers, and coastal waters",
      authors: "Pahlevan, N., Mangin, A., Balasubramanian, S.V., et al.",
      journal: "Remote Sensing of Environment, 258, 112366",
      link: "https://doi.org/10.1016/j.rse.2021.112366",
    },
    {
      year: "2020",
      title:
        "A robust remote sensing technique for the estimation of suspended sediment concentration over inland and coastal waters",
      authors: "Balasubramanian, S.V., Pahlevan, N., et al.",
      journal: "Remote Sensing of Environment, 246, 111768",
      link: "https://doi.org/10.1016/j.rse.2020.111768",
    },
    {
      year: "2019",
      title:
        "Sentinel-2/Landsat-8 product consistency and implications for monitoring aquatic systems",
      authors:
        "Pahlevan, N., Chittimalli, S.K., Balasubramanian, S.V., Vellucci, V.",
      journal: "Remote Sensing of Environment, 201, 47-56",
      link: "https://doi.org/10.1016/j.rse.2018.10.027",
    },
    {
      year: "2018",
      title:
        "Towards long-term aquatic science products from heritage Landsat missions",
      authors: "Pahlevan, N., Balasubramanian, S.V., Sarkar, S., Franz, B.",
      journal: "Remote Sensing, 10, 1337",
      link: "https://www.mdpi.com/2072-4292/10/9/1337",
    },
    {
      year: "2018",
      title:
        "Monte Carlo simulations of backscattering measurements for associated uncertainty",
      authors: "Sayoob, V., Shanmugam, P., Balasubramanian, S.V.",
      journal: "Optics Express, 26, 21258-21270",
      link: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-26-16-21258",
    },
    {
      year: "2017",
      title:
        "Sentinel-2 MSI data processing for aquatic science applications: Demonstrations and validations",
      authors:
        "Pahlevan, N., Sarkar, S., Franz, B., Balasubramanian, S.V., He, J.",
      journal: "Remote Sensing of Environment, 201, 47-56",
      link: "https://doi.org/10.1016/j.rse.2017.08.033",
    },
    {
      year: "2016",
      title:
        "Modeling of underwater light field fluctuations in coastal oceanic waters: Validation with experimental data",
      authors: "Balasubramanian, S.V., Shanmugam, P.",
      journal: "Ocean Science Journal, 51, 67-86",
      link: "https://link.springer.com/article/10.1007/s12601-016-0007-y",
    },
    {
      year: "2015",
      title:
        "Modeling of underwater light fields in turbid and eutrophic waters: Application and validation with experimental data",
      authors: "Balasubramanian, S.V., Shanmugam, P.",
      journal: "Ocean Science, 11, 33-52",
      link: "https://os.copernicus.org/articles/11/33/2015/",
    },
    {
      year: "2014",
      title:
        "Modeling the inherent optical properties and estimating the constituents’ concentrations in turbid and eutrophic waters",
      authors:
        "Gokul, E., Shanmugam, P., Balasubramanian, S.V., Arvind, S., Chauhan, P.",
      journal: "Continental Shelf Research, 84, 120-138",
      link: "https://doi.org/10.1016/j.csr.2014.05.013",
    },
    {
      year: "2013",
      title:
        "Radiative transfer modeling of upwelling light field in coastal waters",
      authors: "Balasubramanian, S.V., Shanmugam, P., Manjusha, S.S.",
      journal:
        "Journal of Quantitative Spectroscopy and Radiative Transfer, 121, 30-44",
      link: "https://doi.org/10.1016/j.jqsrt.2013.01.016",
    },
    {
      year: "2013",
      title:
        "OSABT: An innovative algorithm to detect and characterize ocean surface algal blooms",
      authors: "Shanmugam, P., Suresh, M., Balasubramanian, S.V.",
      journal: "IEEE J. Sel. Top. Appl. Earth Obs. Remote Sens., 6, 1879–1892",
      link: "https://ieeexplore.ieee.org/abstract/document/6387631",
    },
    {
      year: "2011",
      title:
        "A new inversion model to retrieve the particulate backscattering in coastal/ocean waters",
      authors: "Shanmugam, P., Balasubramanian, S.V., Ahn, Y.H., Ryu, J.H.",
      journal: "IEEE Trans. Geosci. Remote Sens., 49, 2463-2474",
      link: "https://ieeexplore.ieee.org/abstract/document/5710979",
    },
    {
      year: "2010",
      title:
        "An evaluation of inversion models for retrieval of inherent optical properties from ocean color in coastal and open sea waters around Korea",
      authors: "Shanmugam, P., Ahn, Y.H., Ryu, J.H., Balasubramanian, S.V.",
      journal: "Journal of Oceanography, 66, 815-830",
      link: "https://link.springer.com/article/10.1007/s10872-010-0066-0",
    },
  ];
  const reports = [
    {
      title:
        "Intercomparison of Atmospheric Correction Algorithms Over Optically Complex Waters",
      authors: "Jamet, C., and Balasubramanian, S.V. (eds.) (2025)",
      journal:
        "Reports of the International Ocean-Colour Coordinating Group, No. 21, Dartmouth, Canada",
      link: "https://ioccg.org",
    },
  ];
  const datasets = [
    {
      title:
        "On the generalization ability of probabilistic neural networks for hyperspectral remote sensing of absorption properties across optically complex waters",
      authors:
        "Werther, M., Gurlin, D., Burggraaff, O., & Balasubramanian, S.V. (2025)",
      journal: "DOI:10.5281/zenodo.14893798",
      link: "https://doi.org/10.5281/zenodo.14893798",
    },
    {
      title:
        "GLORIA - A global dataset of remote sensing reflectance and water quality from inland and coastal waters",
      authors:
        "Lehmann, M. K., Gurlin, D., Pahlevan, N., Alikas, K., Anstee, J. M., Balasubramanian, S.V., et al. (2022)",
      journal: "DOI:10.1594/PANGAEA.948492",
      link: "https://doi.org/10.1594/PANGAEA.948492",
    },
  ];

  const timelineData = refereed.reduce((acc, pub) => {
    const yearGroup = acc.find((y) => y.year === pub.year);
    if (yearGroup) yearGroup.items.push(pub);
    else acc.push({ year: pub.year, items: [pub] });
    return acc;
  }, []);

  const renderCards = (data) =>
    data.slice(0, 3).map((pub, i) => (
      <div key={i} className="pub-card">
        <h3>{pub.title}</h3>
        <p className="pub-authors">{pub.authors}</p>
        <p className="pub-journal">{pub.journal}</p>
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pub-link"
        >
          View Paper <FaExternalLinkAlt />
        </a>
      </div>
    ));

  const renderTimeline = () => (
    <div className="timeline">
      {timelineData.map((yearBlock, idx) => (
        <div key={idx} className="timeline-year">
          <div className="year-marker">
            <FaCalendarAlt className="year-icon" />
            <h3>{yearBlock.year}</h3>
          </div>
          <div className="pub-items">
            {yearBlock.items.map((pub, j) => (
              <div key={j} className="pub-entry">
                <h4>{pub.title}</h4>
                <p className="pub-authors">{pub.authors}</p>
                <p className="journal">{pub.journal}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  View paper <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const data =
    activeTab === "refereed"
      ? refereed
      : activeTab === "reports"
      ? reports
      : datasets;

  return (
    <section className="publications-section" id="publications">
      <div className="publications-overlay"></div>

      <div className="publications-container">
        <h2 className="publications-heading">Publications</h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab.id);
                setShowTimeline(false);
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "refereed" && (
          <>
            <div className="publications-grid">{renderCards(refereed)}</div>

            {!showTimeline ? (
              <div className="view-more-container">
                <button
                  className="view-more-btn"
                  onClick={() => setShowTimeline(true)}
                >
                  View More ↓
                </button>
              </div>
            ) : (
              <div className="timeline-container">
                {renderTimeline()}
                <div className="view-more-container">
                  <button
                    className="view-more-btn"
                    onClick={() => setShowTimeline(false)}
                  >
                    View Less ↑
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        {activeTab !== "refereed" && (
          <div className="publications-grid">{renderCards(data)}</div>
        )}
      </div>
    </section>
  );
};

export default Publications;
