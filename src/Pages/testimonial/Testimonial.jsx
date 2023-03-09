// Import Swiper styles

import { ReactComponent as LogoCompany } from "@/assets/img/dribbble.svg";
import google from "@/assets/img/google.png";
const Testimonial = () => {
  return (
    <>
     

      <section className="flex w-full  my-10  flex-col px-7 md:px-20 gap-x-10">
        <div className=" container w-full">
          <div className="grid grid-cols-2    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
            <div className="bg-gray-100  grayscale rounded-primary flex px-5 transition-default duration-1000 border border-solid border-transparent hover:border-primary hover:bg-white hover:grayscale-0 ">
              <span className="flex items-center justify-center w-48 h-full mx-auto">
                <img src={google} className="mx-auto w-full h-full" alt="" />
              </span>
            </div>
            <div className="bg-gray-100  grayscale rounded-primary flex px-5 transition-all duration-500 border border-solid border-transparent hover:border-primary hover:bg-white hover:grayscale-0 ">
              <span className="flex items-center justify-center w-48 h-full mx-auto">
                <img src={google}  className="w-full h-full" alt="" />
              </span>
            </div>
            <div className="bg-gray-100  grayscale rounded-primary flex px-5 transition-all duration-500 border border-solid border-transparent hover:border-primary hover:bg-white hover:grayscale-0 ">
              <span className="flex items-center justify-center w-48 h-full mx-auto">
                <img src={google}  className="w-full h-full" alt="" />
              </span>
            </div>
            <div className="bg-gray-100  grayscale rounded-primary flex px-5 transition-all duration-500 border border-solid border-transparent hover:border-primary hover:bg-white hover:grayscale-0 ">
              <span className="flex items-center justify-center w-48 h-full mx-auto">
                <img src={google}  className="w-full h-full" alt="" />
              </span>
            </div>
            <div className="bg-gray-100  grayscale rounded-primary flex px-5 transition-all duration-500 border border-solid border-transparent hover:border-primary hover:bg-white hover:grayscale-0 ">
              <span className="flex items-center justify-center w-48 h-full mx-auto">
                <img src={google}  className="w-full h-full" alt="" />
              </span>
            </div>
         
        
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
