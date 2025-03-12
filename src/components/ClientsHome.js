import React from "react";
import { Link } from "react-router-dom";
import polsatGamesLogo from "../assets/logos/polsat-games-logo.png";
import frenzyLogo from "../assets/logos/frenzy-logo.webp";
import digitalDragonsLogo from "../assets/logos/digital-dragons.png";
import cdProjektLogo from "../assets/logos/cd-projekt.png";
import samsungLogo from "../assets/logos/samsung.png";
import kiaLogo from "../assets/logos/kia-logo.png";
import ineaLogo from "../assets/logos/inea-logo.png";
import kitkatLogo from "../assets/logos/kitkat-logo.png";
import "../styles/ClientsHome.scss";

function ClientsHome() {
  const clients = [
    {
      name: "Polsat Games",
      logo: polsatGamesLogo,
      url: "https://www.polsatgames.pl/",
    },
    { name: "Frenzy", logo: frenzyLogo, url: "https://frenzy.pl/" },
    {
      name: "Digital Dragons",
      logo: digitalDragonsLogo,
      url: "https://digitaldragons.pl/",
    },
    {
      name: "CD Projekt Red",
      logo: cdProjektLogo,
      url: "https://www.cdprojekt.com/",
    },
    {
      name: "Samsung",
      logo: samsungLogo,
      url: "https://www.samsung.com/",
    },
    { name: "Kia", logo: kiaLogo, url: "https://www.kia.com/" },
    { name: "Inea", logo: ineaLogo, url: "https://www.inea.pl/" },
    { name: "KitKat", logo: kitkatLogo, url: "https://www.kitkat.pl/" },
  ];

  return (
    <section id="clients-section">
      <div className="clients-content">
        <h2>I cooperated with</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <a href={client.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo"
                />
              </a>
            </div>
          ))}
        </div>
        <Link to="/past-collaborations" className="cta-button">
          See More
        </Link>
      </div>
    </section>
  );
}

export default ClientsHome;
