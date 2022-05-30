import { CardMedia, Typography } from '@mui/material';
import aboutHeader from '../../assets/images/Roger_X_Whitebeard.jpg';

const AboutHeader = () => (
  <>
    <CardMedia
      component="img"
      height="400vh"
      image={aboutHeader}
      alt="aboutHeader"
    />
    <Typography
      sx={{
        mt: 2,
        fontFamily: 'Calibri',
        fontSize: '2.5rem',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      About Us
    </Typography>
  </>
);

export default AboutHeader;
