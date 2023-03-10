import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ExpiredNotice = () => {
  return (
    <>
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "50%", opacity: 0  , transition: {duration: 0.6}}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full p-5 bg-red-400 rounded-2xl flex flex-col gap-y-4"
      >
        <span className="text-white text-3xl font-bold"> اتمام تخفیفات</span>
        <span className="text-white text-2xl font-semibold">
          اوه !! بنظر جشنواره تموم شده متاسفم{" "}
        </span>
      </motion.div>
    </>
  );
};

export default ExpiredNotice;
