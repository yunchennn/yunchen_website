import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "Hi, I'm Yun Chen.",
  "I'm a Software Developer.",
  "I build innovative solutions.",
  "Welcome to my portfolio!"
];

const Home = () => {
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length); // Cycle through sentences
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up the timer on unmount
  }, []);

  return (
    <div
      style={{
        height: "100vh", // Full-screen height
        fontFamily: "JetBrains Mono, monospace",
        // backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentSentence}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "2.5rem",
            color: "#f0f0f0",
            margin: 0,
            textAlign: "center"
          }}
        >
          {sentences[currentSentence]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Home;
