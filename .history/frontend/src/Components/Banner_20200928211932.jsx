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
        <p id="author">by Joie Tan & Nurush Osman</p>
      </div>
      <div>
        <Waveform track={props.track} />
      </div>
      <section id="section10">
        <a href="#thanks">
          <span></span>
        </a>
      </section>
    </div>
  );
}
