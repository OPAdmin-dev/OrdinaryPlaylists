import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContainer, Wave, PlayButton } from "./waveform.styled";

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replay: false,
    };
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
      responsive: true,
      interact: false,
      normalize: true,
    });
    this.waveform.load(this.props.track.musicSrc);
    this.waveform.setVolume(0);
  }

  componentDidUpdate() {
    const { track, action, SFselected } = this.props;
    if (track && SFselected) {
      if (action === "reload") {
        this.waveform.load(track.musicSrc);
        this.waveform.setVolume(0);
      } else if (action === "pause") {
        this.waveform.pause();
      } else if (action == "play") {
        this.waveform.play();
      }
    } else {
      this.waveform.load(track.musicSrc);
      this.waveform.setVolume(0);
    }
  }

  handlePlay = () => {
    this.props.setSFSelected(true);
    if (this.props.action === "play" && this.props.SFselected) {
      this.waveform.load(this.props.track.musicSrc);
      this.waveform.setVolume(0);
      this.props.player.currentTime = 0;
      this.props.player.play();
      this.waveform.play();
      this.props.setAction("resume");
    }
  };

  render() {
    return (
      <WaveformContainer>
        {this.props.track ? (
          <PlayButton onClick={this.handlePlay}>
            {this.props.action === "play" && this.props.SFselected
              ? "Play"
              : "Replay"}
          </PlayButton>
        ) : null}
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
}

export default Waveform;
