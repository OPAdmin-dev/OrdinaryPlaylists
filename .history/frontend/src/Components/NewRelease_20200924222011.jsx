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
      <div className="songList">
        {playlists.map((p, index) =>
          p.name !== "New Releases" ? (
            <div>
              <div className="item" key={index}>
                <img src={p.cover} />
                <p id="type">SONG</p>
                <p id="title">{p.name}</p>
                <p id="description">
                  {p.description ? p.description : "New Release"}
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
