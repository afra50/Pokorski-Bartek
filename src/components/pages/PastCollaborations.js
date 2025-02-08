import React, { useEffect, useRef } from "react";
import polsatGamesLogo from "../../assets/logos/polsat-games-logo.png";
import frenzyLogo from "../../assets/logos/frenzy-logo.webp";
import digitalDragonsLogo from "../../assets/logos/digital-dragons.png";
import grafLogo from "../../assets/logos/graf.jpg";
import kiaLogo from "../../assets/logos/kia-logo.png";
import ineaLogo from "../../assets/logos/inea-logo.png";
import kitkatLogo from "../../assets/logos/kitkat-logo.png";
import kinguinLogo from "../../assets/logos/kinguin-logo.png";
import mightyKoiLogo from "../../assets/logos/mighty-koi.png";
import "../../styles/pages/PastCollaborations.scss";

const clients = [
  {
    name: "Polsat Games",
    logo: polsatGamesLogo,
    url: "https://www.polsatgames.pl/",
    description:
      "I have worked with Polsat Games on several high-profile esports and entertainment productions. My responsibilities included extensive post-production, video editing, and sound design. I worked on popular TV shows, esports broadcasts, and promotional campaigns, ensuring high-quality content for audiences. Key projects included the Digital Dragons Awards ceremony, exclusive gaming shows, and esports championships.",
  },
  {
    name: "Frenzy",
    logo: frenzyLogo,
    url: "https://frenzy.pl/",
    description:
      "I contributed to various projects at Frenzy, a leading full-service production house. My role included video editing, post-production, and motion graphics for numerous TV shows, including 'Gry Komputerowe Show,' 'LEVEL 11,' and 'FAUX PAUX.'. I also assisted in the creation of promotional content and social media videos aimed at increasing engagement within the gaming and esports community.",
  },
  {
    name: "Digital Dragons",
    logo: digitalDragonsLogo,
    url: "https://digitaldragons.pl/",
    description:
      "I worked with Digital Dragons, one of the most prestigious gaming industry events in Europe. I delivered premium audiovisual assets for the Digital Dragons Awards ceremony, editing game trailers for the nominees and winners video sections and audiovisual work for the entire show. The project involved coordination with industry experts to ensure a polished end product that would resonate with gaming enthusiasts around the world.",
  },
  {
    name: "Kia",
    logo: kiaLogo,
    url: "https://www.kia.com/",
    description:
      "I supported Kia in developing engaging video content for the gaming and esports community. I designed and edited video interviews with esports icons for digital campaigns, seamlessly integrating Kia's branding into gaming-related media. The project aimed to enhance Kia's visibility in the gaming space and connect with a younger, tech-savvy audience.",
  },
  {
    name: "Inea",
    logo: ineaLogo,
    url: "https://www.inea.pl/",
    description:
      "I collaborated with Inea on a gaming-related production, incorporating the brand into sim racing content. My involvement included the comprehensive postproduction of a TV series called 'INEA Star Race' and ensuring that Inea's branding aligned with the gaming culture.",
  },
  {
    name: "KitKat",
    logo: kitkatLogo,
    url: "https://www.kitkat.pl/",
    description:
      "I edited branded video content for KitKat, focusing on integrating the product naturally into gaming and digital entertainment settings. I developed creative advertisements and event-based promotional materials. I ensured the content matched KitKat's fun and relaxed brand image while appealing to the esports' community.",
  },
  {
    name: "KinGuin",
    logo: kinguinLogo,
    url: "https://www.kinguin.net/",
    description:
      "I worked on corporate content for Kinguin, an online marketplace for gaming products. I was responsible for the post-production of a series of videos about Kinguin's partnership with Google. I helped Kinguin strengthen their connection with its partner through high-value visuals and storytelling.",
  },
  {
    name: "Mighty Koi",
    logo: mightyKoiLogo,
    url: "https://www.mighty-koi.com",
    description:
      "I teamed up with Mighty Koi to create dynamic and engaging video content for gaming and entertainment projects. I assisted in the development of TV promotional material and a digital event aimed at shareholders and gaming audiences. I focused on delivering visually compelling content that showcased Mighty Koi's expertise in the industry.",
  },
];

function PastCollaborations() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Resetowanie animacji logo przy każdym wejściu w widok
            const logo = entry.target.querySelector(".client-logo");
            logo.classList.remove("animate");
            void logo.offsetWidth; // Trik CSS do resetowania animacji
            logo.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="past-collaborations">
      <h2>Past Collaborations</h2>
      {clients.map((client, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`client-section ${index % 2 === 0 ? "left" : "right"}`}
        >
          <img src={client.logo} alt={client.name} className="client-logo" />
          <div className="client-info">
            <h3>{client.name}</h3>
            <p className="client-description">{client.description}</p>
            <a href={client.url} target="_blank" rel="noopener noreferrer">
              Visit {client.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PastCollaborations;
