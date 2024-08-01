import React from "react";
import "./Transition.css";
import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />
      <motion.div className="transition">
        {Array.from({ length: 200 }).map((_, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              ease: "linear",
              delay: Math.random() * 1,
            }}
          ></motion.li>
        ))}
      </motion.div>
    </>
  );
};

export default Transition;
