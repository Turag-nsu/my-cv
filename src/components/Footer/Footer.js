import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledBox = styled(Box)({
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem',
  animation: `${fadeIn} 0.5s ease-out`,
});

const Footer = () => {
  return (
    <StyledBox>
        <ContactForm />
      <Typography variant="body1" align="center">
        © 2023 This website is developed and maintained by me(Md. Abdullah Al Noman Turag). All rights reserved.
      </Typography>
    </StyledBox>
  );
};

export default Footer;
