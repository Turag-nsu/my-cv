import React from "react";
import { Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  animation: ${fadeIn} ${(props) => props.duration} ease-in-out ${(props) => props.delay} ${(props) => props.type};
  color: ${(props) => props.color};
  font-size: 2rem;

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    font-size: 4rem;
  }

  @media (min-width: 1280px) {
    font-size: 5rem;
  }
`;

const StyledTitle = styled(Typography)`
  text-align: center;
  font-weight: bold;
  margin: 2rem 0;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const AnimatedTitle = () => {
  const words = "Md. Abdullah Al Noman".split(" ");
  const colors = ["#7FACD6", "#BFB8DA", "#E8B7D4", "#A5678E", "#7FACD6"];

  return (
    <StyledTitle variant="h1">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <StyledSpan 
          duration = "2s"
          color={colors[index % colors.length]} 
          delay={`${index * 0.2}s`}
          >
            {word}
            <span>&nbsp;</span>
          </StyledSpan>
            
        </React.Fragment>
      ))}
      <React.Fragment>
      <StyledSpan
          color="#FF9190"
          duration = "3s"
          delay='3s'
          type='infinite'
          >
            Turag
        </StyledSpan>
      </React.Fragment>
    </StyledTitle>
  );
};

export default AnimatedTitle;
