import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
const Pagination = () => {
  return (
    <>
      <div className="w-full h-full flex overflow-hidden     justify-center mt-20 :">
        <b className="w-full hidden sm:inline-block h-[1px] bg-disableOverlay2  mx-10"></b>
        <div className="flex">
          {/* backWard */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="  bg-primary  rounded-2xl w-16 h-16 flex justify-center cursor-pointer transition-default duration-150"
          >
            <span>
              <ArrowRight size="28" color="#ffffff" variant="Broken" />
            </span>
          </motion.div>
          <ul className="flex gap-x-7 mx-5">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className=" border-[1px] border-disableOverlay2 duration-100 bg-transparent text-headingColor w-16 h-16 flex justify-center rounded-2xl cursor-pointer hover:border-disable transition-default [&.active]:border-primary [&.active]:text-primary"
            >
              <a
                href="/"
                className="text-inherit font-semibold  text-2xl active"
              >
                1
              </a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.9 }}
              className=" border-[1px] border-disableOverlay2 duration-100 bg-transparent text-headingColor w-16 h-16 flex justify-center rounded-2xl cursor-pointer hover:border-disable transition-default [&.active]:border-primary [&.active]:text-primary active"
            >
              <a href="/" className="text-inherit font-semibold  text-2xl ">
                2
              </a>
            </motion.li>

            <motion.li
              whileTap={{ scale: 0.9 }}
              className=" border-[1px] border-disableOverlay2 duration-100 bg-transparent text-headingColor w-16 h-16 flex justify-center rounded-2xl cursor-pointer hover:border-disable transition-default [&.active]:border-primary [&.active]:text-primary"
            >
              <a href="/" className="text-inherit font-semibold  text-2xl">
                3
              </a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.9 }}
              className=" border-[1px] border-disableOverlay2 duration-100 bg-transparent text-headingColor w-16 h-16 flex justify-center rounded-2xl cursor-pointer hover:border-disable transition-default [&.active]:border-primary [&.active]:text-primary"
            >
              <a href="/" className="text-inherit font-semibold  text-2xl ">
                4
              </a>
            </motion.li>
          </ul>

          {/* forWard */}

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-primary  rounded-2xl w-16 h-16 flex justify-center cursor-pointer transition-default duration-150"
          >
            <span>
              <ArrowLeft size="28" color="#ffffff" variant="Broken" />
            </span>
          </motion.div>
        </div>
        <b className="w-full hidden sm:inline-block h-[1px] bg-disableOverlay2  mx-10"></b>
      </div>
    </>
  );
};

export default Pagination;
