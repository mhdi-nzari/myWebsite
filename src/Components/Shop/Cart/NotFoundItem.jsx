import { EmojiNormal } from "iconsax-react";
import DefaultButton from "@/Components/Ui/DefaultButton";
import { motion } from "framer-motion";

const NotFoundItem = () => {
  return (
    <motion.div initial={{opacity:0  }} animate={{opacity:1}} exit={{}}  transition={{animate:{duration:0.5}}} className="flex flex-wrap flex-col gap-5 justify-center  w-full items-center bg-gray-50 border border-solidu rounded-secondary px-10 py-16 h-200 overflow-hidden relative after:absolute after:w-40 after:h-40 after:bg-primaryOverlay after:-left-10 after:-top-5 after:rounded-full">
      <div className="flex">
        <span className="ml-4">
          <EmojiNormal size="35" color="#FF8A65" />
        </span>
        <p className="text-3xl font-semibold text-headingColor">
          آیتمی برای خرید وجود ندارد
        </p>
      </div>
      <DefaultButton to="/" classStyle={"mt-1"}>بازگشت به خانه</DefaultButton>
    </motion.div>
  );
};
export default NotFoundItem;
