import React from "react";
import { Link } from "react-router-dom";
import "../styles/PortfolioHome.scss";

function PortfolioHome() {
  const projects = [
    {
      title: "Droga do esportu",
      videoUrl: "https://www.youtube.com/embed/6DQv-_WnIYk",
    },
    {
      title: "Digital Dragons Awards",
      videoUrl: "https://www.youtube.com/embed/Jx9Urm65UWY",
    },
    {
      title: "BartekGM Channel",
      videoUrl: "https://www.youtube.com/embed/5xObshAEcmQ",
    },
  ];

  return (
    <section id="portfolio-section">
      <div className="portfolio-content">
        <h2>My featured editions</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <iframe
                src={project.videoUrl}
                title={project.title}
                style={{
                  width: "100%",
                  height: "170px",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="project-details">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link to="/portfolio" className="cta-button">
          More Videos
        </Link>
      </div>
    </section>
  );
}

export default PortfolioHome;
