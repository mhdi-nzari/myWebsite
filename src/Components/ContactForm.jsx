

import {  toast } from "react-toastify";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// import instanceAxios from "@/Util/axios";

const ContactUs = () => {
  const styleInput = `
  w-full  placeholder:text-disable py-3 text-[17px] placeholder:text-[13px] md:placeholder:text-[15px] bg-transparent`,
    {
      register,
      trigger,
      formState: { errors },
    } = useForm(),
    onSubmit = async (e) => {
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }

      if (errors.name) {
        const errorType = errors.name.type 
        const nameInput = errors.name.ref.parentElement
        nameInput.style.borderColor = 'red'
        setTimeout(() => {
          nameInput.style.borderColor = ''
        }, 3000);

       switch (errorType) {
        case 'required':
          toast.error('این فیلد الزامی میباشد.')
          break;
        case 'maxLength':
          toast.error(' محدودیت حداکثر 100 کاراکتر')
          break;
       }
      }
       if (errors.subject) {
        const errorType = errors.subject.type 
        const subjectInput = errors.subject.ref.parentElement
        console.log(subjectInput);
        subjectInput.style.borderColor = 'red'
        setTimeout(() => {
          subjectInput.style.borderColor = ''
        }, 3000);

       switch (errorType) {
        case 'required':
          toast.error('این فیلد الزامی میباشد.')
          break;
        case 'maxLength':
          toast.error(' محدودیت حداکثر 100 کاراکتر')
          break;
       }
      }
       if (errors.message) {
        const errorType = errors.message.type 
        const messageInput = errors.message.ref.parentElement
        console.log(messageInput);
        messageInput.style.borderColor = 'red'
        setTimeout(() => {
          messageInput.style.borderColor = ''
        }, 3000);

       switch (errorType) {
        case 'required':
          toast.error('این فیلد الزامی میباشد.')
          break;
        case 'maxLength':
          toast.error(' محدودیت حداکثر 1200 کاراکتر')
          break;
       }
      }
    }
  

  return (
    <>
      <section className="relative w-full px-10  mdg:px-20">
        <div className="flex w-full flex-wrap gap-20 py-20">
          <div className="basis-full mdg:basis-5/12 ">
            <small className="relative mb-10 inline-block text-4xl font-normal text-secondary before:absolute before:-bottom-5 before:right-0 before:h-[3px] before:w-16 before:bg-primary dark:text-disableOverlay">
              فرم تماس
            </small>

            <h1 className=" relative mb-8 w-fit text-4xl font-bold !leading-[4rem] text-headingColor before:absolute  before:-left-52 before:-top-36  before:z-[1]  before:content-sparkles md:text-5xl  mdg:text-[45px] mdg:!leading-[7rem] before:hidden mdg:before:block  dark:text-white ">
              پیام شما میتونه شروع <br className="hidden md:inline"></br> یک
              مکالمۀ دوستانه یا
              <br className="hidden md:inline"></br>کاری سازنده باشد
            </h1>
            <p className="mt-10 w-full  text-2xl font-medium leading-[3.4rem]  text-[#3f3f3f] mdg:w-[80%] mdg:line-clamp-3  dark:text-disableUnique ">
              برای تنظیم مشاوره یا پرسیدن سوالات خودتون میتونید از طریق فرم تماس
              برای ارتباط با من اقدام کنید. معمولا در دسترس هستم و بصورت روزانه
              در اسرع وقت پاسختون رو میدم پس پیشاپش از صبوریتون سپاسگزارم.
            </p>
          </div>
          <div className="relative mx-auto w-full basis-full before:absolute before:bottom-0 before:right-0 before:z-[1] before:hidden before:translate-x-1/2   before:translate-y-1/2 before:content-circleSmall mdg:basis-5/12 mdg:before:block ">
            <div className="relative  overflow-hidden rounded-primary bg-[#f6f8fa] px-10  py-20 before:absolute before:-left-32 before:-top-32 before:h-64 before:w-64 before:rounded-full before:bg-primary before:opacity-50  mdg:px-20 mdg:py-28 dark:bg-[#1f1f1f] dark:before:opacity-100 dark:before:bg-secondary">
              <form
                action="https://formsubmit.co/mahdi-nazari.gb008@gmail.com"
                method="POST"
                target="_blank"
                onSubmit={onSubmit}
                className="mx-auto flex w-full flex-col justify-center mdg:w-4/5  "
              >
                {/* Name input */}
                <div className="mt-5 w-full">
                  <label
                    htmlFor="name"
                    className="mb-4 inline-block text-right text-[15px] font-bold text-headingColor dark:text-white"
                  >
                    نام نام خانوادگی
                  </label>
                  <div className="transition-default rounded-xl border-[1px] border-solid border-transparent bg-white px-10 py-2   focus-within:border-[#ededed] dark:bg-[#3f3f3f]">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="نام نام خانوادگی"
                      autoComplete={"off"}
                      className={styleInput}
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                  </div>
                  
                 

                </div>

                {/* Title input */}
                <div className="mt-5 w-full">
                  <label
                    htmlFor="subject"
                    className="mb-4 inline-block text-right text-[15px] font-bold text-headingColor dark:text-white"
                  >
                    موضوع
                  </label>
                  <div className="transition-default rounded-xl border-[1px] border-solid border-transparent bg-white px-10 py-2   focus-within:border-[#ededed] dark:bg-[#3f3f3f]">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="موضوع شما"
                      autoComplete={"off"}
                      className={styleInput}
                      {...register("subject", {
                        required: true,
                        maxLength: 50,
                      })}
                    />
                  </div>
                </div>
                <div className="mt-5 w-full">
                  <label
                    htmlFor="message"
                    className="mb-4 inline-block text-right text-[15px] font-bold text-headingColor dark:text-white"
                  >
                    پیام
                  </label>
                  <div className="transition-default rounded-xl border-[1px] border-solid border-transparent bg-white px-10 py-2   focus-within:border-[#ededed] dark:bg-[#3f3f3f]">
                    <textarea
                      cols={40}
                      rows={7}
                      type="text"
                      name="message"
                      id="message"
                      placeholder="پیام شما"
                      autoComplete={"off"}
                      className={`${styleInput} max-h-[300px] min-h-[100px] `}
                   
                      {...register("message", {
                        required: true,
                        maxLength: 1200,
                      })}
                    />
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className=" mt-10 w-full rounded-lg bg-primary py-5  px-10 text-2xl  font-bold  text-white transition-opacity hover:opacity-50 " 
                >
                  ارسال پیام
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
