import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Chart from "react-apexcharts";
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

const titleVariant = {
  large: {
    marginBottom: "16px",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    marginBottom: "0px",
    transition: DEFAULT_TRANSITION,
  },
};

const percentVariant = {
  large: {
    fontSize: "4.5rem",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    fontSize: "2rem",
    transition: DEFAULT_TRANSITION,
  },
};

const chartVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: DEFAULT_TRANSITION,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
};

const chartOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
    },
  },
  xaxis: {
    floating: true,
    type: "numeric",
    labels: {
      show: false,
    },
    lines: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },

  tooltip: {
    x: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
};

const KPI = ({ chartData, expanded, onClick, dimensions }) => {
  const contentVariants = getContentVariants(dimensions);

  const currentSize = expanded ? "large" : "small";

  const yaxis = chartData.dataType
    ? {
        show: false,
        max: Math.max(...chartData.data) + Math.max(...chartData.data) / 100,
        min: 0,
      }
    : {
        show: false,
        max: 105,
        min: 0,
      };

  return (
    <motion.div
      className="kpi-item"
      variants={conatinerVariants}
      animate={currentSize}
      initial="large"
      onClick={onClick}
    >
      <motion.div
        className="kpi-item__content"
        variants={contentVariants}
        animate={currentSize}
      >
        <motion.div
          className="kpi-item__content__details"
          variants={detailVariants}
          animate={currentSize}
        >
          <motion.h2
            className="secondary-font"
            variants={titleVariant}
            animate={currentSize}
          >
            {chartData.name}
          </motion.h2>
          <motion.h1
            className="primary-font"
            variants={percentVariant}
            animate={currentSize}
          >
            {chartData.data.slice(-1)[0]}
            <span style={{ fontSize: "2rem" }}>
              {chartData.dataType ? chartData.dataType : "%"}
            </span>
          </motion.h1>
        </motion.div>
        <AnimatePresence>
          {currentSize === "large" && (
            <motion.div
              className="chart-container"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Chart
                options={{ ...chartOptions, colors: chartData.colors, yaxis }}
                series={[chartData]}
                type="area"
                width={`${dimensions.maxWidth - 96}`}
                height={`${dimensions.maxWidth / 2}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default KPI;
