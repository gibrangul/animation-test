import React from "react";
import { motion } from "framer-motion";
import "./sectionheader.scss";

const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const SectionHeader = ({ title, onBackClick }) => {
  const sectionHeaderVariant = {
    hidden: {
      opacity: 0,
      height: "0px",
      transition: DEFAULT_TRANSITION,
    },
    visible: {
      opacity: 1,
      height: "72px",
      transition: DEFAULT_TRANSITION,
    },
  };

  return (
    <motion.div
      className="section-header"
      variants={sectionHeaderVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1 className="primary-font flex flex-al">
        {/* {title} */}
        <button className="button-primary" onClick={onBackClick}>
          Back
        </button>
      </motion.h1>
    </motion.div>
  );
};

export default SectionHeader;
