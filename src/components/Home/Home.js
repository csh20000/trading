import Box from '@mui/material/Box';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from '@mui/material/';
import bingBack from '../../assets/bing_bckgrd.jpg';

const Home = () => (
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
);

export default Home;
