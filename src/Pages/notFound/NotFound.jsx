import { BiHomeSmile } from "react-icons/bi";
import { VscDebugStepBack } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as NotFounds } from "@/assets/img/404.svg";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="my-0 flex w-full flex-col gap-10 px-6 md:flex-row md:px-20  ">
        <div className="flex w-full flex-col  items-start lg:w-1/2">
          <p className="w-full text-center text-[30px] font-light text-disableOverlay md:text-center lg:text-right lg:text-[50px]">
            404
          </p>
          <p className=" relative my-5 w-full text-center text-[20px] font-extrabold leading-[3.6rem]  text-headingColor before:absolute   before:right-0 before:-bottom-5 before:-z-10 before:hidden before:h-10 before:w-72 before:bg-[rgb(97,30,241)] md:text-center lg:text-right lg:text-[50px] lg:before:block  ">
            <span className="ml-5 text-primary">اوپس !!!</span>
            ای بابا اشتباه شد که ..
          </p>

          <small className="mt-10 w-full text-[15px] leading-[3.4rem] text-disable lg:w-2/3 lg:text-[20px]">
            احتمالا قسمتی از آدرس رو اشتباهی زدی یا دستت خورده بلاخره نمیدونم
            تقصیر مانیست تقصیر خودته :) پیشنهاد میکنم بهت که برگردی صفحه قبلی
            &#128514;
          </small>

          <div className="my-20 flex w-full flex-col gap-x-7 md:flex-row">
            <div className=" mt-5 w-full  md:mt-10 md:w-fit lg:w-fit">
              <button
                onClick={() => navigate(-1)}
                className="default-btn cta-holder w-full justify-center whitespace-nowrap bg-transparent text-headingColor  sm:justify-start "
              >
                برگشت به عقب
                <VscDebugStepBack className="h-12 w-12 text-inherit" />
              </button>
            </div>
            <Link to="/" className=" mt-5 w-full  md:mt-10 md:w-fit lg:w-fit">
              <button className="default-btn w-full justify-center whitespace-nowrap  sm:justify-start ">
                صفحه اصلی
                <BiHomeSmile className="h-12 w-12 text-inherit" />
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden w-full md:w-1/2 lg:block">
          <NotFounds className="h-full w-full" />
        </div>
      </section>
    </>
  );
};

export default NotFound;
