const ProductItem2 = () => {
  return (
    <figure className="flex h-full w-full flex-col overflow-hidden  rounded-primary bg-white ">
      <a href="/shop" className="h-full w-full px-8 pt-8 ">
        <img src={Book} alt="" className="h-auto w-full rounded-primary" />
      </a>
      <figcaption className="my-5 flex w-full flex-col px-8">
        <div className="flex w-full flex-row  justify-between mt-2 ">
          <div className="flex gap-2">
            <span className="">
              <Star size="20" color="#e2c600" variant="Broken" />
            </span>
            <p className="text-[13px] font-normal text-headingColor">4.5</p>
          </div>

          <div className="flex gap-2">
            <span className="">
              <Video size="20" color="#0076e2" variant="Broken" />
            </span>
            <p className="text-[13px] font-normal text-headingColor">2 قسمت</p>
          </div>

          <div className="flex gap-2">
            <span className="">
              <Clock size="20" color="#e20060" variant="Broken" />
            </span>
            <p className="text-[13px] font-normal text-headingColor">15 ساعت</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[16px] font-semibold leading-[3rem] text-headingColor  line-clamp-1">
            دوره طلایی هیولای جاوااسکریپت برای آخرین بار در ایران
          </h3>
          <p className="text-normal text-xl leading-[2.9rem] text-headingColor  line-clamp-3 ">
            نود جی اس یک محیط اجرایی سمت سرور برای زبان جاوااسکریپت است. یعنی
            Node به ما این امکان را میدهد تا با جاواسکریپت برنامه های سمت سرور و
            بک اند را توسعه بدیم. یکی از محبوب ترین و پر استفاده ترین فریم های
            ورک های سمت سرور نیز Express JS است که همراه با Nodeدر این دوره به
            صورت کامل پوشش داده شده است
          </p>
        </div>
      </figcaption>
      <span className="relative  w-full before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:h-10 before:w-10 before:-translate-x-1/2 before:translate-y-0 before:rounded-full before:bg-[#F3F7FF] after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:h-10 after:w-10 after:translate-x-1/2 after:translate-y-0 after:rounded-full after:bg-[#F3F7FF]  ">
        <svg
          width="810"
          height="3"
          viewBox="0 0 810 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M0.490234 1.34424L809.51 1.34424"
            stroke="#0B7077"
            strokeWidth="1.5"
            strokeDasharray="7 7"
          />
        </svg>
      </span>
      <div className=" flex w-full  justify-between px-8 py-6">
        <div className="flex cursor-default">
          <p className="cursor-default text-xl font-bold text-headingColor lg:text-3xl">
            990,000
          </p>
          <Toman className="mr-2  h-10 w-10" />
        </div>

        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="flex rounded-primary bg-primary px-5 py-3 text-xl text-white"
          >
            مشاهده دوره
            <span className="mr-1">
              <ArrowLeft3 size="20" color="#ffffff" variant="Bulk" />
            </span>
          </motion.button>
        </div>
      </div>
    </figure>
  );
};
export default ProductItem2;
