import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from "../data/projects.json";
import { useCurrProjectNum } from '../components/Context';

import { motion } from "framer-motion";

export default function Projects() {
  const { projectNumber, setProjectNumber } = useCurrProjectNum();


  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '2rem', fontFamily: "'JetBrains Mono', monospace"}}>
      <h1 style={{ textAlign: 'left' }}>My Projects_</h1>
      <motion.div
        initial={{ y: "100vh", opacity: 0 }} // Start off-screen at the bottom
        animate={{ y: 0, opacity: 1 }} // Slide into view
        transition={{ type: "spring", stiffness: 50, damping: 15 }} // Smooth spring animation
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', paddingBottom: '5rem'}}>
          {projectData.map((project) => (
            <ProjectCard
              key={project.keyName}
              {...project}
              onClick={() => setProjectNumber(project.keyName)} // Pass keyName to update projectNum
            />
          ))}
        </div>
      </motion.div>
      
    </div>
  );
}
