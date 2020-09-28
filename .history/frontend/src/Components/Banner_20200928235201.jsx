import React from "react";
import Waveform from "../MusicPlayer/Waveform";

export default function Banner(props) {
  return (
    <div className="home">
      <div className="container">
        {props.track ? (
          <div>
            <p id="title">NEW RELEASE</p>
            <h1>
              {props.track.name}
              {/* <p id="paragraph">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          placerat ante. Sed interdum fringilla justo, eget tincidunt purus...”
        </p> */}
            </h1>
            {props.track ? <p>By {props.track.singer}</p> : ""}
          </div>
        ) : (
          ""
        )}
        {/* <p id="paragraph">
        <p id="title">NEW RELEASE</p>
        
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
