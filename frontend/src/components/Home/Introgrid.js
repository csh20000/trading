import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';

const Introgrid = () => (
  <Box sx={{ flexGrow: 1, mt: 15 }}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'Roboto',
          ml: 10,
        }}
        >
          The Internets Premium Location to Trade One Piece Cards
        </Typography>
        <Typography>
          Hello World
        </Typography>
        <Button>
          <Link to="explore"> Explore </Link>
        </Button>
        <Button>
          <Link to="login"> Login </Link>
        </Button>
        <Link to="about"> Learn more about us</Link>
      </Grid>
      <Grid item xs={6}>
        <HomeCard />
      </Grid>
    </Grid>
  </Box>
);

export default Introgrid;
