import React, { useEffect, useState } from "react";
import { apiSpotify } from "../services/utilities/API";
import { Spin, Button } from "antd";

export default function NewRelease() {
  const [newTrackReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      var newReleases = res.data
        .filter((p) => {
          if (p.name == "New Releases") {
            return p;
          }
        })
        .map((p) => {
          return p.tracks;
        });
      setNewReleases(newReleases);
      setLoading(false);
    });
  }, []);

  return (
    <div className="carousel">
      <h1>New Releases</h1>
      <div className="songList">
        {loading ? (
          <Spin />
        ) : (
          newTrackReleases[0].map((t, index) => (
            <div>
              <div className="item" key={index}>
                <a href={t.preview_url ? t.preview_url : "#"} target="_blank">
                  <img src={t.track_cover} />
                </a>
                <p id="type">TRACK</p>
                <p id="title">{t.track_name}</p>
                <p id="artist">{t.track_artist}</p>
                <a href={t.track_url} target="_blank">
                  <p>Click here to listen on Spotify!</p>
                </a>
              </div>
              <div style={{ padding: "10px" }}></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
