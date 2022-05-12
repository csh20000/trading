import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';
import rogerXWhitebeard from '../../assets/images/Roger_X_Whitebeard.jpg';

const Introgrid = () => (
  <Box
    sx={{
      backgroundImage: `url(${rogerXWhitebeard})`,
      height: '80vh',
      width: '100%',
      backgroundPosition: 'center',
      backgroungRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <Box sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      height: '100%',
      width: '100%',
    }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={5}>
          <Box>
            <Typography sx={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Roboto',
            }}
            >
              The Internets Premium Location to Trade One Piece Cards
            </Typography>
            <Typography sx={{
              fontSize: '1.5rem',
              textAlign: 'center',
              fontFamily: 'Roboto',
              color: 'gray',
            }}
            >
              Raftel is a fan-made trading platform for One Piece
            </Typography>
            <Button>
              <Link to="explore"> Explore </Link>
            </Button>
            <Button>
              <Link to="login"> Login </Link>
            </Button>
            <Link to="about"> Learn more about us</Link>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <HomeCard />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Introgrid;
