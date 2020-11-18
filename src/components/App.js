import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDimensions from "./utils/useDimensions";

const App = () => {
  const { width, height } = useDimensions();
  const kpiRef = useRef(null);
  const lineRef = useRef(null);
  // console.log(width, height);
  const cardLarge = (width - 224) / 3;
  const cardSmall = (width - 80) / 3;
  const rows = Math.ceil(7 / 3);
  const girdVariants = {
    large: {
      gridAutoFlow: "row",
      overflow: "scroll",
      // overflowX: "hidden",
      gridTemplateColumns: `${cardLarge}px ${cardLarge}px ${cardLarge}px`,
      gridTemplateRows: `${cardLarge}px `.repeat(rows),
      marginTop: "32px",
      marginLeft: "32px",
      marginRight: "32px",
      marginBottom: "0px",
      columnGap: "32px",
      transition: { duration: 0.4, ease: "easeInOut" },
      height: `${height - 80 - 72}px`,
      gridRowGap: "32px",
    },
    small: {
      // overflowY: "hidden",
      overflow: "hidden",
      // gridAutoFlow: "column",
      gridTemplateColumns: `${cardSmall}px `.repeat(3),
      gridTemplateRows: "72px ".repeat(rows),
      marginTop: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      columnGap: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
      height: `${72 * rows}px`,
      gridRowGap: "0px",
    },
  };

  const girdSecondVariants = {
    large: {
      overflow: "scroll",
      // gridAutoFlow: "row",
      gridTemplateColumns: `${cardLarge}px ${cardLarge}px ${cardLarge}px`,
      gridTemplateRows: `${cardLarge}px `.repeat(rows),
      marginTop: "32px",
      marginLeft: "32px",
      marginRight: "32px",
      marginBottom: "0px",
      columnGap: "32px",
      transition: { duration: 0.4, ease: "easeInOut" },
      height: `${height - 80 - 72 * rows - 32 - 37 - 64}px`,
      gridRowGap: "32px",
    },
    small: {
      overflow: "hidden",
      // gridAutoFlow: "column",
      gridTemplateColumns: `${cardSmall}px `.repeat(3),
      gridTemplateRows: "72px ".repeat(rows),
      marginTop: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      columnGap: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
      height: `${72 * rows}px`,
      gridRowGap: "0px",
    },
  };

  const itemVariants = {
    large: {
      flexDirection: "column",
      borderRadius: "20px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    small: {
      flexDirection: "row",
      borderRadius: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    visible: {
      opacity: 1,
      height: "72px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const dataVariants = {
    visible: {
      opacity: 1,
      height: `${height - 80 - 72 * rows}px`,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const anotherVariant = {
    buttons: {
      height: "72px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    full: {
      height: `${height - 80 - 72 * rows}px`,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 12,
        delayChildren: 3,
      },
    },
  };

  const sectionHeaderVariant = {
    hidden: {
      opacity: 0,
      paddingTop: "0px",
      height: "0px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "37px",
      paddingTop: "32px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const [isExapnded, setIsExpanded] = useState(false);
  const [isSecondExapnded, setIsSecondExpanded] = useState(false);
  return (
    <div className="container">
      <motion.div
        className="kpi-grid"
        variants={girdVariants}
        animate={isExapnded ? "small" : "large"}
        ref={kpiRef}
      >
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#FFD8D8",
          }}
          onClick={() => {
            setIsExpanded(false);
            setIsSecondExpanded(false);
          }}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 1</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#D8D8FF",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 2</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#D8FFE0",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 3</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#F9FFD8",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 4</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#FFD8FB",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 5</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#D8FDFF",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 6</h3>
          </div>
        </motion.div>
        <motion.div
          className="kpi-item"
          variants={itemVariants}
          animate={isExapnded ? "small" : "large"}
          style={{
            backgroundColor: "#D8FDFF",
          }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="content">
            <h1>32%</h1>
            <h3>KPI 7</h3>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={anotherVariant}
        // initial="buttons"
        animate={isExapnded ? "full" : "buttons"}
      >
        <AnimatePresence>
          {!isExapnded && (
            <motion.div
              style={{
                display: "flex",
                // position: "absolute",
              }}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div
                className="section"
                style={{ backgroundColor: "#EC8986" }}
                onClick={() => {
                  setIsExpanded(!isExapnded);
                  kpiRef.current.scrollTop = 0;
                }}
              >
                Lines
              </div>
              <div
                className="section"
                style={{ backgroundColor: "#FFC785" }}
                onClick={() => {
                  setIsExpanded(!isExapnded);
                  kpiRef.current.scrollTop = 0;
                }}
              >
                Machines
              </div>
              <div
                className="section"
                style={{ backgroundColor: "#FFEB85" }}
                onClick={() => {
                  setIsExpanded(!isExapnded);
                  kpiRef.current.scrollTop = 0;
                }}
              >
                Workers
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExapnded && (
            <motion.div
              variants={dataVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={
                {
                  // backgroundColor: "black",
                  // position: "absolute",
                  // paddingTop: "32px",
                }
              }
            >
              <AnimatePresence>
                {!isSecondExapnded && (
                  <motion.h1
                    // onClick={() => {setIsSecondExpanded(!isSecondExapnded)kpiRef.current.scrollTop = 0;}}
                    style={{ margin: "0px", marginLeft: "32px" }}
                    variants={sectionHeaderVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    Lines
                  </motion.h1>
                )}
              </AnimatePresence>
              <motion.div
                className="kpi-grid"
                variants={girdSecondVariants}
                animate={isSecondExapnded ? "small" : "large"}
                ref={lineRef}
              >
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#FF8585",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 1</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#FFC785",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 2</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#FFEB85",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 3</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#85FFBD",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 4</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#85BDFF",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 5</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#D185FF",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 6</h1>
                  </div>
                </motion.div>
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#D8FDFF",
                  }}
                  onClick={() => {
                    setIsSecondExpanded(!isSecondExapnded);
                    lineRef.current.scrollTop = 0;
                  }}
                >
                  <div className="content">
                    <h1>Line 7</h1>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
