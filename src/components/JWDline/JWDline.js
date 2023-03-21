import React from 'react';
import { styled } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextWrapper = styled('div')(({ theme }) => ({
  animation: `${fadeIn} 1s ease-out`,
}));

const JWDline = () => {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    display: 'block',
    borderRadius: `10px`,
  }));

  return (
    <Div>
      <TextWrapper>Junior Web Developer</TextWrapper>
    </Div>
  );
};

export default JWDline;
