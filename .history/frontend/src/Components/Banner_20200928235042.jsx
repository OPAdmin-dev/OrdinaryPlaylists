import React from "react";
import Waveform from "../MusicPlayer/Waveform";

export default function Banner(props) {
  return (
    <div className="home">
      <div className="container">
        <p id="title">NEW RELEASE</p>
        {props.track ? <h1>{props.track.name}</h1> : ""}
        {/* <p id="paragraph">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          placerat ante. Sed interdum fringilla justo, eget tincidunt purus...”
        </p> */}
        {props.track ? <p>By {props.track.singer}</p> : ""}
      </div>

      <section id="section10">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
      <div className="waveform">
        <Waveform track={props.track} />
      </div>
    </div>
  );
}
