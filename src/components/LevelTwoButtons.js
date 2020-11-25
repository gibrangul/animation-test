import React from "react";
import "./leveltwobuttons.scss";
import { motion } from "framer-motion";

const LevelTwoButtons = ({ height, transition, onClick }) => {
  const buttonVariants = {
    visible: {
      opacity: 1,
      height: `${height}px`,
      transition,
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition,
    },
  };
  return (
    <motion.div
      className="level-two-buttons"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="button" onClick={onClick}>
        Lines
      </div>
      <div className="button" onClick={onClick}>
        Machines
      </div>
      <div className="button" onClick={onClick}>
        Workers
      </div>
    </motion.div>
  );
};

export default LevelTwoButtons;
