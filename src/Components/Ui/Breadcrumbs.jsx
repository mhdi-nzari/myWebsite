import { ArrowRight2 } from "iconsax-react";
import React from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between my-16 flex-wrap gap-y-10 md:gap-0">
      {/* back level */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
        className="border border-solid border-disable text-headingColor font-semibold  px-7 py-4 text-xl rounded-full flex"
      >
        <span className="ml-2">
          <ArrowRight size="15" className="text-disableOverlay" />
        </span>
        بازگشت
      </motion.button>

      {/* BreadCrumb */}
      <div className="flex">
        <ul className="flex flex-wrap gap-y-5">
          <li className=" font-semibold text-xl  md:text-2xl text-headingColor ">
            <Link to="/singleProduct/?">قرارداد برنامه نویسی طراحی محصول</Link>
          </li>

          <span className="mx-4">
            <ArrowRight2 size="20" variant="Bulk" className="text-primary" />
          </span>
          <li className="text-disableUnique text-xl font-semibold  md:text-2xl">
            <Link to="">دوره آموزشی</Link>
          </li>

          <span className="mx-4">
            <ArrowRight2 size="20" variant="Bulk" className="text-primary" />
          </span>
          <li className="text-disableUnique text-xl font-semibold  md:text-2xl">
            <Link to="/shop">فروشگاه</Link>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Breadcrumbs;
