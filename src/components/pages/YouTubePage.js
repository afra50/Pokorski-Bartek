import React from "react";
import "../../styles/pages/YouTubePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function YouTubePage() {
  // Ustawienia bazowe slidera
  const baseSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Domyślnie: 2 filmy na slajd
    slidesToScroll: 2, // Przewijamy po 2 filmach
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Na mniejszych ekranach: 1 film na slajd
          slidesToScroll: 1,
        },
      },
    ],
  };

  const playlists = [
    {
      title: "The Worst Games of All Time",
      description:
        "A satirical review series exposing the most notorious gaming disasters. Expect humor, criticism and the subsequent text-to-speech narration!",
      playlistLink: "https://www.youtube.com/playlist?list=PLF18D30E340EF0824",
      videos: [
        "3RqsLKHRUWg",
        "mXVqA4ZRiwI",
        "XHzRv0q6WkQ",
        "TpsDcL4g2Yk",
        "qmkcBODHbQI",
        "1RW4nzZUxtE",
      ],
    },
    {
      title: "Steam Anomalies",
      description:
        "Unscripted deep dives into suspicious titles and shady practices on Steam. Some games are bizarre, some are downright broken!",
      playlistLink:
        "https://www.youtube.com/playlist?list=PLwkNsVw7yojk9_ZOwq2dqzyx-vpVWkBPP",
      videos: [
        "5xObshAEcmQ",
        "J7rqt7YuTgo",
        "MSv-jAK3qG0",
        "FcXWKSSrz-Y",
        "V7xgGiZz0_w",
        "wrefSERFmJ4",
      ],
    },
    {
      title: "Games You've Never Heard Of",
      description:
        "A showcase of lesser-known indie games, often created by solo developers. Hidden gems or forgettable experiments? Let's find out!",
      playlistLink: "https://www.youtube.com/playlist?list=PLF47C346E2A29836B",
      videos: ["8hI6eXdUiSQ", "-QVRmAmEADM", "jPajxnLdD7s", "EUXZId6uFBY"],
    },
    {
      title: "Video Game Journalism",
      description:
        "Extensive video publications in the form of game reviews and top-10 lists. Honest opinions, in-depth analysis, and barrels of fun!",
      playlistLink:
        "https://www.youtube.com/playlist?list=PLwkNsVw7yojnGC0tJpM6ATxM3nizqaORe",
      videos: ["qbzbTbN-CAo", "Zv4onqgyz8Q", "YXAIxS-_zHo", "RaEYFUs80Zk"],
    },
    {
      title: "Controlled Explosion",
      description:
        "Commentaries on hot-button issues relevant to video games. Multilayered topics and even controversies are the name of the game.",
      playlistLink:
        "https://www.youtube.com/playlist?list=PLwkNsVw7yojkRZtvk4I3pWrDAhX_niMhr",
      videos: ["sNJBhdKI8pc", "ykoWsdQjbSI"],
    },
    {
      title: "Other Publications",
      description:
        "Extraordinary videos that tend to be more lighthearted in nature. Parodies, playful live-action content and game-related complications, as well as extremely condensed video tutorials.",
      videos: ["XbJ48kyWHUw", "Ls5qg9BeFo4"],
    },
  ];

  return (
    <div className="youtube-container">
      <h1 className="youtube-title">On YouTube</h1>
      <p className="youtube-description">
        For over a decade, I have been creating content that blends humor,
        critique, and deep analysis of video games. Whether it's uncovering the
        worst games exploring indie gems, or diving into bizarre titles on
        Steam, my channel offers a mix of entertainment and insight.
      </p>

      {playlists.map((playlist, index) => {
        // Ustal aktualną liczbę widocznych slajdów w zależności od szerokości okna.
        const isDesktop =
          typeof window !== "undefined" ? window.innerWidth >= 768 : true;
        const currentSlidesToShow = isDesktop ? 2 : 1;

        // Jeśli liczba filmów jest mniejsza lub równa liczbie widocznych slajdów,
        // wyłączamy funkcjonalność slidera.
        const disableSlider = playlist.videos.length <= currentSlidesToShow;

        // Modyfikujemy ustawienia dla bieżącego playlista.
        const sliderSettings = {
          ...baseSettings,
          slidesToShow: currentSlidesToShow,
          slidesToScroll: currentSlidesToShow,
          arrows: !disableSlider,
          dots: !disableSlider,
          infinite: !disableSlider,
          draggable: !disableSlider,
        };

        return (
          <div key={index} className="playlist-section">
            <h2 className="playlist-title">{playlist.title}</h2>
            <p className="playlist-description">{playlist.description}</p>

            <Slider {...sliderSettings} className="video-slider">
              {playlist.videos.map((video, vidIndex) => (
                <div key={vidIndex} className="video-container">
                  <iframe
                    className="video-frame"
                    src={`https://www.youtube.com/embed/${video}?loading=lazy`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>

            {playlist.playlistLink && (
              <a
                href={playlist.playlistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="playlist-link"
              >
                Watch full playlist
              </a>
            )}
          </div>
        );
      })}

      <div className="youtube-footer">
        <a
          href="https://www.youtube.com/playlist?list=PLwkNsVw7yojnKHvSbJ9LOeREL8C3hh73G"
          target="_blank"
          rel="noopener noreferrer"
          className="editing-link"
        >
          Check out my edited materials for other YouTubers
        </a>

        <a
          href="https://www.youtube.com/bartekgmalt"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-channel-link"
        >
          Visit my YouTube Channel
        </a>
      </div>
    </div>
  );
}

export default YouTubePage;
