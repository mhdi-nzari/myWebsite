import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft2,
  BagHappy,
  DiscountShape,
  Money2,
  ReceiptItem,
} from "iconsax-react";
import { ReactComponent as Toman } from "@/assets/img/toman.svg";

const Order = () => {
  return (
    <div className="flex flex-col w-full md:w-550 bg-white shadow-default rounded-secondary px-10 py-16 sticky  top-28 ">
      {/* title infoCard */}
      <div className="flex pb-7 border-b border-slate-200 w-full">
        <span className="ml-2">
          <ReceiptItem size="27" className="text-primary" variant="Bulk" />
        </span>
        <p className="text-headingColor font-bold text-2xl lg:text-3xl">
          اطلاعات پرداخت
        </p>
      </div>

      {/* Discount INput */}
      <div className="flex flex-col items-start w-full border-b border-slate-200 py-8 ">
        <p className=" font-medium text-2xl text-disableUnique text-right flex mb-5">
          <span>
            <DiscountShape
              size="22"
              className="text-red-400 ml-2"
              variant="Bulk"
            />
          </span>
          کد تخفیف
        </p>
        <div className="px-3 py-5 bg-gray-100 rounded-secondary flex justify-between w-full gap-10 border border-solid border-gray-200 focus-within:border-gray-300 transition-default ">
          <input
            type="text"
            className="w-[60%] text-headingColor text-2xl font-normal bg-transparent placeholder:text-disableOverlay placeholder:text-xl placeholder:font-medium px-5 h-full "
            placeholder="کد تخفیف را وارد نمائید"
          />
          <motion.div className="w-[30%]"   whileTap={{ scale: 0.95 }}>

          
          <button
          
            className="bg-gray-400 rounded-secondary text-xl font-bold text-white px-2 py-4 w-full h-full transition-default hover:bg-secondary"
          >
            اعمال کد
          </button>
          </motion.div>
        </div>
      </div>

      {/* Factor Price */}

      <div className="flex flex-col gap-y-7  w-full border-b border-slate-200 py-8">
        {/* Total Amount */}
        <div className="flex justify-between w-full">
          <div className="text-headingColor font-semibold text-2xl flex ">
            <span className="ml-2">
              <Money2 size="22" className="text-inherit" variant="Bulk" />
            </span>
            جمع کل
          </div>
          <div className="text-headingColor  text-3xl font-bold flex">
            <span>2,696,000</span>
            <Toman className="mr-3  h-10 w-10" />
          </div>
        </div>

        {/* Discount Amount */}
        <div className="flex justify-between w-full">
          <div className="text-headingColor font-semibold text-2xl flex ">
            <span className="ml-2">
              <DiscountShape
                size="22"
                className="text-inherit"
                variant="Bulk"
              />
            </span>
            تخفیف
          </div>
          <div className="text-red-400  text-2xl font-bold flex">
            <span>695,000 -</span>
            <Toman className="mr-3  h-10 w-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-7  w-full py-8">
        {/* Total Amount */}
        <div className="flex justify-between w-full">
          <div className="text-headingColor font-semibold text-2xl flex ">
            <span className="ml-2">
              <BagHappy size="22" className="text-inherit" variant="Bulk" />
            </span>
            مبلغ قابل پرداخت
          </div>
          <div className="text-blue-500  text-[20px] font-bold flex">
            <span>2,387,001</span>
            <Toman className="mr-3  h-10 w-10" />
          </div>
        </div>
      </div>
      <button className="default-btn w-full justify-center mt-3 flex font-bold  bg-green-600">
        پرداخت سفارش
        <span>
          <ArrowLeft2 size="22" className="text-inherit" variant="Bulk" />
        </span>
      </button>
    </div>
  );
};

export default Order;
