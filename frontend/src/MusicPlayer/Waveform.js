import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContainer, Wave, PlayButton } from "./waveform.styled";
import Item from "antd/lib/list/Item";
import { Button } from "antd";

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URI: "Test URI",
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
  }

  componentDidUpdate(prevProps) {
    const { track, action } = this.props;
    if (track && JSON.stringify(track) !== JSON.stringify(prevProps.track)) {
      this.setState({ URI: this.props.track.URI });
      this.waveform.load(track.musicSrc);
      this.waveform.setVolume(0);
      this.waveform.play();
    } else {
      if (action === "reload") {
        this.waveform.load(track.musicSrc);
        this.waveform.setVolume(0);
      } else if (this.props.player.paused == true) {
        this.waveform.pause();
      } else if (this.props.player.paused == false) {
        this.waveform.play();
      }
    }
  }

  handlePlay = () => {
    if (this.props.action === "play") {
      this.props.setAction("pause");
      this.props.player.pause();
      this.waveform.pause();
    }
    if (this.props.action === "pause") {
      this.props.setAction("play");
      this.props.player.play();
      this.waveform.play();
    }
  };

  render() {
    return (
      <div>
        <WaveformContainer>
          {this.props.track ? (
            <PlayButton onClick={this.handlePlay}>
              {this.props.action === "play" ? "Pause" : "Play"}
            </PlayButton>
          ) : null}
          <Wave id="waveform" />
        </WaveformContainer>
      </div>
    );
  }
}

export default Waveform;
