import { Next, PauseCircle, PlayCircle, Previous } from "iconsax-react";

import { motion } from "framer-motion";

const WaveFormControl = ({
  handlePlay,
  statusPlay,
  backwardMusic,
  forwardMusic,
  durationTime,
  isReady
}) => {


  return (
    <>
    <div className="mt-10 ">
      <div className="flex w-full justify-center gap-x-5">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="p-3 bg-disableOverlay2 rounded-full"
          aria-label="Next"
          onClick={forwardMusic}
        >
          <Next size="32" color="#999999" variant="Bold" />
        </motion.button>
        <motion.button className="btnPlayPause" whileTap={{ scale: 0.8 }}>
          {statusPlay === true ? (
            <PauseCircle
              size="60"
              color="#f1891e"
              variant="Bold"
              className=""
              aria-label="Pause"
              onClick={handlePlay}
            />
          ) : (
            <PlayCircle
              size="60"
              color="#f1891e"
              variant="Bold"
              className=""
              aria-label="Play"
              onClick={handlePlay}
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
            onClick={backwardMusic}
          />
        </motion.button>
      </div>
      <div className="w-full mt-2 flex justify-between text-xl">
        <span className="duration">{`${isReady ? durationTime() : '00:00'}`}</span>
        <span className="time"></span>
      </div>

      </div>
    </>
  );
};

export default WaveFormControl;
