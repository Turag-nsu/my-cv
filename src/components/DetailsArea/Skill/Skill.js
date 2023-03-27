import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography, styled, keyframes } from '@mui/material';

const SkillName = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginRight: '.5rem',
  textAlign: 'center',
});

const CircularProgressBar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  maxWidth: '200px',
});

const SkillModuleWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  maxWidth: '20%',
  margin: '10px',
  '@media (max-width: 1200px)': {
    maxWidth: '33.33%',
  },
  '@media (max-width: 600px)': {
    maxWidth: '50%',
  },
});

const rFadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillModule = ({ skillName, skillValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (progress < skillValue) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 15);
    }

    return () => clearInterval(interval);
  }, [progress, skillValue]);

  return (
    <SkillModuleWrapper sx={{ animation: `${rFadeInAnimation} 1s ease-in-out` }}>
      <CircularProgressBar>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            pathColor: '#00adb5',
            trailColor: '#eee',
            textSize: '24px',
            pathTransitionDuration: 1.5,
            pathTransition: 'none',
          })}
        />
      </CircularProgressBar>
      <SkillName>{skillName}</SkillName>
    </SkillModuleWrapper>
  );
};

const SkillsComponent = () => {
  const skillValues = {
    MERN: 75,
    "Problem Solving": 60,
    "Object Oriented Programing": 90,
    'Data Structures and Algorithms': 90,
    "Designing": 65,
    Git: 80,
    Communication: 85,
    Teamwork: 90,
    'Authentication and Authorization': 60,
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
      }}
    >
      {Object.entries(skillValues).map(([skill, value]) => (
        <SkillModule key={skill} skillName={skill} skillValue={value} />
      ))}
    </Box>
  );
};

export default SkillsComponent;
