import React from "react";
import album from "../Images/zico 2.png";
import tick from "../Images/Vector.png";

export default function SubmissionPage() {
  return (
    <div>
      <div className="ContainerTitle">
        <img src={tick} />
        <p>We have received your submission.</p>
        <p>Thank you for sharing.</p>
      </div>
      <div className="ContainerBottom">
        <div >
          <p id="a">we are</p>
          <p id="b">Dropping Soon</p>
          <div className="center">
            <div className="containerLeft">
              <p id="c">
                Before we go live, we would need your help to spread the word.
                We want to turn more stories into meaningful songs.
              </p>
              <p id="c">Let your friends know about us or find us elsewhere:</p>
              <button id="share">SHARE ORDINARY PLAYLIST</button>
              <br />
              <button id="insta">
                <i className="fab fa-instagram"></i> INSTAGRAM
              </button>
            </div>
            <div className="containerRight">
              <p id="d">
                Meanwhile, keep your eyes (and ears) peeled for the playlists
                inspired by your lives.
              </p>
              <div id="l">
              <img src={album} />
              <br />
              <p id="f">PLAYLIST</p>
              <p id="g">Ordinary Playlists Øriginals</p>
              <p id="h">
                A playlist featuring our pioneering musicians: Amanda Ong, KHAi,
                Yap Joon Siong etc.
              </p>
              </div>
              <button id="i">
                <i class="fab fa-spotify"></i> EXPERIENCE ON SPOTIFY
              </button>
            </div>
          </div>
        </div>
        <p id="e">Copyright Ordinary Playlists 2020. </p>
      </div>
    </div>
  );
}
