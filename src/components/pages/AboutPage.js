import React, { useRef, useState, useEffect } from "react";
import "../../styles/pages/AboutPage.scss";
import bartekzdjecie from "../../assets/bartek.jpg";

function AboutPage() {
  // Ref do sekcji programów
  const programsRef = useRef(null);

  // Stan, który decyduje, czy uruchomić animację wypełniania
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Dla każdego obserwowanego elementu sprawdzamy, czy jest w polu widzenia
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBars(true);
            // Po jednorazowym wykryciu można odpiąć observer, aby nie animować ponownie
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // jak duża część sekcji musi się pojawić, żeby uznać, że jest widoczna
    );

    if (programsRef.current) {
      observer.observe(programsRef.current);
    }

    // Sprzątanie po odmontowaniu komponentu
    return () => {
      observer.disconnect();
    };
  }, []);

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

      <div className="programs-section" ref={programsRef}>
        <h2>Tools I Use</h2>
        <ul>
          <li>
            Adobe Premiere Pro
            <div className="progress-bar">
              {/* Jeżeli animateBars = true, to szerokość = 100%, w przeciwnym wypadku 0 */}
              <div
                className="progress"
                style={{ width: animateBars ? "100%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Avid Media Composer
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "85%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            DaVinci Resolve
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "70%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Magix Vegas
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "100%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Adobe Audition
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "85%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Adobe After Effects
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "50%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Adobe Photoshop
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "50%" : "0%" }}
              ></div>
            </div>
          </li>

          <li>
            Figma
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: animateBars ? "50%" : "0%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="content-types-section">
        <h2>Types of Content I Edit</h2>
        <div className="content-grid">
          <div className="content-item">
            <i class="fa-solid fa-tv"></i>
            <span>TV shows and promos</span>
          </div>

          <div className="content-item">
            <i class="fa-brands fa-youtube"></i>
            <span>YouTube videos</span>
          </div>

          <div className="content-item">
            <i className="fa-solid fa-bullhorn"></i>
            <span>Commercials and advertisements</span>
          </div>

          <div className="content-item">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Event summaries and recaps</span>
          </div>

          <div className="content-item">
            <i className="fa-solid fa-clapperboard"></i>
            <span>Showreels</span>
          </div>
        </div>
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
