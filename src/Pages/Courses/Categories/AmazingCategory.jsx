import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import {
  ArrowLeft,
  ArrowLeft3,
  ArrowRight,
  Clock,
  Crown,
  Star,
  Video,
} from "iconsax-react";

import { Autoplay, A11y, Navigation } from "swiper";
import Book from "@/assets/img/Book.png";
import { ReactComponent as Toman } from "@/assets/img/toman.svg";
import ProductItem from "../../../Components/Shop/ProductItem";

const AmazingCategory = () => {
  return (
    <>
      <section className="relative flex w-full    flex-col  before:absolute  before:-left-10 before:top-0 before:bottom-0 before:-z-10 before:my-auto before:hidden before:h-[200px] before:w-[70px] before:bg-CourseEllipse2  before:bg-cover before:bg-center before:bg-no-repeat after:absolute after:-right-10 after:top-0 after:bottom-0 after:-z-10 after:my-auto  after:hidden after:h-[150px] after:w-[50px]  after:bg-CourseEllipse1 after:bg-cover after:bg-center after:bg-no-repeat md:px-20  lg:before:block lg:after:block">
        <div className="z-30 flex w-full flex-col rounded-primary bg-[#F3F7FF] p-16">
          {/* TitleBar */}
          <div className="mb-10 flex w-full justify-between ">
            <h3 className="flex text-3xl font-semibold text-headingColor ">
              <span>
                <Crown
                  size="32"
                  color="#FFB800"
                  variant="Bulk"
                  className="ml-2"
                />
              </span>
              دوره های شگفت انگیز
            </h3>
            <div className=" flex-row gap-5 hidden sm:flex">
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                className="nexts flex h-16 w-16 justify-center  rounded-secondary bg-white shadow-default"
              >
                <ArrowRight size="25" color="#3f3f3f" />
              </motion.button>
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                className="prevs flex h-16 w-16 justify-center  rounded-secondary bg-white shadow-default"
              >
                <ArrowLeft size="25" color="#3f3f3f" />
              </motion.button>
            </div>
          </div>

          {/* Item */}
          <div className="w-full ">
            <Swiper
              dir="rtl"
              modules={[Autoplay, A11y]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation={{
                prevEl: ".prevs",
                nextEl: ".nexts",
              }}
              loop={true}
              className="swiperCourse bg-[#F3F7FF]  pt-24"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 468px

                // when window width is >= 768px

                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                // when window width is >= 1024px

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmazingCategory;
