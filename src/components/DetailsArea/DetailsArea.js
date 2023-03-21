import { Grid, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './DetailsArea.css';
import BioComponent from './rightPart'
import { keyframes } from '@mui/system';


const SkillsComponent = () => <div>Skills</div>;
const WorksComponent = () => <div>Works</div>;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define the styled component using the fadeIn animation
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? '#1A2027' : '#d2d2d2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: "300px",
  animation: `${fadeInAnimation} 0.8s ease-in-out`,
}));

const DetailsArea = () => {
  const [activeComponent, setActiveComponent] = useState(<BioComponent />);
  
  // Define a function to set the active component based on which button is clicked
  const handleButtonClick = (component) => {
    switch (component) {
      case "Bio":
        setActiveComponent(<BioComponent />);
        break;
      case "Skills":
        setActiveComponent(<SkillsComponent />);
        break;
      case "Works":
        setActiveComponent(<WorksComponent />);
        break;
      default:
        setActiveComponent(<BioComponent />);
    }
  };

  return (
    <div className="detailsBox">
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Item>
            <Grid item xs={12}>
              <Button onClick={() => handleButtonClick("Bio")}>Bio</Button>
              </Grid>
              <Grid item xs={12}>
              <Button onClick={() => handleButtonClick("Skills")}>Skills</Button>
              </Grid>
              <Grid item xs={12}>
              <Button onClick={() => handleButtonClick("Works")}>Works</Button>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item >
              {activeComponent}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetailsArea;
