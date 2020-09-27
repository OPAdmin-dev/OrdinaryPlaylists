import React, { useState, useEffect } from "react";
import "./App.scss";
import "./App.less";

import Hamburger from "./Components/Hamburger";
import Banner from "./Components/Banner";
import StoryViewer from "./Components/StoryViewer";
import StoryShared from "./Components/StoryShared";
import NewRelease from "./Components/NewRelease";
import Playlist from "./Components/Playlist";
import Mood from "./Components/Mood";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [track, setTrack] = useState();

  const selectPlaylist = (PL) => {
    setTrack();
    var playlistmod = PL["tracks"].map((track) => {
      return {
        name: track.track_name,
        musicSrc: track.preview_url,
        singer: track.track_artist,
      };
    });
    setPlaylist(playlistmod);
  };

  const selectTrack = (T) => {
    setPlaylist([]);
    setTrack([
      {
        name: T.track_name,
        musicSrc: T.preview_url,
        singer: T.track_artist,
      },
    ]);
  };

  return (
    <div className="App">
      <Hamburger />
      <Banner />
      <ReactJkMusicPlayer
        audioLists={track || playlist}
        defaultVolume={100}
        clearPriorAudioLists
      />
      <NewRelease selectTrack={selectTrack} />
      <Playlist selectPlaylist={selectPlaylist} />
      <StoryViewer />
      <Mood />
      <StoryShared />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
