import React, { useEffect, useState } from "react";
import { apiSpotify } from "../services/utilities/API";

export default function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      console.log(res.data);
      setPlaylists(res.data);
    });
  }, []);

  return (
    <div className="carousel">
      <h1>Concept Playlists</h1>
      <div className="playList">
        {playlists.map((p, index) =>
          p.name !== "New Releases" ? (
            <div>
              <div className="item" key={index}>
                <a href={p.playlist_url}>
                  <img src={p.cover} />
                </a>
                <p id="type">PLAYLIST</p>
                <p id="title">{p.name}</p>
                <p id="description">
                  {p.description ? p.description : "Playlist Description"}
                </p>
              </div>
              <div style={{ padding: "10px" }}></div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
