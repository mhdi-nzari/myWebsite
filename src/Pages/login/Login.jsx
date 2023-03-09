import { useState } from "react";
import LoginProcess from "@/Components/Ui/Login/LoginProcess";

import LoginWithMobile from "./LoginWithMobile";
import Otp from "./Otp";

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
    [page, setPage] = useState(0),
    componentList = [
      <LoginWithMobile page={page} setPage={setPage} />,
      <Otp page={page} setPage={setPage} />,
    ];

  return (
    <>
      <div className="relative flex h-full w-full justify-center">
        <div className=" flex h-fit w-full flex-col justify-center">
          <div
            className="transition-default block w-[80%] max-w-[450px] rounded-primary shadow-default "
          >
            <header className="block rounded-tl-primary rounded-tr-primary bg-[#304050]  px-8 py-10 text-center text-white dark:bg-primary dark:text-white ">
              <h1 className="select-none text-2xl font-semibold">
                پنل ورود کاربران
              </h1>
            </header>
            <main className="relative   flex flex-col gap-y-5 rounded-bl-primary rounded-br-primary px-8 py-10 dark:bg-slate-200  ">
              <LoginProcess page={page} />
              {componentList[page]}
            </main>
            {/* <footer className="my-10 text-center block text-gray-400">
              <Link to={"/resetPass"} className="text-2xl border-b   pb-4 transition-default  hover:text-primary ">
                بازیابی رمزعبور
              </Link>
            </footer> */}
          </div>
        </div>
      </div>

      {/* Icon In background */}
    </>
  );
};

export default Login;
