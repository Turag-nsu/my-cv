import { styled } from '@mui/material/styles';
import {Box, Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: '1rem',
  backgroundColor: 'white',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
}));

const WebsiteCard = styled(StyledBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
}));
const StyledPaper = styled(Paper)`
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CompetitionCard = ({ title, rank, team }) => (
  <StyledPaper>
    <Typography 
    variant="h6" 
    align="center" 
    color="#2196f3"
    gutterBottom>

      {title}
    </Typography>
    <Box display="block" alignItems="center" mb={2}>
      <Typography  color="#482880" align="center">
        {rank && (`Ranked ${rank} `)}{team &&(`with team ${team}`)}
      </Typography>
    </Box>
  </StyledPaper>
);
const website = [
  {
    id: 2,
    name: "Avit-Pharma",
    url: "https://avit-pharma.live",
    description: "This is my first work. I developed this website when I was a beginner in this sector."
  },
  {
    id: 1,
    name: "EduHolic",
    url: "https://eduholic.live",
    description: "This was a website i developed for my teaching purpose. I will work on it to make it better."
  },
  {
    id: 3,
    name: "This website",
    url: "/",
    description: "This is my portfolio. It is developed by me. You can see so example of my skill here.",
  },
  // add more website objects as needed
];

const Works = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <StyledBox>
      <Typography variant="h4" align="center" gutterBottom>
        My Works
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {website.map((website) => (
          <Grid item xs={12} key={website.id}>
            <WebsiteCard onClick={() => handleClick(website.url)}>
              <Typography 
              variant="h5" 
              color = "#2196f3"
              gutterBottom>
                {website.name}
              </Typography>
              <Typography variant="subtitle1">{website.description}</Typography>
            </WebsiteCard>
            
          </Grid>
        ))}
        <CompetitionCard title="ICPC Dhaka Regional Preliminary Contest 2021" rank="499th" team="NSU_header_File" />
        <CompetitionCard title="Trained with NSUPS for 1 year" />
        <CompetitionCard title="Intra ACM Programming Contest 2022" rank = "5th"/>
        <CompetitionCard title="General Member at NSU ACM SC" rank="Best member of 2022"/>
        <CompetitionCard title="Co-Founder of NETORS, Bangladesh" />
      </Grid>
    </StyledBox>
  );
};

export default Works;
