import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import rogerXWhitebeard from '../../assets/images/Roger_X_Whitebeard.jpg';

const HomeCard = () => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: '60vw',
      border: 1,
    }}
  >
    <CardMedia
      component="img"
      height="350vh"
      image={rogerXWhitebeard}
      alt="rogerXWhitebeard"
    />
  </Card>
);

export default HomeCard;
