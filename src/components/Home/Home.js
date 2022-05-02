import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import HomeCard from './HomeCard';
import bingBack from '../../assets/bing_bckgrd.jpg';

const Home = () => (
  <>
    <Box sx={{ flexGrow: 1, mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          >
            The Internets premium location to buy/sell One Piece Cards
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
    <Box sx={{ flexgorw: 1, mt: 9 }}>
      <p>fillet o fish text</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            bing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            bing big mac
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">back bing</Button>
        </CardActions>
        <CardMedia
          component="img"
          height="100"
          image={bingBack}
          alt="bing back"
        />
      </Card>
    </Box>
  </>
);

export default Home;
