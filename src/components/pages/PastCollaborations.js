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
      "I collaborated with Polsat Games on multiple high-profile esports and entertainment productions. My responsibilities included full-scale post-production, video editing, sound design, and visual effects. I worked on popular TV shows, esports broadcasts, and promotional campaigns, ensuring high-quality content for audiences. Key projects included Digital Dragons Awards coverage, exclusive game-related shows, and esports event analysis.",
  },
  {
    name: "Frenzy",
    logo: frenzyLogo,
    url: "https://frenzy.pl/",
    description:
      "I contributed to various projects with Frenzy, a leading esports production company. My responsibilities included video editing, post-production, and motion graphics for multiple gaming shows, including 'Gry Komputerowe Show' and 'Deja Vu – Kultowe Gry'. Additionally, I provided assistance in creating promotional content and social media videos aimed at increasing engagement within the esports community.",
  },
  {
    name: "Digital Dragons",
    logo: digitalDragonsLogo,
    url: "https://digitaldragons.pl/",
    description:
      "I worked closely with Digital Dragons, one of the most prestigious gaming industry events in Europe. I delivered high-quality audiovisual materials for the 'Digital Dragons Awards' ceremony, including event highlight reels, interviews, and promotional content. The project involved coordination with industry professionals, ensuring a polished final product that resonated with gaming enthusiasts worldwide.",
  },
  {
    name: "Kia",
    logo: kiaLogo,
    url: "https://www.kia.com/",
    description:
      "I supported Kia in developing engaging promotional materials targeting the gaming and esports community. I designed and edited branded video content for digital campaigns, integrating Kia’s branding seamlessly into esports and gaming-related media. The project aimed to enhance Kia’s visibility within the gaming space, connecting with younger, tech-savvy audiences.",
  },
  {
    name: "Inea",
    logo: ineaLogo,
    url: "https://www.inea.pl/",
    description:
      "I collaborated with Inea on multiple esports-related productions, incorporating the brand into gaming content. My responsibilities included editing event recap videos, creating social media clips, and ensuring that Inea’s branding aligned with the gaming culture. The content I produced helped Inea establish a stronger presence within the competitive gaming industry.",
  },
  {
    name: "Graf",
    logo: grafLogo,
    url: "https://www.youtube.com/@graf",
    description:
      "I played a key role in the growth of the Graf YouTube channel by providing high-quality video editing and content creation. I focused on gaming-related videos, engaging montages, and entertaining narratives that attracted a broad audience. I helped elevate the channel’s production value, increasing subscriber engagement and reach.",
  },
  {
    name: "KitKat",
    logo: kitkatLogo,
    url: "https://www.kitkat.pl/",
    description:
      "I produced branded video content for KitKat, focusing on integrating the product naturally into gaming and digital entertainment settings. I developed creative ad spots, influencer collaborations, and event-based promotional materials. I ensured that the content aligned with KitKat’s fun and relaxed brand image while appealing to the gaming community.",
  },
  {
    name: "KinGuin",
    logo: kinguinLogo,
    url: "https://www.kinguin.net/",
    description:
      "I worked on video marketing campaigns for KinGuin, an online marketplace for gaming products. I edited and produced engaging video advertisements, event sponsorship content, and community-focused projects. I helped KinGuin strengthen its connection with gamers through high-quality visuals and storytelling.",
  },
  {
    name: "Mighty Koi",
    logo: mightyKoiLogo,
    url: "https://www.mighty-koi.com",
    description:
      "I teamed up with Mighty Koi to create dynamic and engaging video content for gaming and entertainment projects. I assisted in the development of promotional videos, trailers, and digital campaigns aimed at gaming audiences. I focused on delivering visually compelling content that showcased Mighty Koi’s expertise in the industry.",
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
