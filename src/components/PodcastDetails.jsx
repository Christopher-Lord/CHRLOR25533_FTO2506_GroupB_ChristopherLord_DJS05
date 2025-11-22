import { useState } from "react";
import "/styles.css";
import { truncateText } from "../utils/truncateText.js";
import { Link } from "react-router-dom";

export default function PodcastDetails({ podcast }) {
  const [selectedSeason, setSelectedSeason] = useState(
    podcast.seasons[0].season,
  );

  const seasonOptions = podcast.seasons.map((s) => s.season);
  const currentSeasonObj = podcast.seasons.find(
    (s) => s.season === selectedSeason,
  );

  return (
    <div className="podcast-modal-container" id="podcast-modal">
      <div className="modal-content">
        <Link to={"/"} className="link">
          <div className="back-btn">
            <p>&larr; Back to Home</p>
          </div>
        </Link>
        {/* HEADER */}
        <div className="header">
          <img className="cover-img" src={podcast.image} alt={podcast.title} />

          <div className="podcast-header-info">
            <h1 className="title">{podcast.title}</h1>
            <p className="description">{podcast.description}</p>

            <div className="genres">
              {podcast.genres && podcast.genres.map((title, index) => (
                <span key={index} className="genre-tag">
                  {title}
                </span>
              ))}
            </div>

            <p className="updated">
              Last Updated:{" "}
              {new Date(podcast.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="stats">
              <p>
                <strong>{podcast.seasons.length}</strong> Seasons
              </p>
              <p>
                <strong>
                  {podcast.seasons.reduce(
                    (sum, s) => sum + s.episodes.length,
                    0,
                  )}
                </strong>{" "}
                Episodes
              </p>
            </div>
          </div>
        </div>

        {/* SEASON SELECTOR */}
        <div className="season-selector">
          <h3>Current Season</h3>

          <select
            className="season-dropdown"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(Number(e.target.value))}
          >
            {seasonOptions.map((season) => (
              <option key={season} value={season}>
                Season {season}
              </option>
            ))}
          </select>
        </div>

        {/* SEASON DETAILS */}
        <div className="season-card-container">
          {currentSeasonObj && (
            <div className="season-card">
              <div className="season-cover">
                <img
                  src={currentSeasonObj.image}
                  alt={currentSeasonObj.title}
                />
              </div>
              <div className="season-info">
                <h2>
                  Season {currentSeasonObj.season}: {currentSeasonObj.title}
                </h2>
                <p>{currentSeasonObj.episodes.length} Episodes</p>
              </div>
            </div>
          )}

          {/* EPISODES LIST */}
          <div className="episodes-list">
            {currentSeasonObj.episodes.map((ep) => (
              <div key={ep.episode} className="episode-card">
                <img
                  className="episode-img"
                  src={currentSeasonObj.image}
                  alt={ep.title}
                />
                <div className="episode-content">
                  <h4>
                    Episode {ep.episode}: {ep.title}
                  </h4>
                  <p>{truncateText(ep.description, 159)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
