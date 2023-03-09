import {  useState } from "react";
import { ArrowLeft } from "iconsax-react";
import {motion} from 'framer-motion'

const Otp = ({ page, setPage }) => {
  const [activeEye, setActiveEye] = useState(false),
    [passwordShown, setPasswordShown] = useState(false),
    showPasswordHandle = () => {
      setActiveEye(!activeEye);
    },
    togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };

  return (
    <>
   <div className="w-full overflow-hidden">
   <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{
      duration: 0.5,
    }}
    variants={{
      hidden: {
        opacity: 0,
        x: 50,
      },
      visible: { opacity: 1, x: 0 },
    }}
        className="  flex flex-col gap-y-5 relative"

      >
        <div className="w-full flex flex-col justify-start ">
          <p className="text-[15px] text-disable font-light mb-2 text-right w-full dark:text-slate-400">
            کد پیامک شده را وارد نمایید.
          </p>
          <strong className="text-2xl text-headingColor  font-bold w-full font-pinar cursor-default">
            0084 289 916 98+
          </strong>
        </div>
        <form className="w-full  ">
          <div className="relative flex justify-center gap-x-2">
            <div className="relative w-20 h-24 bg-gray-100 rounded-lg py-5        border-[1px] border-solid   focus-within:border-green-600 transition-default    ">
              <input
                type="text"
                name=""
                id="otp5"
                autoComplete="off"
                required
                tabIndex="5"
                className=" w-full h-full  bg-gray-100  text-center text-2xl   transition-all  group px-3"
              />
            </div>
            <span className="text-2xl font-bold">-</span>
            <div className="relative w-20 h-24 bg-gray-100 rounded-lg py-5 overflow-hidden       border-[1px] border-solid   focus-within:border-green-600 transition-default   ">
              <input
                type="text"
                name=""
                id="otp4"
                autoComplete="off"
                required
                tabIndex="4"
                className=" w-full h-full  bg-gray-100  text-center text-2xl   transition-all  peer px-3"
              />
            </div>
            <span className="text-2xl font-bold">-</span>
            <div className="relative w-20 h-24 bg-gray-100 rounded-lg py-5 overflow-hidden       border-[1px] border-solid   focus-within:border-green-600 transition-default   ">
              <input
                type="text"
                name=""
                id="otp3"
                autoComplete="off"
                required
                tabIndex="3"
                className=" w-full h-full  bg-gray-100  text-center text-2xl   transition-all  peer px-3"
              />
            </div>
            <span className="text-2xl font-bold">-</span>
            <div className="relative w-20 h-24 bg-gray-100 rounded-lg py-5 overflow-hidden       border-[1px] border-solid   focus-within:border-green-600 transition-default   ">
              <input
                type="text"
                name=""
                id="otp2"
                autoComplete="off"
                required
                tabIndex="2"
                className=" w-full h-full  bg-gray-100  text-center text-2xl   transition-all  peer px-3"
              />
            </div>
            <span className="text-2xl font-bold">-</span>
            <div className="relative w-20 h-24 bg-gray-100 rounded-lg py-5 overflow-hidden       border-[1px] border-solid   focus-within:border-green-600 transition-default   ">
              <input
                type="text"
                name=""
                id="otp1"
                autoComplete="off"
                required
                tabIndex="1"
                className=" w-full h-full  bg-gray-100  text-center text-2xl   transition-all  peer px-3"
              />
            </div>
          </div>
          <div className="w-full mt-10 flex  justify-between items-center">
            <button className="text-xl text-headingColor transition-default  hover:text-primary">
              ارسال مجدد کد
            </button>
            <p className=" text-center text-2xl cursor-default">00:00</p>
          </div>
          {/* <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="flex w-1/2 mx-auto text-white text-center justify-center mt-10 text-2xl px-10 py-5 rounded-primary bg-green-600 font-bold transition-opacity duration-200 hover:opacity-75	"
                >
                  <span>تایید </span>
                  <TickCircle
                    size="25"
                    color="#fff"
                    variant="Broken"
                    className="mr-3 "
                  />
                </motion.button> */}
        </form>
      </motion.div>
   </div>

      <button
        type="button"
        className="flex justify-center bg-white shadow-default absolute left-0 top-5 -translate-x-1/2 rounded-full p-3 border border-solid border-slate-400  transition-default "
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <ArrowLeft variant="Broken" size="23" color="#181b31" />
      </button>

      {/* <div className="mt-10">
            <h4 className="text-center text-disable text-xl font-medium">
              تمامی حقوق برای وبسایت مهدی نظری محفوظ می‌باشد - 
              <span className="text-headingColor mx-1">©{year}</span>
            </h4>
          </div> */}

      {/* Icon In background */}
    </>
  );
};

export default Otp;
