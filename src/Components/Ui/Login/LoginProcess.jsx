 

import {
  Key,
  Login,
  Shop,
} from "iconsax-react";

const CheckoutProcess = ({ page }) => {
  return (
    <div className="w-full py-10 ">
      <div className="flex">
        <div className="w-1/3">
          <div className="relative mb-3">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mx-auto bg-white shadow-default rounded-full text-lg border-2 border-disable text-white flex items-center justify-center transition-default hover:-rotate-45">
              <span className="text-center text-white w-full">
                <Shop
                  size="28"
                  color="#3f3f3f"
                  variant="Broken"
                  className="mx-auto w-10"
                />
              </span>
            </div>
          </div>
          <p className="text-center  text-2xl text-headingColor">فروشگاه</p>
        </div>
        <div className="w-1/3">
          <div className="relative mb-3">
            <div className="absolute flex align-center items-center align-middle content-center top-1/2 translate-x-1/2 -translate-y-1/2 w-[calc((100%-6rem)-1rem)]">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 dark:bg-slate-400">
              <div  className="w-0 bg-slate-700 py-[3px] rounded mr-auto transition-all duration-500 dark" style={{width: page === 0 ? "0%": page === 1 ? "50%" :  page === 2 ? "100%" : "50%" }}></div>

              </div>
            </div>
            <div className={ `w-[40px] h-[40px] md:w-[50px] md:h-[50px] mx-auto bg-white shadow-default rounded-full text-lg border-2  text-white flex items-center justify-center transition-default  hover:rotate-45 ${page === 0 ? "border-disable" : page === 1 ? "border-primary" : '' }`}>
              <span className="text-center text-white w-full">
                <Key
                  size="28"
                  color="#3f3f3f"
                  variant="Broken"
                  className="mx-auto w-10"
                />
              </span>
            </div>
          </div>
          <p className="text-center  text-2xl text-headingColor">تایید پیامکی</p>
        </div>
        <div className="w-1/3">
          <div className="relative mb-3">
          <div className="absolute flex align-center items-center align-middle content-center top-1/2 translate-x-1/2 -translate-y-1/2 w-[calc((100%-6rem)-1rem)]">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 dark:bg-slate-400">
                <div className="w-3/5 bg-slate-700 py-[3px] rounded mr-auto progress-shim transition-all duration-500"  style={{width: page === 0? "50%": page === 1 ? "100%" : "0%"}}></div>
              </div>
            </div>
            <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] mx-auto bg-white shadow-default rounded-full text-lg border-2 border-primary text-white flex items-center justify-center transition-default  hover:-rotate-180 `}>
              <span className="text-center text-white w-full">
                <Login
                  size="28"
                  color="#3f3f3f"
                  variant="Broken"
                  className="mx-auto w-10"
                />
              </span>
            </div>
          </div>
          <p className="text-center  text-2xl text-headingColor">ورود</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProcess;
