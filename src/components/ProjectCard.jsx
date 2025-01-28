import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';


export default function ProjectCard({ title, date, description, link, img, tag, onClick }) {
  const styles = {
    card: {
      borderRadius: '8px',
      width: '360px',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    imgContainer: {
      width: '100%',
      height: '200px', 
      overflow: 'hidden', 
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', 
      display: 'block',
    },
    msg: {
      padding: '1rem',
    },
  };
  const [liked, setLiked] = useState(false); 

  const handleHeartClick = () => {
    setLiked(!liked); 
  };

  return (

    <Card
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
      sx={{
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        borderRadius: '10px',
      }}
    >
      <CardMedia sx={{ height: 180 }} image={img} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {date}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      {/* Spacer to push the chips and actions to the bottom */}
      <CardActions>
        <Stack direction="row" spacing={1} width={85}>
          {tag.map((item, index) => (
            <Chip
              size="small"
              key={index}
              label={item}
              variant="outlined"
              sx={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace' }}
            />
          ))}
        </Stack>
      </CardActions>
      <CardActions sx={{ paddingLeft: '1rem' }}>
        <a
          href={link}
        >
          <FontAwesomeIcon icon={faGithub} size="lg"/>
        </a>
        
        <FontAwesomeIcon
          size='lg'
          icon={faHeart}
          style={{
            cursor: 'pointer',
            color: liked ? 'red' : 'gray', // Change color based on state
            marginLeft: '10px',
          }}
          onClick={handleHeartClick} // Handle click event
        />
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More...</Button>
      </CardActions>
    </Card>


    // <div
    //   onClick={onClick}
    //   style={styles.card}
    //   onMouseEnter={(e) => {
    //     e.currentTarget.style.transform = styles.cardHover.transform;
    //     e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
    //   }}
    //   onMouseLeave={(e) => {
    //     e.currentTarget.style.transform = '';
    //     e.currentTarget.style.boxShadow = '';
    //   }}
    //   role="button"
    //   tabIndex="0"
    // >
    //   <div style={styles.imgContainer}>
    //     {img && <img src={img} alt={title} style={styles.img} />}
    //   </div>
    //   <div style={styles.msg}>
    //     <h3>{title || 'Untitled Project'}</h3>
    //     <p>{date || 'No date provided'}</p>
    //     <p>{description || 'No description available.'}</p>
    //     {link && (
    //       <a href={link} target="_blank" rel="noopener noreferrer">
    //         View Project
    //       </a>
    //     )}
    //   </div>
    // </div>
  );
}
