import React, { useState } from 'react';
import { faIceCream, faTree, faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessRook as faChessRookRegular} from '@fortawesome/free-regular-svg-icons';
import { useSubState } from '../components/Context'
import Map from '../components/Map';
import IceCreamQuiz from '../components/IceCream';

export default function NP() {
  const styles = {
    main: {
      top: 0,
      width: '100%',
      zIndex: 1000,
      textAlign: 'center',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '150px',
      width: '100%',
      height: '100vh',
    },
    icon: {
      transition: 'color 0.3s, transform 0.3s', // Smooth transitions
      cursor: 'pointer',
    },
  };
  const { subState, setSubState } = useSubState();
  const [isTreeHovered, setIsTreeHovered] = useState(false);
  function select(data) {
      setSubState(data);
  }

  const Blog = (
    <>
      {/* Ice Cream Icon */}
      <a
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ff6b6b")}
            onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
            onClick={() => select("ice cream")}
          >
            <FontAwesomeIcon icon={faIceCream} size="6x" />
          </a>

          {/* Tree Icon with hover toggle */}
          <a
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = "#c7f464")}
            onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
            onClick={() => select("tree")}
          >
            <FontAwesomeIcon icon={faTree} size="6x" />
          </a>

          {/* Martini Glass Icon */}
          <a
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = "#4ecdc4")}
            onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
            onClick={() => select("drink")}
          >
            <FontAwesomeIcon icon={faMartiniGlass} size="6x" />
          </a>
        </>
  )



  let content;
  if ( subState === "tree") {
    content = <Map/>;
  } else if ( subState === "ice cream" ) {
    content = <IceCreamQuiz/>;
  } else if (subState === "drink" ) {
    content = <Map/>;
  } else {
    content = Blog
  }



  

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        {content}
        
      </div>
    </div>
  );
}
