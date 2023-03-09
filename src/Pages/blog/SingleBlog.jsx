import { useState } from "react";

import { SiTailwindcss, SiReact, SiVite } from "react-icons/si";
import { RiPagesLine, RiReactjsFill, RiVuejsLine } from "react-icons/ri";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { FaBootstrap, FaHandsHelping, FaRegStarHalf } from "react-icons/fa";
import { IoLogoJavascript, IoMdPaper } from "react-icons/io";

import banner from "@/assets/img/oxyzhen.png";
import imgBlog from "@/assets/img/blog.png";
import profile from "@/assets/img/profileBlog.png";

import {
  ArrowLeft2,
  Calendar,
  Category2,
  DirectNotification,
  EmojiSad,
  Glass,
  MessageQuestion,
  WristClock,
} from "iconsax-react";
import BarOfProgress from "@/Components/Ui/BarOfProgress";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const [categoryMenu, setCategoryMenu] = useState(false),
    toggleCategory = () => {
      setCategoryMenu(!categoryMenu);
    };

  return (
    <>
      <main className="relative my-10 flex w-full flex-col px-12 md:px-20 ">
        <article className=" relative  mt-20 w-full mx-auto md:max-w-screen-xl px-12 md:px-0 ">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[3fr_1fr]">
            <section className="my-0 w-full border-b border-slate-200">
              <div className=" my-0  w-full overflow-hidden rounded-primary bg-white p-6 shadow-default md:p-16  ">
                <div className="relative mb-8 h-64  rounded-3xl sm:h-450">
                  <img
                    src={imgBlog}
                    className="h-full w-full  rounded-3xl"
                    alt=""
                  />
                </div>
                <div className="mt-20 flex flex-col lg:mt-10 ">
                  <div className="flex w-full flex-wrap  items-start gap-5">
                    <a
                      href="/"
                      className="transition-default flex   gap-x-3 rounded-2xl bg-orange-50 px-3 py-3   text-center text-disableUnique  hover:bg-primary hover:text-white lg:px-5"
                    >
                      <SiReact className="text-3xl font-bold  text-inherit" />
                      <p className="text-xl font-normal  text-inherit md:text-2xl ">
                        آموزشی
                      </p>
                    </a>
                    <div className="flex gap-x-3   rounded-2xl bg-slate-50 px-3 py-3 text-center  lg:px-5">
                      {/* <BsClockHistory className="text-3xl text-disableUnique font-bold" /> */}

                      <div className="flex">
                        <div className="flex gap-x-3">
                          <span>
                            <Glass size="18" color="#3f3f3f" />
                          </span>
                          <p className="mx-2 whitespace-nowrap  text-xl font-normal text-hا md:text-2xl">
                            5 دقیقه
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-fit   gap-x-3 rounded-2xl bg-purple-50 px-3 py-3  text-center lg:px-5">
                      <span>
                        <Calendar size="18" color="#3f3f3f" />
                      </span>

                      <p className="  flex gap-x-1 text-xl md:text-2xl text-disableUnique  ">
                        <span className="text-inherit">14</span>

                        <span className="whitespace-nowrap text-inherit">
                          مرداد
                        </span>
                        <span className="text-inherit">1400</span>
                      </p>
                    </div>
                  </div>

                  <h1 className=" mb-6 mt-8 text-right text-3xl font-bold leading-[4rem]  text-headingColor  line-clamp-1 lg:text-[20px]  lg:leading-[3.2rem]">
                    سوال اصلی شما "چطوری برنامه نویسی رو به راحت ترین شیوه یاد
                    بگیریم که یادمون نره ؟!!
                  </h1>
                  <h2 className="mt-5 text-right text-2xl font-light leading-[3.6rem]  text-disable">
                    اگر مهارت‌های کدنویسی را به عنوان یک طراح وب یاد بگیرید،
                    می‌توانید حقوق بیشتری داشته باشید. در صنعت تقاضا برای جذب
                    چنین طراحانی بالا خواهد بود. آن‌ها میتوانند با برنامه‌نویسان
                    ارتباط برقرار کرده و دیگاه خود را در مورد ظاهر کد و طراحی به
                    اشتراک بگذارند.
                  </h2>
                </div>
              </div>
              <div className="my-14 flex w-full flex-col items-start gap-10 md:flex-row">
                <span className="ml-10 whitespace-nowrap text-3xl font-normal text-disableOverlay">
                  موضوعات مرتبط
                </span>
                <ul className="flex w-full gap-5 flex-wrap">
                  <li className="whitespace-nowrap rounded-lg border border-disable bg-[#edeff3] py-2 px-7 text-xl text-slate-400">
                    <a href="">قرارداد</a>
                  </li>
                  <li className="whitespace-nowrap rounded-lg border border-disable bg-[#edeff3] py-2 px-7 text-xl text-slate-400">
                    <a href="">جاوااسکریپت</a>
                  </li>
                  <li className="whitespace-nowrap rounded-lg border border-disable bg-[#edeff3] py-2 px-7 text-xl text-slate-400">
                    <a href="">برنامه نویسی</a>
                  </li>
                  <li className="whitespace-nowrap rounded-lg border border-disable bg-[#edeff3] py-2 px-7 text-xl text-slate-400">
                    <a href="">استخدام و رزومه نویسی</a>
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex w-full flex-wrap gap-y-10  ">
                <div className="w-full  md:w-1/2 md:pl-5">
                  <a
                    href="/"
                    className="transition-default relative  flex overflow-hidden rounded-[10px] bg-white shadow-default   "
                  >
                    <div className="before:bannerOverlay before:bannerTel relative ml-[40px] flex h-[90px] w-[105px]  min-w-[105px] justify-center ">
                      <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="38"
                        height="38"
                        className="z-[1] fill-white"
                      >
                        <path
                          d="M385.268 121.919l-210.569 129.69c-11.916 7.356-17.555 21.885-13.716 35.323l22.768 80c1.945 6.821 8.015 11.355 14.999 11.355.389 0 .782-.014 1.176-.043 7.466-.542 13.374-6.103 14.367-13.515l5.92-43.866a25.915 25.915 0 018.001-15.45l173.765-161.524a13.817 13.817 0 001.618-18.545 13.836 13.836 0 00-18.329-3.425zM214.32 290.478a46.364 46.364 0 00-14.323 27.655l-2.871 21.278-16.527-58.072c-1.343-4.704.635-9.791 4.805-12.365l154.258-95.007L214.32 290.478z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M503.67 37.382a23.52 23.52 0 00-23.698-4.005L15.08 212.719C5.873 216.27-.047 224.939 0 234.804c.048 9.874 6.055 18.495 15.316 21.965l108.59 40.529 42.359 136.225a23.517 23.517 0 0015.703 15.566 23.49 23.49 0 0021.66-4.31l63.14-51.473a8.642 8.642 0 0110.528-.295l113.883 82.681a23.476 23.476 0 0013.823 4.511 23.6 23.6 0 008.517-1.596c7.486-2.895 12.93-9.312 14.56-17.163l83.429-401.309a23.547 23.547 0 00-7.838-22.753zM491.536 55.99l-83.428 401.308c-.302 1.45-1.346 2.053-1.942 2.284-.6.232-1.785.489-2.997-.393l-113.887-82.685a28.982 28.982 0 00-17.052-5.531 29.013 29.013 0 00-18.347 6.519l-63.154 51.485c-1.124.92-2.291.756-2.885.577-.598-.18-1.665-.69-2.099-2.086L141.9 286.462a10.203 10.203 0 00-6.173-6.527L22.462 237.662c-1.696-.635-2.057-1.958-2.062-2.957-.005-.99.343-2.307 2.023-2.955L487.316 52.409l.008-.003c1.51-.583 2.627.087 3.159.537.534.455 1.384 1.455 1.053 3.047z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M427.481 252.142c-5.506-1.196-10.936 2.299-12.131 7.804l-1.55 7.14c-1.195 5.505 2.299 10.936 7.804 12.131a10.25 10.25 0 002.174.234c4.695 0 8.92-3.262 9.958-8.037l1.55-7.14c1.194-5.505-2.301-10.936-7.805-12.132zm-10.2 46.98c-5.512-1.195-10.938 2.299-12.132 7.804L381.69 414.977c-1.195 5.505 2.299 10.936 7.803 12.131.73.158 1.457.234 2.174.234 4.696 0 8.92-3.262 9.958-8.037l23.459-108.052c1.195-5.505-2.299-10.936-7.803-12.131z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </div>

                    <div className="text-[16px] leading-10  text-[#949494]">
                      در
                      <b className="text-[18px] font-semibold text-blue-500">
                        تلگرام
                      </b>
                      <br></br> من را دنبال کنید !
                    </div>
                  </a>
                </div>
                <div className="w-full   md:w-1/2  md:pr-5">
                  <a
                    href="/"
                    className="transition-default relative  flex overflow-hidden rounded-[10px] bg-white shadow-default   "
                  >
                    <div className="before:bannerOverlay before:bannerInsta relative ml-[40px] flex h-[90px] w-[105px]  min-w-[105px] justify-center  ">
                      <svg
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="38"
                        height="38"
                        className="z-[1] fill-white"
                      >
                        <path
                          d="M362 44H150C91.551 44 44 91.551 44 150v212c0 58.449 47.551 106 106 106h61c5.523 0 10-4.477 10-10s-4.477-10-10-10h-61c-47.42 0-86-38.58-86-86V150c0-47.42 38.58-86 86-86h212c47.42 0 86 38.58 86 86v212c0 47.42-38.58 86-86 86h-60.333c-5.523 0-10 4.477-10 10s4.477 10 10 10H362c58.449 0 106-47.551 106-106V150c0-58.449-47.551-106-106-106z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M263.07 450.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93S246 455.37 246 458s1.07 5.21 2.93 7.07S253.37 468 256 468s5.21-1.07 7.07-2.93c1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07zm-87.24-295.22c-3.777-4.03-10.104-4.236-14.135-.461l-.443.417c-4.017 3.79-4.201 10.119-.41 14.136a9.97 9.97 0 007.275 3.137 9.966 9.966 0 006.861-2.727l.391-.367c4.03-3.776 4.237-10.105.461-14.135z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M256 118c-21.964 0-43.824 5.291-63.217 15.301-4.907 2.533-6.832 8.565-4.299 13.473 2.534 4.907 8.566 6.831 13.473 4.299C218.762 142.398 236.945 138 256 138c65.065 0 118 52.935 118 118s-52.935 118-118 118-118-52.935-118-118c0-20.419 5.295-40.537 15.313-58.178 2.727-4.802 1.045-10.906-3.758-13.634-4.803-2.726-10.906-1.045-13.634 3.758C124.197 208.592 118 232.125 118 256c0 76.093 61.907 138 138 138s138-61.907 138-138-61.907-138-138-138z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M256 166c-49.626 0-90 40.374-90 90s40.374 90 90 90 90-40.374 90-90-40.374-90-90-90zm0 160c-38.598 0-70-31.402-70-70s31.402-70 70-70 70 31.402 70 70-31.402 70-70 70zM387.25 86.75c-20.953 0-38 17.047-38 38s17.047 38 38 38 38-17.047 38-38-17.047-38-38-38zm0 56c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </div>

                    <div className="text-[16px] leading-10  text-[#949494]">
                      در
                      <b className="text-[18px] font-semibold text-red-500">
                        اینستاگرام
                      </b>
                      <br></br> من را دنبال کنید !
                    </div>
                  </a>
                </div>
              </div>

              <div className="my-14  flex flex-col items-start rounded-primary bg-white py-20 px-10 shadow-default lg:gap-10 md:flex-row ">
                <div className="mb-10 flex w-full basis-full justify-center sm:basis-2/12 md:mb-0 relative z-[1] after:w-100 after:h-100 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2  after:rounded-full after:shadow-circleProfile after:-z-[1] after:bg-white">
                  <img
                    className="block w-[80px] max-w-full rounded-full    "
                    src={profile}
                    alt=""
                  />
                </div>
                <div className="flex w-full basis-full flex-col items-center lg:items-start sm:basis-10/12">
                  <h4 className="mb-4 block text-center text-3xl font-bold text-headingColor md:text-right">
                    کمی درباره نویسنده
                  </h4>
                  <div className="text-[14px] font-normal leading-[3.2rem] text-disableUnique line-clamp-4">
                    مهدی نظری برنامه نویس و طراح وبسایت هستم از سال 98 توی این
                    حوضه فعالیت و به علاقمندان حوضه برنامه نویسی در جهت پیشرفت
                    شون کمک میکنم . آموزش میدم ، یاد میگیرم ، توی رویداد ها و
                    سمینار های آموزشی شرکت میکنم و تجربه ام رو باآموزش دادن
                    انتقال میدم روز به روز تلاش میکنم تا بهتر از دیروزم باشه.
                  </div>
                  <div className="mt-5 w-full text-center md:text-right">
                    <Link
                      to="/aboutMe"
                      className="  mt-2 border-b-2 border-dashed border-primary  px-2 py-3 text-2xl text-primary"
                    >
                      درباره من بیشتر بدونید
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <aside className="top-20 hidden h-fit w-full lg:block">
              <div className="w-full rounded-secondary  border-[1px] border-primary bg-white px-10 shadow-default   ">
                <b className="badge"></b>

                <div className="flex  w-full  border-b-[1px] border-b-disableOverlay2 py-10">
                  <div className="flex w-full flex-col  ">
                    <div
                      className="flex  w-full  cursor-pointer justify-between  text-headingColor "
                      onClick={toggleCategory}
                    >
                      <div className="flex  whitespace-nowrap">
                        <span>
                          <DirectNotification
                            size="25"
                            className="text-inherit ml-2"
                            variant="Bulk"
                          />
                        </span>
                        <p className="text-3xl font-semibold text-inherit">
                          دسته بندی مقالات
                        </p>
                      </div>
                      <div className="w-fit">
                        <ArrowLeft2
                          size="20"
                          color="#3f3f3f"
                          className={`transition-default text-3xl text-inherit ${
                            categoryMenu ? "-rotate-90" : ""
                          } `}
                        />
                      </div>
                    </div>

                    <ul
                      className={`transition-default flex w-full  flex-col  items-start gap-y-10   overflow-hidden  ${
                        categoryMenu ? "mt-10  max-h-[999px]" : "max-h-0"
                      }`}
                    >
                      <li className="transition-default before:transition-default relative flex w-full cursor-pointer  justify-between overflow-hidden pr-10  text-2xl font-normal text-headingColor before:absolute before:-right-5 before:top-0 before:bottom-0  before:my-auto before:h-[7px] before:w-[7px] before:rounded-full before:bg-primary  hover:before:right-0  ">
                        <div className="flex text-2xl  font-normal text-headingColor">
                          <span className="">
                            <IoMdPaper className="ml-4 text-4xl text-inherit text-headingColor" />
                          </span>
                          عمومی
                        </div>
                        <div className=" flex h-auto justify-center rounded-full bg-primaryOverlay px-5 py-1 text-xl font-normal text-primary ">
                          128
                        </div>
                      </li>
                      <li className="transition-default before:transition-default relative flex w-full cursor-pointer  justify-between overflow-hidden pr-10 before:absolute before:-right-5 before:top-0 before:bottom-0  before:my-auto before:h-[7px] before:w-[7px] before:rounded-full before:bg-primary  hover:before:right-0  ">
                        <div className="flex text-2xl  font-normal text-headingColor">
                          <span className="">
                            <IoLogoJavascript className="ml-4 text-4xl text-inherit text-yellow-400" />
                          </span>
                          جاوااسکریپت
                        </div>
                        <div className=" flex h-auto justify-center rounded-full bg-primaryOverlay px-5 py-1 text-xl font-normal text-primary ">
                          12
                        </div>
                      </li>
                      <li className="transition-default before:transition-default relative flex w-full cursor-pointer  justify-between overflow-hidden pr-10  text-2xl font-normal text-headingColor before:absolute before:-right-5 before:top-0 before:bottom-0  before:my-auto before:h-[7px] before:w-[7px] before:rounded-full before:bg-primary  hover:before:right-0  ">
                        <div className="flex text-2xl  font-normal text-headingColor">
                          <span className="">
                            <RiReactjsFill className="ml-4 text-4xl text-inherit text-blue-400" />
                          </span>
                          ری اکت
                        </div>
                        <div className=" flex h-auto justify-center rounded-full bg-primaryOverlay px-5 py-1 text-xl font-normal text-primary ">
                          50
                        </div>
                      </li>
                      <li className="transition-default before:transition-default relative flex w-full cursor-pointer  justify-between overflow-hidden pr-10  text-2xl font-normal text-headingColor before:absolute before:-right-5 before:top-0 before:bottom-0  before:my-auto before:h-[7px] before:w-[7px] before:rounded-full before:bg-primary  hover:before:right-0  ">
                        <div className="flex text-2xl  font-normal text-headingColor">
                          <span className="">
                            <RiPagesLine className="ml-4 text-4xl text-inherit text-red-400" />
                          </span>
                          رزومه
                        </div>
                        <div className=" flex h-auto justify-center rounded-full bg-primaryOverlay px-5 py-1 text-xl font-normal text-primary ">
                          50
                        </div>
                      </li>
                      <li className="transition-default before:transition-default relative flex w-full cursor-pointer  justify-between overflow-hidden pr-10  text-2xl font-normal text-headingColor before:absolute before:-right-5 before:top-0 before:bottom-0  before:my-auto before:h-[7px] before:w-[7px] before:rounded-full before:bg-primary  hover:before:right-0  ">
                        <div className="flex text-2xl  font-normal text-headingColor">
                          <span className="">
                            <FaHandsHelping className="ml-4 text-4xl text-inherit text-purple-400" />
                          </span>
                          استخدام
                        </div>
                        <div className=" flex h-auto justify-center rounded-full bg-primaryOverlay px-5 py-1 text-xl font-normal text-primary ">
                          125
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full  overflow-hidden rounded-secondary border-[1px] border-primaryOverlay bg-white  px-10  shadow-default">
                <b className="badge"></b>

                <div className="flex  w-full  border-b-[1px] border-b-disableOverlay2 py-10">
                  <div className="flex w-full flex-col   ">
                    <div className="flex w-full flex-col items-start  justify-between text-headingColor ">
                      <div className="flex  cursor-default whitespace-nowrap">
                        <span>
                          {/* <BsEmojiSunglasses className="text-secondary text-4xl ml-2" /> */}
                          <EmojiSad
                            size="25"
                            className="text-inherit ml-3"
                            variant="Bulk"
                          />
                        </span>
                        <p className="text-3xl font-semibold text-inherit">
                          <span className="ml-2 text-inherit ">5</span>
                          مقاله اخیر
                        </p>
                      </div>

                      <ul className="scroll mt-10 flex h-300 w-full flex-col gap-y-10">
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex  w-full  border-b-[1px] border-b-disableOverlay2 py-10">
                  <div className="flex w-full flex-col   ">
                    <div className="flex w-full flex-col items-start  justify-between text-headingColor ">
                      <div className="flex  cursor-default whitespace-nowrap">
                        <span>
                          <FaRegStarHalf className="ml-2 text-4xl text-secondary" />
                        </span>
                        <p className="text-3xl font-semibold text-inherit">
                          مقالات برگزیده
                        </p>
                      </div>

                      <ul className="mt-10 flex w-full flex-col gap-y-10">
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-slate-50 p-5">
                          <p className=" transition-default cursor-pointer text-right text-2xl font-medium text-headingColor line-clamp-1 hover:text-primary">
                            دلایلی برای یادگیری طراحی وب و کدنویسی
                          </p>

                          <div className="mt-8 flex w-full justify-center overflow-hidden">
                            <div className="relative mx-2 flex  lg:gap-x-1  xl:gap-x-2 ">
                              <MessageQuestion
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                جاوااسکریپت
                              </p>
                            </div>
                            <div className="xl:e:my-auto relative  mx-2 flex gap-x-2 pr-2 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4  before:w-[1px] before:bg-[#d0d0d0] lg:gap-x-1">
                              <WristClock
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 whitespace-nowrap text-disableOverlay lg:text-sm  xl:text-base">
                                <span className="text-inherit">5</span>
                                دقیقه
                              </p>
                            </div>
                            <div className="beforlg:gap-x-1 xl:e:my-auto relative flex gap-x-2 pr-4 before:absolute before:right-0 before:top-0 before:bottom-0 before:h-4 before:w-[1px] before:bg-[#d0d0d0]">
                              <Calendar
                                size="15"
                                className="text-inherit"
                                variant="Bulk"
                              />

                              <p className="  flex gap-x-1 text-disableOverlay lg:text-sm xl:text-base ">
                                <span className="text-inherit">14</span>

                                <span className="whitespace-nowrap text-inherit">
                                  مرداد
                                </span>
                                <span className="text-inherit">1400</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <figure className="my-10 ">
                <a
                  href="#"
                  target="_blank"
                  aria-label="blogBanner"
                  className=""
                >
                  <img
                    src={banner}
                    className="max-w-full h-full "
                    width="100%"
                    height="100%"
                    alt="banner-oxyzhen"
                  />
                </a>
              </figure>
            </aside>
          </div>
          {/* <img src={assets} className="hidden absolute -right-20 top-0  opacity-50 w-275 -z-10 lg:block" alt="" /> */}
        </article>
        <div className="flex w-full flex-col"></div>
      </main>

      {/* Icon In background */}
      <div className="circles absolute inset-0 -z-10 h-full w-full overflow-hidden  ">
        <li>
          <TbBrandHtml5 className="text-[110px] text-orange-500 opacity-40" />
        </li>
        <li>
          <TbBrandCss3 className="text-[80px] text-red-500 opacity-40 " />
        </li>
        <li>
          <SiTailwindcss className="text-[100px] text-blue-500 opacity-40 " />
        </li>
        <li>
          <SiReact className="text-[90px] text-blue-400  opacity-40" />
        </li>
        <li>
          <IoLogoJavascript className="text-[80px] text-yellow-400 opacity-40  " />
        </li>
        <li>
          <RiVuejsLine className="text-[60px] text-green-400 opacity-40 " />
        </li>
        <li>
          <SiVite className="text-[80px] text-neutral-400 opacity-40 " />
        </li>
        <li>
          <FaBootstrap className="text-[120px] text-purple-800 opacity-40 " />
        </li>
      </div>

      <BarOfProgress />
    </>
  );
};

export default SingleBlog;
