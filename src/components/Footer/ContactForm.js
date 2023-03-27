import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Snackbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  margin: 'auto',
  marginBottom: '2rem',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f0ebf7',
  borderRadius: theme.shape.borderRadius,
  padding: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    padding: '1rem',
    width: '40%',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: '0.5rem 0',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '1rem 0',
  [theme.breakpoints.up('sm')]: {
    margin: '1.5rem 0',
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_v5gzagl',
        'template_46pdiyo',
        event.target,
        'Ru3OjwteMUPoUY34t'
      )
      .then(() => {
        console.log('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setSuccessMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Error sending email. Please try again later.');
      });
  };

  const handleSuccessClose = () => {
    setSuccessMessage('');
  };

  const handleErrorClose = () => {
    setErrorMessage('');
  };

  return (
    <>
    <Typography
    variant='h6'
    gutterBottom>
        Contact me
    </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <StyledTextField
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          fullWidth
        />
        <StyledTextField
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
        />
        <StyledButton type="submit" variant="contained" color="primary" fullWidth>
          Send
        </StyledButton>
      </StyledForm>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={5000}
        onClose={handleSuccessClose}
        message={successMessage}
      />
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={5000}
        onClose={handleErrorClose}
        message={errorMessage}
      />
    </>
  );
};

export default ContactForm;
