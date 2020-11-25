import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDimensions from "./utils/useDimensions";
import KPI from "./KPI";

const CONTAINER_MARGIN = 40;
const SPACING = 32;
const ROW_HEIGHT = 72;
const NUM_COLUMNS = 4;
const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const getGridDimensions = (width, height) => {
  const cardLarge = (width - SPACING * (NUM_COLUMNS - 1) - 64) / NUM_COLUMNS;
  const cardSmall = 324;
  return {
    large: {
      gridAutoFlow: "row",
      gridTemplateColumns: `${cardLarge}px `.repeat(NUM_COLUMNS),
      gridTemplateRows: `${cardLarge}px`,
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      paddingBottom: `${SPACING}px`,
      columnGap: `${SPACING}px`,
      transition: DEFAULT_TRANSITION,
      // maxHeight: `${height - CONTAINER_MARGIN * 2 - ROW_HEIGHT}px`,
    },
    small: {
      gridAutoFlow: "column",
      gridTemplateColumns: `${cardSmall}px `.repeat(NUM_COLUMNS),
      gridTemplateRows: `${ROW_HEIGHT}px`,
      marginLeft: "0px",
      marginRight: "0px",
      paddingBottom: `0px`,
      columnGap: "0px",
      transition: DEFAULT_TRANSITION,
      // maxHeight: `${ROW_HEIGHT}px`,
    },
  };
};
const chartList = [
  {
    name: "Efficiency",
    data: [31, 50, 60, 51, 42, 96, 100],
    colors: ["#3CC8BA"],
  },
  {
    name: "Performance",
    data: [60, 50, 65, 51, 60, 80, 75],
    colors: ["#3C52C8"],
  },
  {
    name: "LBR",
    data: [10, 29, 42, 32, 65, 45, 60],
    colors: ["#FFEB85"],
  },
  {
    name: "DHU",
    data: [70, 60, 50, 40, 30, 20, 9],
    colors: ["#FF8585"],
  },
  {
    name: "Turnover",
    data: [35, 41, 30, 23, 24, 25, 32],
    colors: ["#FFC785"],
  },
  {
    name: "Absenteeism",
    data: [29, 35, 32, 20, 15, 15, 32],
    colors: ["#D185FF"],
  },
  {
    name: "Machine Utlization",
    data: [70, 60, 50, 40, 30, 20, 9],
    colors: ["#FF8C85"],
  },
  {
    name: "WIP",
    data: [2000, 2700, 2800, 3200, 3200, 3200, 3200],
    colors: ["#8F85FF"],
    dataType: "PCs",
  },
];

const App = () => {
  const { width, height } = useDimensions();

  // console.log(width, height);
  const cardLarge = (width - 208) / NUM_COLUMNS;
  const cardSmall = 324;

  const girdVariants = useMemo(() => getGridDimensions(width, height), [
    width,
    height,
  ]);

  const gridContainerVariants = {
    small: {
      height: `${ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
      overflowY: "hidden",
      overflowX: "scroll",
    },
    large: {
      height: `${height - CONTAINER_MARGIN * 2 - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
      overflowY: "scroll",
      overflowX: "hidden",
    },
  };

  const girdSecondVariants = {
    large: {
      overflowY: "scroll",
      overflowX: "hidden",
      gridAutoFlow: "row",
      gridTemplateColumns: `${cardLarge}px `.repeat(NUM_COLUMNS),
      gridTemplateRows: `${cardLarge}px`,
      marginTop: `${SPACING}px`,
      marginLeft: `${SPACING}px`,
      marginRight: `${SPACING}px`,
      marginBottom: "0px",
      columnGap: `${SPACING}px`,
      transition: DEFAULT_TRANSITION,
    },
    small: {
      overflowY: "hidden",
      overflowX: "scroll",
      gridAutoFlow: "column",
      gridTemplateColumns: `${cardSmall}px `.repeat(NUM_COLUMNS),
      gridTemplateRows: `${ROW_HEIGHT}px`,
      marginTop: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      columnGap: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const itemVariants = {
    large: {
      borderRadius: "40px",
      transition: DEFAULT_TRANSITION,
    },
    small: {
      borderRadius: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const buttonVariants = {
    visible: {
      opacity: 1,
      height: `${ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const dataVariants = {
    visible: {
      opacity: 1,
      height: `${height - CONTAINER_MARGIN * 2 - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const anotherVariant = {
    buttons: {
      height: `${ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
      borderTop: "1px solid #B8BCC7",
    },
    full: {
      height: `${height - CONTAINER_MARGIN * 2 - ROW_HEIGHT}px`,
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
      transition: DEFAULT_TRANSITION,
    },
    visible: {
      opacity: 1,
      height: "37px",
      paddingTop: `${SPACING}px`,
      transition: DEFAULT_TRANSITION,
    },
  };

  const [isExapnded, setIsExpanded] = useState(false);
  const [isSecondExapnded, setIsSecondExpanded] = useState(false);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          padding: "0 32px",
          height: "80px",
          alignItems: "center",
        }}
      >
        <h1 className="primary-font">Dashboard</h1>
      </div>
      <motion.div
        variants={gridContainerVariants}
        initial="large"
        animate={isExapnded ? "small" : "large"}
      >
        <motion.div
          className="kpi-grid"
          variants={girdVariants}
          initial="large"
          animate={isExapnded ? "small" : "large"}
        >
          {chartList.map((chartData) => (
            <KPI
              key={chartData.name}
              chartData={chartData}
              onClick={() => {
                setIsExpanded(false);
                setIsSecondExpanded(false);
              }}
              expanded={!isExapnded}
              dimensions={{
                maxWidth: cardLarge,
                minWidth: cardSmall,
                minHeight: 72,
              }}
            />
          ))}
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
                onClick={() => setIsExpanded(!isExapnded)}
              >
                Lines
              </div>
              <div
                className="section"
                onClick={() => setIsExpanded(!isExapnded)}
              >
                Machines
              </div>
              <div
                className="section"
                onClick={() => setIsExpanded(!isExapnded)}
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
                  // paddingTop: `${SPACING}px`,
                }
              }
            >
              <AnimatePresence>
                {!isSecondExapnded && (
                  <motion.h1
                    // onClick={() => setIsSecondExpanded(!isSecondExapnded)}
                    style={{ margin: "0px", marginLeft: `${SPACING}px` }}
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
                initial="large"
                animate={isSecondExapnded ? "small" : "large"}
              >
                <motion.div
                  className="kpi-item"
                  variants={itemVariants}
                  animate={isSecondExapnded ? "small" : "large"}
                  style={{
                    backgroundColor: "#FF8585",
                  }}
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
                  onClick={() => setIsSecondExpanded(!isSecondExapnded)}
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
