import { useState } from "react";
import Helmet from "@/Components/Helmet/Helmet";
import CommonSection from "@/Components/Ui/CommonSection";
import { motion } from "framer-motion";

import { DirectLeft, MedalStar } from "iconsax-react";
import { faQ, faqConstruction } from "@/Util/api";

const Faq = () => {
  const [toggleTwo, setToggleTwo] = useState(false),
    toggleListTwo = (index) => {
      if (toggleTwo === index) {
        return setToggleTwo(false);
      }

      setToggleTwo(index);
    };

  const [toggleOne, setToggleOne] = useState(false),
    toggleListOne = (index) => {
      if (toggleOne === index) {
        return setToggleOne(false);
      }

      setToggleOne(index);
    };

  return (
    <main className="flex w-full  flex-col">
      <section className="relative my-0 w-full   overflow-hidden border-b border-b-[#f0f4f5] bg-Overlay pt-40 pb-60">
        <Helmet title={"سوالات متداول"}>
          <CommonSection
            title={"راهنمای مشاوره یا ثبت سفارش"}
            discription={
              " اگه برای برنامه نویس نیاز به کمک داری و در این زمینه نیاز به راهنمایی و مشاوره داری اینجا جایی هست که به اکثر سوالاتتون پاسخ دادم و کمکت میکنه  "
            }
          />
        </Helmet>
      </section>

      <section className="relative flex w-full flex-wrap place-content-between  items-start justify-around px-12  md:px-20">
        <div className="flex basis-full  rounded-secondary border border-gray-200 p-5 mdg:p-10 shadow-default mdg:basis-[70%] dark:bg-white">
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
        </div>

        <aside className="bannerFaq bg-center bg-repeat bg-contain  bg-gradient-to-r from-indigo-500 to-blue-500 transition-default top-0 hidden h-fit min-h-[100px] basis-[20%] rounded-secondary p-10 shadow-default lg:sticky lg:block">
          {/* bg-gradient-to-r from-indigo-500 to-blue-500  */}
          <div className="flex flex-col justify-center">
            <h3 className="text-center text-4xl font-bold leading-[3.6rem] text-white">
              جواب سوالتو <br></br> نگرفتی ؟!
            </h3>
            <p className="my-12 text-center text-[16px] leading-[2.8rem] text-white">
              تماس مستقیم <br></br>
              برای مشاوره رایگان
            </p>

            <a href="tel:+989162890084" className="text-5xl font-normal text-white">
              0084 289 0916
            </a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="http://t.me/mhdi_nzari"
              className="mt-5 flex w-3/4  justify-center rounded-full bg-primary py-3 px-5 text-lg text-white transition-opacity hover:opacity-80"
            >
              <span className="ml-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nN3Tv0vWURTHcU1BM1zEHBoicDF8BHFVEBddgpBEMBACySWiUdFFREQcJRBBFARRAsWQJn9AlEiCYn9HW1PQ8IoL54EvX748PurWne49P973c+45t6bmv1/owiL67wOpxyuc4ACjOL4LqBXTuMYynoW9Bxu3AXVjHReYRBNKZQgm8L6askZwin0MZOyz+IPxsH1E363KCl9SdYbfmM/Yv6G5qKw1XOEDHuXUTuEHVvAJteF7gMs8bAGfy2XlfGVVMxjCVzRm/B3YzSelN9jBIOoyqmYCVorEpL4tlzuW1Be9XW+U8xOr+B7A+njXS3QW5C0nIYUNiYA6vE2q49wQnS5MwlFedVFQglzFfgnbFWKvK8IygXt4Hp3dwiYe5mKe4rBa4Js0awHcjAvO0Z6JeZmdx5uAj/ELf8tdjD+bOv0iznMYrgoYCe/wOmdrwZeYiNT5J1UDK1yUfkca8tK9YTetf4H37+Ioh6yaAAAAAElFTkSuQmCC"
                  alt="telegramIcon"
                />
              </span>
              ارتباط آنلاین با من در تلگرام
            </motion.a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Faq;
