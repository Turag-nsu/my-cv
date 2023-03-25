import { Grid, Box, Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './DetailsArea.css';
import BioComponent from './Bio/Bio';
import { keyframes } from '@mui/system';
import SkillsComponent from './Skill/Skill';
import WorksComponent from './Works';


const fadeInLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#d2d2d2',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // minHeight: '300px',
  animation: `${fadeInLeftAnimation} 0.8s ease-in-out`,
}));

const AnimatedItem2 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#d2d2d2',
  minHeight: '300px',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  animation: `${fadeInRightAnimation} 0.8s ease-in-out`,
}));

const DetailsArea = () => {
  const [activeComponent, setActiveComponent] = useState(<BioComponent />);
  const handleButtonClick = (component) => {
    
    switch (component) {
      case 'Bio':
        setActiveComponent(<BioComponent />);
        break;
      case 'Skills':
        setActiveComponent(<SkillsComponent />);
        break;
      case 'Works':
        setActiveComponent(<WorksComponent />);
        break;
      default:
        setActiveComponent(<BioComponent />);
    }
  };

  
  

  return (
    <div className="detailsBox">
      <Box>
        <Grid container spacing={1} display="flex" justifyContent="center">
          <Grid item xs={10} sm={2}>
            <AnimatedItem>
              <Grid item xs={12}>
                <Button onClick={() => handleButtonClick('Bio')}>Bio</Button>
              </Grid>
              <Grid item xs={12}>
                <Button onClick={() => handleButtonClick('Skills')}>Skills</Button>
              </Grid>
              <Grid item xs={12}>
                <Button onClick={() => handleButtonClick('Works')}>Works</Button>
              </Grid>
            </AnimatedItem>
          </Grid>
          <Grid item xs={10} sm={10}>
            <AnimatedItem2 style={{ padding: '10px' }}>{activeComponent}</AnimatedItem2>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetailsArea;
