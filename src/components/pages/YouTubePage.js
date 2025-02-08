import React from "react";
import "../../styles/pages/YouTubePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function YouTubePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
  };

  const playlists = [
    {
      title: "The Worst Games of All Time",
      description:
        "A satirical review series exposing the most infamous gaming disasters. Expect humor, critique, and the occasional IVONA voice!",
      playlistLink: "https://www.youtube.com/playlist?list=PLF18D30E340EF0824",
      videos: ["psgyZpyl22Y", "nyv6jVAe5z4", "XHzRv0q6WkQ"],
    },
    {
      title: "Steam Anomalies",
      description:
        "Unscripted deep dives into suspicious titles and shady practices on Steam. Some games are bizarre, some are downright broken!",
      playlistLink:
        "https://www.youtube.com/playlist?list=PLwkNsVw7yojk9_ZOwq2dqzyx-vpVWkBPP",
      videos: ["5xObshAEcmQ", "V7xgGiZz0_w", "wrefSERFmJ4"],
    },
    {
      title: "Games You've Never Heard Of",
      description:
        "A showcase of lesser-known indie games, often created by solo developers. Hidden gems or forgettable experiments? Let's find out!",
      playlistLink: "https://www.youtube.com/playlist?list=PLF47C346E2A29836B",
      videos: ["8hI6eXdUiSQ", "J9k2ONHhJZ8", "jPajxnLdD7s"],
    },
    {
      title: "15-Second Tutorials",
      description:
        "Extremely condensed guides covering various gaming topics in just 15 seconds. Short, sweet, and straight to the point!",
      playlistLink: "https://www.youtube.com/playlist?list=PLCE8667B61EE7B2A3",
      videos: ["5i-fKEH4aB0", "KI5zv8V6h98", "1iFrHPCaz_o"],
    },
    {
      title: "The World According to Worms",
      description:
        "A comedic series created in Worms 4, made in collaboration with TheAstraly. Expect chaotic strategies and absurd battles!",
      playlistLink: "https://www.youtube.com/playlist?list=PL191A9323608424D1",
      videos: ["9ILAxSyyTP8", "jS-xX4dpFIc", "zgSFlH-Mris"],
    },
    {
      title: "Game Reviews",
      description:
        "Comprehensive reviews covering various games, from indie projects to major releases. Honest opinions, in-depth analysis, and fun!",
      playlistLink:
        "https://www.youtube.com/playlist?list=PLwkNsVw7yojnGC0tJpM6ATxM3nizqaORe",
      videos: ["qbzbTbN-CAo", "Zv4onqgyz8Q", "YXAIxS-_zHo"],
    },
  ];

  return (
    <div className="youtube-container">
      <h1 className="youtube-title">On YouTube</h1>
      <p className="youtube-description">
        For over a decade, I have been creating content that blends humor,
        critique, and deep analysis of video games. Whether it's uncovering the
        worst games, exploring indie gems, or diving into bizarre Steam titles,
        my channel offers a mix of entertainment and insight.
      </p>

      {playlists.map((playlist, index) => (
        <div key={index} className="playlist-section">
          <h2 className="playlist-title">{playlist.title}</h2>
          <p className="playlist-description">{playlist.description}</p>

          <Slider {...settings} className="video-slider">
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

          <a
            href={playlist.playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-link"
          >
            Watch full playlist
          </a>
        </div>
      ))}

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
