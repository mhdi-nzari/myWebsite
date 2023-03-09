import Header from "@/Pages/navbar";
import Footer from "@/Pages/footer";
import Routers from "@/routers/";
import "swiper/swiper-bundle.min.css"


const Layout = () => {


  return (
    <>
      <Header />
      <Routers />

      <Footer />
      
    </>
  );
};


export default Layout;
