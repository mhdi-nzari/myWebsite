import React, { useState, useEffect, useRef } from "react";

import AudioControls from "./AudioControls";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0),
    [trackProgress, setTrackProgress] = useState(0),
    [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc)),
    intervalRef = useRef(),
    isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const getDuration = () => {
    const boxCurrentTime = document.querySelector(".currentTime");
    if (isPlaying) {
      let num = Math.round(duration),
        seconds = num % 60,
        foo = num - seconds,
        minutes = foo / 60;
      const result = minutes + ":" + seconds;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      boxCurrentTime.textContent = result;
    }
  };

  const realTimePodcast = () => {
    const boxDuration = document.querySelector(".duration");
    // convert second to minuts:second and return for use in ui
    if (isPlaying) {
      const { currentTime } = audioRef.current;
      var currentsTime = currentTime | 0;
      var minutes = "0" + Math.floor(currentsTime / 60);
      var seconds = "0" + (currentsTime - minutes * 60);
      let cur = minutes.substr(-2) + ":" + seconds.substr(-2);
      boxDuration.textContent = cur;
    }
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #3f3f3f), color-stop(${currentPercentage}, #777))
`;

  getDuration();
  realTimePodcast();

  return (
    <>
      <a
        href="/singlePodcast"
        className="w-full h-200  mt-6 mx-auto inline-flex"
      >
        <img
          src={image}
          className="w-full h-full rounded-primary"
          alt={`track artwork for ${title} by ${artist}`}
        />
      </a>
      <div className="flex flex-col mt-7">
        <h3 className="text-headingColor   text-3xl font-bold   line-clamp-1 text-center ">
          <a href="/singlePodcast"></a>
        </h3>
        <p className="text-headingColor text-3xl font-bold  text-center line-clamp-1  ">
          {title}
        </p>
      </div>
      <div className="flex flex-col w-full mb-2 mt-10">
        <div className="navigation_wrapper relative w-full   ">
          {/* <span
            style={{ width: `50%` }}
            className={`flex absolute left-0 top-0 bottom-0 my-auto h-2   bg-headingColor rounded-full before:flex before:w-9 before:h-5 before:rounded-full before:bg-primary  before:absolute before:-right-3 before:top-0 before:bottom-0 before:my-auto before:cursor-pointer `}
          ></span> */}

          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress cursor-pointer"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>

        <div className="w-full flex justify-between mt-5">
          <p className="currentTime text-headingColor font-normal text-xl">
            00:00:00
          </p>
          <p className="duration text-headingColor font-normal text-xl">
            00:00
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <div className="w-full">
          <audio src="" preload="auto"></audio>
        </div>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div>
    </>
  );
};

export default Player;
