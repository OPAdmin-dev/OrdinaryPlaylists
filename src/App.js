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
import { apiSpotify } from "./services/utilities/API";

function App() {
  const [playlistMap, setPlaylistMap] = useState([]);
  const [trackPlaylist, setTrackPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState(null);
  const [track, setTrack] = useState();
  const [action, setAction] = useState("");
  const [player, setPlayer] = useState();
  const [trackIndex, setTrackIndex] = useState(0);
  const [seasonFeature, setSeasonFeature] = useState();
  const [SFselected, setSFSelected] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      var filtered = res.data.filter((p) => {
        if (p.name === "Season Feature") {
          return p.tracks;
        }
      });
      var feature = filtered[0].tracks[0];
      setSeasonFeature([
        {
          name: feature.track_name,
          musicSrc: feature.preview_url,
          singer: feature.track_artist,
          cover: feature.track_cover,
          duration: feature.track_duration,
          isSF: true,
        },
      ]);
      setTrack(seasonFeature);
    });
  }, []);

  const loadSeasonFeature = () => {
    setTrack(seasonFeature);
  };

  const selectPlaylist = (PL) => {
    setTrack(null);
    setTrackIndex(0);
    setSFSelected(false);
    setAutoPlay(true);
    var index = -1;
    var playlistMap = PL["tracks"].reduce(function (map, obj) {
      index = index + 1;
      map[index] = {
        name: obj.track_name,
        musicSrc: obj.preview_url,
        singer: obj.track_artist,
        cover: obj.track_cover,
        duration: obj.track_duration,
        isSF: false,
      };
      return map;
    }, {});
    var temp_arr = [];
    for (const [key, val] of Object.entries(playlistMap)) {
      temp_arr.push(val);
    }
    setPlaylistMap(playlistMap);
    setTrackPlaylist(temp_arr);
    setPlaylistName(PL["name"]);
  };

  const selectTrack = (T) => {
    setSFSelected(false);
    setTrack([
      {
        name: T.track_name,
        musicSrc: T.preview_url,
        singer: T.track_artist,
        cover: T.track_cover,
        duration: T.track_duration,
        isSF: false,
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

  const changeTrack = (index) => {
    setTrackIndex(index);
  };

  const applyFade = (index, tracks, ctrack) => {
    //getSoundAndFadeAudio(ctrack);
  };

  const getPlayerInstance = (instance) => {
    setPlayer(instance);
  };

  const getSoundAndFadeAudio = (ctrack) => {
    console.log(ctrack);
    console.log("Fade function");
    var fadePoint = ctrack.track_duration - 5 * 1000;
    var fadeAudio = setInterval(function () {
      // Only fade if past the fade out point or not at zero already
      if (player.currentTime >= fadePoint && player.volume > 0.2) {
        console.log("fading...");
        player.volume -= 0.1;
      }
      // When volume at zero stop all the intervalling
      if (player.volume < 0.2) {
        console.log("Cleared fade!");
        clearInterval(fadeAudio);
      }
    }, 500);
  };

  return (
    <div className="App">
      <Hamburger />
      <Banner
        track={seasonFeature}
        setTrack={setTrack}
        action={action}
        setAction={setAction}
        player={player}
        loadSeasonFeature={loadSeasonFeature}
        SFselected={SFselected}
        setSFSelected={setSFSelected}
      />
      <ReactJkMusicPlayer
        audioLists={(SFselected ? seasonFeature : track) || trackPlaylist}
        defaultVolume={100}
        clearPriorAudioLists
        showDownload={false}
        remove={false}
        glassBg
        mode="full"
        onAudioPlay={playTrack}
        onAudioPause={pauseTrack}
        onAudioReload={reloadTrack}
        onPlayIndexChange={(index) => changeTrack(index)}
        showThemeSwitch={false}
        showMediaSession={true}
        seeked={false}
        drag={false}
        responsive={true}
        getAudioInstance={(instance) => getPlayerInstance(instance)}
        onAudioPlayTrackChange={(index, tracks, ctrack) =>
          applyFade(index, tracks, ctrack)
        }
        autoPlay={autoPlay}
        preload={true}
      />
      <NewRelease selectTrack={selectTrack} />
      <Playlist selectPlaylist={selectPlaylist} />
      {/* <StoryViewer /> */}
      {/* <Mood /> */}
      <StoryShared />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
