import { Crown } from "iconsax-react";

import ProductItem from "@/Components/Shop/ProductItem";

import Filter from "@/Components/Shop/Filter/Filter";

const Shop = () => {
  return (
    <>
      <div className=" relative  mt-20 w-full mx-auto  flex flex-col  items-start  px-10 mdg:px-20   ">
        {/* titleBar */}
        <div className="flex  mb-20 w-full">
          <span className="ml-2">
            <Crown size="32" className="text-yellow-500" variant="Bulk" />
          </span>

          <p className="text-3xl font-bold text-headingColor">
            محصولات برنامه نویسی
          </p>
        </div>

        <div className="relative w-full flex justify-center flex-col items-start gap-32 lg:gap-20  mdg:flex-row">
          <Filter />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-28">
            <ProductItem  />
            <ProductItem  />
            <ProductItem  />
            <ProductItem  />
            <ProductItem  />
            <ProductItem  />
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
