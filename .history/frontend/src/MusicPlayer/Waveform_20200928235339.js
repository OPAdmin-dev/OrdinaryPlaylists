import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContainer, Wave, PlayButton } from "./waveform.styled";

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
      height: 120,
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
      <WaveformContainer>
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? "Play" : "Pause"}
        </PlayButton>
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
}

export default Waveform;
