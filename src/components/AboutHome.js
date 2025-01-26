import React from "react";
import "../styles/AboutHome.scss";

function AboutHome() {
  return (
    <section id="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="description">
          Web video producer and self-taught video editor since 2009, who
          enhanced his expertise throughout professional education and
          commercial background. Experienced with TV, YouTube, and film.
          <br />
          An avid film buff capable of handling an array of creative tasks, both
          web and TV oriented.
        </p>
        <ul className="skills-list">
          <li>Editing videos for TV, YouTube, and social media</li>
          <li>Producing promotional and commercial content</li>
          <li>Building long-term partnerships with clients</li>
          <li>
            Mastering a variety of video editing software, e.g.{" "}
            <span className="highlight">
              Adobe Premiere Pro, AVID Media Composer or Magix Vegas
            </span>
          </li>
        </ul>
        <button className="cta-button">Read More</button>
      </div>
    </section>
  );
}
export default AboutHome;
