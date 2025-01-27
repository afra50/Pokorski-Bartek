import React from "react";
import "../../styles/pages/AboutPage.scss";
import bartekzdjecie from "../../assets/bartek.jpg";

function AboutPage() {
  return (
    <section id="about-page">
      <div className="about-hero">
        <div className="hero-text">
          <h1>How I became a creative video editor</h1>
          <p>
            With over a decade of experience in video editing, I’ve developed my
            skills by working with renowned brands and diverse creators across
            the industry. From large-scale TV productions and commercials to
            YouTube content and music videos, my work combines technical
            expertise with a strong creative vision.
          </p>
          <p>
            Driven by a passion for video editing and creativity, I specialize
            in transforming raw footage into polished, visually engaging content
            that tells a story. From dynamic event recaps to promotional videos
            and showreels, I bring technical precision and artistic vision to
            every project, ensuring high-quality results.
          </p>
        </div>
        <div className="hero-image">
          <img src={bartekzdjecie} alt="Bartłomiej Pokorski" />
        </div>
      </div>

      <div className="programs-section">
        <h2>Tools I Use</h2>
        <ul>
          <li>Adobe Premiere Pro</li>
          <li>Adobe Photoshop</li>
          <li>DaVinci Resolve</li>
          <li>Magix Vegas</li>
          <li>Adobe After Effects</li>
          <li>Adobe Audition</li>
        </ul>
      </div>

      <div className="content-types-section">
        <h2>Types of Content I Edit</h2>
        <ul>
          <li>TV shows and promos</li>
          <li>YouTube videos</li>
          <li>Commercials and advertisements</li>
          <li>Event summaries and recaps</li>
          <li>Showreels</li>
          <li>Music videos</li>
        </ul>
      </div>

      <div className="languages-section">
        <h3>Languages</h3>
        <ul>
          <li>Polish (Native)</li>
          <li>English (C1 Advanced)</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
