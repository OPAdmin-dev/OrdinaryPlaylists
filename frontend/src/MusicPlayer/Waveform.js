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
    const { track, playing } = this.props;
    if (JSON.stringify(nextProps.track) !== JSON.stringify(track)) {
      this.waveform.load(track.musicSrc);
      this.waveform.setVolume(0);
      this.waveform.playPause();
    } else {
      if (nextProps.playing !== playing) {
        this.waveform.playPause();
      }
    }
  }

  handlePlay = () => {
    this.props.setPlaying(!this.props.playing);
    if (this.props.playing) {
      this.props.player.pause();
    } else {
      this.props.player.play();
    }
  };

  render() {
    return (
      <WaveformContainer>
        {this.props.track ? (
          <PlayButton onClick={this.handlePlay}>
            {!this.props.playing ? "Play" : "Pause"}
          </PlayButton>
        ) : null}
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
}

export default Waveform;
