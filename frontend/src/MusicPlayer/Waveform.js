import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContainer, Wave, PlayButton } from "./waveform.styled";

class Waveform extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "MediaElement",
      height: "100",
      progressColor: "#8a80d3",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
    });
  }

  componentDidUpdate(nextProps) {
    const { track, action } = this.props;
    if (track && JSON.stringify(nextProps.track) !== JSON.stringify(track)) {
      console.log("This happened");
      this.waveform.load(track.musicSrc);
      this.waveform.setVolume(0);
      this.waveform.play();
    } else {
      if (track) {
        if (action === "pause") {
          this.waveform.pause();
        }
        if (action === "play") {
          this.waveform.play();
        }
        if (action === "reload") {
          this.waveform.load(track.musicSrc);
          this.waveform.setVolume(0);
          this.waveform.play();
        }
        if (action === "end") {
          console.log("CDU end");
          this.waveform.load(track.musicSrc);
          this.waveform.setVolume(0);
        }
      }
    }
  }

  handlePlay = () => {
    if (this.props.action === "play") {
      this.props.setAction("pause");
      this.props.player.pause();
    }
    if (this.props.action === "pause") {
      this.props.setAction("play");
      this.props.player.play();
    }
    if (this.props.action === "end") {
      this.props.setAction("play");
      this.props.player.currentTime = 0;
    }
  };

  render() {
    return (
      <WaveformContainer>
        {this.props.track ? (
          <PlayButton onClick={this.handlePlay}>
            {this.props.action === "play" ? "Pause" : "Play"}
          </PlayButton>
        ) : null}
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
}

export default Waveform;
