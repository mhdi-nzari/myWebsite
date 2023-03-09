import React, { useState } from "react";
import { motion } from "framer-motion";

import { ShoppingCart } from "iconsax-react";
import InfoPay from "@/Components/Shop/Cart/InfoPay";
import ProductItem from "../../Components/Shop/Cart/ProductItem";
import ProductItemCart from "@/assets/img/ProductItemCart.png";
import NotFoundItem from "../../Components/Shop/Cart/NotFoundItem";
import { toast } from "react-toastify";
import Breadcrumbs from "../../Components/Ui/Breadcrumbs";

const Cart = () => {
  const [productList, setProductList] = useState([
    {
      title: "دوره قرارداد نویسی  فرانت اند",
      image: ProductItemCart,
      price: "369,000",
      id: "0",
    },
    {
      title: "دوره قرارداد نویسی  بک اند",
      image: ProductItemCart,
      price: "369,000",
      id: "1",
    },
    {
      title: "دوره قرارداد نویسی ری اکت",
      image: ProductItemCart,
      price: "369,000",
      id: "2",
    },
  ]);

  // delete item with onclick on trashIcon
  const deleteProductHandler = (productId, titleProduct) => {
    const currentProduct = [...productList],
      finalList = currentProduct.filter((product) => product.id !== productId);
    setProductList(finalList);
    toast.success(`${titleProduct} حذف شد`);
  };

  return (
    <>
      <main className=" relative  mt-20 w-full mx-auto  md:max-w-screen-xl flex flex-col  items-start  px-12   ">
        <Breadcrumbs/>
        {/* titleBar */}
        <div className="flex  mb-10 ">
          <span className="ml-2">
            <ShoppingCart
              size="32"
              className="text-headingColor"
              variant="Bulk"
            />
          </span>

          <p className="text-3xl font-bold text-headingColor">سبد خرید شما</p>
        </div>

        <div className="relative w-full flex justify-center flex-col items-start gap-10  md:flex-row">
          <div className="w-full flex flex-col gap-10">
            {productList.length === 0 ? (
              <NotFoundItem />
            ) : (
              productList.map((item) => (
                <ProductItem
                  productImage={item.image}
                  productTitle={item.title}
                  productPrice={item.price}
                  key={item.id}
                  productDelete={() =>
                    deleteProductHandler(item.id, item.title)
                  }
                />
              ))
            )}
          </div>

          <InfoPay />
        </div>
      </main>
    </>
  );
};

export default Cart;
