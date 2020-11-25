import React from "react";
import { motion } from "framer-motion";
import "./linecard.scss";

const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const getContentVariants = ({ maxWidth, minWidth, minHeight }) => {
  return {
    large: {
      paddingTop: "48px",
      paddingBottom: "48px",
      paddingLeft: "48px",
      paddingRight: "48px",
      width: `${maxWidth - 96}px`,
      height: `${maxWidth - 96}px`,
      transition: DEFAULT_TRANSITION,
    },
    small: {
      paddingTop: "17px",
      paddingBottom: "17px",
      paddingLeft: "32px",
      paddingRight: "32px",
      width: `${minWidth - 64}px`,
      height: `${minHeight - 34}px`,
      transition: DEFAULT_TRANSITION,
    },
  };
};

const conatinerVariants = {
  large: {
    borderRadius: "40px",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    borderRadius: "0px",
    transition: DEFAULT_TRANSITION,
  },
};

const detailVariants = {
  large: {
    flexDirection: "column",
    alignItems: "flex-start",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    flexDirection: "row",
    alignItems: "center",
    transition: DEFAULT_TRANSITION,
  },
};

const LineCard = ({ lineData, expanded, onClick, dimensions }) => {
  const contentVariants = getContentVariants(dimensions);

  const currentSize = expanded ? "large" : "small";

  const titleVariant = {
    large: {
      marginBottom: "16px",
      color: "#4c5775",
      transition: DEFAULT_TRANSITION,
    },
    small: {
      marginBottom: "0px",
      color: lineData.color,
      transition: DEFAULT_TRANSITION,
    },
  };

  return (
    <motion.div
      className="line-card"
      variants={conatinerVariants}
      animate={currentSize}
      initial="large"
      onClick={onClick}
    >
      <motion.div
        className="line-card__content"
        variants={contentVariants}
        animate={currentSize}
      >
        <motion.div
          className="line-card__content__details"
          variants={detailVariants}
          animate={currentSize}
        >
          <motion.h1
            className="secondary-font"
            variants={titleVariant}
            animate={currentSize}
          >
            {lineData.name}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LineCard;
