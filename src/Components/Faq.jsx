import { useState } from "react";
import { DirectLeft, MedalStar } from "iconsax-react";
import { faQ, faqConstruction } from "@/Util/api";

const faq = () => {
  const [toggleOne, setToggleOne] = useState(false),
    toggleListOne = (index) => {
      if (toggleOne === index) {
        return setToggleOne(false);
      }

      setToggleOne(index);
    };

  const [toggleTwo, setToggleTwo] = useState(false),
    toggleListTwo = (index) => {
      if (toggleTwo === index) {
        return setToggleTwo(false);
      }

      setToggleTwo(index);
    };
  return (
    <section className=" w-full my-20 px-12 md:px-20   ">
      <div className="w-full justify-center flex flex-col">
        <small className="text-primary font-semibold  font-pinar text-2xl text-center leading-[3.4rem] mb-5">
          سوالات متداول
        </small>
        <h2 className="text-3xl text-center lg:text-right font-bold text-headingColor leading-[3.6rem] lg:text-5xl dark:text-white">
          سوالات متداول اکثر مشتریان
        </h2>
      </div>
      <div className="w-full justify-center flex flex-col">
        <small className="text-disable font-normal text-2xl  mt-3 text-center leading-[3.4rem] dark:text-disableOverlay">
          پرسش و پاسخ هایی که به رفع ابهام شما کمک میکند .
        </small>
      </div>

      <div className="w-full relative my-16 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-20">
          <div className="w-full  basis-full flex-col gap-y-10 lg:basis-[46%] ">
            <h3 className="w-full text-center flex text-[#5f6b7c] font-bold relative text-3xl mb-10 lg:text-right lg:text-[26px] dark:text-white">
              <span>
                <MedalStar
                  size="30"
                  color="#F1891E"
                  variant="Broken"
                  className="ml-3"
                />
              </span>
              مقصد نهایی دوره ما
            </h3>

            <ul className="w-full flex flex-col gap-y-10   h-auto min-h-[300px] justify-center lg:justify-start  ">
              {faQ.map((item, index) => {
                return (
                  <li
                    className="cursor-pointer w-full flex flex-col py-5 px-10 bg-disableOverlay2 rounded-secondary"
                    key={index}
                  >
                    <div
                      className="w-full flex"
                      onClick={() => toggleListOne(index)}
                      key={index}
                    >
                      <span>
                        {toggleOne === index ? (
                          <DirectLeft
                            size="17"
                            color="#F1891E"
                            className="ml-3 transition-default -rotate-90"
                            variant="Bulk"
                          />
                        ) : (
                          <DirectLeft
                            size="17"
                            color="#b9b8b8"
                            className="ml-3 transition-default"
                            variant="Bulk"
                          />
                        )}
                      </span>

                      <span
                        className={`   font-medium  !leading-[2.5rem] text-2xl lg:font-semibold lg:text-xl ${
                          toggleOne === index
                            ? "text-primary"
                            : "text-disableUnique"
                        } `}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={`transition-default ease-in duration-300 ${
                        toggleOne === index
                          ? "h-auto max-h-[9999px] mt-5  "
                          : "max-h-0 overflow-hidden transition-default"
                      }`}
                    >
                      <p className="text-headingColor text-2xl font-normal text-right leading-[3.6rem] pr-0 transition-default lg:pr-[50px]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full  basis-full flex-col gap-y-10 lg:basis-[46%] ">
            <h3 className="w-full text-center flex text-[#5f6b7c] font-bold  relative text-3xl mb-10 lg:text-right lg:text-[26px] ">
              <span>
                <MedalStar
                  size="30"
                  color="#621EF1"
                  variant="Broken"
                  className="ml-3"
                />
              </span>
              این دوره مناسب چه کسانی است؟
            </h3>

            <ul className="w-full flex flex-col gap-y-10 h-auto min-h-[300px]  ">
              {faqConstruction.map((item, index) => {
                return (
                  <li
                    className="cursor-pointer w-full flex flex-col py-5 px-10 bg-disableOverlay2 rounded-secondary"
                    key={index}
                  >
                    <div
                      className="w-full flex"
                      onClick={() => toggleListTwo(index)}
                      key={index}
                    >
                      <span>
                        {toggleTwo === index ? (
                          <DirectLeft
                            size="17"
                            color="#F1891E"
                            className="ml-3 transition-default -rotate-90"
                            variant="Bulk"
                          />
                        ) : (
                          <DirectLeft
                            size="17"
                            color="#b9b8b8"
                            className="ml-3 transition-default"
                            variant="Bulk"
                          />
                        )}
                      </span>

                      <span
                        className={`   font-medium  !leading-[2.5rem] text-2xl lg:font-semibold lg:text-xl ${
                          toggleTwo === index
                            ? "text-primary"
                            : "text-disableUnique"
                        } `}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={`transition-default ease-in duration-300 ${
                        toggleTwo === index
                          ? "h-auto max-h-[9999px] mt-5  "
                          : "max-h-0 overflow-hidden transition-default"
                      }`}
                    >
                      <p className="text-headingColor text-2xl font-normal text-right leading-[3.6rem] pr-0 transition-default lg:pr-[50px]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
