import { motion } from "framer-motion";


import { ReactComponent as ElementText2 } from "@/assets/img/elementText2.svg";
import { DirectLeft, MessageNotif } from "iconsax-react";

const NewsLetter = () => {
  return (
    <>
      {/* newsletter */}
      <section
        className="relative my-0 flex w-full gap-y-10  px-6 py-16 md:px-20   "
      >
        <div className="relative flex w-full   flex-col items-center  overflow-hidden rounded-primary bg-white px-10  py-10 shadow-default   before:absolute before:-right-10 before:-top-10 before:h-36 before:w-36 before:rounded-full before:bg-primaryOverlay before:opacity-50 after:absolute after:-left-10 after:-bottom-10 after:w-16 lg:after:h-48 after:h-16 lg:after:w-48 after:rounded-full after:bg-primaryOverlay after:opacity-50 md:px-20 md:py-20 lg:flex-row lg:py-32">
          <div className="flex w-full flex-col items-start sm:w-full md:w-1/2 lg:w-1/2  ">
            <div className="relative flex gap-x-5">
              <div className="h-20 w-2 rounded-full bg-primary"></div>
              <p className="text-3xl font-normal text-disable">
                خبرنامه ایمیلی
              </p>
              <ElementText2 className="absolute -left-9 -top-1 h-12 w-12 text-secondary" />
            </div>
            <p className="my-5 text-2xl font-bold !leading-[3.7rem] text-headingColor md:text-4xl ">
              از اتفاقات روز دنیای تکنولوژی باخبرت میکنم <br></br>و بی اطلاع
              نمیمونی :))
            </p>
            <p className="text-xl font-normal  !leading-[3.2rem] text-disableOverlay lg:text-2xl">
              میتونی با عضو شدن تو خبرنامه من ، میتونی برای مطلع شدن از جوامع
              برنامه <br></br>نویسی باخبر بشی درضمن قول می‌دم که اسپم نکنم و
              فقط اخبار مهم رو  برات ارسال کنیم :)
            </p>
          </div>

          <div className=" relative flex h-full w-full md:w-1/2  lg:w-1/2 ">
            <form className="w-full ">
              <div className=" danger my-16 flex rounded-secondary border border-slate-300   bg-disableOverlay2 py-3  px-5 lg:px-10 lg:py-6">
                <div className="hidden border-l-2 border-gray-200 px-3 pl-6  placeholder:text-sm md:block">
                  <MessageNotif size="32" color="#FF8A65" />
                </div>
                <input
                  type="email"
                  className="  relative  w-full grow bg-transparent pr-6 text-2xl font-normal text-headingColor  outline-none placeholder:text-right  placeholder:text-lg sm:w-auto  md:placeholder:text-2xl"
                  placeholder="ایمیل خود را وارد نمائید."
                />

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className=" transition-default group  mr-3 block"
                >
                  <button
                    type="submit"
                    className="default-btn cta-holder gap-x-2 px-5 py-5 text-xl  md:text-2xl "
                  >
                    عضومیشم
                    <DirectLeft
                      size="20"
                      color="#ffffff"
                      variant="Broken"
                      className=" transition-default hidden text-inherit  group-hover:-translate-x-3 lg:block"
                    />
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
