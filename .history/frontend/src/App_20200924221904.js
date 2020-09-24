import React from "react";
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
  return (
    <div className="App">
      <Hamburger />
      <Banner />
      <ReactJkMusicPlayer />
      <NewRelease />
      <Playlist />
      <StoryViewer />
      <Mood />
      <StoryShared />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
