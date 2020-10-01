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

import { Button } from "antd";

function App() {
  const [playlistMap, setPlaylistMap] = useState([]);
  const [trackPlaylist, setTrackPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState(null);
  const [track, setTrack] = useState();
  const [action, setAction] = useState("setup");
  const [player, setPlayer] = useState();
  const [trackIndex, setTrackIndex] = useState(0);
  const [SDKPlayer, setSDKPlayer] = useState();

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
        uri: obj.track_url,
      };
      return map;
    }, {});
    var temp_arr = [];
    for (const [key, val] of Object.entries(playlistMap)) {
      temp_arr.push(playlistMap[key]);
    }
    setPlaylistMap(playlistMap);
    setTrackPlaylist(temp_arr);
    setPlaylistName(PL["name"]);
  };

  const selectTrack = (T) => {
    const player = window.onSpotifyWebPlaybackSDKReady(T.track_url, "play");
    console.log(player);
    setTrack([
      {
        name: T.track_name,
        musicSrc: T.preview_url,
        singer: T.track_artist,
        cover: T.track_cover,
        uri: T.track_url,
      },
    ]);
    setAction("play");
  };

  const playTrack = () => {
    setAction("play");
  };

  const pauseTrack = (T) => {
    setAction("pause");
    window.onSpotifyWebPlaybackSDKReady(T.track_url, "pause");
  };

  const reloadTrack = () => {
    setAction("reload");
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
        playlistName={playlistName}
        action={action}
        setAction={setAction}
        player={player}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
      <Button onClick={() => pauseTrack(track)}>Pause</Button>
      <ReactJkMusicPlayer
        audioLists={track || trackPlaylist}
        defaultVolume={100}
        clearPriorAudioLists
        showDownload={false}
        remove={false}
        glassBg
        mode="full"
        onAudioPlay={playTrack}
        // onAudioPause={pauseTrack}
        onAudioReload={reloadTrack}
        onPlayIndexChange={(index) => changeTrack(index)}
        showThemeSwitch={false}
        showMediaSession={true}
        seeked={false}
        drag={false}
        responsive={true}
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
