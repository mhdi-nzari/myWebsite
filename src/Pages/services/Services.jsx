import { useState } from "react";

// import component or pkg or ...
import { motion } from "framer-motion";

// import icon & each media
import { IoDownloadOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";

// Import Swiper React components

import { ReactComponent as Blob1 } from "@/assets/img/blob-1.svg";
import { ReactComponent as Blob2 } from "@/assets/img/blob-2.svg";
import { ReactComponent as Blob3 } from "@/assets/img/blob-3.svg";
import { ReactComponent as Blob4 } from "@/assets/img/blob-4.svg";
import {
  VscCode,
  VscCompass,
  VscFeedback,
  VscSymbolColor,
} from "react-icons/vsc";
import {
  BrifecaseTick,
  CallCalling,
  CallOutgoing,
  ClipboardText,
  I24Support,
  MoneyRecive,
  TickCircle,
} from "iconsax-react";

import Testimonial from "@/Pages/testimonial/Testimonial";
import Faq from "@/Components/Faq";
import ContactForm from "@/Components/ContactForm";

const Services = () => {
  return (
    <>
      <main className="flex w-full  flex-col   ">
        <section className="relative flex w-full flex-col items-start  px-12 md:px-20 lg:mt-64 lg:flex-row  ">
          {/* right Section */}
          <div className="flex w-full flex-col items-center gap-y-5 md:items-start lg:w-[60%] ">
            <small className="mb-2 text-[19px] font-semibold text-primary">
              خدمات
            </small>
            <div>
              <p className="relative w-full text-center   text-3xl  font-medium !leading-[3.8rem] text-headingColor  lg:w-[80%] lg:text-right lg:text-5xl dark:text-white  ">
                <span className="relative z-[1] font-extrabold  text-secondary before:absolute  before:bottom-[0.5rem] before:right-[2px] before:-z-[1] before:hidden before:h-5 before:w-[60px] before:bg-primary lg:before:block lg:before:w-[94px] dark:text-white dark:before:bg-primary">
                  خدماتی &nbsp;
                </span>
                که به بهترین نحو برای بهبود کسب و کار و توسعه فردی شما ارائه
                میکنم
              </p>
            </div>
            <p className="mt-0 w-full text-center text-2xl font-normal leading-[3.2rem] text-disable md:mt-3 lg:w-[90%] lg:text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className="mt-5 flex  flex-wrap  gap-5 w-full  mdg:w-fit sm:flex-row md:mt-10  md:flex-row lg:flex-row justify-center md:justify-start">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="tel:09162890084"
                className="flex flex-1 justify-center default-btn whitespace-nowrap flex-grow"
              >
               دانلود رزومه
                <ClipboardText
                  className="text-inherit mr-3 "
                  size="22"
                  variant="Bulk"
                />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="tel:09162890084"
                className="flex flex-1 justify-center whitespace-nowrap outline-btn "
              >
                تماس با من
                <CallOutgoing
                  className="text-inherit mr-3 mt-1"
                  size="22"
                  variant="Bulk"
                />
              </motion.a>
            </div>
          </div>

          {/* left Section */}

          <div className="my-10 flex w-full flex-row flex-wrap  gap-16  lg:m-0  lg:w-[40%]">
            <div className="-before:translate-x-1/2 relative flex flex-[1_1_200px] flex-col justify-center gap-y-16 rounded-primary bg-white  p-16 shadow-default before:absolute before:left-1/2 before:right-1/2 before:-bottom-20 before:-z-[1] before:h-20 before:w-5 before:bg-[#E3E0FF] after:absolute after:-left-20 after:bottom-10  after:-z-[1] after:hidden after:h-5 after:w-20 after:bg-[#E3E0FF] lg:rounded-tr-primary lg:rounded-tl-primary lg:rounded-br-primary lg:rounded-bl-none  lg:after:block  xl:-translate-y-1/2 ">
              <div className="relative  flex w-fit justify-center ">
                <VscFeedback className="z-10 text-[40px]  text-headingColor" />
                <Blob1 className="absolute  -left-5 -top-8 h-32 w-32 lg:-right-8 lg:-top-12 lg:h-44 lg:w-44 lg:pl-16 " />
              </div>
              <h3 className="lg:pl-16whitespace-nowrap text-3xl font-bold  text-headingColor">
                مشاور کسب و کار
              </h3>
            </div>
            <div className="-before:translate-x-1/2 relative flex flex-[1_1_200px] flex-col justify-center gap-y-16 rounded-primary bg-white p-16 shadow-default before:absolute before:left-1/2 before:right-1/2 before:-bottom-20 before:-z-[1] before:h-20 before:w-5 before:bg-[#E3E0FF] lg:rounded-tr-primary lg:rounded-tl-primary  lg:rounded-br-none lg:rounded-bl-primary">
              <div className="relative  flex w-fit justify-center ">
                <VscSymbolColor className="z-10 text-[40px]  text-headingColor" />
                <Blob2 className="absolute  -left-5 -top-8 h-32 w-32 lg:-right-8 lg:-top-12 lg:h-44 lg:w-44 lg:pl-16 " />
              </div>
              <h3 className="lg:pl-16whitespace-nowrap text-3xl font-bold  text-headingColor">
                طراح رابط کاربری
              </h3>
            </div>
            <div className="-before:translate-x-1/2 relative flex flex-[1_1_200px] flex-col justify-center gap-y-16 rounded-primary bg-white p-16  shadow-default before:absolute before:left-1/2 before:right-1/2 before:-bottom-20 before:-z-[1] before:block  before:h-20 before:w-5 before:bg-[#E3E0FF] after:absolute after:-left-20  after:bottom-10  after:-z-[2] after:hidden after:h-5 after:w-20 after:bg-[#E3E0FF] sm:before:hidden lg:rounded-tr-primary lg:rounded-tl-primary lg:rounded-br-primary lg:rounded-bl-primary lg:before:hidden  lg:after:block xl:-translate-y-[44%] ">
              <div className="relative  flex w-fit justify-center ">
                <VscCode className="z-10 text-[40px]  text-headingColor" />
                <Blob3 className="absolute  -left-5 -top-8 h-32 w-32 lg:-right-8 lg:-top-12 lg:h-44 lg:w-44 lg:pl-16 " />
              </div>
              <h3 className="lg:pl-16whitespace-nowrap text-3xl font-bold  text-headingColor">
                طراحی سایت اختصاصی
              </h3>
            </div>

            <div className=" z-[5] flex flex-[1_1_200px] flex-col justify-center gap-y-16 rounded-primary bg-white p-16 shadow-default lg:rounded-tr-none lg:rounded-tl-primary lg:rounded-br-primary lg:rounded-bl-primary">
              <div className="relative  flex w-fit justify-center ">
                <VscCompass className="z-10 text-[40px]  text-headingColor" />
                <Blob4 className="absolute  -left-5 -top-8 h-32 w-32 lg:-right-8 lg:-top-12 lg:h-44 lg:w-44 lg:pl-16 " />
              </div>
              <h3 className="lg:pl-16whitespace-nowrap text-3xl font-bold  text-headingColor">
                مشاوره برنامه نویسی
              </h3>
            </div>
          </div>
        </section>

        <section className="relative w-full  px-12 md:px-20 ">
          <div className="flex w-full flex-wrap  rounded-primary   bg-white  py-20 px-20 shadow-default">
            <div className="w-full lg:w-[30%] ">
              <p
                className="relative w-full text-center  text-3xl  font-medium !leading-[4.5rem] text-headingColor  lg:w-[80%] 
           lg:text-right lg:text-4xl  "
              >
                <span className="relative z-[1] font-extrabold  text-primary before:absolute  before:top-8 before:right-0 before:-z-[1] before:hidden before:h-5 before:w-[60px] before:bg-secondary lg:before:block lg:before:w-[80px]">
                  مشتریان &nbsp;
                </span>
                چه خدمات ارزشمندی را دریافت میکنند ؟!
              </p>
            </div>

            <div className="flex w-full flex-row flex-wrap gap-x-8 gap-y-20 lg:w-[70%]">
              <figure className="flex w-full flex-[1_1_150px] flex-col gap-10 lg:flex-row">
                <motion.div
                  whileTap={{
                    scale: 0.8,
                    rotate: -20,
                    borderRadius: "100%",
                  }}
                  className="flex- justify-center transition-default rounded-secondary border border-solid hover:border-primary bg-disableOverlay2 p-8 "
                >
                  <BrifecaseTick size="30" color="#621EF1" variant="Broken" />
                </motion.div>

                <p className="text-center text-2xl font-semibold leading-[3.6rem] text-headingColor lg:pl-40 lg:text-right">
                  تنظیم قرارداد های حقوقی پروژه
                </p>
              </figure>
              <figure className="flex w-full flex-[1_1_150px] flex-col gap-10 lg:flex-row">
                <motion.div
                  whileTap={{
                    scale: 0.8,
                    rotate: -20,
                    borderRadius: "100%",
                  }}
                  className="flex- justify-center transition-default rounded-secondary border border-solid hover:border-primary bg-disableOverlay2 p-8 "
                >
                  <I24Support size="30" color="#621EF1" variant="Broken" />
                </motion.div>

                <p className="text-center text-2xl font-semibold leading-[3.6rem] text-headingColor lg:pl-40 lg:text-right">
                  ارائه گارانتی و پشتیبانی بی وقفه
                </p>
              </figure>
              <figure className="flex w-full flex-[1_1_150px] flex-col gap-10 lg:flex-row">
                <motion.div
                  whileTap={{
                    scale: 0.8,
                    rotate: -20,
                    borderRadius: "100%",
                  }}
                  className="flex- justify-center transition-default rounded-secondary border border-solid hover:border-primary bg-disableOverlay2 p-8 "
                >
                  <MoneyRecive size="30" color="#621EF1" variant="Broken" />
                </motion.div>

                <p className="text-center text-2xl font-semibold leading-[3.6rem] text-headingColor lg:pl-40 lg:text-right">
                  یکپارچگی هزینه و کیفیت پروژه
                </p>
              </figure>
            </div>
          </div>
        </section>

        <Testimonial />

        <section className="w-full bg-Overlay2 bg-cover px-12 md:px-20   lg:my-0 lg:pt-80 lg:pb-36 ">
          <div className="flex w-full flex-col justify-center">
            <small className="text-center font-pinar text-2xl font-semibold leading-[3.4rem] text-primary">
              قیمت ها
            </small>
            <h2 className="text-center  font-bold leading-[3.6rem] text-headingColor lg:text-right text-5xl">
              پلن ها و قیمت های همکاری
            </h2>
          </div>

          <div className="mt-28 flex w-full flex-wrap gap-10    md:justify-evenly">
            <figure className="transition-default flex basis-full  flex-col  rounded-primary border-2 border-transparent bg-white p-7 shadow-default md:basis-[45%] lg:basis-[40%] xl:basis-[20%] hover:-translate-y-6 ">
              <header className="transition-default mb-5 w-full rounded-primary bg-[#f2f2f2] p-10 group-hover:bg-primary">
                <h4 className="transition-default text-center text-[25px] font-bold text-primary group-hover:text-white  ">
                  برنزی
                </h4>
                <p className="transition-default mt-5 text-center text-[18px] font-normal text-[#8a97a0] group-hover:font-light group-hover:text-white ">
                  سرویس رایگان
                </p>
              </header>

              <figcaption className="flex w-full flex-col gap-y-2">
                <ul className="flex w-full flex-col gap-y-10 p-7">
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تحت وب
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد داخلی
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      1 عدد
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعریف دکمه
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      6 دکمه
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      ماژول صف
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تماس اختصاصی
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد تماس همزمان
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      4 تماس
                    </div>
                  </li>
                </ul>
                <div className="mt-10 flex w-full justify-center gap-x-2">
                  <p className="text-[20px] font-bold text-headingColor">
                    545 هزار تومان
                  </p>
                  <p className="text-[19px] font-normal text-headingColor">
                    ماهانه
                  </p>
                </div>

                <a
                  href=""
                  className="mt-10 block w-full rounded-3xl bg-secondary px-10 py-7 text-center text-[15px] font-normal text-white md:hidden "
                >
                  مشاوره و راهنمایی رایگان
                </a>
              </figcaption>
            </figure>
            <figure className="transition-default flex basis-full  flex-col  rounded-primary border-2 border-primary bg-white p-7 shadow-default md:basis-[45%] lg:basis-[40%] xl:basis-[20%] xl:scale-105 hover:-translate-y-6">
              <header className="transition-default  mb-5 w-full rounded-primary bg-primary p-10">
                <h4 className="transition-default ext-white text-center text-[25px] font-bold text-white  ">
                  برنزی
                </h4>
                <p className="transition-default mt-2 text-center  text-[18px] font-normal text-headingColor  group-hover:font-light ">
                  کسب و کارهای کوچگ
                </p>
              </header>

              <figcaption className="flex w-full flex-col gap-y-2">
                <ul className="flex w-full flex-col gap-y-10 p-7">
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تحت وب
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد داخلی
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      1 عدد
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعریف دکمه
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      6 دکمه
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      ماژول صف
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تماس اختصاصی
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد تماس همزمان
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      4 تماس
                    </div>
                  </li>
                </ul>
                <div className="mt-10 flex w-full justify-center gap-x-2">
                  <p className="text-[20px] font-bold text-headingColor">
                    100 هزار تومان
                  </p>
                  <p className="text-[19px] font-normal text-headingColor">
                    ماهانه
                  </p>
                </div>

                <a
                  href=""
                  className="mt-10 block w-full rounded-3xl bg-secondary px-10 py-7 text-center text-[15px] font-normal   text-white "
                >
                  مشاوره و راهنمایی رایگان
                </a>
              </figcaption>
            </figure>
            <figure className="transition-default flex basis-full  flex-col  rounded-primary border-2 border-transparent bg-white p-7 shadow-default md:basis-[45%] lg:basis-[40%] xl:basis-[20%] hover:-translate-y-6  ">
              <header className="transition-default mb-5 w-full rounded-primary bg-[#f2f2f2] p-10 group-hover:bg-primary">
                <h4 className="transition-default text-center text-[25px] font-bold text-primary group-hover:text-white  ">
                  برنزی
                </h4>
                <p className="transition-default mt-5 text-center text-[18px] font-normal text-[#8a97a0] group-hover:font-light group-hover:text-white ">
                  سرویس رایگان
                </p>
              </header>

              <figcaption className="flex w-full flex-col gap-y-2">
                <ul className="flex w-full flex-col gap-y-10 p-7">
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تحت وب
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد داخلی
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      1 عدد
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعریف دکمه
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      6 دکمه
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      ماژول صف
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تماس اختصاصی
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد تماس همزمان
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      4 تماس
                    </div>
                  </li>
                </ul>
                <div className="mt-10 flex w-full justify-center gap-x-2">
                  <p className="text-[20px] font-bold text-headingColor">
                    200 هزار تومان
                  </p>
                  <p className="text-[19px] font-normal text-headingColor">
                    ماهانه
                  </p>
                </div>

                <a
                  href=""
                  className="mt-10 block w-full rounded-3xl bg-secondary px-10 py-7 text-center text-[15px] font-normal text-white md:hidden "
                >
                  مشاوره و راهنمایی رایگان
                </a>
              </figcaption>
            </figure>
            <figure className="transition-default flex basis-full  flex-col  rounded-primary border-2 border-transparent bg-white p-7 shadow-default md:basis-[45%] lg:basis-[40%] xl:basis-[20%] hover:-translate-y-6 ">
              <header className="transition-default mb-5 w-full rounded-primary bg-[#f2f2f2] p-10 group-hover:bg-primary">
                <h4 className="transition-default text-center text-[25px] font-bold text-primary group-hover:text-white  ">
                  برنزی
                </h4>
                <p className="transition-default mt-5 text-center text-[18px] font-normal text-[#8a97a0] group-hover:font-light group-hover:text-white ">
                  سرویس رایگان
                </p>
              </header>

              <figcaption className="flex w-full flex-col gap-y-2">
                <ul className="flex w-full flex-col gap-y-10 p-7">
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تحت وب
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد داخلی
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      1 عدد
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعریف دکمه
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      6 دکمه
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      اسکریپت تماس با سایت
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      صفحه تماس
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      ماژول صف
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تماس اختصاصی
                    </p>
                    <div className="w-[15%]">
                      <TickCircle size="25" color="#F1891E" variant="Bulk" />
                    </div>
                  </li>
                  <li className="flex w-full justify-around">
                    <p className="w-[70%] text-[14px] font-semibold text-headingColor line-clamp-1">
                      تعداد تماس همزمان
                    </p>
                    <div className="w-[15%] whitespace-nowrap text-xl font-semibold text-primary">
                      4 تماس
                    </div>
                  </li>
                </ul>
                <div className="mt-10 flex w-full justify-center gap-x-2">
                  <p className="text-[20px] font-bold text-headingColor">
                    1،500 هزار تومان
                  </p>
                  <p className="text-[19px] font-normal text-headingColor">
                    ماهانه
                  </p>
                </div>
                <a
                  href=""
                  className="mt-10 block w-full rounded-3xl bg-secondary px-10 py-7 text-center text-[15px] font-normal text-white md:hidden "
                >
                  مشاوره و راهنمایی رایگان
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <Faq />

        <ContactForm />
      </main>
    </>
  );
};

export default Services;
