import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import CV from '../../Md. Abdullah Al Noman Turag.pdf'
const StyledButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.up('sm')]: {
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const FloatingDownloadButton = () => {
  return (
    <a href={CV} download="Md. Abdullah Al Noman Turag.pdf">
      <StyledButton variant="contained" startIcon={<GetAppIcon />} size="large">
        Download CV
      </StyledButton>
    </a>
  );
};

export default FloatingDownloadButton;
