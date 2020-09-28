import React from "react";
import Waveform from "../MusicPlayer/Waveform";

export default function Banner(props) {
  return (
    <div className="home">
      <div className="container">
        <p id="title">NEW RELEASE</p>
        <h1>Any Picture With You</h1>
        <p id="paragraph">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          placerat ante. Sed interdum fringilla justo, eget tincidunt purus...”
        </p>
        <p>{props.track ? props.track.name : "Blah Blah"}</p>
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
