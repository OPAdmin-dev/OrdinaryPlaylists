import React, { useState } from "react";
import Waveform from "../MusicPlayer/Waveform";
import { useEffect } from "react";

export default function Banner(props) {
  const [featureTrack, setFeatureTrack] = useState();

  useEffect(() => {
    if (props.track) {
      if (props.track[0].isSF) {
        setFeatureTrack(props.track[0]);
      }
    }
  }, [props.track]);

  return (
    <div className="home">
      <div className="container">
        {featureTrack ? (
          <div>
            <p id="title">SEASON FEATURE</p>
            <h1>{featureTrack.name}</h1>
            {featureTrack ? <p>By {featureTrack.singer}</p> : ""}
          </div>
        ) : null}
      </div>

      <section id="section10">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
      <div className="waveform">
        {featureTrack ? (
          <Waveform
            track={props.track[0]}
            setTrack={props.setTrack}
            player={props.player}
            action={props.action}
            setAction={props.setAction}
            loadSeasonFeature={props.loadSeasonFeature}
            SFselected={props.SFselected}
            setSFSelected={props.setSFSelected}
          />
        ) : null}
      </div>
    </div>
  );
}
