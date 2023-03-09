import { Next, PauseCircle, PlayCircle, Previous } from "iconsax-react";

import { motion } from "framer-motion";
import { useEffect } from "react";



const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="flex w-full justify-center gap-x-5">
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="p-3 bg-disableOverlay2 rounded-full"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next size="32" color="#999999" variant="Bold" />
    </motion.button>
    <motion.button whileTap={{ scale: 0.8 }}>
      {isPlaying ? (
        <PauseCircle
          size="60"
          color="#f1891e"
          variant="Bold"
          className=""
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        />
      ) : (
        <PlayCircle
          size="60"
          color="#f1891e"
          variant="Bold"
          className=""
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        />
      )}
    </motion.button>
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="p-3 bg-disableOverlay2 rounded-full"
    >
      <Previous
        size="32"
        color="#999999"
        variant="Bold"
        aria-label="Previous"
        onClick={onPrevClick}
      />
    </motion.button>
  </div>
);

export default AudioControls;
