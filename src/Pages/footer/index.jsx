import React from "react";
// import image Or logo

import enamad from "@/assets/img/enamad.png";
import samandehi from "@/assets/img/samandehi.png";
import zarinpal from "@/assets/img/zarinpal.svg";
import { RiLinkedinFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

// import pkg
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  CallCalling,
  Instagram,
  LocationTick,
  Send2,
  Signpost,
  Whatsapp,
} from "iconsax-react";

const Footer = () => {
  function showZPTrust() {
    var thewindow = window.open(
      "https://www.zarinpal.com/trustPage/" + window.location.hostname,
      null,
      "width=450, height=600, scrollbars=no, resizable=no"
    );
  }

  function showSamandehi() {
    var theSamandehi = window.open(
      "https://logo.samandehi.ir/Verify.aspx?id=342716&p=xlaoaodsuiwkjyoerfthgvka",
      "Popup",
      "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
    );
  }
  return (
    <footer
      id="footer"
      className="relative  mt-10 w-full overflow-hidden  bg-gradient-to-l from-slate-900 to-slate-700 "
    >
      <div
        className=" flex flex-col gap-20  w-full h-full  pt-40 pb-10 px-12 md:px-20 relative"
        id="main"
      >
        <div className="flex flex-row flex-wrap items-start gap-20  w-full relative pt-10 md:pt-24 lg:pt-[140px]">
          {/* sec One --- about me  */}
          <div className="flex flex-col md:flex-row lg:flex-col  gap-10 items-start basis-full  lg:basis-4/12 ">
            <div className="flex flex-col flex-1 items-start gap-5">
              <div className="flex  ">
                <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto"></div>
                <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
                  درباره من
                </p>
              </div>
              <p className="text-[14px] font-semibold text-white whitespace-normal !leading-[3.6rem] mt-10 line-clamp-4">
                من مهدی نظری طراح و برنامه نویس وبسایت یا بقولی فرانت اند
                دولوپرم که از سال 1398 تا الان توی حوضه تکنولوژی و استارت آپ
                دارم فعالیت میکنم . هدف من کمک به علاقمندانی هست که مسیر برنامه
                نویسی رو میخوان طی کنن و بدنبال منتور و مشاور برای حل چالش ها و
                داشتن یه راهنمای مطمئن برای مسیرشونه در کنار اون توی شبکه های
                اجتماعی و جاهای دیگه تولید محتوا میکنم تا بتونم دانش اندکم رو
                بدست علاقمندان این عرصه برسونم .
              </p>
            </div>

            <div className="flex flex-col flex-1 gap-5 items-start">
              <div className="flex t ">
                <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto"></div>
                <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
                  با من در تماس باشید !
                </p>
              </div>

              <ul className="w-ful flex flex-col items-start gap-8 mt-10">
                <li className="flex gap-3">
                  <span className="relative z-[2]">
                    <LocationTick size="22" color="#F1891E" variant="TwoTone" />
                    <i className="flex w-8 h-8  bg-white opacity-20 rounded-full absolute -right-2 -bottom-2 z-[-1]"></i>
                  </span>
                  <p className="text-white text-[14px] font-semibold line-clamp-1">
                    ایران، اصفهان ، کاشان
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="relative z-[2]">
                    <CallCalling size="22" color="#F1891E" variant="TwoTone" />
                    <i className="flex w-8 h-8  bg-white opacity-20 rounded-full absolute -right-2 -bottom-2 z-[-1]"></i>
                  </span>
                  <p className="text-white text-[14px] font-semibold line-clamp-1">
                   <a href="tel:+989162890084"> تلفن : 0084 289 0916 تلگرام یا واتساپ</a>
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="relative z-[2]">
                    <Signpost size="22" color="#F1891E" variant="TwoTone" />
                    <i className="flex w-8 h-8  bg-white opacity-20 rounded-full absolute -right-2 -bottom-2 z-[-1]"></i>
                  </span>
                  <a
                    href="mailto=info@mahdi-nazari.ir"
                    className="text-white text-[14px] font-semibold line-clamp-1"
                  >
                    ایمیل : info[at]mahdi-nazari.ir
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* sec Two --- category */}

          <div className="flex flex-col items-start  overflow-hidden basis-full lg:basis-2/12 ">
            <div className="flex  ">
              <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto"></div>
              <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
          بخش های وبسایت
              </p>
            </div>

            <div className="flex gap-x-16 mt-12 ">
              <ul className="flex flex-col flex-wrap gap-8 items-start">
                <li className="transition-default  -translate-x-10">
                  <Link
                    to="/"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li className="transition-default -translate-x-10">
                  <Link
                    to="/shop"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    فروشگاه
                  </Link>
                </li>
                <li className="transition-default -translate-x-10">
                  <Link
                    to="/blog"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    وبلاگ
                  </Link>
                </li>
                <li className="transition-default -translate-x-10">
                  <Link
                    to="/podcast"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    پادکست
                  </Link>
                </li>
                <li className="transition-default -translate-x-10">
                  <Link
                    to="/aboutMe"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    درباره من
                  </Link>
                </li>
                <li className="transition-default -translate-x-10">
                  <Link
                    to="/privacy"
                    className="inline-block text-[15px] md:text-2xl text-normal text-disable relative hover:text-primary hover:before:opacity-100 hover:before:bg-primary transition-default   before:absolute before:w-[5px] before:h-[5px] before:rounded-full before:bg-white before:opacity-50   before:translate-y-[-50%] before:top-1/2 before:bottom-1/2 before:-right-6"
                  >
                    شرایط و قوانین
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* sec Three --- Contact Me */}

          <div className=" flex flex-col items-start gap-y-16 basis-full lg:basis-3/12">
            <div className="flex flex-col items-start">
              <div className="flex  ">
                <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto  "></div>
                <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
                  خبرنامه هفتگی برنامه نویسان
                </p>
              </div>

              <form action="" className="w-full ">
                <p className="text-white text-[15px] md:text-2xl !leading-[3.2rem] mt-10">
                  با مشترک شدن در خبرنامه هفتگی از اخبار و رویداد های برنامه
                  نویسی که شرکت میکنم میتونید مطلع بشین.
                </p>
                <div className="w-full bg-white  rounded-2xl h-20 flex justify-between mt-10 overflow-hidden ">
                  <input
                    type="text"
                    className="w-[65%] min-w-max text-2xl font-normal pr-5 pl-3 placeholder:text-xl"
                    placeholder="ایمیل شما ..."
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className=" bg-secondary inline-block h-full w-[35%] -ml-1 text-white px-7 py-4 rounded-tl-2xl rounded-bl-2xl text-2xl"
                  >
                    عضویت
                  </motion.button>
                </div>
              </form>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex  ">
                <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto  "></div>
                <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
                  شبکه های اجتماعی من
                </p>
              </div>

              <ul className="flex justify-around w-full mt-10">
                <li>
                  <a href="https://wa.me/+989162890084">
                    <Whatsapp
                      className="bg-slate-600 rounded-2xl w-16 h-16 p-2 transition-default text-white hover:text-green-400"
                      size="32"
                      
                      variant="Bulk"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/mhdi_nzari">
                    <Instagram
                      className="bg-slate-600 rounded-2xl w-16 h-16 p-2 transition-default text-white hover:text-pink-400  "
                      size="32"
                     
                      variant="Bulk"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://t.me/mhdi_nzari">
                    <Send2
                      className="bg-slate-600 rounded-2xl w-16 h-16 p-2 transition-default text-white hover:text-blue-400  "
                      size="32"
              
                      variant="Bulk"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mhdi-nzari/">
                    <RiLinkedinFill className="text-white text-[14px] bg-slate-600 rounded-2xl w-16 h-16 p-2 transition-default hover:bg-slate-500  " />
                  </a>
                </li>
              </ul>
            </div>

            {/* Soical Me */}
          </div>

          {/* sec Three --- Certificate*/}

          <div className="flex  flex-col items-start  gap-12 flex-wrap basis-full lg:basis-1/12">
            <div className="flex  ">
              <div className="w-12 h-2 inline bg-primary  relative before:absolute before:w-2 before:h-full before:bg-white  before:top-0 before:bottom-0 before:right-2 before:my-auto"></div>
              <p className="text-3xl font-bold  text-white pr-5 font-pinar whitespace-nowrap">
                اعتبارات
              </p>
            </div>

            <div className="rounded-secondary bg-white  flex w-[160px] ">
              <Swiper
                dir="rtl"
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2000,
                }}
                grabCursor={true}
                loop={true}
                className="swiperFooter  
                pb-12 pt-10"
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide className="flex justify-center">
                  <div
                    onClick={showZPTrust}
                    title="لوگو زرین پال،دروازه پرداخت معتبر"
                    className="cursor-pointer"
                  >
                    <img
                      src={zarinpal}
                      loading="lazy"
                      width="100%"
                      height="100%"
                      className="w-36 h-auto inline lg:w-40 text-center text-[12px]"
                      alt="لوگو زرین پال،دروازه پرداخت معتبر"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <div className="cursor-pointer">
                    <img
                      referrerPolicy="origin"
                      id="rgvjwlaonbqejzpejxlzfukz"
                      className="w-52 h-auto inline lg:w-56  text-center text-[12px] "
                      alt="لوگو ملی ساماندهی"
                      onClick={showSamandehi}
                      loading="lazy"
                      src={samandehi}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <a
                    referrerPolicy="origin"
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=320551&amp;Code=NjTXHrWyPwwqD8nMIfVW"
                    className="cursor-pointer"
                    title="لوگواینماد"
                    aria-label="enamadLink"
                  >
                    <img
                      referrerPolicy="origin"
                      src={enamad}
                      alt="لوگواینماد"
                      className="w-56 h-auto inline  text-center text-[12px]"
                      id="NjTXHrWyPwwqD8nMIfVW"
                      loading="lazy"
                    />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="relative   py-10   w-full pb-0">
          <p className="flex text-disable   w-full text-center text-2xl justify-center    lg:text-2xl  leading-[2.8rem]">
            حق نشر ©1402 |‌ تمامی حقوق برای این وبسایت محفوظ میباشد | طراحی و
            توسعه با 🤍 و مقداری 🍫 
          </p>
        </div>
      </div>

      <div className="custom-shape-divider-top-1676385917">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
