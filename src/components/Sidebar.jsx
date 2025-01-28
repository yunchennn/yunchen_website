import React from 'react';

export default function SideBar() {
    const styles = {
        navbar: {
            display: 'flex',
            flexDirection: 'column', // Stacks items vertically
            justifyContent: 'flex-start', // Align items at the start
            alignItems: 'center',
            padding: '2rem 1rem',
            background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            color: '#fff',
            position: 'fixed', // Fixes the sidebar to the screen
            top: 0,
            left: 0, // Positions the sidebar on the left
            height: '100%', // Full height
            width: '200px', // Set sidebar width
            zIndex: 1000,
            backdropFilter: 'blur(5px)',
        },
        logo: {
            fontSize: '1.5rem',
            marginBottom: '2rem', // Space below the logo
        },
        navLinks: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column', // Stacks links vertically
            gap: '1rem',
        },
        navLink: {
            cursor: 'pointer',
            color: '#fff',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.navbar}>
            <h1 style={styles.logo}>My Portfolio</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navLink}>Home</li>
                <li style={styles.navLink}>About</li>
                <li style={styles.navLink}>Projects</li>
                <li style={styles.navLink}>Contact</li>
            </ul>
        </div>
    );
}
