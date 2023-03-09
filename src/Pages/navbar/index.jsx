import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

// import image Or logo
import logo from "@/assets/img/logo.png";

import imgProfile from "@/assets/img/imgProfile.png";

import {
  BagHappy,
  Book1,
  Brodcast,
  CallCalling,
  CallOutgoing,
  Crown1,
  Home3,
  Microphone,
  Microphone2,
  Moon,
  Notepad2,
  Personalcard,
  QuoteUp,
  Shop,
  ShoppingBag,
  ShoppingCart,
  Sun1,
  UserTag,
} from "iconsax-react";
import { useOnHoverOutside } from "@/Components/useOnHoverOutside";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  //assigning location variable
  const location = useLocation(),
    //destructuring pathname from location
    { pathname } = location,
    //Javascript split method to get the name of the path in array
    splitLocation = pathname.split("/"),
    handleToggle = () => {
      setNavbarOpen(!navbarOpen);
    },
    [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const aboutMeRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  useOnHoverOutside(aboutMeRef, closeHoverMenu); // Call the hook

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("!right-0");

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        className={`relative  ${
          sticky.isSticky ? "fixedmenu py-4" : ""
        } backdrop-blur-lg  duration-1000 top-0 z-50 w-screen   border-b border-[#f2f2f2] bg-transparent  py-10 px-10 mdg:px-20  dark:border-[#717171] dark:bg-slate-700`}
      >
        {/*  desktop and tablet */}
        <div className="hidden h-full w-full justify-between md:flex">
          {/* logo */}
          <Link to={"/"} className="m-0 flex items-center  gap-2 lg:ml-10">
            <img
              src={logo}
              alt="logo"
              width="7rem"
              height="100%"
              className=" w-28 object-cover"
            />
          </Link>
          {/* menu */}
          <nav className="flex items-center">
            <ul className="flex items-center gap-x-5 lg:gap-x-12 ">
              <li
                ref={aboutMeRef}
                className="group/parent relative flex  cursor-pointer  items-center  py-4 text-lg font-semibold text-disableOverlay transition-all duration-150 ease-out dark:text-white lg:text-2xl  "
              >
                <div className="flex ">
                  <span className="hidden lg:block">
                    <Personalcard
                      size="25"
                      variant="Outline"
                      className={`ml-2 ${
                        splitLocation[1] === "aboutMe"
                          ? "!text-headingColor dark:!text-white"
                          : "dark:text-headingColor"
                      }`}
                    />
                  </span>
                  <Link
                    to="/aboutMe"
                    onMouseOver={() => setMenuDropDownOpen(true)}
                    className={`relative whitespace-nowrap font-medium ${
                      splitLocation[1] === "aboutMe"
                        ? "badge-active text-headingColor dark:text-white"
                        : "dark:text-headingColor"
                    }`}
                  >
                    درباره من
                  </Link>
                </div>
                <ul
                  className={`${
                    isMenuDropDownOpen ? "!top-[39px]" : ""
                  } transition-default absolute -right-1  -top-80 z-2 flex w-full  min-w-[160px] flex-col  rounded-[10px] bg-white  py-5  opacity-0 shadow-default  group-hover/parent:z-[10] group-hover/parent:opacity-100  after:absolute after:w-5 after:h-5 after:bg-white after:right-10 after:top-0 after:-translate-y-[49%] after:rotate-45  after:z-[1] after:rounded-[2px] after:pointer-events-none`}
                >
                  <li className="group/li relative block w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px]   py-2 pr-10 pl-8">
                    <Link
                      to="/portfolio"
                      className="transition-default flex   items-center justify-between  whitespace-nowrap text-lg font-normal text-disable  group-hover/li:text-headingColor lg:text-2xl "
                    >
                      نمونه کار
                    </Link>
                    <span className="transition-default absolute -right-5 top-1/2 bottom-1/2 inline h-8 w-[5px] -translate-y-1/2 rounded-tl-full rounded-bl-full bg-primary group-hover/li:right-0"></span>
                  </li>
                </ul>
              </li>
              <ul className="hidden">
                <li className="cursor-pointer p-5">نمونه کارها</li>
                <li className="cursor-pointer p-5">خدمات</li>
                <li className="cursor-pointer p-5">مشتریان</li>
              </ul>

              <li
                className={
                  "relative cursor-pointer  py-2 text-xl font-semibold text-disableOverlay transition-all duration-150 ease-out flex dark:text-white lg:text-2xl"
                }
              >
                <span className="hidden lg:block">
                  <Book1
                    size="25"
                    variant="Outline"
                    className={`ml-2 font-medium ${
                      splitLocation[1] === "blog"
                        ? "!text-headingColor  dark:!text-white"
                        : "dark:text-headingColor"
                    }`}
                  />
                </span>
                <Link
                  to="/blog"
                  className={`relative whitespace-nowrap font-medium ${
                    splitLocation[1] === "blog"
                      ? "badge-active text-headingColor dark:text-white"
                      : "dark:text-headingColor"
                  }`}
                >
                  وبلاگ
                </Link>
              </li>
              <li
                className={
                  "relative cursor-pointer  py-2 text-xl font-semibold text-disableOverlay transition-all duration-150 ease-out flex dark:text-white lg:text-2xl"
                }
              >
                <span className="hidden lg:block">
                  <Shop
                    size="25"
                    variant="Outline"
                    className={`ml-2  ${
                      splitLocation[1] === "shop"
                        ? "!text-headingColor dark:!text-white"
                        : "dark:text-headingColor"
                    }`}
                  />
                </span>
                <Link
                  to="/shop"
                  className={`relative whitespace-nowrap ${
                    splitLocation[1] === "shop"
                      ? "badge-active text-headingColor dark:text-white"
                      : "dark:text-headingColor"
                  }`}
                >
                  فروشگاه
                </Link>
              </li>

              <li
                className={
                  "relative cursor-pointer  py-2  text-lg font-semibold text-disableOverlay transition-all duration-150 ease-out flex dark:text-white lg:text-2xl"
                }
              >
                <span className="hidden lg:block">
                  <Microphone
                    size="25"
                    variant="Outline"
                    className={`ml-2 ${
                      splitLocation[1] === "podcast"
                        ? "!text-headingColor dark:!text-white"
                        : "dark:text-headingColor"
                    }`}
                  />
                </span>
                <Link
                  to="/podcast"
                  className={`relative whitespace-nowrap font-medium ${
                    splitLocation[1] === "podcast"
                      ? "badge-active text-headingColor dark:text-white"
                      : "dark:text-headingColor"
                  }`}
                >
                  پادکست
                </Link>
              </li>

              <li
                className={
                  "cursor-pointer py-2  text-lg  font-semibold text-disableOverlay transition-all duration-150 ease-out flex dark:text-white lg:text-2xl"
                }
              >
                <span className="hidden lg:block">
                  <Notepad2
                    size="25"
                    variant="Outline"
                    className={`ml-2 ${
                      splitLocation[1] === "faq"
                        ? "!text-headingColor dark:!text-white"
                        : "dark:text-headingColor"
                    }`}
                  />
                </span>
                <Link
                  to="/faq"
                  className={`relative whitespace-nowrap font-medium ${
                    splitLocation[1] === "faq"
                      ? "badge-active text-headingColor dark:text-white"
                      : "dark:text-headingColor"
                  }`}
                >
                  سوالات متداول
                </Link>
              </li>

              <li
                className={
                  "cursor-pointer py-2  text-lg  font-semibold text-disableOverlay transition-all duration-150 ease-out flex dark:text-white lg:text-2xl"
                }
              >
                <span className="hidden lg:block">
                  <CallOutgoing
                    size="25"
                    variant="Outline"
                    className={`ml-2 ${
                      splitLocation[1] === "contactUs"
                        ? "!text-headingColor dark:!text-white"
                        : "dark:text-headingColor"
                    }`}
                  />
                </span>
                <Link
                  to="/contactUs"
                  className={`relative whitespace-nowrap font-medium ${
                    splitLocation[1] === "contactUs"
                      ? "badge-active text-headingColor dark:text-white"
                      : "dark:text-headingColor"
                  }`}
                >
                  تماس با من
                </Link>
              </li>
            </ul>
          </nav>
          {/* detail item */}
          <div className="flex basis-auto justify-end gap-x-5">
            <div className="transition-default relative flex   gap-x-2">
             
              <motion.div
                whileTap={{ scale: 0.9 }}
                className=" flex  p-4 relative "
              >
                <Link to="/cart" className="flex">
                  <BagHappy
                    size="25"
                    className="text-headingColor dark:!text-white"
                    variant="Broken"
                  />

                  <span className="absolute w-8  h-8 right-1 top-1 bg-primary text-white font-medium text-lg rounded-lg flex justify-center">
                    5+
                  </span>
                </Link>
              </motion.div>
              <div className="group relative inline h-16   w-16 justify-center overflow-hidden   ">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="transition-default h-full w-full cursor-pointer flex "
                  onClick={() => setTheme(colorTheme)}
                >
                  {colorTheme === "light" ? (
                    <Sun1
                      size="25"
                      variant="Broken"
                      className="text-headingColor dark:!text-white animate-[spin_2.5s_ease-in-out_infinite]   "
                    />
                  ) : (
                    <Moon
                      size="25"
                      color="#3f3f3f"
                      variant="Broken"
                      className=""
                    />
                  )}
                </motion.div>
              </div>
            </div>
            <Link
              to="/login"
              className="duration-400 flex whitespace-nowrap  rounded-2xl bg-headingColor px-3 py-4 text-2xl font-medium text-white shadow-primary2 transition ease-in dark:bg-white dark:text-headingColor lg:px-6 lg:py-4"
              title="ورود"
            >
              پنل کاربری
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div className="flex h-full w-full items-center justify-between md:hidden  ">
          {/* Burger Menu */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center"
          >
            <svg
              className="h-10 w-10 cursor-pointer text-primary "
              width={14}
              height={10}
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path
                d="M13 1H1m12 4H9m4 4H5"
                stroke="#621EF1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* mobile logo */}
          <Link to={"/"} className="m-0   flex items-center  gap-2">
            <img
              width="100%"
              height="100%"
              src={logo}
              alt="logo"
              className="w-28 object-cover "
            />
          </Link>
        </div>
      </header>
      {/* right menu */}

      <div
        className={`transition-[right] duration-1000 absolute top-0 z-[60]  h-screen w-10/12 bg-white  py-14 shadow-default overflow-y-scroll scrollbar-none md:hidden -right-full`}
        ref={menuRef}
        onClick={toggleMenu}
      >
        <div className="block mx-auto mb-10">
          <img
            src={logo}
            width="9rem"
            height="100%"
            className="w-32 mx-auto"
            alt=""
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          {/* navigation */}
          <nav className=" h-[650px] overflow-y-scroll scrollbar-none w-full ">
            <div className="flex flex-col items-start gap-y-12 overflow-hidden ">
              <ul className="w-full flex flex-col items-start px-10 gap-y-3">
                <small className="text-[14px] text-[#BBA186] mb-4 ">
                  شروع یادگیری
                </small>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === ""
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <Home3
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link to="/" className={`py-5 text-[16px] text-inherit`}>
                    خانه
                  </Link>
                </li>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "aboutMe"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <Personalcard
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link
                    to="/aboutMe"
                    className={`py-5 text-[16px] text-inherit`}
                  >
                    درباره من
                  </Link>
                </li>
              </ul>
              <div className="w-full flex flex-col items-start px-10 gap-y-3">
                <small className="text-[14px] text-[#BBA186] mb-4 ">
                  محتوای آموزشی
                </small>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "blog"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <Notepad2
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link to="/blog" className={`py-5 text-[16px] text-inherit`}>
                    وبلاگ
                  </Link>
                </li>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "podcast"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <Microphone2
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link
                    to="/podcast"
                    className={`py-5 text-[16px] text-inherit`}
                  >
                    پادکست
                  </Link>
                </li>
              </div>
              <div className="w-full flex flex-col items-start px-10 gap-y-3">
                <small className="text-[14px] text-[#BBA186] mb-4 ">
                  فروشگاه برنامه نویسان
                </small>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "shop"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <Shop
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link to="/shop" className={`py-5 text-[16px] text-inherit`}>
                    فروشگاه
                  </Link>
                </li>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "cart"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <ShoppingBag
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link to="/cart" className={`py-5 text-[16px] text-inherit`}>
                    سبد خرید
                  </Link>
                </li>
              </div>
              <div className="w-full flex flex-col items-start px-10 gap-y-3">
                <small className="text-[14px] text-[#BBA186] mb-4 ">
                  ارتباط با من
                </small>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "faq"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <QuoteUp
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link to="/faq" className={`py-5 text-[16px] text-inherit`}>
                    سوالات متداول
                  </Link>
                </li>
                <li
                  className={`relative flex w-full items-center gap-x-4 overflow-hidden  bg-transparent rounded-3xl px-5 transition-default ${
                    splitLocation[1] === "contactUs"
                      ? "text-primary bg-[#FBF0E5] "
                      : "text-headingColor"
                  }`}
                >
                  <span className="flex justify-center rounded-primary">
                    <CallCalling
                      size="22"
                      variant="TwoTone"
                      className="text-inherit"
                    />
                  </span>
                  <Link
                    to="/contactUs"
                    className={`py-5 text-[16px] text-inherit`}
                  >
                    تماس با من
                  </Link>
                </li>
              </div>
            </div>
          </nav>

          {/* close menu */}
          <div className="flex flex-col gap-y-10 w-full px-10 mt-10">
            <div className="relative overflow-hidden flex justify-between rounded-3xl bg-white shadow-default py-12 px-10 w-full">
              {isLogged ? (
                <div className="flex w-full overflow-hidden">
                  <div className="flex w-5/6">
                    <div className=" h-full ml-5 w-1/4">
                      <img
                        src={imgProfile}
                        className="rounded-full w-20"
                        alt=""
                      />
                    </div>
                    <div className="flex  flex-col  items-start gap-2 w-full">
                      <div className="flex  flex-col  items-start gap-2 w-3/4">
                        <p className="text-purple-1000 font-bold text-2xl items-start w-full line-clamp-1">
                          محمد رضا احمدی
                        </p>
                        <p className="text-disableUnique  text-xl  w-full line-clamp-1 ">
                          مدیریت
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto">
                    <Crown1 size="32" className="mx-auto" color="#FF8A65" />
                  </div>
                </div>
              ) : (
                <div className="flex basis-3/4 overflow-hidden">
                  <div className=" h-full ml-5 w-1/4">
                    <UserTag size="32" color="#FF8A65" />
                  </div>

                  <div className="flex  flex-col  items-start gap-2 w-3/4">
                    <Link
                      to={"/login"}
                      className="text-purple-1000 font-bold text-2xl items-start w-full line-clamp-1"
                    >
                      ورود یا ثبت نام
                    </Link>

                    <p className="text-disableUnique  text-xl  w-full line-clamp-1 ">
                      کاربر عادی
                    </p>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block w-full bg-disable text-headingColor rounded-full text-3xl font-semibold py-5 px-10 "
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
