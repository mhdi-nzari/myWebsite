import Breadcrumbs from "../../Components/Ui/Breadcrumbs";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowSquareDown,
  BoxAdd,
  Crown,
  DocumentText1,
  EmojiNormal,
  Eye,
  FolderAdd,
  Hashtag,
  I24Support,
  LampCharge,
  ShopAdd,
  Star,
  Teacher,
  TickSquare,
} from "iconsax-react";
import ProductItem from "../../Components/Shop/ProductItem";
import banner1024 from "@/assets/img/image_banner.jpg";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as Toman } from "@/assets/img/toman.svg";
import DefaultButton from "../../Components/Ui/DefaultButton";

const SingleProduct = () => {
  const [activeTab, setactiveTab] = useState(1),
    [isMenuOpen, setIsMenuOpen] = useState(false),
    handleClickActiveTab = (currentTab) => {
      setactiveTab(currentTab);
    };

  return (
    <div className=" relative  mt-20 w-full  mx-auto  flex flex-col  items-start  px-10 mdg:px-20   ">
      <Breadcrumbs />

      {/* banner product */}
      <div className="w-full h-full pb-16">
        <picture>
          {/* <source media="(min-width:1024px )" srcset={banner1024} /> */}
          <img
            className="w-full  rounded-secondary h-300"
            src={banner1024}
            alt=" Reactjs Course"
          />
        </picture>
      </div>

      <div className="w-full pb-20 pt-10 flex  flex-wrap  items-start gap-20 border-b border-disableOverlay2">
        {/* right Section */}
        <aside className="w-full lg:w-3/12 ">
          <div className=" border border-solid rounded-secondary p-10">
            <div className="flex flex-col">
              {/* title pervoius */}
              <span className="text-2xl text-disableOverlay font-semibold text-center">
                هزینه سرمایه گذاری
              </span>

              {/* price */}
              <div className="flex gap-x-2 py-5">
                <p className="text-6xl font-bold text-green-700 py-4">
                  328,000
                </p>
                <Toman className="mr-3  h-10 w-10" />
              </div>

              {/* timer */}

              <div className="flex flex-col py-5 w-full">
                <p className="text-center text-red-400 font-medium text-3xl">
                  مانده تا اتمام تخفیف
                </p>
                <div className="flex w-full gap-x-10 justify-center  pt-5">
                  {/* hours */}
                  <div className="flex flex-col gap-y-1">
                    <p className="font-bold text-4xl text-headingColor">12</p>
                    <p className="font-semibold text-2xl text-disableUnique">
                      ساعت
                    </p>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col gap-y-1">
                    <p className="font-bold text-4xl text-headingColor">12</p>
                    <p className="font-semibold text-2xl text-disableUnique">
                      دقیقه
                    </p>
                  </div>

                  {/* seconds */}
                  <div className="flex flex-col gap-y-1">
                    <p className="font-bold text-4xl text-headingColor">09</p>
                    <p className="font-semibold text-2xl text-disableUnique">
                      ثانیه
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DefaultButton
            to="/cart"
            classStyle="w-full mt-10 flex justify-center font-bold"
          >
            افزودن به سبد خرید
            <span className="mr-2">
              <ShopAdd size="23" className="text-inherit" variant="Broken" />
            </span>
          </DefaultButton>
        </aside>

        {/* left Section */}

        <div className=" flex flex-col items-start flex-grow">
          {/* hashtag */}
          <div className="flex flex-wrap w-full gap-x-5 gap-y-10 pb-10">
            {/* item */}
            <motion.a
              href=""
              whileTap={{ scale: 0.95 }}
              className="border  border-solid border-disableOverlay rounded-xl text-headingColor text-xl px-5 py-3  font-medium relative  after:absolute after:w-8 after:h-7 after:bg-white after:right-4 after:-top-4 after:rounded-full"
            >
              <span className="absolute right-5 -top-3 z-10">
                <Hashtag size="14" color="#FF8A65" variant="Broken" />
              </span>
              <span className="text-inherit">Reactjs</span>
            </motion.a>

            <motion.a
              href=""
              whileTap={{ scale: 0.95 }}
              className="border  border-solid border-disableOverlay rounded-xl text-headingColor text-xl px-5 py-3  font-medium relative  after:absolute after:w-8 after:h-7 after:bg-white after:right-4 after:-top-4 after:rounded-full"
            >
              <span className="absolute right-5 -top-3 z-10">
                <Hashtag size="14" color="#FF8A65" variant="Broken" />
              </span>
              <span className="text-inherit">جاوااسکریپت</span>
            </motion.a>

            <motion.a
              href=""
              whileTap={{ scale: 0.95 }}
              className="border  border-solid border-disableOverlay rounded-xl text-headingColor text-xl px-5 py-3  font-medium relative  after:absolute after:w-8 after:h-7 after:bg-white after:right-4 after:-top-4 after:rounded-full"
            >
              <span className="absolute right-5 -top-3 z-10">
                <Hashtag size="14" color="#FF8A65" variant="Broken" />
              </span>
              <span className="text-inherit">فرانت اند</span>
            </motion.a>
          </div>

          {/* product Title */}
          <div className="flex items-start">
            <p className="text-4xl !leading-[4rem] text-headingColor font-medium">
              دوره جامع متخصص ریکت و ریداکس + ریکت ورژن ۱۸
            </p>
          </div>

          {/* assets */}
          <div className="flex w-full flex-wrap py-10 mdg:py-7 gap-y-5">
            {/* item assets */}
            <div className="flex  gap-x-2 border-l border-solid border-disableOverlay2 px-5">
              <span>
                <Teacher size="22" className="text-blue-400 " variant="Bulk" />
              </span>
              <p className="text-disableUnique font-semibold text-lg md:text-xl">
                + 1787 دانشجو
              </p>
            </div>

            {/* item assets */}
            <div className="flex  gap-x-2 border-l border-solid border-disableOverlay2 px-5">
              <span>
                <Star size="22" className="text-yellow-400 " variant="Bulk" />
              </span>
              <p className="text-disableUnique font-semibold text-lg md:text-xl">
                3.7 رضایت
              </p>
            </div>

            {/* item assets */}
            <div className="flex  gap-x-2 border-l border-solid border-disableOverlay2 px-5">
              <span>
                <Eye size="22" className="text-zinc-400 " variant="Bulk" />
              </span>
              <p className="text-disableUnique font-semibold text-lg md:text-xl">
                4500 بازدید
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-start pt-10">
            <div className="flex items-start flex-col w-full">
              <p className="text-3xl text-headingColor font-normal">
                بعد از خرید چه چیزهایی دریافت میکنید ؟
              </p>

              <div className="flex w-full gap-x-3 gap-y-10 mdg:gap-10 flex-wrap pt-12">
                <figure className="flex flex-col    justify-start items-center px-10 py-3 border border-solid rounded-secondary  border-disableOverlay2  h-150  w-150 transition-default group hover:border-secondary">
                  <span className="rounded-full p-5 bg-disableOverlay2 mt-10 transition-default  group-hover:bg-secondary">
                    <FolderAdd
                      size="25"
                      variant="Broken"
                      className="text-headingColor transition-inherit group-hover:text-white"
                    />
                  </span>

                  <figcaption className="w-full flex flex-col pt-5">
                    <span className="text-disableOverlay text-xl whitespace-nowrap text-center font-medium">
                      فایل دوره
                    </span>
                  </figcaption>
                </figure>

                <figure className="flex flex-col    justify-start items-center px-10 py-3 border border-solid rounded-secondary  border-disableOverlay2  h-150  w-150 transition-default group hover:border-secondary">
                  <span className="rounded-full p-5 bg-disableOverlay2 mt-10 transition-default  group-hover:bg-secondary">
                    <I24Support
                      size="25"
                      variant="Broken"
                      className="text-headingColor transition-inherit group-hover:text-white"
                    />
                  </span>

                  <figcaption className="w-full flex flex-col pt-5">
                    <span className="text-disableOverlay text-xl whitespace-nowrap text-center font-medium">
                      پشتیبانی روزانه
                    </span>
                  </figcaption>
                </figure>

                <figure className="flex flex-col    justify-start items-center px-10 py-3 border border-solid rounded-secondary  border-disableOverlay2  h-150  w-150 transition-default group hover:border-secondary">
                  <span className="rounded-full p-5 bg-disableOverlay2 mt-10 transition-default  group-hover:bg-secondary">
                    <LampCharge
                      size="25"
                      variant="Broken"
                      className="text-headingColor transition-inherit group-hover:text-white"
                    />
                  </span>

                  <figcaption className="w-full flex flex-col pt-5">
                    <span className="text-2xl  font-medium text-green-600">
                      2 ساعت
                    </span>
                    <span className="text-disableOverlay text-xl whitespace-nowrap text-center font-medium">
                      مشاوره رایگان
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descritption*/}
      <div className="flex flex-col w-full items-start py-20">
        <div className="flex flex-wrap  gap-7 w-full items-start">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`px-7 py-4 text-xl text-disableUnique font-semibold border border-solid border-disable rounded-full  w-fit ${
              activeTab === 1 ? "bg-headingColor text-white" : ""
            }`}
            onClick={() => handleClickActiveTab(1)}
          >
            توضیحات محصول
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`px-7 py-4 text-xl text-disableUnique font-semibold border border-solid border-disable rounded-full  w-fit ${
              activeTab === 2 ? "bg-headingColor text-white" : ""
            }`}
            onClick={() => handleClickActiveTab(2)}
          >
            محصولات مشابه <span className="ml-2">(13)</span>
          </motion.button>
        </div>

        <div className="w-full mt-10 lg:mt-16 flex flex-wrap  items-start">
          <aside className=" relative  mdg:basis-3/12 lg:sticky lg:top-24 ">
            <ul className="w-full flex flex-col  items-start gap-y-7 p-10">
              <li className="flex   cursor-pointer">
                <ScrollLink
                  to="introduction"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className="flex group"
                >
                  {/* icon */}
                  <span className="">
                    <Crown
                      size="25"
                      className="text-headingColor   transition-default group-[.active]:text-secondary"
                      variant="Bulk"
                    />
                  </span>
                  {/* icon */}
                  <p className="text-[14px] text-headingColor font-medium mr-2  transition-default group-[.active]:text-secondary">
                    معرفی محصول
                  </p>
                </ScrollLink>
              </li>

              <li className="flex group  cursor-pointer">
                <ScrollLink
                  to="requirment"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className="flex group"
                >
                  {/* icon */}
                  <span className="">
                    <BoxAdd
                      size="25"
                      className="text-hedingColor  transition-default group-[.active]:text-secondary"
                      variant="Bulk"
                    />
                  </span>
                  {/* text */}

                  <p className="text-[14px] text-headingColor font-medium mr-2  transition-default group-[.active]:text-secondary">
                    پیشنیاز محصول
                  </p>
                </ScrollLink>
              </li>

              <li className="flex group  cursor-pointer">
                <ScrollLink
                  to="userComment"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  className="flex group"
                >
                  {/* icon */}
                  <span className="">
                    <EmojiNormal
                      size="25"
                      className="text-hedingColor  transition-default group-[.active]:text-secondary"
                      variant="Bulk"
                    />
                  </span>
                  {/* text */}
                  <p className="text-[14px] text-headingColor font-medium mr-2  transition-default group-[.active]:text-secondary">
                    نظرات کاربران
                  </p>
                </ScrollLink>
              </li>
            </ul>
          </aside>
          <div className="mdg:basis-9/12">
            {/* discription product */}

            {activeTab === 1 && (
              <div className="flex flex-col w-full">
                <figure
                  id="introduction"
                  className="w-full flex flex-col items-start px-10 py-16  border-b border-disableOverlay2"
                >
                  <h3 className="text-4xl text-headingColor font-bold flex">
                    <span className="ml-2">
                      <Crown
                        size="30"
                        className="text-yellow-400"
                        variant="Broken"
                      />
                    </span>
                    معرفی محصول
                  </h3>
                  <figcaption className="mt-12">
                    <p className="text-2xl text-disableOverlay leading-[3rem]">
                      خیلی از بچه ها، بعد چندین دوره HTML و CSS، باز هم نمی تونن
                      یک طرح ساده رو پیاده کنن. چون متاسفانه، از همون ابتدا سعی
                      کردن که دانشجو رو با فریمورک های آماده عادت بدهند که اصلا
                      راهکار خوبی نیست و در دراز مدت بهشون ضربه بزرگی میزنه.
                      طبیعتا یادگیری فریمورک ها خوبه ، اما هیچ وقت، فریمورک هایی
                      مثل بوتسترپ (Bootstrap)، تیلویند (TailwindCSS) و چیزای
                      دیگه، ما رو از یادگیری مفاهیم اصلی و بشدت کاربردی مثل Flex
                      – Grid – Responsive design بی نیاز نمی کنن. یادگیری اصولی
                      مفاهیم هست که بین برنامه نویس خوب و بد، تمایز ایجاد میکنه.
                      بنابراین، تمام تمرکز من هم روی تدریس دقیق مفاهیم کاربردی
                      HTML و CSS در طی پیاده کردن پروژه ها بوده.
                      <br />
                      <br />
                      دلیل اول : توی این دوره میخوام یکبار برای همیشه با همین
                      مفاهیم پایه ای HTML CSS یک پروژه کاملا واقعی با رعایت کوچک
                      ترین جزییات، پیاده کنیم. چیزی که حتی در اکثر دوره های غیر
                      رایگان هم پیدا نمیشه. وقتی میگم یک پروژه کامل، طبیعتا
                      رعایت اندازه های رسپانسیو متن ها، تعریف متغیر ها، بلاک
                      بندی برنامه با فلکس و گرید در سایزهای مختلف دستگاه ها،
                      کدنویسی تمیز CSS ، اسم گذاری اصولی کلاس ها مهم میشه. پس
                      رعایت همه ی این اصول طی یه پروژه واقعی، فرایند یادگیری رو
                      براتون ساده میکنه. دلیل دوم : دوره های رایگان عملا تضمینی
                      بابت آپدیت و کیفیت مطالب ندارند. دلیل سوم : شما در این
                      دوره تمرین دارید. یک UI کاملا واقعی بهتون داده میشه و
                      دانشجو موظف است که این طرح رو پیاده کنه. دلیل چهارم :
                      پشتیبانی دوره های من قطعا منحصر بفرد است. تیم پشتیبانی
                      ندارم! و پشتیبان تک تک بچه ها شخص خودم هستم
                    </p>
                  </figcaption>
                </figure>

                <figure
                  id="requirment"
                  className="w-full flex flex-col items-start px-10 py-16  border-b border-disableOverlay2"
                >
                  <h3 className="text-4xl text-headingColor font-bold flex">
                    <span className="ml-2">
                      <BoxAdd
                        size="30"
                        className="text-blue-400"
                        variant="Broken"
                      />
                    </span>
                    پیشنیاز محصول
                  </h3>
                  <figcaption className="mt-12">
                    <p className="text-2xl text-disableOverlay leading-[3rem]">
                      اگه ریز به ریز چیزایی که توی این دوره بهت میگم رو رعایت
                      بکنی، مطمئنا تا حد زیادی از فریمورک ها بی نیاز میشی و
                      برنامه نویسی فرانت اند برات لذت بخش میشه. واقعا دوره دیگه
                      ای رو نیاز نداری و در طی چالش ها و سرچ کردن، مابقی ریزه
                      کاری ها رو یاد میگیری.
                    </p>
                  </figcaption>
                </figure>

                <figure
                  id="userComment"
                  className="w-full flex flex-col items-start px-10 py-16  border-b border-disableOverlay2"
                >
                  <h3 className="text-4xl text-headingColor font-bold flex">
                    <span className="ml-2">
                      <EmojiNormal
                        size="30"
                        className="text-pink-400"
                        variant="Broken"
                      />
                    </span>
                    نظرات کاربران
                  </h3>
                  <figcaption className="mt-12">
                    <p className="text-2xl text-disableOverlay leading-[3rem]">
                      اگه ریز به ریز چیزایی که توی این دوره بهت میگم رو رعایت
                      بکنی، مطمئنا تا حد زیادی از فریمورک ها بی نیاز میشی و
                      برنامه نویسی فرانت اند برات لذت بخش میشه. واقعا دوره دیگه
                      ای رو نیاز نداری و در طی چالش ها و سرچ کردن، مابقی ریزه
                      کاری ها رو یاد میگیری.
                    </p>
                  </figcaption>
                </figure>
              </div>
            )}

            {/* product Similar */}
            {activeTab === 2 && (
              <div className="flex flex-col items-start">
                {/* filter */}

                <div className="flex  flex-wrap gap-7 py-10 w-full items-start ">
                  <div className="w-full sm:w-fit  relative ">
                    {/* item input */}
                    <div
                      className="px-7 py-4 rounded-secondary border border-solid  w-full sm:w-fit flex justify-between flex-shrink  cursor-pointer"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <input
                        type="text"
                        readOnly
                        className="text-2xl font-medium text-disableUnique cursor-pointer"
                        defaultValue="براساس زمان"
                      />

                      <span className="">
                        <ArrowSquareDown
                          size="25"
                          variant="Broken"
                          className="mr-auto  text-disableUnique"
                        />
                      </span>
                    </div>

                    {/* dropdown */}
                    <ul
                      className={` absolute right-0  w-full   bg-white shadow-def   transition-default flex-col gap-y-4 px-5 py-7 z-10 rounded-2xl border border-solid border-disableOverlay2  ${
                        isMenuOpen
                          ? " flex    translate-y-5"
                          : " translate-y-24  hidden"
                      }`}
                    >
                      {/* item */}
                      <li className="relative w-full flex justify-between px-5 rounded-2xl py-5  transition-default hover:bg-secondaryOverlay cursor-pointe">
                        <input
                          className="sr-only peer"
                          type="radio"
                          name="time"
                          id="newsest"
                        />
                        <label
                          className="w-full text-2xl text-headingColor font-medium w-fit"
                          for="newsest"
                        >
                          جدیدترین
                        </label>

                        <div className=" relative  w-9 h-8 border border-solid border-disable rounded-full transition-[background] duration-150 ease-in cursor-pointer flex justify-center after:absolute after:w-4 after:h-4 after:rounded-full after:opacity-0 after:scale-0 after:bg-transparent  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in  peer-checked:border-transparent peer-checked:bg-headingColor peer-checked:animate-[jelly_0.6s_ease-in-out] peer-checked:after:border-transparent peer-checked:after:bg-white  peer-checked:after:opacity-100 peer-checked:after:scale-100"></div>
                      </li>

                      {/* item */}
                      <li className="relative w-full flex justify-between px-5 rounded-2xl py-5  transition-default hover:bg-secondaryOverlay cursor-pointe">
                        <input
                          className="sr-only peer"
                          type="radio"
                          name="time"
                          id="oldest"
                        />
                        <label
                          className="w-full text-2xl text-headingColor font-medium w-fit"
                          for="oldest"
                        >
                          قدیمی ترین
                        </label>

                        <div className=" relative  w-9 h-8 border border-solid border-disable rounded-full transition-[background] duration-150 ease-in cursor-pointer flex justify-center after:absolute after:w-4 after:h-4 after:rounded-full after:opacity-0 after:scale-0 after:bg-transparent  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in  peer-checked:border-transparent peer-checked:bg-headingColor peer-checked:animate-[jelly_0.6s_ease-in-out] peer-checked:after:border-transparent peer-checked:after:bg-white  peer-checked:after:opacity-100 peer-checked:after:scale-100"></div>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full sm:w-fit  relative ">
                    {/* item input */}
                    <div
                      className="px-7 py-4 rounded-secondary border border-solid  w-full sm:w-fit flex justify-between flex-shrink  cursor-pointer"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <input
                        type="text"
                        readOnly
                        className="text-2xl font-medium text-disableUnique cursor-pointer"
                        defaultValue="براساس قیمت"
                      />

                      <span className="">
                        <ArrowSquareDown
                          size="25"
                          variant="Broken"
                          className="mr-auto  text-disableUnique"
                        />
                      </span>
                    </div>

                    {/* dropdown */}
                    <ul
                      className={` absolute right-0  w-full   bg-white shadow-def   transition-default flex-col gap-y-4 px-5 py-7 z-10 rounded-2xl border border-solid border-disableOverlay2  ${
                        isMenuOpen
                          ? " flex    translate-y-5"
                          : " translate-y-24  hidden"
                      }`}
                    >
                      {/* item */}
                      <li className="relative w-full flex justify-between px-5 rounded-2xl py-5  transition-default hover:bg-secondaryOverlay cursor-pointer">
                        <input
                          className="sr-only peer"
                          type="radio"
                          name="price"
                          id="lt0"
                        />
                        <label
                          className="w-full text-2xl text-headingColor font-medium w-fit"
                          for="lt0"
                        >
                          کمتر از 100 هزار تومان
                        </label>

                        <div className=" relative  w-9 h-8 border border-solid border-disable rounded-full transition-[background] duration-150 ease-in cursor-pointer flex justify-center after:absolute after:w-4 after:h-4 after:rounded-full after:opacity-0 after:scale-0 after:bg-transparent  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in  peer-checked:border-transparent peer-checked:bg-headingColor peer-checked:animate-[jelly_0.6s_ease-in-out] peer-checked:after:border-transparent peer-checked:after:bg-white  peer-checked:after:opacity-100 peer-checked:after:scale-100"></div>
                      </li>

                      {/* item */}
                      <li className="relative w-full flex justify-between px-5 rounded-2xl py-5  transition-default hover:bg-secondaryOverlay cursor-pointer">
                        <input
                          className="sr-only peer"
                          type="radio"
                          name="price"
                          id="lth1"
                        />
                        <label
                          className="w-full text-2xl text-headingColor font-medium w-fit"
                          for="lth1"
                        >
                          بیشتر از 100 هزار تومان
                        </label>

                        <div className=" relative  w-9 h-8 border border-solid border-disable rounded-full transition-[background] duration-150 ease-in cursor-pointer flex justify-center after:absolute after:w-4 after:h-4 after:rounded-full after:opacity-0 after:scale-0 after:bg-transparent  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in  peer-checked:border-transparent peer-checked:bg-headingColor peer-checked:animate-[jelly_0.6s_ease-in-out] peer-checked:after:border-transparent peer-checked:after:bg-white  peer-checked:after:opacity-100 peer-checked:after:scale-100"></div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-28 mt-20">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
