import React, { useEffect, useState } from "react";
import "../../styles/pages/PortfolioPage.scss";

const categories = [
  {
    title: "Event Coverage",
    description: "Highlights from events, galas and conferences.",
    videos: ["3Ajd9LFiUpE", "p22SLL2NcLw", "xzah2D6XkBM"],
  },
  {
    title: "Branded Content",
    description:
      "Creative storytelling and promotional videos tailored to enhance brand identity.",
    videos: ["EI00ILqdpT4", "OFmiwh5Ene0", "iMjJH-BduA4"],
  },
  {
    title: "Commercials",
    description:
      "High-quality TV and digital advertisements crafted for maximum impact and engagement.",
    videos: ["Nf4_nUz0NU0", "ajRtUZuFp5s", "M747vikeJUA"],
  },
  {
    title: "Talk Shows & Interviews",
    description: "Talk show episodes, interviews and studio segments.",
    videos: ["x85DGCQf08A", "lBkebsyZlUc", "G6aZe_2S0vk", "y1K2lfigry8"],
  },
  {
    title: "Editorial Content",
    description:
      "Stylized and curated visual content designed for media and digital publications.",
    videos: ["w6qOu1NTyoQ", "YhJenb-1wCI", "EulgNyySpSw"],
  },
  {
    title: "Variety Shows",
    description:
      "Entertaining and diverse productions featuring comedy, talent, and game show elements.",
    videos: ["nA9FSg-sK_k", "wedugyGBzD4", "YAc78a49E3Q"],
  },
  {
    title: "YouTube Content",
    description: "Edits from my own YouTube channel and collaborations.",
    videos: ["bw-VnUYjEdg", "7B-LcXwS4h4", "iIwK2pxeRoU", "qNZcJdaQV0g"],
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
            src="https://www.youtube.com/embed/_XhyesvLrOM?autoplay=1&loop=1&playlist=_XhyesvLrOM&controls=0&modestbranding=1"
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
