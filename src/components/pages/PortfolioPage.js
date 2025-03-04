import React, { useEffect, useState } from "react";
import "../../styles/pages/PortfolioPage.scss";

const categories = [
  {
    title: "Event Coverage",
    description: "Highlights from events, galas and conferences.",
    videos: [
      "abc123", // <-- Tutaj dajesz prawdziwe ID z YouTube
      "def456",
      "ghi789",
    ],
  },
  {
    title: "Promos & Commercials",
    description: "Promotional content and commercials for brands and TV.",
    videos: ["jkl012", "mno345", "pqr678"],
  },
  {
    title: "Talk Shows & Interviews",
    description: "Talk show episodes, interviews and studio segments.",
    videos: ["stu901", "vwx234"],
  },
  {
    title: "Street Surveys",
    description: "Dynamic street interviews and vox pops.",
    videos: ["yz5678", "abc91011"],
  },
  {
    title: "YouTube Content",
    description: "Edits from my own YouTube channel and collaborations.",
    videos: ["lmn1213", "opq1415", "rst1617", "uvw1819"],
  },
];

function PortfolioPage() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-page">
      {/* Sekcja HERO (baner) */}
      <div className="hero-section">
        <div className="video-background">
          {/* <video autoPlay muted loop playsInline>
            <source
              src={`${process.env.PUBLIC_URL}/showreel.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <iframe
            className="showreel-iframe"
            src="https://www.youtube.com/embed/_XhyesvLrOM?autoplay=1&mute=1&loop=1&playlist=_XhyesvLrOM&controls=0&modestbranding=1"
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {showText && (
          <div className="animated-banner">
            <h1>My Showreel</h1>
          </div>
        )}
      </div>

      {/* Sekcja z kategoriami */}
      <div className="portfolio-content">
        {categories.map((category, index) => (
          <section key={index} className="portfolio-category">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <div className="video-grid">
              {category.videos.map((id, vidIndex) => (
                <div key={vidIndex} className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={category.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
