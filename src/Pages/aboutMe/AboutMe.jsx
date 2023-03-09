import Helmet from "@/Components/Helmet/Helmet";
import CommonSection from "@/Components/Ui/CommonSection";
import "./index.css";
import MySkills from "@/Pages/aboutMe/MySkills";
import Testimonial from "@/Pages/testimonial/Testimonial";
import AmazingCategory from "@/Pages/Courses/Categories/AmazingCategory";

import profile from "@/assets/img/mhdi_nzari.png";

import {
  Bootstrap,
  CodeCircle,
  Coffee,
  DirectLeft,
  DirectRight,
  Figma,
  Html5,
  Js,
  MessageProgramming,
  MobileProgramming,
  Xd,
} from "iconsax-react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, A11y, EffectCards, Navigation } from "swiper";
import "swiper/css";
// Import Swiper styles

import ellipse from "@/assets/img/ellipse.png";

const AboutMe = () => {
  return (
    <main className="flex w-full  flex-col">
      <section className="aboutMe relative my-0 w-full   overflow-hidden border-b border-b-[#f0f4f5] bg-Overlay pt-40 pb-40 ">
        <Helmet title={"درباره مهدی نظری"}>
          <CommonSection
            title={"مهدی نظری کیه اصن ؟!"}
            discription={
              "اینجا قراره کلی طومار بپیچم برات از اینکه کی هستم و چیکار میکنم و هدف و رسالتم  کلا چیه برات ازش کلی بگم و باهمدیگه اشک بریزیم  پس بزن که بریم"
            }
          />
        </Helmet>

        <div className=" mt-20  w-full">
          <span className=" relative flex justify-center ">
            <motion.a whileTap={{ scale: 0.8 }} href="#me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.5 13.63v.87c0 4.12 3.37 7.5 7.5 7.5 4.12 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5"
                  stroke="#3f3f3f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-y-3"
                ></path>
                <path
                  className="animate-bounceDefault "
                  d="M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5ZM12 6V2"
                  stroke="#3f3f3f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </motion.a>
          </span>
        </div>
      </section>

      <section id="me" className="mt-32 w-full px-12 md:px-20">
        <div className=" relative flex w-full flex-col justify-center ">
          <small className="mb-5 text-center  font-pinar text-2xl font-semibold leading-[3.4rem] text-primary ">
            معرفی
          </small>
          <h2 className="before:right-unset   relative z-20 w-full  text-center text-4xl font-bold leading-[4rem]  text-headingColor before:absolute before:left-[48%] before:-right-1/2 before:top-1/2 before:-z-10 before:hidden before:h-[125px] before:w-full  before:-translate-x-[40%] before:-translate-y-1/2 before:scale-50 before:bg-[url('/src/assets/img/parts.svg')] before:bg-cover before:bg-no-repeat before:opacity-30 dark:text-white lg:text-5xl lg:before:block">
            درباره خودم و مسیر شغلی
          </h2>

          <img
            src="/src/assets/img/mahdi-nazari.jpg"
            className="transition-default  z-20 mx-auto mt-20  h-200 w-200   rounded-[30%_70%_31%_69%/70%_35%_65%_30%] outline outline-offset-2 outline-primaryOverlay grayscale hover:grayscale-0 lg:absolute lg:left-[30rem] lg:-right-[30%] lg:mt-0 lg:h-60 lg:w-60 lg:rotate-12 2xl:left-32 "
            alt="مهدی نظری برنامه نویس"
          />
        </div>

        <div className=" mt-28  flex">
          <div className=" w-full  flex flex-col md:flex-row ">
            <div className="flex flex-1 flex-col basis-full md:basis-[45%]  lg:basis-1/2  ">
              <h4
                className="relative my-24  text-[14px] font-medium leading-[3rem]  text-headingColor after:absolute after:-right-24 after:hidden after:cursor-default after:text-[50px]  after:font-extrabold  after:text-primary after:opacity-50 after:content-['01'] dark:text-slate-300 dark:after:text-white dark:after:opacity-100 md:after:-right-10 md:after:-top-16 md:after:block lg:after:-top-12
               "
              >
                شاید خیلی شنیده باشید اصطلاح های رابط کاربری و تجربه کاربری یا
                همون Ui/Ux که اهمیت بسیار زیادی در بین کارفرما ها و طراحان سایت
                پیدا کرده است ، چرا که تعامل کاربر با محصول از طریق رابط کاربری
                با محصول اتفاق می افتد ، یعنی کاربر اگر نتواند با استفاده از
                رابط کاربری شما از محصول شما استفاده یا همان محصول را خریداری
                کند کسب و کار شما پیشرفت یا درآمد شما افزایش پیدا نمیکنه بلکه
                برعکس و کلی دلایل دیگه که اگر رابط کاربری سایت شما خوب و
                استاندارد نباشد باعث افت کسب و کار شما میشود.
              </h4>
              <h4
                className="relative my-24  text-[14px] font-medium leading-[3rem]  text-headingColor dark:text-slate-300 after:absolute after:-right-24 after:hidden after:cursor-default after:text-[50px]  after:font-extrabold  after:text-primary after:opacity-50 after:content-['02'] dark:after:text-white dark:after:opacity-100 md:after:-right-10 md:after:-top-16 md:after:block lg:my-10 lg:after:-top-12 
               "
              >
                تو این دوره ما تمام آموزش های لازمه برای یک طراح رابط کاربری
                حرفه ای شدن رو مرحله به مرحله میبینیم ، همراه هر بخش از آموزش یک
                تمرین وجود دارد که این تمرین توسط شما انجام میشه و توسط متخصصان
                و اساتید مشکلات و راهنمایی های لازمه به شما داده میشه برای
                پیشرفت و بهتر شدن شما و در بخش های پروژه محور آموزش شما تمام
                آموزش های دیده شده را به صورت عملی میبینید و بعد از اتمام هر
                پروژه از شما آزمون گرفته میشود. تا یک سال همراه شما هستیم ،
                پشتیبانی کامل شما تا مرحله گرفتن پروژه ، هنرجویانی که به سطح
                خیلی خوبی رسیده باشند توسط خود تیم مظهری یو آی ایکس بهشون پروژه
                تعلق میگیره و کسب درآمد میکنند.
              </h4>
            </div>
            <div className="relative flex flex-1 gap-y-8 basis-full  md:basis-[55%]  lg:basis-1/2 ">
              <div className="mask w-full h-full relative ">
                <div className="relative w-full h-full">
                  <video
                    className="w-full h-full"
                    src="https://kajartcomplex.ir/wp-content/uploads/2022/12/فن-بیان-و-سخنوری-آرش-آبسالان.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                  />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <MySkills />
      {/* Brands */}
      <Testimonial />

      {/* Faq At Me */}
      <section className="mt-32 flex w-full flex-col px-12 md:px-20">
        <div className="flex w-full flex-col justify-center gap-y-10 lg:justify-between  lg:gap-0">
          {/* titleBar */}
          <div className=" relative mt-2 flex flex-col items-center   md:items-start">
            <div className="flex w-full flex-col items-center justify-center  gap-x-5 gap-y-3  md:flex-row lg:flex-row">
              <div className="flex  justify-center  gap-x-2 text-4xl lg:text-5xl  font-pinar ">
                <span className="mt-3 whitespace-nowrap  font-bold text-primary">
                  سوالاتی که
                </span>
                <span className="mt-3 whitespace-nowrap   font-bold text-headingColor dark:text-white ">
                  زیاد پرسیده میشه ؟؟؟
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-2xl font-normal leading-[1.8] text-[#8e8e8e] line-clamp-2 md:text-right">
              چند تا سوال جواب که احتمالا تو ذهنتون اومده و دوست داشته باشین که
              بدونین !
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="mt-52 grid w-full grid-cols-1 place-content-center   lg:grid-cols-2">
            <div className=" place-self-center ">
              <div className="relative inline-block  ">
                <img src={profile} className="mx-auto h-auto w-350" alt="" />

                <span className="absolute left-0 top-36 flex h-16 w-16 rotate-45 justify-center rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-orange-100 shadow-default  ">
                  <Html5 size="30" color="#f06529" variant="Broken" />
                </span>
                <span className="absolute left-0 top-0 flex h-16  w-16 rotate-45 justify-center rounded-[54%_46%_36%_64%_/_66%_41%_59%_34%] bg-yellow-50 shadow-default  ">
                  <Js size="30" color="#f0db4f" variant="Broken" />
                </span>
                <span className="absolute left-20 -top-24 flex h-16 w-16 rotate-45 justify-center rounded-[54%_46%_36%_64%_/_66%_41%_59%_34%] bg-purple-200 shadow-default  ">
                  <Bootstrap size="30" color="#59287a" variant="Broken" />
                </span>
                <span className="absolute left-56 -top-28 flex h-16 w-16 -rotate-45 justify-center rounded-[29%_71%_18%_82%_/_75%_61%_39%_25%] bg-pink-50 shadow-default  ">
                  <Xd size="30" color="#df5198 " variant="Broken" />
                </span>
                <span className="absolute right-20 -top-16 flex h-16  w-16 justify-center rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-orange-100 shadow-default  ">
                  <MobileProgramming
                    size="30"
                    color="#f06529"
                    variant="Broken"
                  />
                </span>
                <span className="absolute right-0 top-10 flex h-24 w-24 -rotate-12 justify-center rounded-[54%_46%_36%_64%_/_66%_56%_44%_34%] bg-pink-50 shadow-default  ">
                  <Figma size="30" color="#f74174" variant="Broken" />
                </span>
                <span className="absolute right-0 top-40 flex h-16 w-16 rotate-45 justify-center rounded-[54%_46%_36%_64%_/_66%_56%_44%_34%] bg-blue-50 shadow-default  ">
                  <CodeCircle size="30" color="#4c5aa4" variant="Broken" />
                </span>
                <span className="absolute right-0 top-64 flex h-16 w-16 -rotate-12 justify-center rounded-[54%_46%_36%_64%_/_66%_56%_44%_34%] bg-Overlay shadow-default  ">
                  <Coffee size="30" color="#6F4E37" variant="Broken" />
                </span>
              </div>
            </div>
            <div className="mx-auto overflow-hidden w-full">
              <Swiper // install Swiper modules
                dir="rtl"
                effect={"cards"}
                grabCursor={true}
                slidesPerView={1}
                direction="horizontal"
                modules={[Autoplay, EffectCards, Navigation]}
                centeredSlides={true}
                speed={500}
                freeMode={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  // disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                className="swiperFaq   w-300  lg:h-300 lg:w-500 overflow-visible "
              >
                <SwiperSlide className="flex items-center justify-center rounded-primary 	bg-white shadow-primary2">
                  <figure className="mx-auto h-full w-full   p-10">
                    <div className="w-full">
                      <div className="w-full flex  justify-between">
                        <h1 className="  text-right text-2xl  text-primary lg:text-[19px] font-black">
                          چرا برنامه نویس شدم؟
                        </h1>
                        <span>
                          <MessageProgramming
                            size="40"
                            color="#621EF1"
                            variant="Bulk"
                            className="w-16"
                          />
                        </span>
                      </div>

                      <figcaption className="mt-2 w-full ">
                        <p className="text-lg  font-normal  leading-[2rem] text-headingColor lg:text-2xl lg:leading-[3rem]">
                          من مهدی نظری طراح و برنامه نویس وبسایت یا بقولی فرانت
                          اند دولوپرم که از سال 1398 تا الان توی حوضه تکنولوژی و
                          استارت آپ دارم فعالیت میکنم . هدف من کمک به علاقمندانی
                          هست که مسیر برنامه نویسی رو میخوان طی کنن و بدنبال
                          منتور و مشاور برای حل چالش ها و داشتن یه راهنمای مطمئن
                          برای مسیرشونه در کنار اون توی شبکه های اجتماعی و جاهای
                          دیگه تولید محتوا میکنم تا بتونم دانش اندکم رو بدست
                          علاقمندان این عرصه برسونم . خیلی مخلصیم ارادت 🖐😉
                        </p>
                      </figcaption>
                    </div>
                  </figure>
                </SwiperSlide>
              </Swiper>

              <div className="my-10 flex w-full justify-center gap-5">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.8 }}
                  className="prev"
                >
                  <DirectRight
                    size="25"
                    color="#3f3f3f"
                    variant="Bulk"
                    className="transition-all "
                  />
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.8 }}
                  className="next"
                >
                  <DirectLeft
                    size="25"
                    color="#3f3f3f"
                    variant="Bulk"
                    className="transition-all "
                  />
                </motion.button>
              </div>
            </div>
          </div>
          <span className=" absolute top-0 -left-40 -z-10 hidden lg:block">
            <img src={ellipse} className="h-200 w-300" alt="" />
          </span>
        </div>
      </section>

      <AmazingCategory />
    </main>
  );
};

export default AboutMe;
