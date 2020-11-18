import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import "./styles.css";

const containerVariants = {
  hidden: {
    scale: 1,
    x: "0",
    width: "calc(50% - 32px)",
    borderRadius: "20px",
    height: "160px",
    transition: { duration: 0.2, ease: "easeInOut", staggerChildren: 0.5 },
    // flexDirection: "row",
  },
  visible: {
    opacity: 1,
    width: "100%",
    borderRadius: "40px",
    height: "900px",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    width: 0,
    height: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  animate: {
    opacity: 1,
    width: "100%",
    height: "200px",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    width: 0,
    height: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

function Content() {
  const [id, setId] = useState(false);

  return (
    <motion.div
      // layout
      initial={{
        opacity: 0,
        flex: 0,
        width: 0,
        height: 0,
        marginRight: "0px",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      animate={{
        opacity: 1,
        flex: 1,
        marginRight: "16px",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        width: 0,
        flex: 0,
        height: 0,
        marginRight: "0px",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="efficiency-content"
    >
      <h3>Lines</h3>
      <div className="efficiency-content__grid">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {id ? (
              <motion.div
                layoutId="someID"
                className="row item1"
                onClick={() => setId(!id)}
                animate={{
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                initial={{
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
                exit={{
                  transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                }}
              >
                Data
                <br />
                More Data
              </motion.div>
            ) : (
              <motion.div
                variants={itemVariants}
                animate="animate"
                initial="initial"
                exit="exit"
                className="row"
                layoutId="someID"
                onClick={() => setId(!id)}
              >
                Data
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            variants={itemVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="row"
          />
          <motion.div
            variants={itemVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="row"
          />
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}

const App = () => {
  const [isExapnded, setIsExpanded] = useState(false);
  const [isPerfExapnded, setIsPerfExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      <h1>Dashboard</h1>
      <motion.div style={{ display: "flex", flexWrap: "wrap" }}>
        <motion.div
          variants={containerVariants}
          animate={isExapnded ? "visible" : "hidden"}
          style={{
            backgroundColor: "#F4F3FE",
            position: "relative",
            display: "flex",
            padding: "16px",
          }}
          // initial="hidden"
        >
          <AnimatePresence>{isExapnded && <Content />}</AnimatePresence>
          <motion.div
            // variants={textVariant}
            // animate={isExapnded ? "right" : "left"}
            style={{
              width: "200px",
            }}
          >
            <h2
              onClick={() => setIsExpanded(!isExapnded)}
              style={{ cursor: "pointer" }}
            >
              Efficiency
            </h2>
            <h1>65%</h1>
          </motion.div>
        </motion.div>
        <motion.div
          onClick={() => setIsPerfExpanded(!isPerfExapnded)}
          variants={containerVariants}
          // initial="hidden"
          animate={isPerfExapnded ? "visible" : "hidden"}
          style={{
            backgroundColor: "#FFF2ED",
            padding: "16px",
          }}
        >
          Block 2
          <AnimatePresence>{isPerfExapnded && <Content />}</AnimatePresence>
        </motion.div>
        <motion.div>Block 3</motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default App;
