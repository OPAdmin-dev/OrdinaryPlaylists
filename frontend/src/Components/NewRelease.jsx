import React, { useEffect, useState } from "react";
import { apiSpotify } from "../services/utilities/API";

export default function NewRelease() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      console.log(res.data);
      setPlaylists(res.data);
    });
  }, []);

  return (
    <div id="carousel">
      <h1>New Releases</h1>
      <div className="playlist">
        {playlists.map((p, index) => (
          <div>
            <div className="item" key={index}>
              <img src={p.cover} />
              <p id="type">PLAYLIST</p>
              <p id="title">{p.name}</p>
              <p id="description">
                {p.description ? p.description : "Playlist Description"}
              </p>
            </div>
            <div style={{ padding: "10px" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
