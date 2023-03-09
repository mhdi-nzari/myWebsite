import { Routes, Route } from "react-router-dom";

//  =============>>>>> Public Page

import Home from "@/Pages/home/Home";
import Portfolio from "@/Pages/portfolio/Portfolio";
import NotFound from "@/Pages/notFound/NotFound";
import ContactUs from "@/Pages/contactUs/ContactUs";
import Faq from "@/Pages/faq/Faq";
import AboutMe from "@/Pages/aboutMe/AboutMe";
import Login from "@/Pages/login/Login";

//  =============>>>>> Blog

import Blog from "@/Pages/blog/Blog";
import SingleBlog from "@/Pages/blog/SingleBlog";

//  =============>>>>> Podcast

import Podcast from "@/Pages/podcast/Podcast";


import ScrollBackToTop from "@/Components/Ui/ScrollBackToTop";

//  =============>>>>> Shoping

import Cart from "../Pages/Shop/Cart";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/Shop/SingleProduct";

import { ToastContainer } from "react-toastify";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singleBlog" element={<SingleBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/podcast" element={<Podcast />} />
     

        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleProduct" element={<SingleProduct />} />


      </Routes>

      <ScrollBackToTop />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName="toastBody"
      />
    </>
  );
};

export default Routers;
