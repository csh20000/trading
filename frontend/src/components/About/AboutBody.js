import {
  Card,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import aboutBuilding from '../../assets/images/Marineford_construction.webp';
import aboutOnePiece from '../../assets/images/about_one_piece.png';

const AboutBody = () => (
  <>
    <Grid item xs={5}>
      <Card sx={{ borderRadius: '100px' }}>
        <CardMedia
          component="img"
          height="400vh"
          image={aboutBuilding}
          alt="aboutBuilding"
        />
      </Card>
    </Grid>
    <Grid item xs={5}>
      <Typography
        sx={{
          fontSize: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Calibri',
        }}
      >
        This website was built during the summer of 2022 as a project
        between Cary Shu and Wynn Kaza to learn web
        development skills outside of college coursework.
      </Typography>
    </Grid>

    <Grid item xs={5}>
      <Typography
        sx={{
          fontSize: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Calibri',
        }}
      >
        Placeholder text for second portion.
      </Typography>
    </Grid>
    <Grid item xs={5}>
      <Card sx={{ borderRadius: '100px' }}>
        <CardMedia
          component="img"
          height="400vh"
          image={aboutOnePiece}
          alt="aboutOnePiece"
        />
      </Card>
    </Grid>
  </>
);

export default AboutBody;
