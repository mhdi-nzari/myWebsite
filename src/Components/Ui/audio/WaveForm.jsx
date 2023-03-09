import { WaveformContianer, Wave } from "./Wavesurfer.styled";
import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import WaveFormControl from "./WaveFormControl";

import test from "@/assets/music/test-1.mp3";

class Waveform extends Component {
  state = {
    playing: false,
    isReady: false,
  };

  // just change state when play music

  componentDidMount() {
    const track = document.querySelector("#track");
    this.waveform = WaveSurfer.create({
      barWidth: 2,
      cursorWidth: 1,
      container: "#waveform",
      backend: "MediaElementWebAudio",
      height: 60,
      barRadius: 3,
      barGap: 4,
      barMinHeight: 1,
      progressColor: "#3f3f3f",
      responsive: true,
      waveColor: "#eeeeee",
      cursorColor: "transparent",
      xhr: {
        cache: "default",
        mode: "cors",
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "client",
        headers: [{ key: "Authorization", value: "my-token" }],
      },
      normalize: true,
    });

    this.waveform.load(track);
  }

  //   change icon play && puase
  playPause = () => {
    this.waveform.playPause();
    const checkStat = this.waveform.isPlaying();

    this.setState({ playing: checkStat });

    this.waveform.isReady && this.setState({ isReady: true });
  };

  calculateDuration = () => {
    const firstDuration = this.waveform.getDuration();
    // Hours, minutes and seconds
    const hrs = ~~(firstDuration / 3600);
    const mins = ~~((firstDuration % 3600) / 60);
    const secs = ~~firstDuration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  };

  skipBackward = () => {
    this.waveform.skipBackward();
  };

  skipForward = () => {
    this.waveform.skipForward();
  };

  render() {
    return (
      <div>
        <WaveFormControl
          handlePlay={this.playPause}
          statusPlay={this.state.playing}
          backwardMusic={this.skipBackward}
          forwarddMusic={this.skipForward}
          durationTime={this.calculateDuration}
          isReady={this.state.isReady}
        />
        <WaveformContianer>
          <Wave id="waveform" />
          <audio id="track" src={test} />
        </WaveformContianer>
      </div>
    );
  }
}

export default Waveform;
