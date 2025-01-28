import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const styles = {
    container: {
      position: "relative",
      top: 0,
      width: "100%",
      height: "100vh", // Full screen height
      display: "flex", // Enable flexbox for two-column layout
      alignItems: "center", // Center content vertically
      padding: "40px", // Space inside the container
      fontFamily: "'JetBrains Mono', monospace",
    },
    textContent: {
      flex: 1, // Takes up 50% of the width
      color: "#fff",
      textAlign: "left", // Align text to the left
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    paragraph: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      marginBottom: "15px",
      maxWidth: "65vw",
    },
    link: {
      color: "#61dafb",
      textDecoration: "none",
      fontWeight: "bold",
    },
    imageContainer: {
      flex: 1, // Takes up 50% of the width
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    image: {
      maxWidth: "80%", // Restrict image size
      maxHeight: "80%", // Ensure it fits within the container
      borderRadius: "10px", // Optional: rounded corners
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContent}>
        <h1 style={styles.heading}>About Me_</h1>
        <p style={styles.paragraph}>
          Hi, I'm Yun Chen, a passionate and solution-oriented Software Engineer
          with a focus on developing innovative and reliable systems. With
          experience spanning across system reliability, automation, and
          seamless integrations, I’ve had the opportunity to work on various
          projects that streamline operations and improve efficiency.
        </p>
        <p style={styles.paragraph}>
          Currently, I work at Graphen, Inc., where I design recovery
          functions, develop APIs, optimize networks, and automate processes to
          make systems more robust and efficient. My most notable work includes
          automating POS system integrations, developing real-time sales
          reporting systems, and creating a hands-free restaurant automation
          solution that drastically reduced customer service time.
        </p>
        <p style={styles.paragraph}>
          I am skilled in Python, Flask, React, and AWS, among other
          technologies, and am continuously expanding my knowledge and expertise
          to solve complex problems and create impactful solutions.
        </p>
        <p style={styles.paragraph}>
          When I’m not coding, I enjoy exploring new tech trends, optimizing
          workflows, and contributing to innovative projects. I believe in the
          power of technology to transform industries and improve user
          experiences.
        </p>
        <p style={styles.paragraph}>
          Feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/yunchennn"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseOver={(e) =>
              (e.target.style.textDecoration = "underline")
            }
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            LinkedIn
          </a>{" "}
          or check out my{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseOver={(e) =>
              (e.target.style.textDecoration = "underline")
            }
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            GitHub
          </a>{" "}
          for more of my work!
        </p>
      </div>
      <motion.div
        style={styles.imageContainer}
        initial={{ x: "100vw", opacity: 0 }} // Start off-screen to the right
        animate={{ x: 0, opacity: 1 }} // Slide into view
        transition={{ type: "spring", stiffness: 50, damping: 15 }} // Smooth spring animation
      >
        <img
          src="./image/Yun.jpg" // Replace with your image path
          alt="About Me"
          style={styles.image}
        />
      </motion.div>
    </div>
  );
}
