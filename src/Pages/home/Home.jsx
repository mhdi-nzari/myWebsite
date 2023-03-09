import { React, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import pkg
import { motion } from "framer-motion";

// import img , svg or anything else ...

import BackstageInto from "@/assets/img/BackstageInto.png";

import blogBig from "@/assets/img/blog-big.jpg";
import profile from "@/assets/img/profile.jpg";
import blog2 from "@/assets/img/demo.png";
import portfolio from "@/assets/img/portfolio.png";

import { Link } from "react-router-dom";
import { useCountUp } from "react-countup";
import Testimonial from "@/Pages/testimonial/Testimonial";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowLeft3,
  ArrowRight,
  ArrowRight2,
  BoxTick,
  Buildings2,
  CalendarTick,
  CallOutgoing,
  CodeCircle,
  Coffee,
  Designtools,
  EmojiNormal,
  Eye,
  Hashtag,
  HeartCircle,
  Html5,
  Information,
  Js,
  MessageNotif,
  Reserve,
  Shop,
  VoiceCricle,
} from "iconsax-react";

//  Counter Runner
const Project = () => {
    useCountUp({
      ref: "Project",
      duration: 2,
      enableScrollSpy: true,
      end: 12,
      prefix: "+",
    });
    return <span id="Project" />;
  },
  Project2 = () => {
    useCountUp({
      ref: "Project2",
      duration: 2,
      enableScrollSpy: true,
      end: 10,
      prefix: "+",
    });
    return <span id="Project2" />;
  },
  Customer = () => {
    useCountUp({
      ref: "Customer",
      duration: 2,
      enableScrollSpy: true,
      end: 15,
      prefix: "+",
    });
    return <span id="Customer" />;
  },
  Expreince = () => {
    useCountUp({
      ref: "Expreince",
      duration: 2,
      enableScrollSpy: true,
      end: 735,
      suffix: "+",
    });
    return <span id="Expreince" />;
  },
  Home = ({ mouseOverEvent, mouseOutEvent }) => {
    let prevRefS = useRef(null),
      nextRefS = useRef(null);

    const swiperRef = useRef();
    return (
      <>
        <main className="mt-14 w-full  py-4 md:mt-24   ">
          <div className="flex flex-wrap h-auto w-full flex-col items-center justify-center">
            {/* intro Section */}
            <section
              className="mt-0 lg:my-[5rem] relative flex flex-col md:flex-row w-full  gap-y-10 px-12  md:px-20"
              id="home"
            >
              {/* section One */}
              <div className=" flex flex-1 flex-col items-center  gap-5 order-2 md:items-start  md:justify-start">
                <div className="flex flex-col  items-start">
                  <h3 className="relative mb-5 text-2xl text-secondary font-semibold after:absolute after:right-0 after:bottom-0 after:w-full after:h-1 after:bg-secondary dark:after:bg-[#e3e3e3] dark:text-[#e3e3e3]">
                    سلام ! مهدی نظری هستم | Junior Front End Developer :)
                  </h3>
                  <div className="flex flex-col items-start mb-10">
                    <p className="relative text-[25px] text-center md:text-right md:text-[40px] font-bold text-slate-900  mt-5 dark:text-white">
                      یه برنامه نویس شاد و پرانرژی
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 33 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -left-9 -top-3 h-12 w-12"
                      >
                        <path
                          d="M26.3736 1.46881C27.5676 1.17637 28.694 2.13564 28.6529 3.36417C28.4956 8.05687 29.1308 11.3964 31.5701 15.5654C32.1819 16.6112 31.6572 17.9847 30.4804 18.2729C29.6553 18.475 28.8027 18.0502 28.4763 17.2659C26.3576 12.1743 25.3675 8.70014 25.0143 3.30186C24.9581 2.44245 25.5371 1.6737 26.3736 1.46881Z"
                          fill="#F1891E"
                        ></path>
                        <path
                          d="M8.4549 2.26021C9.39353 1.52265 10.7725 1.83607 11.3207 2.89646C15.2551 10.5063 18.6416 15.209 25.3857 20.8793C26.2925 21.6417 26.2904 23.0514 25.3589 23.7834C24.6197 24.3642 23.5588 24.2919 22.907 23.6145C16.4841 16.9406 12.7524 12.4366 8.01137 4.70794C7.5152 3.89909 7.70878 2.84649 8.4549 2.26021Z"
                          fill="#F1891E"
                        ></path>
                        <path
                          d="M0.468263 24.8253C0.238373 26.2721 1.49843 27.5107 2.95238 27.3308C8.21966 26.6789 12.0655 27.0835 16.9736 29.474C18.2709 30.1058 19.8571 29.3559 20.0835 27.9308C20.2405 26.9432 19.6624 25.9831 18.7122 25.6716C12.7244 23.7085 8.66504 22.9023 2.48388 23.0436C1.46991 23.0668 0.627414 23.8236 0.468263 24.8253Z"
                          fill="#F1891E"
                        ></path>
                      </svg>
                    </p>
                    <p className="mx-auto md:mx-0 text-[25px] text-right  md:text-[40px] font-bold text-slate-900   relative after:absolute after:w-full after:h-10 after:-bottom-0 after:right-0 after:bg-primary   z-[1] after:z-[-1] after:opacity-30 dark:text-white">
                      توسعه وب ، رابط کاربری
                    </p>
                  </div>
                </div>
                <div className="w-full text-center md:w-4/6 md:text-right text-2xl text-slate-800  leading-[2.9rem] dark:text-white">
                  گاهی اوقات
                  <a href="">
                    <h3 className="font-semibold inline-block mx-2 text-[17px] text-headingColor">
                      رابط کاربری
                    </h3>
                  </a>
                  طراحی میکنم ، گاهی اوقاتم نه همون رابط رو توسعه میدم و
                  <a href="">
                    <h3 className="font-semibold inline-block mx-2 text-[17px] text-headingColor dark:text-white">
                      برنامه نویسی
                    </h3>
                  </a>
                  میکنم ، گاهی وقتا آموزش میبینم و به آدمای اطرافم جهت پیشرفتشون
                  کمک میکنم و
                  <a href="">
                    <span className="font-semibold inline-block mx-2 text-[17px] text-headingColor">
                      مشاوره برنامه نویسی
                    </span>
                  </a>
                  میدم
                </div>
                <div className="flex items- md:items-start gap-5">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href="tel:09162890084"
                    className="flex cta-holder overflow-hidden drop-shadow-lg mt-5 px-16 py-6 bg-primary text-white rounded-2xl text-2xl transition-default hover:bg-secondary"
                  >
                    تماس با من
                    <CallOutgoing
                      className="text-inherit mr-3 mt-1"
                      size="22"
                      variant="Bulk"
                    />
                  </motion.a>
                  <a
                    href="tel:09162890084"
                    className="drop-shadow-lg mt-5 px-16 py-6 border-[1px] border-solid border-disable text-headingColor font-semibold rounded-2xl text-2xl transition-default  hover:border-primary"
                  >
                    رزومه من
                  </a>
                </div>
              </div>

              {/* section Two */}
              <div className="relative  flex flex-1 flex-col items-start gap-10  md:order-2">
                <img src={BackstageInto} alt="backgroundimg" />
              </div>
            </section>

            {/* services Section */}

            <section
              className="my-20 flex w-full flex-col gap-20 px-7 md:px-20 lg:flex-row"
              id="services"
            >
              {/* right Section */}
              <motion.div className="flex basis-full flex-col items-center md:items-start lg:basis-1/4 ">
                <small className="mb-2 text-2xl font-normal text-primary">
                  خدمات
                </small>
                <div className=" inline-block relative font-pinar text-5xl font-bold text-headingColor ">
                  <span className="relative w-fit inline-block text-inherit leading-0 ml-2 before:absolute before:right-0 before:bottom-5 before:translate-y-1/2 before:-z-10 before:h-5 before:w-full before:bg-secondary  before:opacity-30 dark:text-white ">
                    خدمات
                  </span>
                  تخصصی من
                </div>
                <p className="mt-0 w-full text-2xl font-normal leading-[1.7] text-disable md:mt-3 lg:w-[90%]">
                  تو هرزمینه تخصص دارم و میتونم به کسب و کار شما کمک کنم خوشحال
                  میشم حتما بهم پیام بده .
                </p>
                <Link
                  to="/services"
                  className="relative mt-5 w-full md:mt-10 md:w-fit lg:w-fit "
                >
                  <button className="default-btn px-10 py-4 mx-auto lg:ml-auto">
                    اطلاعات بیشتر
                    <Reserve
                      size="22"
                      className="text-inherit mr-2"
                      variant="Bulk"
                    />
                  </button>
                </Link>

                <div className="mt-10 hidden gap-x-4 md:flex">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    ref={nextRefS}
                    className="arrow-right"
                    aria-label="rightButton"
                  >
                    <ArrowRight2
                      className="text-3xl text-primary"
                      variant="Broken"
                      color="#ffffff"
                      size="20"
                    />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    ref={prevRefS}
                    className="arrow-left "
                    aria-label="leftButton"
                  >
                    <ArrowLeft2
                      className="text-3xl "
                      variant="Broken"
                      color="#3f3f3f"
                      size="20"
                    />
                  </motion.button>
                </div>
              </motion.div>

              {/* left  Section */}

              <div className="flex  w-full  basis-full flex-wrap  gap-7 overflow-hidden lg:basis-auto ">
                <Swiper
                  // install Swiper modules
                  dir="rtl"
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  slidesPerView={4}
                  grabCursor={true}
                  loop={true}
                  className="swiperServices h-full w-full p-5 "
                  onInit={(Services) => {
                    Services.params.navigation.prevEl = prevRefS.current;
                    Services.params.navigation.nextEl = nextRefS.current;
                    Services.navigation.init();
                    Services.navigation.update();
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    // when window width is >= 640px
                    640: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      // width: 768,

                      slidesPerView: 2,
                    },
                    992: {
                      spaceBetween: 50,

                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                  <SwiperSlide className="flex h-full max-h-full w-auto flex-shrink-0 justify-center">
                    <figure className=" group transition-default relative flex h-250 flex-[1_1_290px]    justify-center  rounded-primary border border-solid  bg-white p-6 shadow-[_0px_8px_24px_rgba(149,157,165,0.1)] hover:border-purple-600">
                      <b className="badge"></b>
                      <figcaption className="flex flex-col gap-y-5">
                        <span className="rounded-primary bg-purple-600 p-10 grayscale group-hover:grayscale-0 transition-default ">
                          <CodeCircle
                            size="35"
                            color="#ffffff"
                            variant="Bulk"
                          />
                        </span>
                        <p className="mt-5 text-3xl font-bold text-headingColor">
                          برنامه نویس فرانت اند
                        </p>
                        <div className=" inline-block text-center text-[14px] font-normal leading-[1.7] text-disableOverlay ">
                          اکثر اوقات
                          <a href="">
                            <h3 className="font-bold inline-block mx-1 text-[14px]  text-inherit group-hover:text-purple-600 transition-default ">
                              برنامه نویسی
                            </h3>
                          </a>
                          و صفحات وب رو طراحی میکنم
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide className="flex h-full max-h-full w-auto shrink-0 justify-center">
                    <figure className=" group transition-default relative flex h-250 flex-[1_1_290px]    justify-center  rounded-primary border border-solid  bg-white p-6 shadow-[_0px_8px_24px_rgba(149,157,165,0.1)] hover:border-pink-400">
                      <b className="badge"></b>
                      <figcaption className="flex flex-col gap-y-5">
                        <span className="rounded-primary bg-pink-400 p-10 grayscale group-hover:grayscale-0 transition-default ">
                          <Designtools
                            size="35"
                            color="#ffffff"
                            variant="Bulk"
                          />
                        </span>
                        <p className="mt-5 text-3xl font-bold text-headingColor">
                          طراح رابط کاربری
                        </p>
                        <div className=" inline-block text-center text-[14px] font-normal leading-[1.7] text-disableOverlay">
                          بیشتر
                          <a href="">
                            <h3 className="font-bold inline-block mx-1 text-[14px] text-inherit group-hover:text-pink-600">
                              Ui
                            </h3>
                          </a>
                          طراحی میکنم و سعی میکنم بروز باشم
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide className="flex h-full max-h-full w-auto shrink-0 justify-center">
                    <figure className=" group transition-default relative flex h-250 flex-[1_1_290px]    justify-center  rounded-primary border border-solid  bg-white p-6 shadow-[_0px_8px_24px_rgba(149,157,165,0.1)] hover:border-rose-700 transition-default">
                      <b className="badge"></b>
                      <figcaption className="flex flex-col gap-y-5">
                        <span
                          className="rounded-primary bg-rose-700 p-10    grayscale
                          group-hover:grayscale-0 transition-default"
                        >
                          <VoiceCricle
                            size="35"
                            color="#ffffff"
                            variant="Bulk"
                          />
                        </span>
                        <p className="mt-5 text-3xl font-bold text-headingColor">
                          منتور و مشاور
                        </p>
                        <div className=" inline-block text-center text-[14px] font-normal leading-[1.7] text-disableOverlay">
                          تحت عنوان
                          <h3 className="font-bold inline-block mx-1 text-[14px]  text-inherit group-hover:text-rose-700 transition-default">
                            منتور
                          </h3>
                          به علاقمندان این حوضه کمک میکنم
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide className="flex h-full max-h-full w-auto shrink-0 justify-center">
                    <figure className=" group transition-default relative flex h-250 flex-[1_1_290px]    justify-center  rounded-primary border border-solid  bg-white p-6 shadow-[_0px_8px_24px_rgba(149,157,165,0.1)] hover:border-green-700">
                      <b className="badge"></b>
                      <figcaption className="flex flex-col gap-y-5">
                        <span className="rounded-primary bg-green-700 p-10  grayscale group-hover:grayscale-0 transition-default">
                          <VoiceCricle
                            size="35"
                            color="#ffffff"
                            variant="Bulk"
                          />
                        </span>
                        <p className="mt-5 text-3xl font-bold text-headingColor">
                          پادکست برنامه نویسی
                        </p>
                        <div className=" inline-block text-center text-[14px] font-normal leading-[1.7] text-disableOverlay">
                          دانش و اخبار بروز رو از طریق
                          <h3 className="font-bold inline-block mx-1 text-[14px] text-inherit group-hover:text-green-700 transition-default">
                            پادکست
                          </h3>
                          به اشتراک میزارم
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>

            {/* Company logo  */}
            <Testimonial />

            {/* portfolio Section */}
            <section
              className="my-10  flex w-full flex-col px-12 md:px-20"
              id=""
            >
              <div className="my-5 flex w-full  flex-col  lg:flex-row">
                <div className="mt-2 flex flex-col items-center gap-x-5 md:basis-full md:flex-row  md:items-start  lg:basis-1/3 ">
                  <span className=" relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
                  <div className="text-5xl flex gap-x-2 font-pinar">
                    <span className="whitespace-nowrap  font-bold text-primary">
                      نمونه کارهای
                    </span>
                    <span className="whitespace-nowrap  font-bold  text-headingColor dark:text-white">
                      اخیر من
                    </span>
                  </div>
                </div>

                <div className="mt-20 flex w-full flex-grow basis-full flex-row flex-wrap justify-center gap-8  md:mt-0 lg:basis-auto   lg:flex-row lg:justify-between">
                  <div className="oveflow-hidden transition-default group relative flex  h-44 flex-[1_1_160px] flex-col  items-center justify-center  gap-y-6 rounded-primary border border-solid border-transparent  hover:border-secondary hover:bg-white hover:shadow-default dark:hover:border-none md:px-12 md:py-5 lg:w-225 lg:items-start ">
                    <Buildings2
                      size="44"
                      color="#FFEFDE"
                      variant="Broken"
                      className="absolute left-10 top-7 -rotate-45 opacity-80"
                    />
                    <p className="flex gap-x-2 text-3xl font-bold text-headingColor dark:text-white dark:group-hover:text-primary  ">
                      <Project />
                    </p>
                    <p className="text-2xl font-normal text-disableOverlay line-clamp-1">
                      پروژه های تکمیل شده
                    </p>
                  </div>
                  <div className="oveflow-hidden transition-default group relative flex  h-44 flex-[1_1_160px] flex-col  items-center justify-center  gap-y-6 rounded-primary border border-solid border-transparent  hover:border-secondary hover:bg-white hover:shadow-default dark:hover:border-none md:px-12 md:py-5  lg:w-225 lg:items-start  ">
                    <Designtools
                      size="44"
                      color="#FFEFDE"
                      variant="Broken"
                      className="absolute left-10 top-7 rotate-90 opacity-80"
                    />
                    <p className="flex gap-x-2 text-3xl font-bold text-headingColor dark:text-white dark:group-hover:text-primary ">
                      <Project2 />
                    </p>
                    <p className="text-2xl font-normal text-disableOverlay line-clamp-1">
                      پروژه های طراحی شده
                    </p>
                  </div>
                  <div className="oveflow-hidden transition-default group relative flex  h-44 flex-[1_1_160px] flex-col  items-center justify-center  gap-y-6 rounded-primary border border-solid border-transparent  hover:border-secondary hover:bg-white hover:shadow-default dark:hover:border-none md:px-12 md:py-5 lg:w-225 lg:items-start  ">
                    <EmojiNormal
                      size="44"
                      color="#FFEFDE"
                      variant="Broken"
                      className="absolute left-10 top-7 -rotate-45 opacity-80"
                    />
                    <p className="flex gap-x-2 text-3xl font-bold text-headingColor dark:text-white dark:group-hover:text-primary ">
                      <Customer />
                    </p>
                    <p className="text-2xl font-normal text-disableOverlay line-clamp-1">
                      لبخند مشتریان خوشحال
                    </p>
                  </div>
                  <div className="oveflow-hidden transition-default group relative flex  h-44 flex-[1_1_160px] flex-col  items-center justify-center  gap-y-6 rounded-primary border border-solid border-transparent  hover:border-secondary hover:bg-white hover:shadow-default dark:hover:border-none md:px-12 md:py-5 lg:w-225 lg:items-start  ">
                    <Coffee
                      size="44"
                      color="#FFEFDE"
                      variant="Broken"
                      className="absolute left-10 top-7 -rotate-45 opacity-80"
                    />

                    <p className="flex gap-x-2 text-3xl font-bold text-headingColor dark:text-white dark:group-hover:text-primary ">
                      <Expreince />
                    </p>
                    <p className="text-2xl font-normal text-disableOverlay line-clamp-1">
                      تجربه ها به تعداد قهوه
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  flex-wrap gap-20">
                  {/* Item */}
                  <figure className="flex flex-1 flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
                    {/* header */}
                    <div className="w-full flex justify-between pt-10 pb-6 px-5">
                      <div className="flex basis-9/12">
                        <span className="  ml-2">
                          <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                        </span>
                        <p className="text-2xl text-headingColor font-medium">
                          برنامه نویسی
                        </p>
                      </div>

                      <div className="basis-3/12">
                        <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                          آنلاین
                          <span className="mr-3">
                            <BoxTick size="22" color="#4bb543" variant="Bulk" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* caption */}
                    <figcaption className="w-full">
                      <div className="relative w-full">
                        <img
                          className="h-250"
                          src={portfolio}
                          width="100%"
                          height="100%"
                          alt="porfolio-thumbnail"
                        />

                        {/* Technology By */}
                        <div className="flex absolute right-5 bottom-0 translate-y-1/2">
                          <span className="w-[32px] h-[32px] rounded-full bg-yellow-400 drop-shadow-lg flex justify-center border-4 border-solid border-white ">
                            <Js size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-orange-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-1/2 ">
                            <Html5 size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-green-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-full ">
                            <CodeCircle
                              size="30"
                              color="#fff"
                              variant="Broken"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="w-full  py-12 flex items-start flex-col">
                        <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                          <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                            وب اپلیکیشن دیجیتایز
                          </p>
                        </div>
                        <div className="flex flex-wrap  gap-y-3 justify-between px-6 mt-5 w-full">
                          <div className="flex basis-full  items-start md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Shop
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              فروشگاهی
                            </p>
                          </div>
                          <div className="flex basis-full  justify-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              مهرماه 1402
                              <span className="mr-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <CalendarTick
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="flex basis-full  items-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Information
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              در حال تکمیل
                            </p>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  {/* Item */}
                  <figure className="flex flex-1 flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
                    {/* header */}
                    <div className="w-full flex justify-between pt-10 pb-6 px-5">
                      <div className="flex basis-9/12">
                        <span className="  ml-2">
                          <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                        </span>
                        <p className="text-2xl text-headingColor font-medium">
                          برنامه نویسی
                        </p>
                      </div>

                      <div className="basis-3/12">
                        <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                          آنلاین
                          <span className="mr-3">
                            <BoxTick size="22" color="#4bb543" variant="Bulk" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* caption */}
                    <figcaption className="w-full">
                      <div className="relative w-full">
                        <img
                          className="h-250"
                          src={portfolio}
                          width="100%"
                          height="100%"
                          alt="porfolio-thumbnail"
                        />

                        {/* Technology By */}
                        <div className="flex absolute right-5 bottom-0 translate-y-1/2">
                          <span className="w-[32px] h-[32px] rounded-full bg-yellow-400 drop-shadow-lg flex justify-center border-4 border-solid border-white ">
                            <Js size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-orange-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-1/2 ">
                            <Html5 size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-green-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-full ">
                            <CodeCircle
                              size="30"
                              color="#fff"
                              variant="Broken"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="w-full  py-12 flex items-start flex-col">
                        <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                          <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                            وب اپلیکیشن دیجیتایز
                          </p>
                        </div>
                        <div className="flex flex-wrap  gap-y-3 justify-between px-6 mt-5 w-full">
                          <div className="flex basis-full  items-start md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Shop
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              فروشگاهی
                            </p>
                          </div>
                          <div className="flex basis-full  justify-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              مهرماه 1402
                              <span className="mr-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <CalendarTick
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="flex basis-full  items-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Information
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              در حال تکمیل
                            </p>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  {/* Item */}
                  <figure className="flex flex-1 flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
                    {/* header */}
                    <div className="w-full flex justify-between pt-10 pb-6 px-5">
                      <div className="flex basis-9/12">
                        <span className="  ml-2">
                          <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                        </span>
                        <p className="text-2xl text-headingColor font-medium">
                          برنامه نویسی
                        </p>
                      </div>

                      <div className="basis-3/12">
                        <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                          آنلاین
                          <span className="mr-3">
                            <BoxTick size="22" color="#4bb543" variant="Bulk" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* caption */}
                    <figcaption className="w-full">
                      <div className="relative w-full">
                        <img
                          className="h-250"
                          src={portfolio}
                          width="100%"
                          height="100%"
                          alt="porfolio-thumbnail"
                        />

                        {/* Technology By */}
                        <div className="flex absolute right-5 bottom-0 translate-y-1/2">
                          <span className="w-[32px] h-[32px] rounded-full bg-yellow-400 drop-shadow-lg flex justify-center border-4 border-solid border-white ">
                            <Js size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-orange-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-1/2 ">
                            <Html5 size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-green-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-full ">
                            <CodeCircle
                              size="30"
                              color="#fff"
                              variant="Broken"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="w-full  py-12 flex items-start flex-col">
                        <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                          <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                            وب اپلیکیشن دیجیتایز
                          </p>
                        </div>
                        <div className="flex flex-wrap  gap-y-3 justify-between px-6 mt-5 w-full">
                          <div className="flex basis-full  items-start md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Shop
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              فروشگاهی
                            </p>
                          </div>
                          <div className="flex basis-full  justify-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              مهرماه 1402
                              <span className="mr-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <CalendarTick
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="flex basis-full  items-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Information
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              در حال تکمیل
                            </p>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="flex flex-1 flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
                    {/* header */}
                    <div className="w-full flex justify-between pt-10 pb-6 px-5">
                      <div className="flex basis-9/12">
                        <span className="  ml-2">
                          <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                        </span>
                        <p className="text-2xl text-headingColor font-medium">
                          برنامه نویسی
                        </p>
                      </div>

                      <div className="basis-3/12">
                        <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                          آنلاین
                          <span className="mr-3">
                            <BoxTick size="22" color="#4bb543" variant="Bulk" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* caption */}
                    <figcaption className="w-full">
                      <div className="relative w-full">
                        <img
                          className="h-250"
                          src={portfolio}
                          width="100%"
                          height="100%"
                          alt="porfolio-thumbnail"
                        />

                        {/* Technology By */}
                        <div className="flex absolute right-5 bottom-0 translate-y-1/2">
                          <span className="w-[32px] h-[32px] rounded-full bg-yellow-400 drop-shadow-lg flex justify-center border-4 border-solid border-white ">
                            <Js size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-orange-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-1/2 ">
                            <Html5 size="30" color="#fff" variant="Broken" />
                          </span>
                          <span className="w-[32px] h-[32px] rounded-full bg-green-400 drop-shadow-lg flex justify-center border-4 border-solid border-white translate-x-full ">
                            <CodeCircle
                              size="30"
                              color="#fff"
                              variant="Broken"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="w-full  py-12 flex items-start flex-col">
                        <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                          <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                            وب اپلیکیشن دیجیتایز
                          </p>
                        </div>
                        <div className="flex flex-wrap  gap-y-3 justify-between px-6 mt-5 w-full">
                          <div className="flex basis-full  items-start md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Shop
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              فروشگاهی
                            </p>
                          </div>
                          <div className="flex basis-full  justify-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              مهرماه 1402
                              <span className="mr-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <CalendarTick
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                            </p>
                          </div>
                          <div className="flex basis-full  items-end md:basis-1/2">
                            <p className="flex text-disable text-[14px] font-normal">
                              <span className="ml-2 p-2 rounded-lg bg-disableOverlay2 shadow-default">
                                <Information
                                  size="19"
                                  variant="Bulk"
                                  className="text-slate-500"
                                />
                              </span>
                              در حال تکمیل
                            </p>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* customer Section */}
            <section className="relative my-10  flex  w-full flex-col  dark:bg-slate-700 md:py-20">
              <div className="flex w-full flex-col px-12 md:px-20 ">
                {/* titleBar */}
                <div className="flex flex-col w-full justify-center bg-coverCustemer bg-center bg-cover py-20">
                  <span className="w-16 h-3 rounded-tl-full rounded-tr-full bg-gradient-to-r from-purple-500  to-orange-500 mx-auto"></span>
                  <div className="inline text-center leading-[3.2rem] md:leading-[5rem] lg:leading-[6rem] text-5xl lg:text-[45px] text-headingColor font-bold font-pinar ">
                    در مورد من <br></br>
                    <h3 className="text-primary inline-block text-5xl lg:text-[45px] ">
                      مشتریان
                    </h3>
                    چی میگن
                    <span className="mr-3 px-4 py-2 rounded-full bg-secondary text-white font-normal text-xl">
                      +13
                    </span>
                  </div>
                </div>

                {/* slider */}

                <div className="relative  w-full h-full">
                  <Swiper
                    // install Swiper modules
                    dir="rtl"
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                      delay: 2500,
                    }}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={3}
                    loop={true}
                    grabCursor={true}
                    className="swiperCustomer h-full  py-36 !w-[80%] "
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                        navigation: false,
                      },

                      768: {
                        slidesPerView: 2,
                        navigation: false,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        navigation: true,
                      },
                    }}
                  >
                    <SwiperSlide className="flex h-full   justify-center">
                      <figure className=" flex flex-col  bg-gray-50 border border-solid  rounded-secondary p-10 w-350">
                        <header className="flex gap-3 w-full">
                          <div className="basis-2/8">
                            <img
                              src="https://cdn.dribbble.com/users/5963189/avatars/small/5dcf96d83bbafe786013cec9e2e6d7bb.jpg?1630559666"
                              className=" rounded-full"
                              alt="profile-img"
                            />
                          </div>
                          <div className="basis-auto flex flex-col items-start">
                            <p className="text-slate-900 font-semibold  text-[15px]">
                              رضا وحدتی
                            </p>
                            <p className="text-disable font-normal text-xl mt-1 ">
                              تیم لید الو پیک
                            </p>
                          </div>
                        </header>

                        <div className="w-full mt-7">
                          <p className="leading-[2.9rem] text-2xl font-normal text-disableOverlay">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti ipsa accusantium, dolorum, alias eum
                            illo consectetur .
                          </p>
                        </div>

                        <div className="flex flex-wrap items-start mt-3 w-full">
                          <p className="text-disable font-light text-2xl">
                            25 بهمن 1401
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="flex h-full   justify-center">
                      <figure className=" flex flex-col  bg-gray-50 border border-solid  rounded-secondary p-10 w-350">
                        <header className="flex gap-3 w-full">
                          <div className="basis-2/8">
                            <img
                              src="https://cdn.dribbble.com/users/5963189/avatars/small/5dcf96d83bbafe786013cec9e2e6d7bb.jpg?1630559666"
                              className=" rounded-full"
                              alt="profile-img"
                            />
                          </div>
                          <div className="basis-auto flex flex-col items-start">
                            <p className="text-slate-900 font-semibold  text-[15px]">
                              احمد وحدتی
                            </p>
                            <p className="text-disable font-normal text-xl mt-1 ">
                              تیم لید الو پیک
                            </p>
                          </div>
                        </header>

                        <div className="w-full mt-7">
                          <p className="leading-[2.9rem] text-2xl font-normal text-disableOverlay">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti ipsa accusantium, dolorum, alias eum
                            illo consectetur .
                          </p>
                        </div>

                        <div className="flex flex-wrap items-start mt-3 w-full">
                          <p className="text-disable font-light text-2xl">
                            25 بهمن 1401
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="flex h-full   justify-center">
                      <figure className=" flex flex-col  bg-gray-50 border border-solid  rounded-secondary p-10 w-350">
                        <header className="flex gap-3 w-full">
                          <div className="basis-2/8">
                            <img
                              src="https://cdn.dribbble.com/users/5963189/avatars/small/5dcf96d83bbafe786013cec9e2e6d7bb.jpg?1630559666"
                              className=" rounded-full"
                              alt="profile-img"
                            />
                          </div>
                          <div className="basis-auto flex flex-col items-start">
                            <p className="text-slate-900 font-semibold  text-[15px]">
                              محسن وحدتی
                            </p>
                            <p className="text-disable font-normal text-xl mt-1 ">
                              تیم لید الو پیک
                            </p>
                          </div>
                        </header>

                        <div className="w-full mt-7">
                          <p className="leading-[2.9rem] text-2xl font-normal text-disableOverlay">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti ipsa accusantium, dolorum, alias eum
                            illo consectetur .
                          </p>
                        </div>

                        <div className="flex flex-wrap items-start mt-3 w-full">
                          <p className="text-disable font-light text-2xl">
                            25 بهمن 1401
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="flex h-full   justify-center">
                      <figure className=" flex flex-col  bg-gray-50 border border-solid  rounded-secondary p-10 w-350">
                        <header className="flex gap-3 w-full">
                          <div className="basis-2/8">
                            <img
                              src="https://cdn.dribbble.com/users/5963189/avatars/small/5dcf96d83bbafe786013cec9e2e6d7bb.jpg?1630559666"
                              className=" rounded-full"
                              alt="profile-img"
                            />
                          </div>
                          <div className="basis-auto flex flex-col items-start">
                            <p className="text-slate-900 font-semibold  text-[15px]">
                              ناصر وحدتی
                            </p>
                            <p className="text-disable font-normal text-xl mt-1 ">
                              تیم لید الو پیک
                            </p>
                          </div>
                        </header>

                        <div className="w-full mt-7">
                          <p className="leading-[2.9rem] text-2xl font-normal text-disableOverlay">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti ipsa accusantium, dolorum, alias eum
                            illo consectetur .
                          </p>
                        </div>

                        <div className="flex flex-wrap items-start mt-3 w-full">
                          <p className="text-disable font-light text-2xl">
                            25 بهمن 1401
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide className="flex h-full   justify-center">
                      <figure className=" flex flex-col  bg-gray-50 border border-solid  rounded-secondary p-10 w-350">
                        <header className="flex gap-3 w-full">
                          <div className="basis-2/8">
                            <img
                              src="https://cdn.dribbble.com/users/5963189/avatars/small/5dcf96d83bbafe786013cec9e2e6d7bb.jpg?1630559666"
                              className=" rounded-full"
                              alt="profile-img"
                            />
                          </div>
                          <div className="basis-auto flex flex-col items-start">
                            <p className="text-slate-900 font-semibold  text-[15px]">
                              ناصر وحدتی
                            </p>
                            <p className="text-disable font-normal text-xl mt-1 ">
                              تیم لید الو پیک
                            </p>
                          </div>
                        </header>

                        <div className="w-full mt-7">
                          <p className="leading-[2.9rem] text-2xl font-normal text-disableOverlay">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti ipsa accusantium, dolorum, alias eum
                            illo consectetur .
                          </p>
                        </div>

                        <div className="flex flex-wrap items-start mt-3 w-full">
                          <p className="text-disable font-light text-2xl">
                            25 بهمن 1401
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => swiperRef.current?.slideNext()}
                      className="prev  bg-white shadow-default border border-solid border-slate-900 rounded-full p-3 w-fit absolute left-0 top-[calc(100%-220px)] hidden md:block z-10"
                    >
                      <ArrowLeft size="25" className="text-inherit" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="next border border-solid border-transparent bg-primary rounded-full p-3 w-fit absolute right-0 top-[calc(100%-220px)] hidden md:block z-10"
                    >
                      <ArrowRight size="25" color="#fff" />
                    </motion.button>
                  </Swiper>
                </div>
              </div>
            </section>

            {/* blog */}
            <section
              className="my-10 flex w-full flex-col gap-y-10 px-12 md:px-20 md:py-16"
              id="blog"
            >
              <div className="flex w-full justify-center md:justify-between">
                {/* titleBar */}
                <div className=" relative mt-2 flex flex-col items-center   md:items-start">
                  <div className="flex flex-col items-center gap-x-5  gap-y-3  md:flex-row lg:flex-row">
                    <span className="relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
                    <div className="flex  gap-x-2 font-pinar  ">
                      <span className="whitespace-nowrap text-5xl font-bold text-primary">
                        اخبار و مقالات
                      </span>
                      <span className="whitespace-nowrap text-5xl font-bold  text-headingColor dark:text-white ">
                        برنامه نویسی و ...
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
                    اینجا تجربیاتم رو مینویسم و کلی اطلاعات جدید رو به اشترام
                    میذارم
                  </p>
                </div>

                {/* button seeMore */}

                <motion.div whileTap={{scale:0.9}} className="my-12 hidden  w-fit md:flex">
                  <Link
                    to="/blog"
                    className="outline-btn flex items-center py-3 px-8  dark:bg-secondary dark:text-white "
                  >
                    مشاهده بیشتر
                    <ArrowLeft
                      size="25"
                      variant="Broken"
                      className="mr-2 mt-2 text-inherit"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Wrapper */}

              <div className=" grid grid-cols-1 lg:grid-cols-3  w-full flex-wrap gap-x-10 gap-y-16  ">
                <figure className="relative h-full  w-full overflow-hidden rounded-primary shadow-default  mdg:h-550">
                  <div className="transition-default h-full w-full ">
                    <img
                      src={blogBig}
                      width="100%"
                      height="100%"
                      alt=""
                      className=" rounded-primary"
                    />
                  </div>

                  <figcaption className="bg-darkTowhite absolute inset-0 flex h-full w-full flex-col items-start  justify-between rounded-primary px-4 pt-10  pb-20 lg:px-10   ">
                    <div className="my-2 flex gap-x-5   ">
                      <div className="  flex cursor-default   gap-x-3 rounded-full bg-white px-5  py-1 text-headingColor lg:px-5 lg:py-3">
                        <HeartCircle
                          size="22"
                          color="#3f3f3f"
                          variant="Broken"
                        />
                        <p className="text-xl  font-medium lg:text-2xl">12</p>
                      </div>
                      <div className=" flex cursor-default   gap-x-3 rounded-full bg-[#c2c2c279] px-5 py-1 text-white lg:px-5 lg:py-3">
                        <MessageNotif
                          size="22"
                          color="#ffffff"
                          variant="Broken"
                        />
                        <p className="text-xl  font-medium lg:text-2xl">23</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start ">
                      <div className="flex ">
                        <div className="flex ">
                          <p className="transition-default flex justify-center rounded-full border border-solid border-disableOverlay px-6  py-1 text-lg text-disableOverlay  hover:border-inherit hover:bg-white hover:text-headingColor ">
                            مقاله
                          </p>
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-white hover:bg-primary"></div>
                        </div>

                        <div className="flex">
                          <p className=" flex items-center text-lg text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-white hover:bg-primary"></div>
                        </div>

                        <p className=" flex gap-x-1 text-lg text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        <div className="flex">
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-white hover:bg-primary"></div>

                          <div className="flex">
                            <Eye size="15" color="#9B9B9B" className="ml-2" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col items-start">
                        <a href="/blog">
                          <h3 className="text-[15px] font-medium leading-[2.6rem] text-white   line-clamp-1 lg:text-3xl">
                            ساخت وبسایت فروشگاهی با React و Next
                          </h3>
                        </a>
                        <p className=" text-sm leading-[2.4rem] text-disableOverlay  line-clamp-2 lg:text-xl lg:line-clamp-3">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و
                        </p>
                      </div>
                    </div>
                  </figcaption>
                  <a
                    href="/"
                    className="transition-default absolute left-0 bottom-0 hidden gap-x-3 rounded-bl-primary rounded-tr-primary border border-solid border-primary bg-primary py-3 text-xl font-normal text-white hover:bg-transparent hover:text-white md:flex md:px-6 lg:px-12"
                  >
                    بیشتر بخوانید
                    <ArrowLeft
                      size="20"
                      color="#ffffff"
                      className="mt-1  text-3xl text-inherit "
                      variant="Broken"
                    />
                  </a>
                </figure>
                <figure className="rounded-default relative h-full w-full rounded-primary  bg-white p-10 shadow-default mdg:h-550">
                  <b className="badge"></b>
                  <div className="h-200  w-full     ">
                    <img
                      src={blog2}
                      alt=""
                      className=" h-full w-full rounded-secondary"
                    />
                  </div>
                  <figcaption className="flex flex-col pt-10">
                    <div className="flex flex-col items-start ">
                      <div className="flex ">
                        <div className="flex ">
                          <p className="transition-default flex justify-center rounded-full border border-solid border-disableOverlay px-6  py-1 text-lg text-disableOverlay  hover:border-inherit hover:bg-primary hover:text-white ">
                            مقاله
                          </p>
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                        </div>

                        <div className="flex">
                          <p className=" flex items-center text-lg text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                        </div>

                        <p className=" flex gap-x-1 text-lg text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        <div className="flex">
                          <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          <div className="flex">
                            <Eye size="15" color="#9B9B9B" className="ml-2" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col items-start">
                        <a href="/blog">
                          <h3 className="mb-3 text-[15px] font-medium leading-[2.6rem] text-headingColor line-clamp-1 lg:text-2xl">
                            ساخت وبسایت فروشگاهی با React و Next
                          </h3>
                        </a>
                        <p className=" text-justify text-xl leading-[3rem] text-disableOverlay line-clamp-3 ">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                          برای شرایط فعلی تکنولوژی مورد نیاز، و لورم ایپسوم متن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                          شرایط فعلی تکنولوژی مورد نیاز، و لورم ایپسوم متن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                          شرایط فعلی تکنولوژی مورد نیاز، و
                        </p>
                      </div>
                    </div>

                    {/* author section */}
                    <div className="mb-14 flex w-full justify-between lg:mt-12">
                      <div className="flex items-center gap-5">
                        <div className="h-14 w-14">
                          <img
                            src={profile}
                            alt=""
                            className=" h-full w-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col items-start ">
                          <p className="text-2xl font-medium text-headingColor ">
                            مهدی نظری
                          </p>
                          <small className="mt-3 text-xl font-normal text-disableOverlay">
                            توسعه دهنده فرانت اند
                          </small>
                        </div>
                      </div>
                    </div>
                  </figcaption>

                  <a
                    href="/"
                    className="transition-default absolute left-0 bottom-0 flex gap-x-3 rounded-bl-primary rounded-tr-primary border border-solid border-primary bg-primary px-12 py-3 text-xl font-normal text-white hover:bg-transparent hover:text-headingColor"
                  >
                    بیشتر بخوانید
                    <ArrowLeft
                      size="20"
                      color="#ffffff"
                      className="mt-1  text-3xl text-inherit "
                      variant="Broken"
                    />
                  </a>
                </figure>

                <div className="!ml-0 flex w-full h-full  flex-col justify-around gap-5 ">
                  {/* items 1 column */}
                  <figure className="  rounded-default relative flex-1 w-full rounded-primary  bg-white py-7   px-10 shadow-default ">
                    <b className="badge"></b>

                    <figcaption className="flex flex-col">
                      <div className="flex flex-col items-start ">
                        <div className="flex ">
                          <div className="flex ">
                            <p className="transition-default flex justify-center rounded-full border border-solid border-disableOverlay px-6  py-1 text-lg text-disableOverlay  hover:border-inherit hover:bg-primary hover:text-white ">
                              مقاله
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <div className="flex">
                            <p className=" flex items-center text-lg text-disableOverlay">
                              5
                              <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                                دقیقه خواندن
                              </span>
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <p className=" flex gap-x-1 text-lg text-disableOverlay ">
                            <span className="text-inherit">14</span>

                            <span className="whitespace-nowrap text-inherit">
                              مرداد
                            </span>
                            <span className="text-inherit">1400</span>
                          </p>

                          <div className="flex">
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                            <div className="flex">
                              <Eye size="15" color="#9B9B9B" className="ml-2" />
                              <p className="text-xl text-disableOverlay">500</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col items-start">
                          <a href="/blog">
                            <h3 className="mb-3 text-[15px] font-medium leading-[2.6rem] text-headingColor line-clamp-1 lg:text-2xl">
                              ساخت وبسایت فروشگاهی با React و Next
                            </h3>
                          </a>
                          <p className=" text-justify text-xl leading-[2.4rem] text-disableOverlay line-clamp-3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  {/* items 2 column */}

                  <figure className="  rounded-default relative flex-1 w-full rounded-primary  bg-white py-7   px-10 shadow-default ">
                    <b className="badge"></b>

                    <figcaption className="flex flex-col">
                      <div className="flex flex-col items-start ">
                        <div className="flex ">
                          <div className="flex ">
                            <p className="transition-default flex justify-center rounded-full border border-solid border-disableOverlay px-6  py-1 text-lg text-disableOverlay  hover:border-inherit hover:bg-primary hover:text-white ">
                              مقاله
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <div className="flex">
                            <p className=" flex items-center text-lg text-disableOverlay">
                              5
                              <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                                دقیقه خواندن
                              </span>
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <p className=" flex gap-x-1 text-lg text-disableOverlay ">
                            <span className="text-inherit">14</span>

                            <span className="whitespace-nowrap text-inherit">
                              مرداد
                            </span>
                            <span className="text-inherit">1400</span>
                          </p>

                          <div className="flex">
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                            <div className="flex">
                              <Eye size="15" color="#9B9B9B" className="ml-2" />
                              <p className="text-xl text-disableOverlay">500</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col items-start">
                          <a href="/blog">
                            <h3 className="mb-3 text-[15px] font-medium leading-[2.6rem] text-headingColor line-clamp-1 lg:text-2xl">
                              ساخت وبسایت فروشگاهی با React و Next
                            </h3>
                          </a>
                          <p className=" text-justify text-xl leading-[2.4rem] text-disableOverlay line-clamp-3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  {/* items 3 column */}

                  <figure className="  rounded-default relative flex-1 w-full rounded-primary  bg-white py-7   px-10 shadow-default ">
                    <b className="badge"></b>

                    <figcaption className="flex flex-col">
                      <div className="flex flex-col items-start ">
                        <div className="flex ">
                          <div className="flex ">
                            <p className="transition-default flex justify-center rounded-full border border-solid border-disableOverlay px-6  py-1 text-lg text-disableOverlay  hover:border-inherit hover:bg-primary hover:text-white ">
                              مقاله
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <div className="flex">
                            <p className=" flex items-center text-lg text-disableOverlay">
                              5
                              <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                                دقیقه خواندن
                              </span>
                            </p>
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                          </div>

                          <p className=" flex gap-x-1 text-lg text-disableOverlay ">
                            <span className="text-inherit">14</span>

                            <span className="whitespace-nowrap text-inherit">
                              مرداد
                            </span>
                            <span className="text-inherit">1400</span>
                          </p>

                          <div className="flex">
                            <div className="transition-default mx-4 h-2 w-2 rounded-full bg-primary hover:bg-secondary"></div>
                            <div className="flex">
                              <Eye size="15" color="#9B9B9B" className="ml-2" />
                              <p className="text-xl text-disableOverlay">500</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col items-start">
                          <a href="/blog">
                            <h3 className="mb-3 text-[15px] font-medium leading-[2.6rem] text-headingColor line-clamp-1 lg:text-2xl">
                              ساخت وبسایت فروشگاهی با React و Next
                            </h3>
                          </a>
                          <p className=" text-justify text-xl leading-[2.4rem] text-disableOverlay line-clamp-3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                          </p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  {/* items 3 column */}
                </div>
              </div>
            </section>

            {/* advertise */}
            <section className="relative hidden   w-full px-6 py-20 justify-center   md:flex md:px-20 lg:flex ">
              <div className="container px-48">
                <div className=" relative flex flex-col items-center justify-end rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-9 pb-12 pt-24 sm:mx-10 sm:px-16 xl:flex-row xl:py-20 ">
                  <img
                    src="https://roocket.ir/img/pic/index_instagram_phone.png"
                    className="absolute right-1/2  -top-24 translate-x-1/2 scale-75 transform sm:-top-28 xl:right-0  xl:-top-20  xl:translate-x-0 xl:scale-100"
                    alt=""
                  />
                  <p className="mb-5 text-center text-lg font-extrabold text-white sm:mt-8 md:text-right md:text-4xl xl:ml-10 xl:mb-0 xl:mt-0">
                    من هر روز کلی مطالب آموزشی جالب در اینستاگرامم منتشر می‌کنم!
                  </p>
                  <a
                    href="https://www.instagram.com/mhdi_nzari/"
                    className="basis-auto transition-default group flex rounded-full border border-transparent bg-white px-7 py-4 text-2xl font-semibold text-headingColor hover:border-white hover:bg-transparent hover:text-white"
                  >
                    پیج اینستاگرام
                    <span>
                      <ArrowLeft3
                        size="22"
                        color="#a42bb4"
                        variant="Bulk"
                        className="transition-default mr-2  group-hover:[&>*]:fill-white"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  };

export default Home;
