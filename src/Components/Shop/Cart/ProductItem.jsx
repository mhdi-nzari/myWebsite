import React from "react";
import { Html5 } from "iconsax-react";
import { ReactComponent as Toman } from "@/assets/img/toman.svg";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const ProductItem = (props) => {
  return (
    <>
      <motion.figure
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0  , x:20}}
        transition={{ layout: { duration: 0.5 } }}
        className="flex flex-wrap  w-full items-center bg-white shadow-default rounded-secondary px-10 py-16  "
      >
        <div className="flex basis-full flex-col md:flex-row  md:basis-full lg:basis-8/12">
          <div className="w-full sm md:w-3/6">
            <img
              src={props.productImage}
              className="h-150 w-full rounded-secondary"
              width="200px"
              height="200px"
              alt="productItem"
            />
          </div>

          <div className="flex items-start w-auto pr-5 mt-10 md:mt-0">
            <span className="ml-2 ">
              <Html5 size="25" className="" variant="Bulk" />
            </span>
            <p className="text-headingColor font-bold line-clamp-2 text-right  text-3xl leading-[3.2rem] md:text-right">
              {props.productTitle}
            </p>
          </div>
        </div>

        <figcaption className="flex w-full basis-full mt-12 sm lg:basis-4/12">
          <div className="flex flex-1 justify-start lg:justify-center   basis-4/12">
            <p className="text-primary font-bold text-3xl md:text-4xl">
              {props.productPrice}
            </p>
            <Toman className="mr-3  h-10 w-10" />
          </div>
          <div className="m-auto">
            <motion.button
              onClick={props.productDelete}
              whileTap={{ scale: 0.9 }}
              className="trashIco p-2 rounded-2xl bg-gray-200  flex justify-center "
            >
              <lord-icon
                src="https://cdn.lordicon.com/jmkrnisz.json"
                trigger="hover"
                colors="primary:#f47373"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
              {/* <p className="text-[#f47373] font-medium text-2xl">حذف</p> */}

            </motion.button>
          </div>
        </figcaption>
      </motion.figure>
    </>
  );
};

export default ProductItem;
