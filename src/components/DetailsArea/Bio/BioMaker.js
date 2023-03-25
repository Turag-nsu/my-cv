import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

export const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: '1rem',
  color: theme.palette.secondary.main,
}));

export const Experience = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const Education = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "Left",
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(4),

}));

export const Degree = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const School = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const Address = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const SocialMedia = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const SocialMediaLink = styled('a')(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing(2),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const WhatsAppLink = ({ number }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <SocialMediaLink href="#" onClick={handleClick}>
      <WhatsAppIcon />
    </SocialMediaLink>
  );
};

export const FacebookLink = ({ username }) => {
  const handleClick = () => {
    window.open(`https://facebook.com/${username}`, '_blank');
  };

  return (
    <SocialMediaLink href="#" onClick={handleClick}>
      <FacebookIcon />
    </SocialMediaLink>
  );
};

export const LinkedInLink = ({ username }) => {
  const handleClick = () => {
    window.open(`https://linkedin.com/in/${username}`, '_blank');
  };

  return (
    <SocialMediaLink href="#" onClick={handleClick}>
      <LinkedInIcon />
    </SocialMediaLink>
  );
};
export const GitHubLink = ({ username }) => {
  const handleClick = () => {
    window.open(`https://github.com/${username}`, '_blank');
  };

  return (
    <SocialMediaLink href="#" onClick={handleClick}>
      <GitHubIcon />
    </SocialMediaLink>
  );
};

