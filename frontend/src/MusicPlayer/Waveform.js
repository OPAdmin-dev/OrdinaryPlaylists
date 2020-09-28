import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContianer, Wave, PlayButton } from "./waveform.styled";

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      url: null,
    };
  }

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#2D5BFF",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
    });
  }

  componentDidUpdate(nextProps) {
    const { track } = this.props;
    if (nextProps.track !== track) {
      this.setState({
        playing: false,
      });
      this.waveform.load(track.musicSrc);
    }
  }

  handlePlay = () => {
    this.setState({
      playing: !this.state.playing,
    });
    this.waveform.playPause();
  };

  render() {
    return (
      <WaveformContianer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? "Play" : "Pause"}
        </PlayButton>
        <Wave id="waveform" />
      </WaveformContianer>
    );
  }
}

export default Waveform;
