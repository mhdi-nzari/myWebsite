import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const DefaultButton = (props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={`default-btn ${props.classStyle} `}
    >
      <Link className="flex" to={props.to}> {props.children}</Link>
    </motion.button>
  );
};
export default DefaultButton;
