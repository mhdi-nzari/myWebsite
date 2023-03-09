import {
  ArrowLeft,
  Heart,
  Microphone2,
  Star,
  Teacher,
  Timer,
  VideoPlay,
} from "iconsax-react";
import DefaultButton from "../Ui/DefaultButton";
import { ReactComponent as Toman } from "@/assets/img/toman.svg";
import { Link } from "react-router-dom";
import blogImage01 from "@/assets/img/reactHook.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductItem = (props) => {
  const [heartActive, setHeartActive] = useState(false);
  return (
    <motion.figure ayout animate={{opacity:1 ,  scale:1}} initial={{opacity:0 , scale:0}} exit={{opacity:0 , scale:0}} transition={{duration:0.4}}  className="flex flex-col flex-1 bg-white shadow-default rounded-secondary px-10 pb-10 ">
      <div className="w-full 2xl:w-300 h-200  inline-block  overflow-hidden -translate-y-12 group relative rounded-secondary bg-transparent">
        <img
          className=" absolute -right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full  h-full  rounded-secondary drop-shadow-xl"
          src={blogImage01}
          alt="image-blog"
        />
        {/* heart icon */}
        <motion.button
          
          onClick={() => setHeartActive((active) => !active)}
          whileTap={{ scale: 0.9 }}
          className="flex gap-x-1 absolute right-5 top-5 w-fit h-fit  rounded-2xl bg-white drop-shadow-md text-disable px-3 py-3 "
        >
          <span className="">
            <Heart size="19" variant="Bold" className={`${heartActive ? "text-disable" : "text-red-600"} transition-default`} />
          </span>
          <p className={`${heartActive ? "text-disable" : "text-red-600"}  font-semibold text-xl transition-default`}>53</p>
        </motion.button>

        {/* student icon */}
        <div className="flex gap-x-1 absolute  top-5 w-fit h-fit  rounded-2xl bg-white drop-shadow-md text-disable px-4 py-3 transition-default left-5 lg:-left-40  lg:group-hover:left-5">
          <span className="">
            <Teacher size="20" variant="Bold" className="text-blue-600" />
          </span>
          <p className="text-slate-600 font-semibold text-xl">13</p>
        </div>
        {/* star Icon */}
        <div className="flex gap-x-1 absolute  top-24 w-fit h-fit  rounded-2xl bg-white drop-shadow-md text-disable px-4 py-3 transition-default left-5 lg:-left-40  lg:group-hover:left-5">
          <span className="">
            <Star size="20" variant="Bold" className="text-yellow-400" />
          </span>
          <p className="text-slate-600 font-semibold text-xl">5.0</p>
        </div>
      </div>

      <figcaption className="flex flex-col w-full ">
        <div className="flex flex-col items-start w-full border-b-2 border-dashed pb-8">
          <h3 className="w-full text-2xl text-headingColor font-bold line-clamp-2 leading-[2.9rem] md:leading-[3.2rem] md:text-3xl ">
            دوره طراحی وب ریسپانسیو
          </h3>
          <div className="flex gap-5 flex-wrap w-full mt-4">
            {/* course time */}
            <div className="flex flex-1 ">
              <span className="ml-2">
                <Timer
                  size="20"
                  className="text-disableOverlay"
                  variant="Bulk"
                />
              </span>

              <span className="text-disableOverlay text-xl font-semibold whitespace-nowrap">
                00:00:54
              </span>
            </div>
            {/* Status */}
            <div className="flex flex-1  ">
              <span className="ml-2">
                <Microphone2
                  size="20"
                  className="text-disableOverlay"
                  variant="Bulk"
                />
              </span>

              <span className="text-disableOverlay text-xl font-semibold whitespace-nowrap">
                تکمیل ضبط
              </span>
            </div>
            {/* Status */}
            <div className="flex flex-1  ">
              <span className="ml-2">
                <VideoPlay
                  size="20"
                  className="text-disableOverlay"
                  variant="Bulk"
                />
              </span>

              <span className="text-disableOverlay text-xl font-semibold whitespace-nowrap">
                اسپات پلیر
              </span>
            </div>
          </div>
          <Link
            to="/singleProduct"
            className="w-full flex mt-8 text-primary justify-center"
          >
            <p className="text-inherit  text-2xl">مشاهده اطلاعات دوره</p>
            <span className="mr-2">
              <ArrowLeft size="20" className="text-inherit" variant="Broken" />
            </span>
          </Link>
        </div>

        <div
          to="/cart"
          className="flex justify-between font-semibold mt-10 w-full"
        >
          <DefaultButton to="/cart" classStyle="">
            ثبت نام دوره
          </DefaultButton>
          <div className="flex">
            <div className="flex flex-col gap-y-1 items-end">
              <p className="text-headingColor font-bold text-3xl">398,000</p>
              <p className="text-red-400 font-bold text-2xl line-through">
                400,000
              </p>
            </div>{" "}
            <Toman className="mr-2  h-10 w-10" />
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
};
export default ProductItem;
