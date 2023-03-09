import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";

import LinePurple from "@/assets/img/LinePurple.png";
import Demo from "@/assets/img/demo.png";

import { WiTornado } from "react-icons/wi";
import { BsLightningCharge } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { TbExternalLink, TbUnlink } from "react-icons/tb";
import NewsLetter from "@/Components/NewsLetter";
import Pagination from "@/Components/Pagination";
import Helmet from "@/Components/Helmet/Helmet";
import CommonSection from "@/Components/Ui/CommonSection";
import { Link } from "react-router-dom";

const Blog = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  return (
    <>
      <main className="flex w-full  flex-col gap-10  ">
        <section className="relative my-0 w-full   overflow-hidden border-b border-b-[#f0f4f5] bg-Overlay pt-40 pb-60">
          <Helmet title={"وبلاگ"}>
            <CommonSection
              title={"وبلاگ من"}
              discription={"مگه میشه اینجا از کلی اطللاعات مفید باخبرت نکنم ؟!"}
            />
          </Helmet>
        </section>

        <section className="relative my-10 flex w-full flex-col items-start px-12  md:px-20 lg:flex-row lg:pl-0 ">
          {/* intro Blog */}
          <div className="flex basis-full flex-col items-start justify-center lg:basis-[40%]">
            {/* right Section */}
            <div className=" w-full ">
              <span className=" inline-block w-full text-center text-3xl font-semibold leading-[3.6rem] text-headingColor lg:text-right lg:text-[35px]  lg:leading-[6rem]">
                محتوایی از جنس توسعه و تکنولوژی
                <WiTornado className="mx-4 inline text-[30px] text-secondary lg:text-[50px]" />
                خلاقانه در عین حال بروز
                <BsLightningCharge className="mx-4 inline text-[30px] text-primary lg:text-[50px]" />
              </span>
            </div>
            <p className="mt-5 w-full text-center text-2xl font-normal leading-[3.6rem]  text-disableOverlay lg:w-[80%] lg:text-right">
              شما میتونید هرهفته آخرین اخبار دنیای توسعه ، برنامه نویسی ، نکته و
              ترفند های فرانت اند رو از این قسمت دریافت کنی و باخبر بشی !:)
            </p>
            <img
              src={LinePurple}
              className="my-16 hidden w-64 opacity-50 lg:mx-0 lg:block"
              alt="dividerImg"
            />

            <div className="my-10 flex w-full flex-col items-center  lg:mt-5 lg:mb-0 lg:items-start">
              <p className="mb-8 text-center  font-bold !leading-[3.6rem] text-headingColor text-2xl lg:text-[17px] lg:text-right">
                همچنین میتونی برای دریافت آخرین اخبار توی خبرنامه عضو بشی
              </p>
              <form
                action=""
                className=" flex  w-full   justify-between rounded-secondary bg-white py-6 pl-6 pr-14  shadow-default"
              >
                <div className="flex w-full ">
                  <IoNewspaperOutline className="ml-5 text-[30px] text-disable" />
                  <input
                    type="email"
                    name="peas"
                    id="peas"
                    className="w-[80%] text-2xl  placeholder:text-2xl placeholder:text-disable"
                    placeholder="ایمیلیت رو اینجا برام بزن"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="default-btn cta-holder flex w-fit justify-center whitespace-nowrap rounded-secondary px-10 py-5"
                >
                  عضو میشم
                </motion.button>
              </form>
            </div>
          </div>
          <div className="flex w-full basis-full flex-wrap overflow-hidden lg:basis-auto">
            <Swiper
              // install Swiper modules
              dir="rtl"
              modules={[Autoplay, A11y]}
              autoplay={{
                delay: 2500,
              }}
              loop={true}
              className="swiperBlog   p-5 pb-10   lg:px-12 lg:pl-7 lg:pb-32"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                // when window width is >= 640px
                640: {
                  // width: 576,
                  slidesPerView: 2,
                  spaceBetween: 50,
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
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
              }}
            >
              <SwiperSlide>
                <figure className="relative flex w-full lg:w-300 lg:max-w-300  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary    "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="relative flex w-full lg:w-300 lg:max-w-300  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="relative flex w-full lg:w-300 lg:max-w-300  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* selected item */}
        <section className="relative my-10 flex w-full flex-col px-12 md:px-20">
          <div className="flex w-full flex-col justify-center gap-y-10 lg:justify-between  lg:gap-0">
            {/* titleBar */}
            <div className=" relative mt-2 flex flex-col items-center   md:items-start">
              <div className="flex flex-col items-center gap-x-5  gap-y-3  md:flex-row lg:flex-row">
                <span className="relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
                <div className="text-5xl flex  gap-x-2  font-pinar  ">
                  <span className="whitespace-nowrap  font-bold text-primary">
                    مقالات هفته اخیر
                  </span>
                  <span className="mt-3 whitespace-nowrap   font-bold text-headingColor dark:text-white ">
                    برنامه نویسی و ...
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
                یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین
              </p>
            </div>
          </div>

          <div className=" my-20 grid w-full grid-cols-12 items-start gap-x-10">
            <aside
              className="col-span-3 row-span-3 
     hidden w-full gap-y-5 border-l-2 border-disableOverlay2 px-10  lg:block "
            >
              <figure className="flex h-fit w-full flex-col  items-start border-b-[1px] border-disableOverlay2 pb-10">
                <a
                  href="/"
                  className="basis-auto text-2xl font-bold leading-[3.6rem] text-headingColor line-clamp-1 dark:text-white"
                >
                  14 مهارت برتر و مفیدی که هر طراح وب که برای استخدام در سال
                  2021 به آن‌ها نیاز دارد
                </a>

                <figcaption className="w-full">
                  <p className="text-xl font-normal leading-[3.0rem] text-disable line-clamp-2 dark:text-disableOverlay">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای
                  </p>

                  <div className="group mt-5 flex w-full justify-between ">
                    <a
                      href="/"
                      className="transition-default after:transition-default before:transition-default relative flex overflow-hidden whitespace-nowrap pb-4 text-2xl font-semibold text-headingColor before:absolute before:bottom-0 before:right-0 before:h-[2px] before:w-full before:bg-secondary after:absolute after:bottom-0 after:-right-[110px] after:h-[2px] after:w-full after:bg-primary group-hover:before:-right-[110px] group-hover:after:right-[0px] dark:text-white "
                    >
                      مطالعه مقاله
                      <TbExternalLink className="transition-default mr-2 text-3xl text-inherit" />
                    </a>

                    <div className="flex ">
                      {/* comment */}
                      <div className="flex">
                        <a
                          href="/"
                          className="rounded-xl border-[1px] border-disableOverlay bg-transparent py-1 px-3 text-disableOverlay dark:border-primary dark:text-disableOverlay2"
                        >
                          جاوااسکریپت
                        </a>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>

              <figure className="flex h-fit w-full flex-col  items-start border-b-[1px] border-disableOverlay2 pb-10 mt-5">
                <a
                  href="/"
                  className="my-5 basis-auto text-2xl font-bold leading-[3.6rem] text-headingColor line-clamp-1 dark:text-white lg:my-0"
                >
                  14 مهارت برتر و مفیدی که هر طراح وب که برای استخدام در سال
                  2021 به آن‌ها نیاز دارد
                </a>

                <figcaption className="w-full">
                  <p className="text-xl font-normal leading-[3.0rem] text-disable line-clamp-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای
                  </p>

                  <div className="group mt-5 flex w-full justify-between ">
                    <a
                      href="/"
                      className="transition-default after:transition-default before:transition-default relative flex overflow-hidden whitespace-nowrap pb-4 text-2xl font-semibold text-headingColor before:absolute before:bottom-0 before:right-0 before:h-[2px] before:w-full before:bg-secondary after:absolute after:bottom-0 after:-right-[110px] after:h-[2px] after:w-full after:bg-primary group-hover:before:-right-[110px] group-hover:after:right-[0px] dark:text-white "
                    >
                      مطالعه مقاله
                      <TbExternalLink className="transition-default mr-2 text-3xl text-inherit" />
                    </a>

                    <div className="flex ">
                      {/* comment */}
                      <div className="flex">
                        <a
                          href="/"
                          className="rounded-xl border-[1px] border-disableOverlay bg-transparent py-1 px-3 text-disableOverlay dark:border-primary dark:text-disableOverlay2"
                        >
                          جاوااسکریپت
                        </a>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex h-fit w-full flex-col  items-start border-b-[1px] border-disableOverlay2 pb-10 mt-5">
                <a
                  href="/"
                  className="basis-auto text-2xl font-bold leading-[3.6rem] text-headingColor line-clamp-1 dark:text-white"
                >
                  14 مهارت برتر و مفیدی که هر طراح وب که برای استخدام در سال
                  2021 به آن‌ها نیاز دارد
                </a>

                <figcaption className="w-full">
                  <p className="text-xl font-normal leading-[3.0rem] text-disable line-clamp-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای
                  </p>

                  <div className="group mt-5 flex w-full justify-between ">
                    <a
                      href="/"
                      className="transition-default after:transition-default before:transition-default relative flex overflow-hidden whitespace-nowrap pb-4 text-2xl font-semibold text-headingColor before:absolute before:bottom-0 before:right-0 before:h-[2px] before:w-full before:bg-secondary after:absolute after:bottom-0 after:-right-[110px] after:h-[2px] after:w-full after:bg-primary group-hover:before:-right-[110px] group-hover:after:right-[0px] dark:text-white "
                    >
                      مطالعه مقاله
                      <TbExternalLink className="transition-default mr-2 text-3xl text-inherit" />
                    </a>

                    <div className="flex ">
                      {/* comment */}
                      <div className="flex">
                        <a
                          href="/"
                          className="rounded-xl border-[1px] border-disableOverlay bg-transparent py-1 px-3 text-disableOverlay dark:border-primary dark:text-disableOverlay2"
                        >
                          جاوااسکریپت
                        </a>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                      </div>

                      {/* calender */}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </aside>
            <div
              className="col-span-12 grid w-full  grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 md:grid-cols-3  lg:col-span-9
lg:w-auto"
            >
              <figure className="relative flex w-full flex-[1_1_200x]  flex-col  items-start justify-center ">
                <a
                  href="/singleBlog"
                  className="overlayimg relative h-250 w-full overflow-hidden "
                >
                  <img
                    src={Demo}
                    className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                    alt=""
                  />
                </a>

                <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                  <div className="flex flex-col items-start px-10">
                    <Link to="/singleBlog">
                      <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                        چگونه توسعه دهنده شویم ؟!
                      </h3>
                    </Link>
                    <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                      لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                      بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                      برای شرایط فعلی
                    </p>
                  </div>

                  <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                    <motion.a
                      whileTap={{ scale: 1.3 }}
                      href="/"
                      className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                    >
                      <TbUnlink className="text-3xl text-primary" />
                    </motion.a>
                    <div className="flex ">
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>

                      {/* calender */}
                      <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                        <span className="text-inherit">14</span>

                        <span className="whitespace-nowrap text-inherit">
                          مرداد
                        </span>
                        <span className="text-inherit">1400</span>
                      </p>

                      {/* veiw */}
                      <div className="flex">
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                        <div className="flex">
                          <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                          <p className="text-xl text-disableOverlay">500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="relative flex w-full flex-[1_1_200x]  flex-col  items-start justify-center ">
                <a
                  href="/singleBlog"
                  className="overlayimg relative h-250 w-full overflow-hidden "
                >
                  <img
                    src={Demo}
                    className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                    alt=""
                  />
                </a>

                <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                  <div className="flex flex-col items-start px-10">
                    <Link to="/singleBlog">
                      <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                        چگونه توسعه دهنده شویم ؟!
                      </h3>
                    </Link>
                    <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                      لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                      بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                      برای شرایط فعلی
                    </p>
                  </div>

                  <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                    <motion.a
                      whileTap={{ scale: 1.3 }}
                      href="/"
                      className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                    >
                      <TbUnlink className="text-3xl text-primary" />
                    </motion.a>
                    <div className="flex ">
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>

                      {/* calender */}
                      <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                        <span className="text-inherit">14</span>

                        <span className="whitespace-nowrap text-inherit">
                          مرداد
                        </span>
                        <span className="text-inherit">1400</span>
                      </p>

                      {/* veiw */}
                      <div className="flex">
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                        <div className="flex">
                          <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                          <p className="text-xl text-disableOverlay">500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>

              <figure className="relative flex w-full flex-[1_1_200x]  flex-col  items-start justify-center ">
                <a
                  href="/singleBlog"
                  className="overlayimg relative h-250 w-full overflow-hidden "
                >
                  <img
                    src={Demo}
                    className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                    alt=""
                  />
                </a>

                <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                  <div className="flex flex-col items-start px-10">
                    <Link to="/singleBlog">
                      <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                        چگونه توسعه دهنده شویم ؟!
                      </h3>
                    </Link>
                    <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                      لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                      بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                      برای شرایط فعلی
                    </p>
                  </div>

                  <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                    <motion.a
                      whileTap={{ scale: 1.3 }}
                      href="/"
                      className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                    >
                      <TbUnlink className="text-3xl text-primary" />
                    </motion.a>
                    <div className="flex ">
                      {/* read Time */}
                      <div className="flex">
                        <p className=" flex items-center text-xl text-disableOverlay">
                          5
                          <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                            دقیقه خواندن
                          </span>
                        </p>
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                      </div>

                      {/* calender */}
                      <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                        <span className="text-inherit">14</span>

                        <span className="whitespace-nowrap text-inherit">
                          مرداد
                        </span>
                        <span className="text-inherit">1400</span>
                      </p>

                      {/* veiw */}
                      <div className="flex">
                        <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                        <div className="flex">
                          <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                          <p className="text-xl text-disableOverlay">500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="relative my-10 flex w-full flex-col px-12 md:px-20">
          <div className="flex w-full flex-col justify-center gap-y-10 lg:justify-between  lg:gap-0">
            {/* titleBar */}
            <div className=" relative mt-2 flex flex-col items-center   md:items-start">
              <div className="flex flex-col items-center gap-x-5  gap-y-3  md:flex-row lg:flex-row">
                <span className="relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
                <div className="text-5xl flex  gap-x-2  font-pinar">
                  <span className="whitespace-nowrap  font-bold text-primary">
                    مقالات برگزیده
                  </span>
                  <span className="whitespace-nowrap  font-bold  text-headingColor dark:text-white ">
                    برنامه نویسی و ...
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
                یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین
              </p>
            </div>
          </div>

          <div className="mt-20 flex w-full basis-full flex-wrap overflow-hidden lg:basis-auto">
            <Swiper
              // install Swiper modules
              dir="rtl"
              modules={[Autoplay, A11y, Navigation]}
              autoplay={{
                delay: 5000,
              }}
              loop={true}
              className="swiperThree  pb-36 "
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                // when window width is >= 640px
                640: {
                  // width: 576,
                  slidesPerView: 2,
                  spaceBetween: 50,
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
              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide>
                <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
                  <a
                    href="/singleBlog"
                    className="overlayimg relative h-250 w-full overflow-hidden "
                  >
                    <img
                      src={Demo}
                      className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                      alt=""
                    />
                  </a>

                  <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                    <div className="flex flex-col items-start px-10">
                      <Link to="/singleBlog">
                        <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                          چگونه توسعه دهنده شویم ؟!
                        </h3>
                      </Link>
                      <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                        لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                        است، و برای شرایط فعلی
                      </p>
                    </div>

                    <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                      <motion.a
                        whileTap={{ scale: 1.3 }}
                        href="/"
                        className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                      >
                        <TbUnlink className="text-3xl text-primary" />
                      </motion.a>
                      <div className="flex ">
                        {/* read Time */}
                        <div className="flex">
                          <p className=" flex items-center text-xl text-disableOverlay">
                            5
                            <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                              دقیقه خواندن
                            </span>
                          </p>
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                        </div>

                        {/* calender */}
                        <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                          <span className="text-inherit">14</span>

                          <span className="whitespace-nowrap text-inherit">
                            مرداد
                          </span>
                          <span className="text-inherit">1400</span>
                        </p>

                        {/* veiw */}
                        <div className="flex">
                          <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                          <div className="flex">
                            <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                            <p className="text-xl text-disableOverlay">500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="relative my-10 flex w-full flex-col px-12 md:px-20">
          <div className="flex w-full flex-col justify-center gap-y-10 lg:flex-row lg:justify-between  lg:gap-0">
            {/* titleBar */}
            <div className=" relative mt-2 flex flex-col items-center   md:items-start">
              <div className="flex flex-col items-center gap-x-5  gap-y-3  md:flex-row lg:flex-row">
                <span className="relative my-4 h-[.5rem] w-24 overflow-hidden bg-headingColor before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-2 before:animate-wiggle before:bg-white dark:bg-white dark:before:bg-primary"></span>
                <div className="text-5xl flex  gap-x-2  font-pinar">
                  <span className="whitespace-nowrap  font-bold text-primary">
                    آرشیو مقالات
                  </span>
                  <span className="whitespace-nowrap  font-bold  text-headingColor dark:text-white ">
                    برنامه نویسی و ...
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
                یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین
              </p>
            </div>

            {/* tabBar */}
            <div className="flex    gap-x-5 rounded-secondary bg-white px-10 shadow-default w-fit ">
              <div className="flex">
                <div className="ml-1">
                  <BiFilterAlt className="text-4xl text-headingColor" />
                </div>
                <p className="cursor-default text-2xl font-normal ">
                  مرتب سازی :
                </p>
              </div>
              <ul className="flex gap-x-5 overflow-hidden">
                <li
                  className={`text-nowrap transition-default before:transition-default relative cursor-pointer py-8 text-center  text-2xl font-normal text-disableUnique before:absolute before:left-0 before:right-0 before:-bottom-10 before:mx-auto  before:h-2 before:w-10 before:rounded-tl-full before:rounded-tr-full before:bg-primary hover:text-headingColor [&.active]:text-primary [&.active]:before:bottom-0 ${
                    tab === 1 ? "active" : ""
                  } `}
                  onClick={() => toggleTab(1)}
                >
                  جدیدترین
                </li>
                <li
                  className={`text-nowrap transition-default before:transition-default relative cursor-pointer py-8 text-center  text-2xl font-normal text-disableUnique before:absolute before:left-0 before:right-0 before:-bottom-10 before:mx-auto  before:h-2 before:w-10 before:rounded-tl-full before:rounded-tr-full before:bg-primary hover:text-headingColor [&.active]:text-primary [&.active]:before:bottom-0 ${
                    tab === 2 ? "active" : ""
                  } `}
                  onClick={() => toggleTab(2)}
                >
                  پربازدیدترین
                </li>
                <li
                  className={`text-nowrap transition-default before:transition-default relative cursor-pointer py-8 text-center  text-2xl font-normal text-disableUnique before:absolute before:left-0 before:right-0 before:-bottom-10 before:mx-auto  before:h-2 before:w-10 before:rounded-tl-full before:rounded-tr-full before:bg-primary hover:text-headingColor [&.active]:text-primary [&.active]:before:bottom-0 ${
                    tab === 3 ? "active" : ""
                  } `}
                  onClick={() => toggleTab(3)}
                >
                  محبوب ترین
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid w-full  grid-cols-1 flex-wrap gap-16 overflow-hidden sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:pb-10">
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="relative flex w-full flex-[1_1_375px]  flex-col  items-start justify-center ">
              <a
                href="/singleBlog"
                className="overlayimg relative h-250 w-full overflow-hidden "
              >
                <img
                  src={Demo}
                  className="relative h-full  w-full rounded-tl-primary rounded-tr-primary   "
                  alt=""
                />
              </a>

              <figcaption className="mt-5 w-full rounded-primary  bg-white pt-10 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:rounded-tl-none dark:rounded-tr-none dark:mt-0">
                <div className="flex flex-col items-start px-10">
                  <Link to="/singleBlog">
                    <h3 className="text-3xl font-semibold text-headingColor line-clamp-2">
                      چگونه توسعه دهنده شویم ؟!
                    </h3>
                  </Link>
                  <p className="mt-5 text-xl font-normal leading-[2.6rem] text-disableOverlay line-clamp-2">
                    لورملورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                  </p>
                </div>

                <div className="group mt-5 flex w-full justify-between border-t-[1px] border-disableOverlay2 py-5 px-10">
                  <motion.a
                    whileTap={{ scale: 1.3 }}
                    href="/"
                    className="transition-default rounded-full bg-disableOverlay2 p-3 group-hover:rotate-180"
                  >
                    <TbUnlink className="text-3xl text-primary" />
                  </motion.a>
                  <div className="flex ">
                    {/* read Time */}
                    <div className="flex">
                      <p className=" flex items-center text-xl text-disableOverlay">
                        5
                        <span className="mr-1 whitespace-nowrap text-lg text-inherit">
                          دقیقه خواندن
                        </span>
                      </p>
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>
                    </div>

                    {/* calender */}
                    <p className=" flex gap-x-1 text-xl text-disableOverlay ">
                      <span className="text-inherit">14</span>

                      <span className="whitespace-nowrap text-inherit">
                        مرداد
                      </span>
                      <span className="text-inherit">1400</span>
                    </p>

                    {/* veiw */}
                    <div className="flex">
                      <div className="transition-default mx-3 h-2 w-2 rounded-full bg-primaryOverlay group-hover:bg-primary"></div>

                      <div className="flex">
                        <AiOutlineEye className="ml-2 text-2xl text-disableOverlay" />
                        <p className="text-xl text-disableOverlay">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* pagination */}
          <Pagination />
        </section>

        <NewsLetter />
      </main>
    </>
  );
};

export default Blog;
