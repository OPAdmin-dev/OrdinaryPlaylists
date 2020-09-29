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
  const [playlistMap, setPlaylistMap] = useState([]);
  const [trackPlaylist, setTrackPlaylist] = useState([]);
  const [track, setTrack] = useState();
  const [action, setAction] = useState("");
  const [player, setPlayer] = useState();
  const [trackIndex, setTrackIndex] = useState(0);

  const selectPlaylist = (PL) => {
    setTrack(null);
    setTrackIndex(0);
    var index = -1;
    var playlistMap = PL["tracks"].reduce(function (map, obj) {
      index = index + 1;
      map[index] = {
        name: obj.track_name,
        musicSrc: obj.preview_url,
        singer: obj.track_artist,
        cover: obj.track_cover,
      };
      return map;
    }, {});
    var temp_arr = [];
    for (const [key, val] of Object.entries(playlistMap)) {
      temp_arr.push(playlistMap[key]);
    }
    setPlaylistMap(playlistMap);
    setTrackPlaylist(temp_arr);
  };

  const selectTrack = (T) => {
    setTrack([
      {
        name: T.track_name,
        musicSrc: T.preview_url,
        singer: T.track_artist,
        cover: T.track_cover,
      },
    ]);
    setAction("play");
  };

  const playTrack = () => {
    setAction("play");
  };

  const pauseTrack = () => {
    setAction("pause");
  };

  const reloadTrack = () => {
    setAction("reload");
  };

  const endTrack = () => {
    setAction("end");
  };

  const changeTrack = (index) => {
    setTrackIndex(index);
  };

  const getPlayerInstance = (instance) => {
    setPlayer(instance);
  };

  return (
    <div className="App">
      <Hamburger />
      <Banner
        track={track}
        playlist={playlistMap}
        action={action}
        setAction={setAction}
        player={player}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
      <ReactJkMusicPlayer
        audioLists={track || trackPlaylist}
        defaultVolume={100}
        clearPriorAudioLists
        showDownload={false}
        remove={false}
        glassBg
        mode="full"
        onAudioPlay={playTrack}
        onAudioPause={pauseTrack}
        onAudioReload={reloadTrack}
        onAudioEnded={endTrack}
        onPlayIndexChange={(index) => changeTrack(index)}
        showThemeSwitch={false}
        showMediaSession={true}
        seeked={false}
        drag={false}
        getAudioInstance={(instance) => getPlayerInstance(instance)}
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
