import { AnimatePresence } from "framer-motion";
import Layout from "@/Components/Layout/Layout";

const App = () => {

  return (
    <AnimatePresence mode="wait">
      <Layout />
    </AnimatePresence>
  );
};

export default App;
