import { motion } from "framer-motion";
import { LoginCurve, User, UserCirlceAdd } from "iconsax-react";

import {  useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeEye, setActiveEye] = useState(false),
    [passwordShown, setPasswordShown] = useState(false),
    showPasswordHandle = () => {
      setActiveEye(!activeEye);
    },
    togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    },
    year = new Intl.DateTimeFormat("fa-IR").format(new Date()).slice(0, 4);

  return (
    <>
      <div className="flex  h-full w-full justify-center">
        <div className=" flex h-fit w-full flex-col justify-center">
          <div
            className="block w-[90%] max-w-[480px] overflow-hidden rounded-primary shadow-default"
            data-aos="flip-up"
          >
            <header className="block bg-[#304050] px-8 py-10  text-center text-white ">
              <h1 className="select-none text-2xl font-semibold">
                پنل ورود کاربران
              </h1>
            </header>
            <main className="flex flex-col gap-y-5 overflow-hidden px-8  pt-10">
              <form className="w-full border-b-[1px] border-solid border-slate-200 py-12">
                <div className="relative flex flex-col  gap-y-10 pb-10">
                  <div className="flex w-full flex-wrap justify-between gap-10 ">
                    <div className="flex h-auto flex-1 flex-col">
                      <div className="relative w-full rounded-lg border border-solid border-gray-100 py-7 px-7 focus:border-[1px] focus:border-solid focus:border-primary focus:shadow-[0_0px_0px_1px_#F1891E] ">
                        <input
                          type="text"
                          name=""
                          id="Name"
                          autoComplete="on"
                          required
                          className="peer block  bg-white text-right   text-2xl  transition-all"
                        />

                        <label
                          htmlFor="Name"
                          dir="ltr"
                          className="absolute right-4 left-auto top-0 bottom-0 my-auto flex h-fit w-fit select-none px-5  text-[13px] text-disable transition-all duration-300 peer-valid:m-0 peer-valid:-translate-y-1/2 peer-valid:text-primary peer-focus:m-0 peer-focus:-translate-y-1/2  peer-focus:bg-white peer-focus:text-primary"
                        >
                          نام
                        </label>
                      </div>
                    </div>
                    <div className="flex h-auto flex-1 flex-col">
                      <div className="relative w-full rounded-lg border border-solid border-gray-100 py-7 px-7 focus:border-[1px] focus:border-solid focus:border-primary focus:shadow-[0_0px_0px_1px_#F1891E] ">
                        <input
                          type="text"
                          name=""
                          id="family"
                          autoComplete="on"
                          required
                          className="  peer block  bg-white text-right   text-2xl  transition-all"
                        />

                        <label
                          htmlFor="family"
                          dir="ltr"
                          className="absolute right-4 left-auto top-0 bottom-0 my-auto flex h-fit w-fit select-none px-5  text-[13px] text-disable transition-all duration-300 peer-valid:m-0 peer-valid:-translate-y-1/2 peer-valid:text-primary peer-focus:m-0 peer-focus:-translate-y-1/2  peer-focus:bg-white peer-focus:text-primary"
                        >
                          نام خانوادگی
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full rounded-lg border border-solid border-gray-100 py-7 px-10 focus:border-[1px] focus:border-solid focus:border-primary focus:shadow-[0_0px_0px_1px_#F1891E] ">
                    <input
                      type="email"
                      name=""
                      id="email"
                      autoComplete="on"
                      required
                      className=" peer mr-auto block  w-[95%] bg-white   text-right text-2xl transition-all"
                    />
                    <span className="absolute left-10 top-0 bottom-0 my-auto flex h-fit  w-[5%] cursor-default">
                      <User size="25" color="#e7e7e7" />
                    </span>
                    <label
                      htmlFor="email"
                      dir="ltr"
                      className="absolute right-4 left-auto top-0 bottom-0 my-auto flex h-fit w-fit select-none px-5  text-[13px] text-disable transition-all duration-300 peer-valid:m-0 peer-valid:-translate-y-1/2 peer-valid:text-primary peer-focus:m-0 peer-focus:-translate-y-1/2  peer-focus:bg-white peer-focus:text-primary"
                    >
                      ایمیل
                    </label>
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-green-600 px-10 py-5 text-2xl font-bold text-white transition-opacity duration-200 hover:opacity-75	"
                  >
                    <span>ثبت نام </span>
                    <LoginCurve
                      size="25"
                      color="#fff"
                      className="mr-3 rotate-180"
                    />
                  </motion.button>
                </div>
              </form>
            </main>
            <footer className="group my-10 block overflow-hidden text-center text-gray-400 ">
              <Link
                to={"/login"}
                className="transition-default border-b   pb-4 text-2xl  hover:text-primary   "
              >
                حساب کاربری دارم
              </Link>
            </footer>
          </div>
          <div className="mt-10">
            <h4 className="text-center text-xl font-medium text-disable">
              تمامی حقوق برای وبسایت مهدی نظری محفوظ می‌باشد. -
              <span className="text-headingColor">©{year}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
