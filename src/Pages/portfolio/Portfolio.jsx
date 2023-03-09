import { useState } from "react";
import { motion } from "framer-motion";
import NewsLetter from "@/Components/NewsLetter";
import Pagination from "@/Components/Pagination";
import portfolio from "@/assets/img/portfolio.png";

// import img , svg or else media
import Demo from "@/assets/img/demo.png";
import { ReactComponent as ElementText } from "@/assets/img/elementText2.svg";
import { ReactComponent as ArrowLeft } from "@/assets/img/arrowLeft.svg";

import {
  ArrangeVerticalSquare,
  BoxTick,
  CalendarTick,
  CloseCircle,
  CodeCircle,
  DirectLeft,
  Hashtag,
  Html5,
  Information,
  Js,
  Mobile,
  More,
  Shop,
} from "iconsax-react";
import { GoMarkGithub } from "react-icons/go";

const Portfolio = () => {
  return (
    <>
      <main className="flex w-full  flex-col gap-10 mt-20 px-12 md:px-20">
        <section className="relative my-10 flex w-full flex-col ">
          <div className="flex flex-col  justify-center gap-y-5">
            <div className="flex gap-y-3">
              <p className="relative ml-5 text-3xl font-bold text-headingColor dark:text-white md:text-5xl">
                یه نمونه کار خوب
                <ElementText className="absolute -left-4 -top-3 h-6 w-6 rotate-12 text-secondary md:-left-5 md:-top-5 md:h-10 md:w-10" />
              </p>
              <p className="text-3xl font-bold text-headingColor dark:text-slate-300 md:text-5xl">
                چه ویژگی داره ؟
              </p>
            </div>
            <small className=" mt-5 w-full  text-center text-2xl  leading-[3.2rem] text-disable md:w-3/4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون است.
            </small>
          </div>
          <div className="my-20 grid w-full grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <figure className="flex flex-col rounded-primary bg-white p-16 shadow-default lg:bg-transparent lg:shadow-none">
              <div className="relative rounded-full bg-yellow-400 p-6  after:absolute after:left-0 after:top-0 after:z-[-1] after:m-auto after:h-full after:w-full after:scale-[1.2] after:rounded-full after:bg-yellow-100">
                <span>
                  <Js size="32" color="#ffffff" variant="Broken" />
                </span>
              </div>
              <figcaption className="my-10 flex flex-col">
                <p className="whitespace-nowrap text-center text-3xl font-semibold text-headingColor dark:text-white ">
                  جدیدترین تکتولوژی ها
                </p>
                <p className="mt-4 text-center text-2xl font-normal leading-[2.6rem] text-disable dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </figcaption>
            </figure>
            <figure className="flex flex-col rounded-primary bg-white p-16 shadow-default  lg:translate-y-1/4 lg:bg-transparent lg:shadow-none">
              <div className="relative rounded-full bg-blue-600 p-6   after:absolute after:left-0 after:top-0 after:z-[-1] after:m-auto after:h-full after:w-full after:scale-[1.2] after:rounded-full after:bg-blue-100">
                <span>
                  <ArrangeVerticalSquare
                    size="32"
                    color="#ffffff"
                    variant="Broken"
                  />
                </span>
              </div>
              <figcaption className="my-10 flex flex-col">
                <p className="whitespace-nowrap text-center text-3xl font-semibold text-headingColor dark:text-white ">
                  نسخه قابل مشاهده و آنلاین
                </p>
                <p className="mt-4 text-center text-2xl font-normal leading-[2.6rem] text-disable dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </figcaption>
            </figure>
            <figure className="flex flex-col rounded-primary bg-white p-16 shadow-default  lg:bg-transparent lg:shadow-none">
              <div className="relative rounded-full bg-purple-600 p-6   after:absolute after:left-0 after:top-0 after:z-[-1] after:m-auto after:h-full after:w-full after:scale-[1.2] after:rounded-full after:bg-purple-100">
                <GoMarkGithub className="text-5xl text-white" />
              </div>
              <figcaption className="my-10 flex flex-col">
                <p className="whitespace-nowrap text-center text-3xl font-semibold text-headingColor dark:text-white ">
                  منبع باز و اپن سورس
                </p>
                <p className="mt-4 text-center text-2xl font-normal leading-[2.6rem] text-disable dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </figcaption>
            </figure>
            <figure className="flex flex-col rounded-primary bg-white p-16 shadow-default lg:translate-y-1/4 lg:bg-transparent lg:shadow-none">
              <div className="relative rounded-full bg-pink-600 p-6   after:absolute after:left-0 after:top-0 after:z-[-1] after:m-auto after:h-full after:w-full after:scale-[1.2] after:rounded-full after:bg-pink-100">
                <Mobile size="32" color="#fff" variant="Broken" />
              </div>
              <figcaption className="my-10 flex flex-col">
                <p className="whitespace-nowrap text-center text-3xl font-semibold text-headingColor dark:text-white ">
                 موبایل فرندلی
                </p>
                <p className="mt-4 text-center text-2xl font-normal leading-[2.6rem] text-disable dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Items bar */}
          <div className="flex w-full flex-row flex-wrap gap-16">
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    دوره آنلاین
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    دوره یوتیوب
                  </p>
                </div>

                <div className="basis-3/12">
                  <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                    آنلاین
                    <span className="mr-3">
                      <CloseCircle size="22" color="#F47373" variant="Bulk" />
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    کمپانی آلفا
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white ">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    برنامه نویسی
                  </p>
                </div>

                <div className="basis-3/12">
                  <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                    آنلاین
                    <span className="mr-3">
                      <CloseCircle size="22" color="#F47373" variant="Bulk" />
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-7 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    برنامه نویسی
                  </p>
                </div>

                <div className="basis-3/12">
                  <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                    آنلاین
                    <span className="mr-3">
                      <CloseCircle size="22" color="#F47373" variant="Bulk" />
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    وب اپلیکیشن
                  </p>
                </div>

                <div className="basis-3/12">
                  <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                    آنلاین
                    <span className="mr-3">
                      <CloseCircle size="22" color="#F47373" variant="Bulk" />
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-[1_1_300px] flex-col bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-secondary outline outline-offset-8 outline-slate-200 outline-1">
              {/* header */}
              <div className="w-full flex justify-between pt-10 pb-6 px-5">
                <div className="flex basis-9/12">
                  <span className="  ml-2">
                    <Hashtag size="25" color="#d1d1d1" variant="Bulk" />
                  </span>
                  <p className="text-xl text-disableOverlay font-normal">
                    پروژه تمرینی
                  </p>
                </div>

                <div className="basis-3/12">
                  <button className="flex bg-white text-headingColor shadow-default text-xl py-2 px-4 rounded-3xl whitespace-nowrap">
                    آنلاین
                    <span className="mr-3">
                      <CloseCircle size="22" color="#F47373" variant="Bulk" />
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
                </div>

                <div className="w-full  py-12 flex items-start flex-col">
                  <div className="px-5 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tl-full after:rounded-bl-full after:bg-primary after:h-full after:w-2">
                    <p className="text-2xl  text-headingColor font-semibold line-clamp-1 ">
                      وب اپلیکیشن دیجیتایز
                    </p>
                  </div>
                  <div className="flex flex-wrap  gap-y-5 justify-between px-6 mt-8 w-full">
                    <div className="flex  items-start basis-1/2">
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
                    <div className="flex  justify-end basis-1/2">
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
                    <div className="flex   items-end basis-1/2">
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
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="flex  justify-end basis-1/2"
                    >
                      <button className="w-fit flex text-xl text-slate-500 bg-disableOverlay2 rounded-xl py-3 px-7 transition-default hover:bg-primary hover:text-white">
                        بیشتر
                        <span className="mr-3">
                          <DirectLeft
                            size="15"
                            className="text-inherit"
                            variant="Bulk"
                          />
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <Pagination />

          <span>
            <ArrowLeft className="pointer-events-none absolute -left-28 top-10 hidden h-64 w-64 lg:block" />
          </span>
        </section>
        <NewsLetter />
      </main>
    </>
  );
};

export default Portfolio;
