import { motion } from "framer-motion";
import { Mobile } from "iconsax-react";
import {  useState } from "react";

const Login = ({ page, setPage }) => {
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
      <div className="w-full py-6 overflow-hidden" >
        <form
          className="w-full "
        >
          <motion.div className="relative"
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
           >
            <div className="relative border border-solid border-gray-100 rounded-lg py-7 px-10 focus:border-[1px] focus:border-solid focus:border-primary dark:border-slate-400  ">
              <input
                type="text"
                name=""
                id="numberInput"
                autoComplete="on"
                required
                className=" w-[95%] block bg-transparent  text-left text-2xl   transition-all mr-auto peer "
              />
              <span className="absolute w-[5%] right-10 top-0 bottom-0 my-auto flex  h-fit cursor-default">
                <Mobile size="25" color="#e7e7e7" className="" />
              </span>
              <label
                htmlFor="numberInput"
                dir="ltr"
                className="w-fit h-fit text-disable bg-white text-[13px] absolute left-4 right-auto top-0 bottom-0 my-auto flex  px-5 transition-all duration-300 select-none peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:m-0 peer-focus:text-primary peer-valid:-translate-y-1/2  peer-valid:m-0 peer-valid:text-primary dark:bg-slate-200  dark:peer-focus:bg-slate-200 dark:text-slate-500"
              >
                شماره موبایل
              </label>
            </div>
            <p className="mt-5 text-xl invisible peer-invalid:visible  peer-invalid:text-pink-600   ">
              تعداد کمتر از 6 رقم میباشد
            </p>
          </motion.div>
          {/* <div className="relative   ">
              <div className="relative border border-solid border-gray-100 rounded-lg py-7 px-10 focus:border-[1px] focus:border-solid focus:border-primary focus:shadow-[0_0px_0px_1px_#F1891E]">
                <input
                  type={passwordShown ? "text" : "password"}
                  name=""
                  id="password"
                  autoComplete="off"
                  required
                  className="group w-[95%] h-full block bg-transparent   text-left text-2xl   transition-all mr-auto peer "
                />

                <button
                  type="button"
                  className="absolute   right-10 top-0 bottom-0 my-auto flex w-fit h-fit"
                  onClick={() => {
                    togglePassword();
                    showPasswordHandle();
                  }}
                >
                  {activeEye ? (
                    <Eye size="20" color="#F1891E" />
                  ) : (
                    <EyeSlash size="20" color="#e7e7e7" />
                  )}
                </button>
                <label
                  htmlFor="password"
                  dir="ltr"
                  className="w-fit h-fit text-disable text-[13px] absolute left-4 right-auto top-0 bottom-0 my-auto flex  px-5 transition-all duration-300 select-none peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:m-0 peer-focus:text-primary peer-valid:-translate-y-1/2  peer-valid:m-0 peer-valid:text-primary"
                >
                  کلمه عبور
                </label>
              </div>
              <p className="mt-5 text-xl invisible peer-invalid:visible peer-valid:text-green-600 peer-invalid:text-pink-600 pointer-events-none ">
                تعداد کمتر از 6 رقم میباشد
              </p>
            </div> */}
          <motion.a className="flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,delay:0.4
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: 50,
            },
            visible: { opacity: 1, x: 0 },
          }}>
           
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex font-bold text-white text-xl px-10 py-5 rounded-lg bg-green-600  transition-opacity duration-200 justify-center hover:opacity-75 w-full text-center	"
              onClick={(e) => {
                setPage(page + 1);
                e.preventDefault();
              }}
            >
              <span>دریافت کد تایید </span>
            </motion.button>
          </motion.a>
        </form>
      </div>

      {/* <footer className="my-10 text-center block text-gray-400">
              <Link to={"/resetPass"} className="text-2xl border-b   pb-4 transition-default  hover:text-primary ">
                بازیابی رمزعبور
              </Link>
            </footer> */}

      {/* Icon In background */}
    </>
  );
};

export default Login;
