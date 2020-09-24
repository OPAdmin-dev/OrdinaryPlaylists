import React, { useEffect, useState } from "react";
import { apiSpotify } from "../services/utilities/API";
import { Spin } from "antd";

export default function NewRelease() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      setPlaylists(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div id="carousel">
      <h1>Concept Playlists</h1>
      <div className="playlist">
        {loading ? (
          <Spin />
        ) : (
          playlists.map((p, index) =>
            p.name !== "New Releases" ? (
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
            ) : null
          )
        )}
      </div>
      )
    </div>
  );
}
