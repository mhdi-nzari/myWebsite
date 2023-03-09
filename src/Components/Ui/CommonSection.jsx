import React from "react";
import Circle from "./ParticleBackground";

const CommonSection = ({ title, discription }) => {
  return (
    <>
      {/* <div className="absolute top-0 left-0 block w-full h-full   "></div> */}

      <Circle />

      {/* <div className="absolute top-0 left-0 block w-full h-full ">1</div> */}
      <div className="container text-center z-[4] ">
        <h1 className="text-5xl lg:text-[60px] font-pinar font-bold mb-10 text-headingColor">
          {title}
        </h1>
        <div className=" w-full lg:w-5/12 mx-auto">
          <p className="text-disableOverlay leading-[4rem] text-[1.6rem] 2xl:px-[12%]">
            {discription}
          </p>
        </div>
      </div>
    </>
  );
};

export default CommonSection;
