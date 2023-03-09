import { useState } from "react";
import { motion } from "framer-motion";

import { useCountUp } from "react-countup";

import pic150 from "@/assets/img/150x150.jpg";
import pic50 from "@/assets/img/50x50.jpg";
import pic350 from "@/assets/img/350x350.jpg";
import challenge from "@/assets/img/challenge.png";
import {
  Airpods,
  ArchiveAdd,
  CodeCircle,
  DocumentCode,
  Hashtag,
  Medal,
  Microphone2,
  MusicLibrary2,
  PlayCircle,
  PlayCricle,
  PresentionChart,
  Profile2User,
  VideoPlay,
  WristClock,
} from "iconsax-react";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillClockCircle, AiOutlineHeart } from "react-icons/ai";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ReactComponent as Play } from "@/assets/img/Play.svg";
import { ReactComponent as PlayIcon } from "@/assets/img/PlayIcon.svg";
import trendItem from "@/assets/img/trendItem-1.jpg";
import { Airdrop, Music, MusicPlay, TrendUp } from "iconsax-react";
import Waveform from "../../Components/Ui/audio/WaveForm";

const Podcast = () => {
  const [open, setOpen] = useState(false),
    [toggleThisElement, setToggleThisElement] = useState(false),
    [toggleTab, settoggleTab] = useState(1);

  const handleOpen = () => {
      setOpen(!open);
    },
    activeTab = (index) => {
      settoggleTab(index);
    };

  const [toggleState, setToggleState] = useState(1),
    toggleFilter = (index) => {
      setToggleState(index);
    };

  const PodcastCounter = () => {
    useCountUp({
      ref: "Project",
      duration: 10,
      enableScrollSpy: true,
      end: 500,
      suffix: "+",
    });
    return <span id="Project" />;
  };


  return (
    <>
      <main className="relative my-10 flex w-full flex-col  ">
        <section className="mb-20 flex w-full flex-col-reverse items-start px-6 md:flex-row md:px-20">
          {/* left Section */}
          <div className="flex w-full basis-full flex-col items-start mdg:basis-1/2">
            <div className="w-full mdg:w-3/4">
              <div className="my-10 flex w-full flex-row justify-center   gap-x-1 gap-y-10 mdg:my-0 mdg:flex-col   mdg:items-start mdg:gap-y-20">
                <p className="flex text-2xl font-semibold text-headingColor  mdg:text-[40px] dark:text-white">
                  بهترین پادکست ها
                  <span className=" mr-5  hidden h-[5px] bg-primaryOverlay  mdg:inline-block mdg:w-24"></span>
                </p>
                <p className="flex text-2xl font-semibold text-headingColor mdg:text-[40px] dark:text-white ">
                  <span className=" ml-5  hidden h-[5px] bg-primaryOverlay   mdg:inline-block mdg:w-24"></span>
                  برای کل عمرتون
                </p>
              </div>

              <p className="mt-10 text-2xl leading-[3.6rem] text-disableUnique line-clamp-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
              </p>

              <div
                className="transition-default group mt-10  flex w-full rounded-tl-2xl rounded-bl-2xl shadow-default hover:shadow-none mdg:w-fit dark:bg-white"
                id="listen"
              >
                <a
                  href="#discoverPodcast"
                  className="transition-default flex w-1/2 justify-center border-2 border-solid border-transparent bg-primary py-7 px-10 text-2xl font-normal text-white  group-hover:border-primary group-hover:bg-transparent group-hover:text-headingColor mdg:w-fit dark:hover:border-white"
                >
                  <p className="flex justify-center whitespace-nowrap text-inherit">
                    شروع شنیدن
                  </p>
                </a>
                <button className="flex w-1/2 justify-center  rounded-tl-2xl  rounded-bl-2xl px-5 mdg:w-fit">
                  <Microphone2
                    size="32"
                    color="#3F3F3F"
                    className="mic transition-default "
                  />
                </button>
              </div>
            </div>
          </div>
          {/* right Section */}
          <div className="flex w-full flex-col mdg:basis-1/2 ">
            <div className="relative  ">
              <img
                src={challenge}
                className=" cursor-default rounded-primary "
                alt=""
              />
              <div className=" absolute -right-1/3 -bottom-48 hidden mdg:block ">
                <img
                  src="https://placekitten.com/300/300"
                  className=" cursor-default rounded-primary"
                  alt=""
                />

                <div className="absolute -right-20 -bottom-20 flex h-48 w-48 flex-col justify-center rounded-full border-8  border-white bg-primary p-5">
                  <p className="text-[30px] font-bold text-white ">
                    <PodcastCounter />
                  </p>
                  <p className="text-2xl font-normal text-white ">پادکست</p>
                </div>
                <div className=" transition-default transition-default absolute -right-[43%] -top-36   flex h-auto w-[260px] overflow-hidden rounded-2xl bg-white px-10 py-4 shadow-default  after:absolute after:-left-5 after:-top-5 after:h-16 after:w-16 after:rounded-full  after:bg-primaryOverlay">
                  <div className="loader flex h-full w-full justify-end ">
                    <svg
                      id="wave"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 38.05"
                      className="h-50 w-full fill-disable"
                    >
                      <path
                        id="Line_-4"
                        data-name="Line -4"
                        d="M-20.91,9l0.78,0A1,1,0,0,0,-20,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,H.96Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_-3"
                        data-name="Line -3"
                        d="M-15.96,15l3.78,2A2,1,0,0,0,-15,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0,7,H.96Z"
                        fill="#F1891E"
                      />

                      <path
                        id="Line_-2"
                        data-name="Line -2"
                        d="M-10.91,13l1.78,0A1,1,0,0,0,-10,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,H.96Z"
                        fill="#F1891E"
                      />

                      <path
                        id="Line_-1"
                        data-name="Line -1"
                        d="M-5.96,0l3,0A1,1,0,0,0,-5,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H-5.96Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_1"
                        data-name="Line 1"
                        d="M0.96,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0,7,H0.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_2"
                        data-name="Line 2"
                        d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_3"
                        data-name="Line 3"
                        d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_4"
                        data-name="Line 4"
                        d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_5"
                        data-name="Line 5"
                        d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_6"
                        data-name="Line 6"
                        d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_7"
                        data-name="Line 7"
                        d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"
                        fill="#F1891E"
                      />
                      <path
                        id="Line_8"
                        data-name="Line 8"
                        d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"
                      />
                      <path
                        id="Line_9"
                        data-name="Line 9"
                        d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"
                      />
                      <path
                        id="Line_10"
                        data-name="Line 10"
                        d="M53.91,15l-0.12,0A1,1,0,0,0,53,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H53.91Z"
                      />
                      <path
                        id="Line_11"
                        data-name="Line 11"
                        d="M59.91,10l-0.12,0A1,1,0,0,0,59,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H59.91Z"
                      />
                      <path
                        id="Line_12"
                        data-name="Line 12"
                        d="M65.91,10l-0.12,0A1,1,0,0,0,65,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H65.91Z"
                      />
                      <path
                        id="Line_13"
                        data-name="Line 13"
                        d="M71.91,1l-0.12,0A1,1,0,0,0,71,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H71.91Z"
                      />
                      <path
                        id="Line_14"
                        data-name="Line 14"
                        d="M76.91,10l-0.12,0A1,1,0,0,0,76,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H76.91Z"
                      />

                      <path
                        id="Line_15"
                        data-name="Line 15"
                        d="M81.91,15l-0.12,0A1,1,0,0,0,81,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H81.91Z"
                      />

                      <path
                        id="Line_16"
                        data-name="Line 16"
                        d="M86.91,15l-0.78,0A1,1,0,0,0,86,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H86.91Z"
                      />

                      <path
                        id="Line_17"
                        data-name="Line 17"
                        d="M91.91,12l-0,0A1,1,0,0,0,91,10V24a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H91.91Z"
                      />
                      <path
                        id="Line_18"
                        data-name="Line 18"
                        d="M96.91,13l-0,0A1,1,0,0,0,96,10V24a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H96.91Z"
                      />
                      <path
                        id="Line_19"
                        data-name="Line 19"
                        d="M96.91,13l-0,0A1,1,0,0,0,96,10V24a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H96.91Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <VideoPlay size="50" color="#621EF1" variant="Bulk" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sunShape my-[5rem] flex w-full flex-col px-12 md:px-20 lg:mt-[200px]">
          <div className="flex w-full flex-col justify-center">
            <h3 className=" relative z-[1] flex   text-center font-pinar text-5xl leading-[3.6rem]  text-headingColor  lg:text-right">
              <span className="absolute -right-16 -top-5 mb-5 -translate-x-0 -translate-y-12 rotate-45">
                <MusicLibrary2
                  size="70"
                  color="#F1891E"
                  variant="Broken"
                  className=" w-16 opacity-30 lg:w-20"
                />
              </span>
              پادکست های جدید
            </h3>
            <small className="text-center text-2xl font-normal leading-[3.4rem] text-disable">
              پادکست هایی که در عین صرفه جویی زمان به دانش شما می افزاید
            </small>
          </div>

          <div className="mt-20 mb-10 hidden w-full justify-center md:flex ">
            {/* tab bar */}

            <ul className="hidden gap-x-10 lg:flex">
              <li className={`group ${toggleState === 1 ? "active-tab" : ""} `}>
                <button
                  className="transition-default  relative rounded-full bg-primaryOverlay px-7  py-4 text-2xl text-primary group-[.active-tab]:bg-primary group-[.active-tab]:text-white "
                  onClick={() => toggleFilter(1)}
                >
                  همه
                  <div className="absolute -bottom-2 left-0 right-0 -z-10 mx-auto hidden h-5 w-5 rotate-[45deg] rounded-[3px] bg-primary group-[.active-tab]:block">
                    <span className="absolute top-[13px] right-[5px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full before:rounded-full before:shadow-[0px_-1.8px_#fff] dark:before:shadow-[0px_-1.8px_#3f3f3f]"></span>
                    <span
                      className="absolute top-[-2px] left-[15px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full
                        before:rounded-full before:shadow-[-0.3px_3.4px_#fff] dark:before:shadow-[-0.3px_3.4px_#3f3f3f]"
                    ></span>
                  </div>
                </button>
              </li>
              <li className={`group ${toggleState === 2 ? "active-tab" : ""} `}>
                <button
                  className="transition-default relative rounded-full bg-primaryOverlay px-7  py-4 text-2xl text-primary group-[.active-tab]:bg-primary group-[.active-tab]:text-white"
                  onClick={() => toggleFilter(2)}
                >
                  برنامه نویسی
                  <div className="absolute -bottom-2 left-0 right-0 -z-10 mx-auto hidden h-5 w-5 rotate-[45deg] rounded-[3px] bg-primary group-[.active-tab]:block">
                    <span className="absolute top-[13px] right-[5px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full before:rounded-full before:shadow-[0px_-1.8px_#fff] dark:before:shadow-[0px_-1.8px_#3f3f3f]"></span>
                    <span
                      className="absolute top-[-2px] left-[15px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full
                        before:rounded-full before:shadow-[-0.3px_3.4px_#fff]  dark:before:shadow-[-0.3px_3.4px_#3f3f3f] "
                    ></span>
                  </div>
                </button>
              </li>

              <li className={`group ${toggleState === 4 ? "active-tab" : ""} `}>
                <button
                  className="transition-default relative rounded-full bg-primaryOverlay px-7 py-4  text-2xl text-primary  group-[.active-tab]:bg-primary group-[.active-tab]:text-white"
                  onClick={() => toggleFilter(4)}
                >
                  رزومه و استخدام
                  <div className="absolute -bottom-2 left-0 right-0 -z-10 mx-auto hidden h-5 w-5 rotate-[45deg] rounded-[3px] bg-primary group-[.active-tab]:block">
                    <span className="absolute top-[13px] right-[5px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full before:rounded-full before:shadow-[0px_-1.8px_#fff] dark:before:shadow-[0px_-1.8px_#3f3f3f]"></span>
                    <span
                      className="absolute top-[-2px] left-[15px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full
                        before:rounded-full before:shadow-[-0.3px_3.4px_#fff] dark:before:shadow-[-0.3px_3.4px_#3f3f3f]"
                    ></span>
                  </div>
                </button>
              </li>
              <li className={`group ${toggleState === 5 ? "active-tab" : ""} `}>
                <button
                  className="transition-default relative rounded-full bg-primaryOverlay px-7 py-4  text-2xl text-primary  group-[.active-tab]:bg-primary group-[.active-tab]:text-white"
                  onClick={() => toggleFilter(5)}
                >
                  نقشه راه
                  <div className="absolute -bottom-2 left-0 right-0 -z-10 mx-auto hidden h-5 w-5 rotate-[45deg] rounded-[3px] bg-primary group-[.active-tab]:block">
                    <span className="absolute top-[13px] right-[5px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full before:rounded-full before:shadow-[0px_-1.8px_#fff] dark:before:shadow-[0px_-1.8px_#3f3f3f]"></span>
                    <span
                      className="absolute top-[-2px] left-[15px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full
                        before:rounded-full before:shadow-[-0.3px_3.4px_#fff] dark:before:shadow-[-0.3px_3.4px_#3f3f3f]"
                    ></span>
                  </div>
                </button>
              </li>
              <li className={`group ${toggleState === 3 ? "active-tab" : ""} `}>
                <button
                  className="transition-default relative rounded-full bg-primaryOverlay px-7 py-4  text-2xl text-primary  group-[.active-tab]:bg-primary group-[.active-tab]:text-white"
                  onClick={() => toggleFilter(3)}
                >
                  فرانت اند
                  <div className="absolute -bottom-2 left-0 right-0 -z-10 mx-auto hidden h-5 w-5 rotate-[45deg] rounded-[3px] bg-primary group-[.active-tab]:block">
                    <span className="absolute top-[13px] right-[5px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full before:rounded-full before:shadow-[0px_-1.8px_#fff] dark:before:shadow-[0px_-1.8px_#3f3f3f]"></span>
                    <span
                      className="absolute top-[-2px] left-[15px] mx-auto  h-3 w-3 rotate-[45deg] bg-transparent  before:absolute before:top-0 before:right-0 before:h-full before:w-full
                        before:rounded-full before:shadow-[-0.3px_3.4px_#fff] dark:before:shadow-[-0.3px_3.4px_#3f3f3f]"
                    ></span>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* itemBar */}

          <div className="grid w-full grid-cols-1 gap-10 overflow-hidden py-12 px-10 sm:grid-cols-1 md:grid-cols-2  mdg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <figure className="relative flex w-full flex-[1_1_150px]  flex-col  items-start justify-center ">
              <div className=" overlayimg group relative h-auto w-full overflow-hidden">
                <img
                  src={pic350}
                  className="h-auto w-full cursor-default rounded-primary"
                  alt=""
                />

                <div className="transition-default absolute -right-32 top-12 flex h-fit  w-fit cursor-pointer justify-center  rounded-full bg-white p-3 drop-shadow-lg group-hover:right-5">
                  <ArchiveAdd size="25" color="#3f3f3f" variant="Broken" />
                </div>
              </div>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
                <div className="flex flex-col items-start px-10">
                  <a href="/singleBlog">
                    <h3 className="text-2xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </a>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-2 group-hover:scale-110"
                  >
                    <PlayCircle size="20" color="#F1891E" variant="Bulk" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        <span className="ml-2 text-lg text-inherit ">
                          <WristClock size="17" color="#9b9b9b" />
                        </span>
                        20:10
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex text-xl text-disableOverlay  ">
                      <MusicPlay size="17" color="#9b9b9b" className="ml-2" />8
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_150px]  flex-col  items-start justify-center ">
              <div className=" overlayimg group relative h-auto w-full overflow-hidden ">
                <img
                  src={pic350}
                  className="h-auto w-full cursor-default rounded-primary"
                  alt=""
                />

                <div className="transition-default absolute -right-32 top-12 flex h-fit  w-fit cursor-pointer justify-center  rounded-full bg-white p-3 drop-shadow-lg group-hover:right-5">
                  <ArchiveAdd size="25" color="#3f3f3f" variant="Broken" />
                </div>
              </div>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
                <div className="flex flex-col items-start px-10">
                  <a href="/singleBlog">
                    <h3 className="text-2xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </a>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-2 group-hover:scale-110"
                  >
                    <PlayCircle size="20" color="#F1891E" variant="Bulk" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        <span className="ml-2 text-lg text-inherit ">
                          <WristClock size="17" color="#9b9b9b" />
                        </span>
                        1:00
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex text-xl text-disableOverlay  ">
                      <MusicPlay size="17" color="#9b9b9b" className="ml-2" />
                      500
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_150px]  flex-col  items-start justify-center ">
              <div className=" overlayimg group relative h-auto w-full overflow-hidden ">
                <img
                  src={pic350}
                  className="h-auto w-full cursor-default rounded-primary"
                  alt=""
                />

                <div className="transition-default absolute -right-32 top-12 flex h-fit  w-fit cursor-pointer justify-center  rounded-full bg-white p-3 drop-shadow-lg group-hover:right-5">
                  <ArchiveAdd size="25" color="#3f3f3f" variant="Broken" />
                </div>
              </div>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
                <div className="flex flex-col items-start px-10">
                  <a href="/singleBlog">
                    <h3 className="text-2xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </a>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-2 group-hover:scale-110"
                  >
                    <PlayCircle size="20" color="#F1891E" variant="Bulk" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        <span className="ml-2 text-lg text-inherit ">
                          <WristClock size="17" color="#9b9b9b" />
                        </span>
                        00:05
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex text-xl text-disableOverlay  ">
                      <MusicPlay size="17" color="#9b9b9b" className="ml-2" />
                      500
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_150px]  flex-col  items-start justify-center ">
              <div className=" overlayimg group relative h-auto w-full overflow-hidden ">
                <img
                  src={pic350}
                  className="h-auto w-full cursor-default rounded-primary"
                  alt=""
                />

                <div className="transition-default absolute -right-32 top-12 flex h-fit  w-fit cursor-pointer justify-center  rounded-full bg-white p-3 drop-shadow-lg group-hover:right-5">
                  <ArchiveAdd size="25" color="#3f3f3f" variant="Broken" />
                </div>
              </div>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
                <div className="flex flex-col items-start px-10">
                  <a href="/singleBlog">
                    <h3 className="text-2xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </a>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-2 group-hover:scale-110"
                  >
                    <PlayCircle size="20" color="#F1891E" variant="Bulk" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        <span className="ml-2 text-lg text-inherit ">
                          <WristClock size="17" color="#9b9b9b" />
                        </span>
                        10:01
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex text-xl text-disableOverlay  ">
                      <MusicPlay size="17" color="#9b9b9b" className="ml-2" />
                      124
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_150px]  flex-col  items-start justify-center ">
              <div className=" overlayimg group relative h-auto w-full overflow-hidden ">
                <img
                  src={pic350}
                  className="h-auto w-full cursor-default rounded-primary"
                  alt=""
                />

                <div className="transition-default absolute -right-32 top-12 flex h-fit  w-fit cursor-pointer justify-center  rounded-full bg-white p-3 drop-shadow-lg group-hover:right-5">
                  <ArchiveAdd size="25" color="#3f3f3f" variant="Broken" />
                </div>
              </div>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]">
                <div className="flex flex-col items-start px-10">
                  <a href="/singleBlog">
                    <h3 className="text-2xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </a>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-2 group-hover:scale-110"
                  >
                    <PlayCircle size="20" color="#F1891E" variant="Bulk" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        <span className="ml-2 text-lg text-inherit ">
                          <WristClock size="17" color="#9b9b9b" />
                        </span>
                        5:10
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex text-xl text-disableOverlay  ">
                      <MusicPlay size="17" color="#9b9b9b" className="ml-2" />
                      40
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="hidden w-full flex-col px-12 md:px-20">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex w-full flex-col items-start  gap-y-7  md:basis-3/5 lg:basis-1/2">
              <p className="text-right text-3xl font-medium  text-headingColor  lg:text-[40px] lg:leading-[5rem]  ">
                گوش دادن به یه پادکست
              </p>

              <div className="flex w-full text-3xl font-normal text-headingColor lg:text-[40px] lg:leading-[5rem]">
                <span className="ml-2 text-3xl font-bold text-primary lg:text-[40px] lg:leading-[5rem]">
                  ارزشمند
                </span>
                و
                <span className="mr-2 text-3xl font-bold text-secondary lg:text-[40px] lg:leading-[5rem]">
                  تجربه محور
                </span>
              </div>
              <p className="text-right text-3xl font-medium  text-headingColor  lg:text-[40px] lg:leading-[5rem]  ">
                بهتر از دیدن دوره های ‌آموزشی بی ثمره
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-y-10  md:basis-auto lg:basis-1/2">
              <div>
                <p className="w-full text-right text-3xl font-normal !leading-[3.6rem] text-headingColor lg:w-4/6">
                  این یکی از بهترین راه ها برای بدست آوردن چیزهایی که دوستشان
                  دارید و بابت هر مرحله ای که رشد میکنید لذت میبرید
                </p>
              </div>
              <a
                href="#discoverPodcast"
                className="default-btn cta-holder  lg:px-24"
              >
                بزن بریم
                <Music size="25" className="text-inherit" variant="Broken" />
              </a>
            </div>
          </div>

          <div className="mt-28 flex w-full flex-row flex-wrap gap-12">
            <figure className="flex- transition-default group flex flex-[1_1_300px] flex-grow  flex-col p-5 ">
              <div className="transition-default rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] border-[1px] border-solid border-transparent bg-primaryOverlay p-20 group-hover:border-primary">
                <Play className="h-24 w-24 " />
              </div>

              <figcaption className="mt-12 flex flex-col">
                <h3 className="w-full text-center text-3xl font-bold leading-[3.7rem] text-headingColor line-clamp-2 md:w-4/5">
                  ذخیره زمان و تمرکز روی هرچیزی که دوست دارید بشنوید
                </h3>
                <p className="relative mt-5 text-center text-2xl font-normal leading-[3.6rem] text-disableUnique line-clamp-4">
                  لورم ایپسوم متن ساختگی با ت before:bg-headingColorولید سادگی
                  نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است، و برای شرایط
                </p>
              </figcaption>
            </figure>
            <figure className="flex- transition-default group flex flex-[1_1_300px] flex-grow  flex-col p-5 ">
              <div className="transition-default rounded-[71%_29%_68%_32%_/_45%_48%_52%_55%] border-[1px] border-solid border-transparent bg-primaryOverlay p-20 group-hover:border-primary">
                <Play className="h-24 w-24 " />
              </div>

              <figcaption className="mt-12 flex flex-col">
                <h3 className="w-full text-center text-3xl font-bold leading-[3.7rem] text-headingColor line-clamp-2 md:w-4/5">
                  ذخیره زمان و تمرکز روی هرچیزی که دوست دارید بشنوید
                </h3>
                <p className="mt-5 text-center text-2xl font-normal leading-[3.6rem] text-disableUnique line-clamp-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                </p>
              </figcaption>
            </figure>
            <figure className="flex- transition-default group flex flex-[1_1_300px] flex-grow  flex-col p-5 ">
              <div className="transition-default rounded-[21%_79%_52%_48%_/_75%_39%_61%_25%] border-[1px] border-solid border-transparent bg-primaryOverlay p-20 group-hover:border-primary">
                <Play className="h-24 w-24 " />
              </div>

              <figcaption className="mt-12 flex flex-col">
                <h3 className="w-full text-center text-3xl font-bold leading-[3.7rem] text-headingColor line-clamp-2 md:w-4/5">
                  ذخیره زمان و تمرکز روی هرچیزی که دوست دارید بشنوید
                </h3>
                <p className="mt-5 text-center text-2xl font-normal leading-[3.6rem] text-disableUnique line-clamp-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                </p>
              </figcaption>
            </figure>
            <figure className="flex- transition-default group flex flex-[1_1_300px] flex-grow  flex-col p-5 ">
              <div className="transition-default rounded-[39%_61%_79%_21%_/_27%_45%_55%_73%] border-[1px] border-solid border-transparent bg-primaryOverlay p-20 group-hover:border-primary">
                <Play className="h-24 w-24 " />
              </div>

              <figcaption className="mt-12 flex flex-col">
                <h3 className="w-full text-center text-3xl font-bold leading-[3.7rem] text-headingColor line-clamp-2 md:w-4/5">
                  ذخیره زمان و تمرکز روی هرچیزی که دوست دارید بشنوید
                </h3>
                <p className="mt-5 text-center text-2xl font-normal leading-[3.6rem] text-disableUnique line-clamp-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="w-full  bg-[#f6f7fb] px-12  md:px-20 dark:bg-slate-700  py-10 lg:py-20"
          id="discoverPodcast"
        >
          {/* titleBar */}
          <div className=" relative flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center gap-x-5  gap-y-3  md:flex-row lg:flex-row">
              <span className="relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
              <div className="text-5xl flex  gap-x-2  font-pinar ">
                <span className="whitespace-nowrap  font-bold text-primary">
                  پادکست های
                </span>
                <span className="whitespace-nowrap  font-bold  text-headingColor dark:text-white ">
                  کشف نشده
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
              یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین
            </p>
          </div>
          <div className=" mt-20 flex   flex-col items-start gap-y-10 mdg:flex-row  mdg:gap-x-10">
            <div className="grid w-full  basis-auto   grid-cols-2 grid-rows-1 gap-5 lg:gap-10 xl:gap-20 mdg:grid-cols-12 mdg:flex-row    ">
              <figure className="group/parent col-span-12  flex h-full flex-col rounded-primary bg-white p-10 shadow-default lg:col-span-4 lg:py-8 xl:col-span-3 ">
                <div className=" flex w-full whitespace-nowrap ">
                  {/*  title item */}

                  <div className="relative flex cursor-pointer text-right font-pinar text-2xl font-semibold text-headingColor  lg:text-3xl">
                    {/* icon above title */}
                    <Airdrop
                      className="   -top-8 right-10 ml-3"
                      size="35"
                      variant="TwoTone"
                      color="#621EF1"
                    />
                    <span className="ml-2 text-primary">پادکست</span> ترند این
                    هفته
                    <div className="absolute -left-5 -top-0 inline-flex h-[9px] w-[9px] translate-x-2 rounded-full bg-secondary">
                      <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                    </div>
                  </div>
                </div>

                <figcaption className=" transition-default relative my-10  h-250 w-full  overflow-hidden rounded-primary bg-[url('./src/assets/img/trendItem-1.jpg')] bg-cover    bg-center bg-no-repeat md:h-300  lg:hover:rotate-3 lg:hover:scale-105">
                  <div className="  transition-default absolute right-5 top-5 cursor-default rounded-xl bg-white p-1 text-xl font-semibold text-[#0d2238] shadow-sm lg:-translate-y-20 lg:group-hover/parent:translate-y-0 ">
                    <span className="ml-1 text-xl font-semibold text-inherit">
                      17:00
                    </span>
                    دقیقه
                  </div>

                  <div className="transition-default bg-darkTowhite group absolute bottom-0 left-0 right-0 mx-auto flex w-full flex-row justify-between p-5  lg:translate-y-full lg:group-hover/parent:translate-y-0">
                    <div className=" flex basis-9/12 flex-col items-start ">
                      <h3 className="text-right text-2xl   font-semibold text-white line-clamp-1">
                        پادکست شماره : 036
                      </h3>
                      <p className=" text-xl font-normal      leading-10  text-white line-clamp-2">
                        چطور میتونیم به فرانت دولوپر ماهر بشیم ؟!
                      </p>
                    </div>

                    <motion.a
                      whileHover={{ scale: 0.9 }}
                      href="/podcast"
                      className="transition-default flex basis-auto rounded-full border border-solid border-transparent p-[2px]   group-hover:border-white "
                    >
                      <BsFillPlayCircleFill className="text-5xl text-white" />
                    </motion.a>
                  </div>
                </figcaption>
              </figure>
              {/* Trend Podcast */}
              <div className="col-span-12 flex h-full w-full basis-full flex-col rounded-primary bg-white p-10 shadow-default md:basis-[65%] lg:col-span-8 lg:py-8 xl:col-span-9">
                {/*  tool Kit */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex w-full items-center justify-between md:w-fit ">
                    {/*  title item */}
                    <p className="flex cursor-pointer whitespace-nowrap text-right font-pinar text-2xl font-semibold text-headingColor lg:text-3xl ">
                      {/* icon above title */}
                      <TrendUp
                        className="   -top-8 right-10 ml-3"
                        size="35"
                        variant="TwoTone"
                        color="#621EF1"
                      />
                      <span className="ml-2 text-primary">پادکست</span> مرتبط
                    </p>

                    {/* dropDown */}
                    <div className="relative w-fit rounded-full  bg-disableOverlay2   mdg:mr-10  mdg:w-150  mdg:pl-5  ">
                      <button
                        onClick={handleOpen}
                        className="flex  w-full    justify-between  px-4  py-4 text-right text-xl font-medium text-disableOverlay mdg:text-2xl mdg:font-normal"
                        aria-pressed="true"
                      >
                        موضوعات
                        <HiChevronLeft
                          className={` ${
                            open ? "-rotate-90" : ""
                          }  transition-default   mr-5 mdg:mr-0 mdg:text-4xl`}
                        />
                      </button>

                      <ul
                        className={`transition-default absolute right-0 z-[-1] flex w-full flex-col items-start rounded-xl bg-white drop-shadow-2xl [&_li:first-child]:rounded-tl-xl [&_li:first-child]:rounded-tr-xl  [&_li:last-child]:rounded-bl-xl [&_li:last-child]:rounded-br-xl ${
                          open
                            ? " !top-20 !z-[5]  opacity-100 "
                            : " -top-52 opacity-0 "
                        } `}
                      >
                        <li className="transition-default w-full cursor-pointer whitespace-nowrap py-5 px-5 text-xl font-normal text-headingColor hover:bg-gray-50 lg:text-2xl">
                          برنامه نویسی
                        </li>
                        <li className="transition-default w-full cursor-pointer whitespace-nowrap py-5 px-5 text-xl font-normal text-headingColor hover:bg-gray-50 lg:text-2xl">
                          آموزش
                        </li>
                        <li className="transition-default w-full cursor-pointer whitespace-nowrap py-5 px-5 text-xl font-normal text-headingColor hover:bg-gray-50 lg:text-2xl">
                          یادگیری
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* arrow L/R Button */}
                  <div className="hidden gap-3 md:flex">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      href="/"
                      className="rounded-2xl bg-disableOverlay2 p-2 text-headingColor"
                    >
                      <HiChevronRight className="text-[25px] text-inherit" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      href="/"
                      className="rounded-2xl bg-disableOverlay2 p-2  text-headingColor"
                    >
                      <HiChevronLeft className="text-[25px] text-inherit" />
                    </motion.button>
                  </div>
                </div>

                <div className="my-10 grid w-full  grid-cols-1  gap-10 sm:grid-cols-2 md:grid-cols-2  mdg:grid-cols-2  xl:grid-cols-3 lg:flex-row ">
                  <figure className="flex flex-col  overflow-hidden">
                    <div className=" relative h-200 w-full ">
                      <img
                        className="  h-full w-full cursor-default rounded-primary "
                        src={trendItem}
                        alt=""
                      />

                      <div className="content opacit-70 absolute top-5 right-5  flex cursor-pointer   rounded-full bg-[#585858be]  ">
                        <div
                          className={`heart scale-150 ${
                            toggleThisElement ? "heart-active" : ""
                          } `}
                          onClick={() => setToggleThisElement((prev) => !prev)}
                        ></div>
                        <AiOutlineHeart className="hidden text-4xl text-headingColor" />
                      </div>
                      <motion.div
                        whileTap={{ scale: 0.8 }}
                        className="absolute bottom-5 right-5 cursor-pointer  "
                      >
                        <PlayIcon className="h-14 w-14 text-white" />
                      </motion.div>
                    </div>

                    <figcaption className="mt-5 flex w-full flex-col items-start">
                      <h3 className="text-2xl font-semibold text-headingColor line-clamp-1 ">
                        مهارت نرم برنامه نویس
                      </h3>
                      <div className="mt-4 flex w-full justify-between">
                        <p className="w-fit text-xl font-medium text-disableOverlay">
                          مهدی نظری
                        </p>
                        <div className="flex  w-fit text-headingColor">
                          <AiFillClockCircle className="ml-3 text-[15px]  text-inherit " />
                          <p className="text-xl font-semibold text-inherit">
                            1:50
                            <span className="mr-1 text-xl font-semibold text-inherit">
                              دقیقه
                            </span>
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <figure className="flex flex-col  overflow-hidden">
                    <div className=" relative h-200 w-full">
                      <img
                        className="  h-full w-full cursor-default rounded-primary"
                        src={trendItem}
                        alt=""
                      />

                      <div className="content opacit-70 absolute top-5 right-5  flex cursor-pointer   rounded-full bg-[#585858be]  ">
                        <div
                          className={`heart scale-150 ${
                            toggleThisElement ? "heart-active" : ""
                          } `}
                          onClick={() => setToggleThisElement((prev) => !prev)}
                        ></div>
                        <AiOutlineHeart className="hidden text-4xl text-headingColor" />
                      </div>
                      <motion.div
                        whileTap={{ scale: 0.8 }}
                        className="absolute bottom-5 right-5 cursor-pointer  "
                      >
                        <PlayIcon className="h-14 w-14 text-white" />
                      </motion.div>
                    </div>

                    <figcaption className="mt-5 flex w-full flex-col items-start">
                      <h3 className="text-2xl font-semibold text-headingColor line-clamp-1 ">
                        مهارت نرم برنامه نویس
                      </h3>
                      <div className="mt-4 flex w-full justify-between">
                        <p className="w-fit text-xl font-medium text-disableOverlay">
                          مهدی نظری
                        </p>
                        <div className="flex  w-fit text-headingColor">
                          <AiFillClockCircle className="ml-3 text-[15px]  text-inherit " />
                          <p className="text-xl font-semibold text-inherit">
                            1:50
                            <span className="mr-1 text-xl font-semibold text-inherit">
                              دقیقه
                            </span>
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <figure className="flex flex-col  overflow-hidden">
                    <div className=" relative h-200 w-full">
                      <img
                        className="  h-full w-full cursor-default rounded-primary"
                        src={trendItem}
                        alt=""
                      />

                      <div className="content opacit-70 absolute top-5 right-5  flex cursor-pointer   rounded-full bg-[#585858be]  ">
                        <div
                          className={`heart scale-150 ${
                            toggleThisElement ? "heart-active" : ""
                          } `}
                          onClick={() => setToggleThisElement((prev) => !prev)}
                        ></div>
                        <AiOutlineHeart className="hidden text-4xl text-headingColor" />
                      </div>
                      <motion.div
                        whileTap={{ scale: 0.8 }}
                        className="absolute bottom-5 right-5 cursor-pointer  "
                      >
                        <PlayIcon className="h-14 w-14 text-white" />
                      </motion.div>
                    </div>

                    <figcaption className="mt-5 flex w-full flex-col items-start">
                      <h3 className="text-2xl font-semibold text-headingColor line-clamp-1 ">
                        مهارت نرم برنامه نویس
                      </h3>
                      <div className="mt-4 flex w-full justify-between">
                        <p className="w-fit text-xl font-medium text-disableOverlay">
                          مهدی نظری
                        </p>
                        <div className="flex  w-fit text-headingColor">
                          <AiFillClockCircle className="ml-3 text-[15px]  text-inherit " />
                          <p className="text-xl font-semibold text-inherit">
                            1:50
                            <span className="mr-1 text-xl font-semibold text-inherit">
                              دقیقه
                            </span>
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-span-12 flex h-full w-full basis-full flex-col rounded-primary bg-white p-10 shadow-default lg:py-12">
                {/*  tool Kit */}
                <div className="flex w-full items-center justify-between">
                  <div className="flex w-full items-center justify-between gap-x-20 md:w-fit ">
                    {/*  title item */}
                    <p className="flex cursor-pointer whitespace-nowrap text-right font-pinar text-2xl font-semibold text-headingColor lg:text-3xl ">
                      {/* icon above title */}
                      <TrendUp
                        className="   -top-8 right-10 ml-3"
                        size="35"
                        variant="TwoTone"
                        color="#621EF1"
                      />
                      <span className="ml-2 text-primary">پادکست</span> های برتر
                    </p>

                    <div className="hidden w-full gap-x-10 xl:flex">
                      <button className="transition-default before:transition-default active  relative overflow-hidden py-3 text-2xl font-medium text-disableUnique before:absolute before:-bottom-12 before:right-0 before:left-0 before:mx-auto before:inline before:h-[2px] before:w-full before:bg-headingColor [&.active]:text-headingColor [&.active]:before:bottom-0">
                        همه
                      </button>
                      <button className="transition-default before:transition-default relative  overflow-hidden py-3 text-2xl font-medium text-disableUnique before:absolute before:-bottom-12 before:right-0 before:left-0 before:mx-auto before:inline before:h-[2px] before:w-full before:bg-headingColor [&.active]:text-headingColor [&.active]:before:bottom-0">
                        انحصاری
                      </button>
                      <button className="transition-default before:transition-default relative  overflow-hidden py-3 text-2xl font-medium text-disableUnique before:absolute before:-bottom-12 before:right-0 before:left-0 before:mx-auto before:inline before:h-[2px] before:w-full before:bg-headingColor [&.active]:text-headingColor [&.active]:before:bottom-0">
                        اخبار و حواشی
                      </button>
                      <button className="transition-default before:transition-default relative  overflow-hidden py-3 text-2xl font-medium text-disableUnique before:absolute before:-bottom-12 before:right-0 before:left-0 before:mx-auto before:inline before:h-[2px] before:w-full before:bg-headingColor [&.active]:text-headingColor [&.active]:before:bottom-0">
                        تکنولوژی
                      </button>
                      <button className="transition-default before:transition-default relative  overflow-hidden py-3 text-2xl font-medium text-disableUnique before:absolute before:-bottom-12 before:right-0 before:left-0 before:mx-auto before:inline before:h-[2px] before:w-full before:bg-headingColor [&.active]:text-headingColor [&.active]:before:bottom-0">
                        استخدام
                      </button>
                    </div>
                  </div>

                  {/* arrow L/R Button */}
                  <div className="hidden gap-3 md:flex">
                    <motion.button
                      whileTap={{ scale: 0.9, borderColor: "#3f3f3f" }}
                      href="/"
                      className="rounded-2xl border border-transparent bg-disableOverlay2 p-2 text-headingColor"
                    >
                      <HiChevronRight className="text-[25px] text-inherit" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9, borderColor: "#3f3f3f" }}
                      href="/"
                      className="rounded-2xl border border-transparent  bg-disableOverlay2 p-2 text-headingColor"
                    >
                      <HiChevronLeft className="text-[25px] text-inherit" />
                    </motion.button>
                  </div>
                </div>

                <div className="mt-20 grid w-full grid-cols-1  gap-10 sm:grid-cols-1  md:grid-cols-2  mdg:grid-cols-2 lg:grid-cols-3 lg:flex-row ">
                  <figure className="group flex items-start">
                    <div className="flex h-full">
                      <img
                        src={pic150}
                        className="h-full w-full rounded-xl"
                        alt=""
                      />
                    </div>
                    <figcaption className="mr-5 flex h-full w-full flex-col items-start justify-between ">
                      <div className="flex flex-col items-start ">
                        <h3 className="transition-default whitespace-nowrap text-2xl font-semibold text-headingColor line-clamp-1 group-hover:text-primary">
                          <a href="/singlePodcast">
                            چطور برنامه نویس ماهری بشیم؟!
                          </a>
                        </h3>
                        <p className="mt-3  text-xl font-normal text-disableUnique">
                          یادگیری | آموزش
                        </p>
                      </div>

                      <button className="flex rounded-xl bg-disableOverlay2 px-3 py-1">
                        <PlayCircle
                          size="30"
                          color="#3F3F3F"
                          className="transition-default group-hover:scale-110 "
                        />
                        <div className="mr-3 flex gap-x-2 text-2xl text-disableOverlay">
                          <p className="text-xl font-medium text-inherit">
                            1 <span className="mr-1">ساعت</span>
                          </p>
                          <p className="text-xl font-medium text-inherit">
                            25<span className="mr-1">دقیقه</span>
                          </p>
                        </div>
                      </button>
                    </figcaption>
                  </figure>
                  <figure className="group flex items-start">
                    <div className="flex h-full">
                      <img
                        src={pic150}
                        className="h-full w-full rounded-xl"
                        alt=""
                      />
                    </div>
                    <figcaption className="mr-5 flex h-full w-full flex-col items-start justify-between ">
                      <div className="flex flex-col items-start ">
                        <h3 className="transition-default whitespace-nowrap text-2xl font-semibold text-headingColor line-clamp-1 group-hover:text-primary">
                          <a href="/singlePodcast">
                            چطور برنامه نویس ماهری بشیم؟!
                          </a>
                        </h3>
                        <p className="mt-3  text-xl font-normal text-disableUnique">
                          یادگیری | آموزش
                        </p>
                      </div>

                      <button className="flex rounded-xl bg-disableOverlay2 px-3 py-1">
                        <PlayCircle
                          size="30"
                          color="#3F3F3F"
                          className="transition-default group-hover:scale-110 "
                        />
                        <div className="mr-3 flex gap-x-2 text-2xl text-disableOverlay">
                          <p className="text-xl font-medium text-inherit">
                            1 <span className="mr-1">ساعت</span>
                          </p>
                          <p className="text-xl font-medium text-inherit">
                            25<span className="mr-1">دقیقه</span>
                          </p>
                        </div>
                      </button>
                    </figcaption>
                  </figure>
                  <figure className="group flex items-start">
                    <div className="flex h-full">
                      <img
                        src={pic150}
                        className="h-full w-full rounded-xl"
                        alt=""
                      />
                    </div>
                    <figcaption className="mr-5 flex h-full w-full flex-col items-start justify-between ">
                      <div className="flex flex-col items-start ">
                        <h3 className="transition-default whitespace-nowrap text-2xl font-semibold text-headingColor line-clamp-1 group-hover:text-primary">
                          <a href="/singlePodcast">
                            چطور برنامه نویس ماهری بشیم؟!
                          </a>
                        </h3>
                        <p className="mt-3  text-xl font-normal text-disableUnique">
                          یادگیری | آموزش
                        </p>
                      </div>

                      <button className="flex rounded-xl bg-disableOverlay2 px-3 py-1">
                        <PlayCircle
                          size="30"
                          color="#3F3F3F"
                          className="transition-default group-hover:scale-110 "
                        />
                        <div className="mr-3 flex gap-x-2 text-2xl text-disableOverlay">
                          <p className="text-xl font-medium text-inherit">
                            1 <span className="mr-1">ساعت</span>
                          </p>
                          <p className="text-xl font-medium text-inherit">
                            25<span className="mr-1">دقیقه</span>
                          </p>
                        </div>
                      </button>
                    </figcaption>
                  </figure>
                </div>
                <div className="my-10 inline h-[1px] w-full bg-disableOverlay2"></div>

                <div className="flex w-full flex-col items-start justify-between gap-20 xl:flex-row">
                  <div className="flex w-full flex-col  items-start xl:w-[65%] ">
                    <div className="flex w-full items-center justify-between md:w-fit  ">
                      {/*  title item */}
                      <p className="flex cursor-pointer whitespace-nowrap text-right font-pinar text-2xl font-semibold text-headingColor lg:text-3xl ">
                        {/* icon above title */}
                        <Airpods
                          className="   -top-8 right-10 ml-3"
                          size="35"
                          variant="TwoTone"
                          color="#621EF1"
                        />
                        <span className="ml-2 text-primary">پادکست</span> های
                        برتر
                      </p>
                    </div>

                    <div className="mt-10 grid   w-full grid-cols-2 justify-around gap-y-10 sm:grid-cols-5 md:grid-cols-5 lg:gap-0 ">
                      <figure className="group flex flex-col ">
                        <div className="flex cursor-pointer rounded-xl bg-primaryOverlay p-5">
                          <PresentionChart
                            className="transition-default rounded-xl bg-white p-2 group-hover:stroke-primary"
                            size="36"
                            color="#3F3F3F"
                            variant="Broken"
                          />
                        </div>
                        <figcaption className="mt-5 flex flex-col">
                          <h4 className="cursor-pointer flex-nowrap text-2xl font-bold text-headingColor line-clamp-1">
                            هنر ارائه
                          </h4>
                          <p className="mt-3 text-xl font-normal text-disableUnique">
                            <span className="ml-1 text-xl  text-inherit">
                              120
                            </span>
                            پادکست
                          </p>
                        </figcaption>
                      </figure>
                      <figure className="group flex flex-col ">
                        <div className="flex cursor-pointer rounded-xl bg-primaryOverlay p-5">
                          <Profile2User
                            className="transition-default rounded-xl bg-white p-2 group-hover:stroke-primary"
                            size="36"
                            color="#3F3F3F"
                            variant="Broken"
                          />
                        </div>
                        <figcaption className="mt-5 flex flex-col">
                          <h4 className="cursor-pointer flex-nowrap text-2xl font-bold text-headingColor line-clamp-1">
                            مصاحبه
                          </h4>
                          <p className="mt-3 text-xl font-normal text-disableUnique">
                            <span className="ml-1 text-xl  text-inherit">
                              10
                            </span>
                            پادکست
                          </p>
                        </figcaption>
                      </figure>
                      <figure className="group flex flex-col ">
                        <div className="flex cursor-pointer rounded-xl bg-primaryOverlay p-5">
                          <CodeCircle
                            className="transition-default rounded-xl bg-white p-2 group-hover:stroke-primary"
                            size="36"
                            color="#3F3F3F"
                            variant="Broken"
                          />
                        </div>
                        <figcaption className="mt-5 flex flex-col">
                          <h4 className="cursor-pointer flex-nowrap text-2xl font-bold text-headingColor line-clamp-1">
                            آموزش
                          </h4>
                          <p className="mt-3 text-xl font-normal text-disableUnique">
                            <span className="ml-1 text-xl  text-inherit">
                              2
                            </span>
                            پادکست
                          </p>
                        </figcaption>
                      </figure>
                      <figure className="group flex flex-col ">
                        <div className="flex cursor-pointer rounded-xl bg-primaryOverlay p-5">
                          <DocumentCode
                            className="transition-default rounded-xl bg-white p-2 group-hover:stroke-primary"
                            size="36"
                            color="#3F3F3F"
                            variant="Broken"
                          />
                        </div>
                        <figcaption className="mt-5 flex flex-col">
                          <h4 className="cursor-pointer flex-nowrap text-2xl font-bold text-headingColor line-clamp-1">
                            رزومه
                          </h4>
                          <p className="mt-3 text-xl font-normal text-disableUnique">
                            <span className="ml-1 text-xl  text-inherit">
                              6
                            </span>
                            پادکست
                          </p>
                        </figcaption>
                      </figure>
                      <figure className="group flex flex-col ">
                        <div className="flex cursor-pointer rounded-xl bg-primaryOverlay p-5">
                          <Profile2User
                            className="transition-default rounded-xl bg-white p-2 group-hover:stroke-primary"
                            size="36"
                            color="#3F3F3F"
                            variant="Broken"
                          />
                        </div>
                        <figcaption className="mt-5 flex flex-col">
                          <h4 className="cursor-pointer flex-nowrap text-2xl font-bold text-headingColor line-clamp-1">
                            مصاحبه
                          </h4>
                          <p className="mt-3 text-xl font-normal text-disableUnique">
                            <span className="ml-1 text-xl  text-inherit">
                              10
                            </span>
                            پادکست
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div className="flex w-full flex-col  items-start xl:w-[30%] ">
                    <div className="flex w-full items-center justify-between md:w-fit  ">
                      {/*  title item */}
                      <p className="flex cursor-pointer whitespace-nowrap text-right font-pinar text-2xl font-semibold text-headingColor lg:text-3xl ">
                        {/* icon above title */}
                        <Medal
                          className="   -top-8 right-10 ml-3"
                          size="35"
                          variant="TwoTone"
                          color="#621EF1"
                        />
                        <span className="ml-2 text-primary">پادکستر</span> های
                        برتر
                      </p>
                    </div>

                    <div className="mt-10 flex w-full flex-col items-start gap-y-10">
                      <figure className="flex w-full justify-between">
                        <div className="flex">
                          <div className="h-full w-full">
                            <img
                              src={pic50}
                              className="h-auto w-full rounded-full"
                              alt=""
                            />
                          </div>
                          <p className="mr-5 whitespace-nowrap text-[16px] font-bold text-headingColor">
                            مهدی نظری
                          </p>
                        </div>
                        <p className="text-xl font-semibold text-disableOverlay">
                          120 دنبال کننده
                        </p>
                      </figure>
                      <figure className="flex w-full justify-between">
                        <div className="flex">
                          <div className="h-full w-full">
                            <img
                              src={pic50}
                              className="h-auto w-full rounded-full"
                              alt=""
                            />
                          </div>
                          <p className="mr-5 whitespace-nowrap text-[16px] font-bold text-headingColor">
                            مهدی نظری
                          </p>
                        </div>
                        <p className="text-xl font-semibold text-disableOverlay">
                          120 دنبال کننده
                        </p>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="flex w-full  basis-1/4  flex-col items-start gap-y-10 sticky top-48">
              <div className="w-full rounded-primary bg-white p-10 shadow-default">
                <div className="w-full ">
                  {/*  title item */}

                  <p className=" cursor-pointe relative flex justify-start whitespace-nowrap font-pinar text-2xl font-semibold text-headingColor lg:text-3xl ">
                    <MusicPlay
                      className="-top-8 right-10 ml-3"
                      size="35"
                      variant="TwoTone"
                      color="#621EF1"
                    />
                    <span className="ml-2 text-primary">پادکست</span> در حال پخش
                  </p>
                  {/* Player */}
                </div>
                {/* <Player tracks={tracks} /> */}

                <Waveform />
              </div>
              <div className="w-full rounded-primary bg-white p-10 shadow-default">
                {/* tabBar Menu */}
                <div
                  className={`oveflow-hidden relative flex  w-full justify-between rounded-xl bg-disableOverlay2 `}
                >
                  <button
                    className={` transition-default z-[1] w-1/2 whitespace-nowrap  p-5 text-xl font-medium text-headingColor  ${
                      toggleTab === 1
                        ? "scale-105 rounded-xl bg-secondary text-white"
                        : ""
                    }`}
                    onClick={() => activeTab(1)}
                  >
                    موردعلاقه من
                  </button>
                  <button
                    className={`transition-default z-[1] w-1/2 whitespace-nowrap  p-5 text-xl font-medium text-headingColor   ${
                      toggleTab === 2
                        ? "scale-105 rounded-xl bg-secondary text-white"
                        : ""
                    }`}
                    onClick={() => activeTab(2)}
                  >
                    آخرین مشاهده
                  </button>
                </div>

                <div className="mt-10  flex h-fit w-full items-start overflow-hidden">
                  <div
                    className={`hidden flex-col gap-y-10 w-full ${
                      toggleTab === 1 ? "!flex" : ""
                    }`}
                  >
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          برای شروع چه زبانی ؟!
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              مهاجرت
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              1:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          چطور میتونم برنامه نویس بشم ؟
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              شروع
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              1:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          منتور خوب کجاست ؟!
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              منتور
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              4:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          یادگیری 10X
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              آموزش
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              4:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <div
                    className={`hidden flex-col gap-y-10 w-full  ${
                      toggleTab === 2 ? "!flex" : ""
                    }`}
                  >
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          چطور میتونم برنامه نویس بشم ؟
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              شروع
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              1:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          یادگیری 10X
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              آموزش
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              4:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          منتور خوب کجاست ؟!
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              منتور
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              4:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className="flex w-full">
                      <div className="ml-5 h-full w-fit rounded-xl">
                        <img src={pic50} className=" rounded-xl" alt="" />
                      </div>
                      <figcaption className="flex w-full flex-col items-start">
                        <p className="text-2xl font-semibold text-headingColor line-clamp-1">
                          برای شروع چه زبانی ؟!
                        </p>
                        <div className="mt-5 flex w-full justify-between">
                          <p className="text-[13px] font-normal text-disable flex ">
                            <Hashtag size="15" color="#FF8A65" />

                            <span className="ml-1 font-medium text-disableOverlay">
                              مهاجرت
                            </span>
                          </p>

                          <p className="flex  text-[13px] font-normal text-disable  ">
                            <span className="ml-1 font-medium text-disableOverlay">
                              1:44
                            </span>
                            <WristClock size="15" color="#621EF1" />
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default Podcast;
