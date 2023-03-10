import { ArrowUp2, Category2, SearchStatus } from "iconsax-react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useState } from "react";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col items-start sm:flex-row mdg:flex-col gap-7 w-full lg:w-400 lg:sticky  top-28 ">
      {/* wrapper */}
      <div className="flex flex-col w-full  bg-white shadow-default rounded-secondary  ">
        <div
          className={`flex justify-between w-full  border-b border-solid px-10 py-8 cursor-pointer ${
            isActive ? "border-gray-100" : "border-transparent"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex ">
            <span className="ml-2">
              <SearchStatus
                size="25"
                className="text-headingColor"
                variant="Bulk"
              />
            </span>
            <p className="text-headingColor font-semibold text-[17px] cursor-pointer whitespace-nowrap">
              وضعیت دوره
            </p>
          </div>

          <span>
            <ArrowUp2
              size="25"
              className={`text-headingColor transition-default ${
                isActive ? "rotate-180" : ""
              } `}
              variant="Broken"
            />
          </span>
        </div>

        {/* listItem */}
        <div
          className={`flex flex-col gap-y-7 w-full py-10 px-10 transition-default duration-300 ${
            isActive ? "max-h-0 overflow-hidden !py-0" : "height-auto"
          }`}
        >
          {/* item */}
          <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="relative ml-3 ">
                <input type="radio" id="rbx" className="hidden peer" />
                <label htmlFor="rbx" className=" relative top-px w-8 h-8 border border-solid border-disable rounded-full transition-[background] duration-150 ease-in cursor-pointer flex justify-center after:absolute after:w-4 after:h-4 after:rounded-full after:opacity-0 after:scale-0 after:bg-transparent  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in  peer-checked:border-transparent peer-checked:bg-[#6871f1] peer-checked:animate-[jelly_0.6s_ease-in-out] peer-checked:after:border-transparent peer-checked:after:bg-white  peer-checked:after:opacity-100 peer-checked:after:scale-100"></label>
              </div>


              <p className="text-[14px] text-headingColor font-medium">
                به زودی ...
              </p>
            </div>
            <p className="text-2xl text-disableUnique font-medium  relative z-[2]">
              12
              <i className="flex w-7 h-7  bg-disableOverlay2  rounded-full absolute -left-0 -bottom-0 z-[-1]"></i>
            </p>
          </div>

         {/* item */}
         <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="cntr ml-3">
                <input
                  type="checkbox"
                  className="hidden cbxInput"
                  id="item-0"
                />
                <label htmlFor="item-0" className="cbx"></label>
              </div>

              <p className="text-[14px] text-headingColor font-medium">
                درحال برگذاری
              </p>
            </div>
            <p className="text-2xl text-disableUnique font-medium relative z-[2]">
              12
              <i className="flex w-7 h-7  bg-disableOverlay2  rounded-full absolute -left-0 bottom-0 z-[-1]"></i>
            </p>
          </div>

          {/* item */}
          <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="cntr ml-3">
                <input
                  type="checkbox"
                  className="hidden cbxInput"
                  id="item-1"
                />
                <label htmlFor="item-1" className="cbx"></label>
              </div>

              <p className="text-[14px] text-headingColor font-medium">
                درحال برگذاری
              </p>
            </div>
            <p className="text-2xl text-disableUnique font-medium relative z-[2]">
              12
              <i className="flex w-7 h-7  bg-disableOverlay2  rounded-full absolute -left-0 bottom-0 z-[-1]"></i>
            </p>
          </div>
          {/* item */}
          <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="cntr ml-3">
                <input
                  type="checkbox"
                  className="hidden cbxInput"
                  id="item-2"
                />
                <label htmlFor="item-2" className="cbx"></label>
              </div>
              <p className="text-[14px] text-headingColor font-medium">
                تکمیل ضبط
              </p>
            </div>
            <p className="text-2xl text-disableUnique font-medium relative z-[2]">
              12
              <i className="flex w-7 h-7  bg-disableOverlay2  rounded-full absolute -left-0 bottom-0 z-[-1]"></i>
            </p>
          </div>
        </div>
      </div>
      {/* wrapper */}
      <div className="flex flex-col w-full  bg-white shadow-default rounded-secondary  ">
        <div
          className={`flex justify-between w-full  border-b border-solid px-10 py-8 cursor-pointer ${
            isActive ? "border-gray-100" : "border-transparent"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex ">
            <span className="ml-2">
              <Category2
                size="25"
                className="text-headingColor"
                variant="Bulk"
              />
            </span>
            <p className="text-headingColor font-semibold text-[17px] cursor-pointer whitespace-nowrap">
              دسته بندی دوره ها
            </p>
          </div>

          <span>
            <ArrowUp2
              size="25"
              className={`text-headingColor transition-default ${
                isActive ? "rotate-180" : ""
              } `}
              variant="Broken"
            />
          </span>
        </div>

        {/* listItem */}
        <div
          className={`flex flex-col gap-y-7 w-full py-10 px-10 transition-default duration-300 ${
            isActive ? "max-h-0 overflow-hidden !py-0" : "height-auto"
          }`}
        >
          {/* item */}
          <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="cntr ml-3">
                <input
                  type="checkbox"
                  className="hidden cbxInput"
                  id="item-4"
                />
                <label htmlFor="item-4" className="cbx"></label>
              </div>
              <p className="text-[14px] text-headingColor font-medium">
                فرانت اند
              </p>
            </div>
          </div>
          {/* item */}
          <div className="flex justify-between w-full ">
            <div className="flex">
              <div className="cntr ml-3">
                <input
                  type="checkbox"
                  className="hidden cbxInput"
                  id="item-5"
                />
                <label htmlFor="item-5" className="cbx"></label>
              </div>

              <p className="text-[14px] text-headingColor font-medium">
                بک اند
              </p>
            </div>
          </div>
          {/* item */}
        </div>
      </div>
    </div>
  );
};
export default Filter;
