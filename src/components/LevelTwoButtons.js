import React from "react";
import "./leveltwobuttons.scss";
import { motion } from "framer-motion";

const LevelTwoButtons = ({
  height,
  transition,
  onClick,
  onClickMachines,
  onClickWorkers,
}) => {
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
        <div className="icon icon-32 icon-lines-w mr-12" />
        Lines
      </div>
      <div className="button" onClick={onClickWorkers}>
        <div className="icon icon-32 icon-orders-w mr-12" />
        Orders
      </div>
    </motion.div>
  );
};

export default LevelTwoButtons;
