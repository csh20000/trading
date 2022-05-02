import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import rogerXWhitebeard from '../../assests/images/Roger_X_Whitebeard.jpg';

const HomeCard = () => (
  <Card sx={{
    maxWidth: '60%',
    justifyContent: 'center',
  }}
  >
    <CardMedia
      component="img"
      height="300vh"
      image={rogerXWhitebeard}
      alt="Marco"
    />
  </Card>
);

export default HomeCard;
