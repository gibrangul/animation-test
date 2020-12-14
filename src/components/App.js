import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDimensions from "../utils/useDimensions";
import KPICard from "./KPICard";
import LineCard from "./LineCard";
import { chartList, lineList, machineList, workerList } from "./dummyData";
import LevelTwoButtons from "./LevelTwoButtons";
import NavBar from "./NavBar";
import SectionHeader from "./SectionHeader";
import MachineCard from "./MachineCard";
import WorkerCard from "./WokerCard";

const NAV_BAR_HEIGHT = 80;
const SPACING = 32;
const ROW_HEIGHT = 72;
const NUM_COLUMNS = 4;
const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const getGridContainerVariants = (dimensions, transition) => {
  return {
    small: {
      height: `${dimensions.minHeight}px`,
      transition,
      overflowY: "hidden",
      overflowX: "scroll",
    },
    large: {
      height: `${dimensions.maxHeight}px`,
      transition,
      overflowY: "scroll",
      overflowX: "hidden",
    },
  };
};

const getGridVariants = (cardDimensions, spacing, columns, transition) => {
  return {
    large: {
      gridAutoFlow: "row",
      gridTemplateColumns: `${cardDimensions.maxWidth}px `.repeat(columns),
      gridTemplateRows: `${cardDimensions.maxWidth}px`,
      marginLeft: `${spacing}px`,
      marginRight: `${spacing}px`,
      paddingBottom: `${spacing}px`,
      columnGap: `${spacing}px`,
      rowGap: `${spacing}px`,
      transition,
    },
    small: {
      gridAutoFlow: "column",
      gridTemplateColumns: `${cardDimensions.minWidth}px `.repeat(columns),
      gridTemplateRows: `${cardDimensions.minHeight}px`,
      marginLeft: "0px",
      marginRight: "0px",
      paddingBottom: "0px",
      columnGap: "0px",
      rowGap: "0px",
      transition,
    },
  };
};

const App = () => {
  const { width, height } = useDimensions();

  const cardLarge = (width - SPACING * (NUM_COLUMNS - 1) - 64) / NUM_COLUMNS;
  const cardSmall = 324;

  const cardDimensions = {
    maxWidth: cardLarge,
    minWidth: cardSmall,
    minHeight: ROW_HEIGHT,
  };

  const kpiGridContainerVariants = useMemo(
    () =>
      getGridContainerVariants(
        {
          maxHeight: height - NAV_BAR_HEIGHT - ROW_HEIGHT * 1,
          minHeight: ROW_HEIGHT,
        },
        DEFAULT_TRANSITION
      ),
    [height]
  );

  const lineGridContainerVariants = useMemo(
    () =>
      getGridContainerVariants(
        {
          maxHeight: height - NAV_BAR_HEIGHT - ROW_HEIGHT * 2,
          minHeight: ROW_HEIGHT,
        },
        DEFAULT_TRANSITION
      ),
    [height]
  );

  const thirdGridContainerVariants = useMemo(
    () =>
      getGridContainerVariants(
        {
          maxHeight: height - NAV_BAR_HEIGHT - ROW_HEIGHT * 3,
          minHeight: ROW_HEIGHT,
        },
        DEFAULT_TRANSITION
      ),
    [height]
  );

  const gridSizeVariants = useMemo(
    () =>
      getGridVariants(
        { maxWidth: cardLarge, minWidth: cardSmall, minHeight: ROW_HEIGHT },
        SPACING,
        NUM_COLUMNS,
        DEFAULT_TRANSITION
      ),
    [cardLarge]
  );

  const levelTwoContainerVariants = {
    buttons: {
      height: `${ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
      borderTop: "1px solid #B8BCC7",
    },
    full: {
      height: `${height - NAV_BAR_HEIGHT - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
  };

  const levelThreeContainerVariants = {
    small: {
      height: `0px`,
      transition: DEFAULT_TRANSITION,
      borderTop: "1px solid #B8BCC7",
    },
    full: {
      height: `${height - NAV_BAR_HEIGHT - ROW_HEIGHT - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
  };

  const levelTwoContentVariants = {
    visible: {
      opacity: 1,
      height: `${height - NAV_BAR_HEIGHT - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const levelThreeContentVariants = {
    visible: {
      opacity: 1,
      height: `${height - NAV_BAR_HEIGHT - ROW_HEIGHT - ROW_HEIGHT}px`,
      transition: DEFAULT_TRANSITION,
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: DEFAULT_TRANSITION,
    },
  };

  const [levelOneExpanded, expandLevelOne] = useState(true);
  const [levelTwoExpanded, expandLevelTwo] = useState(false);
  const [machinesExpanded, expandMachines] = useState(false);
  const [workersExpanded, expandWorkers] = useState(false);
  const [tab, setTab] = useState("dashboard");

  const renderTab = (tab) => {
    switch (tab) {
      case "lines":
        return lineList.map((lineData) => (
          <LineCard
            key={lineData.name}
            lineData={lineData}
            expandMachines={() => {
              expandLevelTwo(false);
              expandMachines(true);
            }}
            expandWorkers={() => {
              expandLevelTwo(false);
              expandWorkers(true);
            }}
            expanded={levelTwoExpanded}
            dimensions={cardDimensions}
          />
        ));
      case "machines":
        return machineList.map((machineData) => (
          <MachineCard
            key={machineData.name}
            machineData={machineData}
            onClick={() => expandLevelTwo(!levelTwoExpanded)}
            expanded={levelTwoExpanded}
            dimensions={cardDimensions}
          />
        ));
      case "workers":
        return workerList.map((workerData) => (
          <WorkerCard
            key={workerData.name}
            workerData={workerData}
            onClick={() => expandLevelTwo(!levelTwoExpanded)}
            expanded={levelTwoExpanded}
            dimensions={cardDimensions}
          />
        ));
      default:
        return null;
    }
  };

  const renderLines = () =>
    lineList.map((lineData) => (
      <LineCard
        key={lineData.name}
        lineData={lineData}
        expandMachines={() => {
          expandLevelTwo(false);
          expandMachines(true);
          expandWorkers(false);
          setTab("machines");
        }}
        expandWorkers={() => {
          expandLevelTwo(false);
          expandWorkers(true);
          expandMachines(false);
          setTab("workers");
        }}
        expanded={levelTwoExpanded}
        dimensions={cardDimensions}
      />
    ));

  const renderMachines = () =>
    machineList.map((machineData) => (
      <MachineCard
        key={machineData.name}
        machineData={machineData}
        onClick={() => console.log("machine")}
        expanded={machinesExpanded}
        dimensions={cardDimensions}
      />
    ));

  const renderWorkers = () =>
    workerList.map((workerData) => (
      <WorkerCard
        key={workerData.name}
        workerData={workerData}
        onClick={() => console.log("worker")}
        expanded={workersExpanded}
        dimensions={cardDimensions}
      />
    ));

  const openLevelOne = () => {
    expandLevelOne(true);
    expandLevelTwo(false);
    setTab("dashboard");
  };

  const openLevelTwo = () => {
    expandLevelOne(false);
    expandLevelTwo(true);
    expandMachines(false);
    expandWorkers(false);
    setTab("lines");
  };

  return (
    <div className="container">
      <NavBar />
      <motion.div className="level-one-contiainer">
        <motion.div
          className="scroll-container level-one-grid-contiainer"
          variants={kpiGridContainerVariants}
          initial="large"
          animate={levelOneExpanded ? "large" : "small"}
        >
          <motion.div
            className="grid"
            variants={gridSizeVariants}
            initial="large"
            animate={levelOneExpanded ? "large" : "small"}
          >
            {chartList.map((chartData) => (
              <KPICard
                key={chartData.name}
                chartData={chartData}
                onClick={openLevelOne}
                expanded={levelOneExpanded}
                dimensions={cardDimensions}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="level-two-contiainer"
        variants={levelTwoContainerVariants}
        animate={levelTwoExpanded ? "full" : "buttons"}
      >
        <AnimatePresence>
          {levelOneExpanded && (
            <LevelTwoButtons
              height={ROW_HEIGHT}
              transition={DEFAULT_TRANSITION}
              onClick={() => {
                expandLevelOne(false);
                expandLevelTwo(true);
                setTab("lines");
              }}
              onClickMachines={() => {
                expandLevelOne(false);
                expandLevelTwo(true);
                setTab("machines");
              }}
              onClickWorkers={() => {
                expandLevelOne(false);
                expandLevelTwo(true);
                setTab("workers");
              }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!levelOneExpanded && (
            <motion.div
              className="level-two-content"
              variants={levelTwoContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <AnimatePresence>
                {levelTwoExpanded && (
                  <SectionHeader title={tab} onBackClick={openLevelOne} />
                )}
              </AnimatePresence>
              <motion.div
                className="scroll-container level-two-grid-container"
                variants={lineGridContainerVariants}
                initial="large"
                animate={levelTwoExpanded ? "large" : "small"}
              >
                <motion.div
                  className="grid"
                  variants={gridSizeVariants}
                  initial="large"
                  animate={levelTwoExpanded ? "large" : "small"}
                >
                  {renderLines()}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="level-three-contiainer"
        variants={levelThreeContainerVariants}
        animate={machinesExpanded || workersExpanded ? "full" : "small"}
      >
        <AnimatePresence>
          {!levelOneExpanded && !levelTwoExpanded && machinesExpanded && (
            <motion.div
              className="level-two-content"
              variants={levelThreeContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <AnimatePresence>
                {machinesExpanded && (
                  <SectionHeader title={tab} onBackClick={openLevelTwo} />
                )}
              </AnimatePresence>
              <motion.div
                className="scroll-container level-two-grid-container"
                variants={thirdGridContainerVariants}
                initial="large"
                animate={machinesExpanded ? "large" : "small"}
              >
                <motion.div
                  className="grid"
                  variants={gridSizeVariants}
                  initial="large"
                  animate={machinesExpanded ? "large" : "small"}
                >
                  {renderMachines()}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {!levelOneExpanded && !levelTwoExpanded && workersExpanded && (
            <motion.div
              className="level-two-content"
              variants={levelThreeContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <AnimatePresence>
                {workersExpanded && (
                  <SectionHeader title={tab} onBackClick={openLevelTwo} />
                )}
              </AnimatePresence>
              <motion.div
                className="scroll-container level-two-grid-container"
                variants={thirdGridContainerVariants}
                initial="large"
                animate={workersExpanded ? "large" : "small"}
              >
                <motion.div
                  className="grid"
                  variants={gridSizeVariants}
                  initial="large"
                  animate={workersExpanded ? "large" : "small"}
                >
                  {renderWorkers()}
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
