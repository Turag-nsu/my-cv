import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography, styled } from '@mui/material';
import { Transition } from 'react-transition-group';

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

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SkillModule = ({ skillName, skillValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(skillValue);
  }, [skillValue]);

  return (
    <SkillModuleWrapper>
      <Transition in={true} timeout={duration}>
        {state => (
          <CircularProgressBar style={{ ...defaultStyle, ...transitionStyles[state] }}>
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
        )}
      </Transition>
      <SkillName>{skillName}</SkillName>
    </SkillModuleWrapper>
  );
};

export default SkillModule;
