import ContactForm from "@/Components/ContactForm";

// import media

import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import Helmet from "@/Components/Helmet/Helmet";
import CommonSection from "@/Components/Ui/CommonSection";
import { motion } from "framer-motion";
import { CallCalling, Instagram, Location, SmsTracking } from "iconsax-react";
import Cursor from "@/Components/Ui/Cursor";

const ContactUs = () => {
  return (
    <>
      <main className="flex w-full  flex-col">
        <section className="relative my-0 w-full   overflow-hidden border-b border-b-[#f0f4f5] bg-Overlay pt-40 pb-60">
          <Helmet title={"فرم تماس"}>
            <CommonSection
              title={"ارتباط با من"}
              discription={
                " برای ارتباط با من میتونید از طریق پل های زیر باهام تماس بگیرید"
              }
            />
          </Helmet>
          <div className="mt-20 flex w-full flex-row flex-wrap   justify-center   gap-x-5 px-6   md:px-20 lg:gap-x-10">
            <ul className="flex flex-wrap  justify-center gap-10">
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full    bg-white  shadow-default"
              >
                <Location
                  size="30"
                  color="#621EF1"
                  variant="TwoTone"

                  className="text-[25px] text-secondary [&>*]:transition-default [&>*]:group-hover:stroke-primary"
                />
              </motion.li>
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full  bg-white  shadow-default"
              >
                <a
                  href="tel:+989162890084"
                  target="_blank"
                  aria-label="myPhone"
                >
                  <CallCalling
                    size="30"
                    color="#621EF1"
                    variant="TwoTone"

                    className="transition-default text-[25px] text-secondary [&>*]:transition-default [&>*]:group-hover:stroke-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full    bg-white  shadow-default"
              >
                <a
                  href="mailto:nazarii.eng@gmail.com"
                  target="_blank"
                  aria-label="emailButton"
                >
                  <SmsTracking
                    size="30"
                    color="#621EF1"
                    variant="TwoTone"
                    className="transition-default text-[25px] text-secondary [&>*]:transition-default [&>*]:group-hover:stroke-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full    bg-white  shadow-default"
              >
                <a
                  href="https://www.instagram.com/mhdi_nzari/"
                  target="_blank"
                  aria-label="instagramPage"
                >
                  <Instagram
                    size="30"
                    color="#621EF1"
                    variant="TwoTone"
                    className="text-[25px] text-secondary [&>*]:transition-default [&>*]:group-hover:stroke-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full    bg-white  shadow-default"
              >
                <a
                  href="https://www.linkedin.com/in/mhdi-nzari/"
                  target="_blank"
                  aria-label="linkedinPage"
                >
                  <TfiLinkedin className="text-[25px] text-secondary transition-default group-hover:text-primary" />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ translateY: -10 }}
                className="group ml-3 flex h-[10em] w-[10em] justify-center rounded-full   bg-white  shadow-default "
              >
                <a
                  href="http://github.com/mhdi_nzari"
                  target="_blank"
                  aria-label="githubPage"
                >
                  <BsGithub className="text-[25px] text-secondary transition-default group-hover:text-primary" />
                </a>
              </motion.li>
            </ul>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
};

export default ContactUs;
