import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#0e1016]"
      />
      <div />
      <div />
    </>
  );
};

export default PageLoader;
