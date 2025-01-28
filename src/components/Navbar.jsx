import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const styles = {
    navbar: { display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: 'transparent', 
      color: '#fff',
      position: 'fixed', 
      top: 0,
      width: '100%',
      zIndex: 1000, 
      backdropFilter: 'blur(5px)'}, 
    logo: { fontSize: '1.5rem' },
    navLinks: { listStyle: 'none', display: 'flex', gap: '1rem' },
  };
  
  return (
    <div style={styles.navbar}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};



