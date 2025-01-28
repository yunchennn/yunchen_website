import React, { useEffect } from 'react';
import { useCurrState, useSubState } from './Context';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Background from './Background';
import NP from '../pages/NP';

export default function Main() {
    const styles = {
        container: {
            display: 'flex',
            width: '100vw', 
            height: '100vh', 
            position: 'relative', // To position particles correctly
            overflow: 'hidden', // Prevent any overflow caused by particles
        },  
    };

    return (
        <div style={styles.container}>
            <MainContainer />
            <SubContainer />
            <Background/>
        </div>
    );
}

export function MainContainer() {
    const { state, setState } = useCurrState();
    const { subState, setSubState } = useSubState()
    function select(data) {
        setState(data);
        setSubState("");
    }
    const styles = {
        mainContainer: {
            display: 'flex', // Enables Flexbox
            flexDirection: 'column', // Arranges items in a column
            justifyContent: 'center', // Centers items vertically
            alignItems: 'center', // Centers items horizontally
            flex: 1,
            height: '100%',
            textAlign: 'center',
            zIndex: 2,
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(49, 0, 122, 0.21)',
            fontFamily: "'JetBrains Mono', monospace",
        },
        itemName: {
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '1.2rem',
            margin: '10px 0', // Vertical spacing between items
            padding: '10px',
            borderRadius: '5px',
            transition: 'color 0.3s ease, background-color 0.3s ease',
        },
    };
    
    return (
        <div style={styles.mainContainer}>
            <p onClick={() => select("home")} style={styles.itemName}>Home</p>
            <p onClick={() => select("about")} style={styles.itemName}>About Me</p>
            <p onClick={() => select("projects")} style={styles.itemName}>Projects</p>
            <p onClick={() => select("resume")} style={styles.itemName}>Résumé/Portfolio</p>
            <p onClick={() => select("contact")} style={styles.itemName}>Contact</p>
            <p onClick={() => select("np")} style={styles.itemName}>My Blog</p>
        </div>
    );
}

export function SubContainer() {
    const { state } = useCurrState();

    const styles = {
        subContainer: {
            flex: 5, // Take up the remaining 50% of the width
            height: '100%',
            color: '#fff', // Optional: Ensure text color contrasts with the background
            zIndex: 2
        },
    };

    // Determine content based on state
    let content;
    if (state === "home") {
        content = <Home/>;
    } else if (state === "about") {
        content = <About/>;

    } else if (state === "projects") {
        content = <Projects/>;

    } else if (state === "resume"){
        content = <Resume/>;

    }else if (state === "contact"){
        content = <Contact/>
    }else if (state === "np"){
        content = <NP/>
    }else {
        content = <>Welcome</>; // Default content
    }

    return (
        <div style={styles.subContainer}>
            {content}
        </div>
    );
}

