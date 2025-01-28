import React, { useRef } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import portfolioData from '../data/portfolio.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUserGraduate, faBuildingUser } from '@fortawesome/free-solid-svg-icons';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import '@fontsource/jetbrains-mono'; 
import '@fontsource/jetbrains-mono/700.css'; 
import { faDownload, faSquareArrowUpRight, faEye } from '@fortawesome/free-solid-svg-icons';


export default function Resume() {
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const styles = {
    resume:{
      fontFamily: "'JetBrains Mono', monospace",
      width: '100%',
      zIndex: 1000,
      padding: '2rem',
      height: '100vh', 
      overflowY: 'auto', 
      boxSizing: 'border-box',
      top: 0,
      position: "relative",
      padding: "20px",
    }
    
  };

  const awesomeIcon = {
    education: faUserGraduate,
    work: faBuildingUser,
    skill: faLaptopCode,
  };

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  const timeLineContent = (
      <Timeline sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 } }}>
        {portfolioData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textThird"
                sx={{ fontFamily: 'JetBrains Mono, monospace' }} // Apply custom font
              >
                {item.date}
              </Typography>
              <Typography
                variant="body2"
                color="textThird"
                sx={{ fontFamily: 'JetBrains Mono, monospace' }} // Apply custom font
              >
                {item.location}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <FontAwesomeIcon icon={awesomeIcon[item.icon]} style={{ color: 'black' }} />
              </TimelineDot>
              {index < portfolioData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: '5px',
                px: 2,
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer',
                },
                marginLeft: '45px',
              }}
              onClick={() => {
                // Scroll to the corresponding section when clicked
                if (item.icon === 'education') scrollToSection(educationRef);
                if (item.icon === 'work') scrollToSection(workRef);
                if (item.icon === 'skill') scrollToSection(skillsRef);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '45px',
                    height: 'auto',
                    marginRight: '10px',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <div>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontFamily: 'JetBrains Mono, monospace' }} // Apply custom font
                  >
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography
                      variant="body2"
                      color="textThird"
                      sx={{ fontFamily: 'JetBrains Mono, monospace' }} // Apply custom font
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
  );
  const educationContent = (
    <div style={{ paddingLeft: '20px'}}>
      {portfolioData
        .filter((item) => item.icon === 'education')
        .map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '5px' }}>{item.title}</h4>
            <p style={{ margin: 0 }}>{item.subtitle}</p>
            <p style={{ fontSize: '0.9em', color: 'gray', margin: 0 }}>
              {item.date} - {item.location}
            </p>
            {item.msg && (
              <ul style={{ marginTop: '10px', paddingLeft: '20px', fontSize: '0.9em', color: '#fff' }}>
                {Object.entries(item.msg).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}

          </div>
        ))}
    </div>
  );

  const workExperienceContent = (
    <div style={{ paddingLeft: '20px'}}>
      {portfolioData
        .filter((item) => item.icon === 'work')
        .map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '5px' }}>{item.title}</h4>
            <p style={{ margin: 0 }}>{item.subtitle}</p>
            <p style={{ fontSize: '0.9em', color: 'gray', margin: 0 }}>
              {item.date} - {item.location}
            </p>
            {item.msg && item.msg.content && (
              <ul style={{ marginTop: '10px', paddingLeft: '20px', fontSize: '0.9em', color: '#fff' }}>
                {item.msg.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );

  const skillsContent = (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '5px', paddingLeft: '20px', paddingTop:'10px' }}>
        <h4 style={{ margin: 0, width: '160px' }}>Languages: </h4>
        <p style={{ margin: 0, textAlign: 'left', width: '85%' }}>Python, JavaScript, HTML, CSS, Shell, Powershell, C/C++, SQL, Java, MATLAB</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '5px', paddingLeft: '20px', paddingTop:'10px' }}>
        <h4 style={{ margin: 0, width: '160px' }}>Strengths: </h4>
        <p style={{ margin: 0, textAlign: 'left', width: '85%' }}>Software Solution, API Design, Cloud Solution, Full-stack Development, UI/UX Design, Data Crawl, Data Analysis, ETL, Visualization</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '5px', paddingLeft: '20px', paddingTop:'10px' }}>
        <h4 style={{ margin: 0, width: '160px' }}>Tools: </h4>
        <p style={{ margin: 0, textAlign: 'left', width: '85%' }}>Flask, BeautifulSoup, Scrapy, Node.js, React.js, D3.js, WebSocket, Socket.IO, REST API, Git, Docker, PyTorch, TensorFlow, OpenCV, PySpark, Pandas, NumPy, matplotlib, Tableau, Linux, Android SDK, MySQL, SQLite, Mongodb, GCP, AWS, Unreal Engine 5</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '5px', paddingLeft: '20px', paddingTop:'10px' }}>
        <h4 style={{ margin: 0, width: '160px' }}>Certifications: </h4>
        <p style={{ margin: 0, textAlign: 'left', width: '85%'}}>
          AWS Certified Cloud Practitioner (CLF-C01), AWS Certified Solutions Architect-Associate (SAA-C03)
        </p>
      </div>
    </div>


  );

  const resumeContent = (
    <div style={{ position: "fixed", top: "10px", right: "25px", zIndex: 1000 }}>
      <a
        href="./image/resume/Resume_YunChen.pdf"
        download
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "10px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#007BFF")} // Change color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "inherit")} // Reset color
      >
        <FontAwesomeIcon icon={faDownload} size="lg" />
        <span style={{ fontSize: "14px" }}>Download My Résumé</span>
      </a>
      <a
        href="./image/resume/Resume_YunChen.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#007BFF")} // Change color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "inherit")} // Reset color
      >
        <FontAwesomeIcon icon={faEye} size="lg" />
        <span style={{ fontSize: "14px" }}>Preview My Résumé</span>
      </a>
    </div>
  );
  
  
  

  return (
    <div style={styles.resume}>
      <section style={{ marginTop: '2rem' }} >
        {/* <h2>Résumé_</h2> */}
        {resumeContent}
        {/* <p>
          You can <a href="./image/resume/Resume_YunChen.pdf" download>download my resume</a> or 
          <a href="./image/resume/Resume_YunChen.pdf"> preview it online</a>.
        </p> */}
      </section>
      <section>
        <h1>Portfolio_ </h1>
        {timeLineContent}
      </section>
      <section ref={educationRef} style={{paddingTop:10}}>
        <h1>Education_</h1>
        {educationContent}
      </section>
      <section ref={workRef} style={{paddingTop:10}}>
        <h1>Work Experiences_</h1>
        {workExperienceContent}
      </section>
      <section ref={skillsRef} style={{paddingTop:10}}>
        <h1>Skills_</h1>
        {skillsContent}
      </section>
      
    </div>
  );
}
