import React from "react";
import Waveform from "../MusicPlayer/Waveform";

export default function Banner(props) {
  console.log(props.trackIndex);
  return (
    <div className="home">
      <div className="container">
        {props.track ? (
          <div>
            <p id="title">
              {props.playlistName ? props.playlistName : "NEW RELEASE"}
            </p>
            <h1>{props.track[0].name}</h1>
            {props.track ? <p>By {props.track[0].singer}</p> : ""}
          </div>
        ) : (
          <div>
            <p id="title">
              {props.playlistName ? props.playlistName : "NEW RELEASE"}
            </p>
            <h1>
              {props.playlist[props.trackIndex]
                ? props.playlist[props.trackIndex].name
                : "Test Track"}
            </h1>
            {props.playlist[props.trackIndex] ? (
              <p>By {props.playlist[props.trackIndex].singer}</p>
            ) : (
              "Test Artist"
            )}
          </div>
        )}
      </div>

      <section id="section10">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
      <div className="waveform">
        <Waveform
          track={
            props.track ? props.track[0] : props.playlist[props.trackIndex]
          }
          selectTrack={props.selectTrack}
          action={props.action}
          setAction={props.setAction}
          player={props.player}
        />
      </div>
    </div>
  );
}
