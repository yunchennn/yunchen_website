import React, { useState, useEffect } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Quiz from '../data/icecreamquiz.json';
import Gallery from '../data/icecreamgallery.json'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { LocationOn } from '@mui/icons-material';


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            color='info'
            {...props}
            sx={{ height: 10 }} // Adjust the height here (e.g., 10px)
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            // sx={{ color: 'text.primary' }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }
  

const IceCreamQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading
  const [progress, setProgress] = useState(0); // Loading bar progress
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [maxOptionWidth, setMaxOptionWidth] = useState(0);
  const questions = Quiz;

  // Calculate the width of the longest option for the entire quiz
  useEffect(() => {
    const allOptions = questions.flatMap((question) => question.options.map((option) => option.text));
    const longestOption = allOptions.reduce((a, b) => (a.length > b.length ? a : b), '');
    const dummyElement = document.createElement('span');
    dummyElement.style.fontSize = '16px';
    dummyElement.style.visibility = 'hidden';
    dummyElement.style.position = 'absolute';
    dummyElement.innerText = longestOption;
    document.body.appendChild(dummyElement);
    const width = dummyElement.offsetWidth;
    document.body.removeChild(dummyElement);
    setMaxOptionWidth(width + 220); // Adding padding space
  }, []);

  const handleAnswer = (questionIndex, optionId) => {
    setAnswers({ ...answers, [questionIndex]: optionId });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateResult = () => {
    const results = questions.map((question, index) => {
      const selectedOption = answers[index];
      const selectedOptionText = question.options.find((option) => option.id === selectedOption);
      return selectedOptionText
        ? {
            analysis: selectedOptionText.analysis,
            analysisDirection: question.analysisDirection,
          }
        : null;
    });

    setResult(results);
  };

  // Start loading when the user finishes all questions
  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setLoading(true);
    }
  }, [currentQuestionIndex]);

  // Handle loading progress and switch to results
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            calculateResult(); // Automatically calculate and show the result
            return 100;
          }
          return prevProgress + 20; // Adjust increment speed
        });
      }, 600); // Adjust interval duration for speed
      return () => clearInterval(timer);
    }
  }, [loading]);

  const style = {
    container: {
      padding: '30px',
      // paddingLeft: '50px',
      textAlign: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      maxHeight: '100vh', 
      overflowY: 'auto',  

    },
    question: {
      marginBottom: '20px',
    },
    optionsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: (isHovered, isActive) => ({
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      border: '2px solid white',
      backgroundColor: isHovered ? 'white' : 'transparent',
      color: isHovered ? 'black' : 'white',
      borderRadius: '5px',
      minWidth: `${maxOptionWidth}px`, // Use the pre-calculated width
      transition: 'all 0.3s ease',
      boxShadow: isActive ? '0 0 5px 2px rgba(0,0,0,0.3)' : 'none',
    }),
    buttonText: {
      textAlign: 'left',
      paddingLeft: '10px',
      fontSize: '16px',
    },
    buttonImage: {
      width: '80px',
      height: '80px',
      marginLeft: '10px',
      objectFit: 'cover',
    },
    result: {
    //   padding: '10px',
    //   marginBottom: '50px',
      borderRadius: '5px',
    },
    resultContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: '20px',
      },
      leftPane: {
        flex: 5,
        borderRight: '2px solid #ccc',
        paddingRight: '20px',
      },
      rightPane: {
        flex: 2,
        textAlign: 'center',
      },
      gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
        marginTop: '20px',
      },
      galleryImage: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      resultItem: {
        margin: '10px 0',
        fontSize: '1rem',
        lineHeight: '1.5',
      },
  };

  const itemData = Gallery
  

  return (
    <div style={style.container}>
        <h1>Ice Cream Personality Test</h1>
            {currentQuestionIndex < questions.length ? (
                <div style={style.question}>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <div style={style.optionsWrapper}>
                        {questions[currentQuestionIndex].options.map((option) => (
                            <span
                                key={option.id}
                                style={style.button(hovered === option.id, active === option.id)}
                                onClick={() => {
                                handleAnswer(currentQuestionIndex, option.id);
                                setActive(option.id);
                                }}
                                onMouseEnter={() => setHovered(option.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <span style={style.buttonText}>{option.text}</span>
                                {option.image && <img src={option.image} alt={option.text} style={style.buttonImage} />}
                            </span>
                        ))}
                    </div>
                </div>
            ) : loading && !result ? (
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </Box>
            ) : (
                <div style={style.resultContainer}>
                    <div style={style.leftPane}>
                        {result && (
                            <div>
                                <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                                    Your Result
                                </p>
                                {questions.map((question, questionIndex) => {
                                    const selectedOptionId = answers[questionIndex];
                                    const selectedOption = question.options.find(option => option.id === selectedOptionId);
                                    return (
                                        <div
                                            key={questionIndex} style={{ margin: '10px', textAlign: 'start', marginTop:'24px', fontSize: '0.9rem' }
                                                }
                                        >
                                            <p style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                                            <strong>Question {questionIndex + 1}: </strong>{question.question}
                                            </p>
                                            <p style={{ margin: '2px 0', color: 'gray' }}>
                                            <strong>You Selected: </strong>{selectedOption ? selectedOption.text : 'No answer selected'}
                                            </p>
                                            <p style={{ margin: '2px 0', color: '#c7f464' }} >
                                            <strong style={{color: '#6464f4 '}}>{result[questionIndex]?.analysisDirection}: </strong>{result[questionIndex]?.analysis}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
            
                    <div style={style.rightPane}>
                        <h2>My Ice Cream Gallery</h2>
                        <ImageList
                            sx={{
                                width: 480,
                                height: 650,
                                overflowY: 'auto', // Ensure vertical scroll is enabled
                                '&::-webkit-scrollbar': {
                                    width: '8px', // Width of the scrollbar
                                },
                                '&::-webkit-scrollbar-track': {
                                    backgroundColor: '#f0f0f0', // Track color
                                    borderRadius: '8px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#6464f4', // Thumb color
                                    borderRadius: '8px',
                                    border: '2px solid #f0f0f0', // Optional border for the thumb
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    backgroundColor: '#c7f464', // Thumb color on hover
                                },
                            }}
                            cols={3}
                            rowHeight={160}
                        >
                            {/* <ImageListItem key="Subheader" cols={2}> */}
                                {/* <ListSubheader component="div">December</ListSubheader> */}
                            {/* </ImageListItem> */}
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    // actionIcon={
                                    //     <IconButton
                                    //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    //         aria-label={`info about ${item.title}`}
                                    //     >
                                    //         <LocationOn />
                                    //     </IconButton>
                                    // }
                                    sx={{
                                        '& .MuiImageListItemBar-titleWrap': {
                                            padding: '6px 9px', // Adjust padding for the title wrap
                                        },
                                        '& .MuiImageListItemBar-title': {
                                            fontSize: '0.8rem', // Adjust the font size as needed
                                            
                                        },
                                        '& .MuiImageListItemBar-subtitle': {
                                            fontSize: '0.6rem', // Adjust the font size as needed
                                        }
                                    }}
                                />
                            </ImageListItem>
                            
                            ))}
                        </ImageList>
                    </div>
                </div>

            )}
    </div>
  );
};

export default IceCreamQuiz;





