import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.scss";

function HeroSection() {
  return (
    <section id="hero-section">
      <div className="hero-content">
        <h1 className="name">Pokorski Bartłomiej</h1>
        <p className="title">Professional Video Editor</p>
        <p className="subtitle">Editing that elevates your story.</p>
        <Link to="/portfolio" className="cta-button">
          See My portfolio
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
