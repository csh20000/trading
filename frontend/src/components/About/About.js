import { Card, Grid, Box } from '@mui/material';
import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';
import Example from './AboutCarousel';

const About = () => (
  <Card
    container
    spacing={4}
    sx={{
      mt: 6,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <AboutHeader />
    <Grid
      container
      spacing={2}
      sx={{
        mt: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AboutBody />
    </Grid>
    <Box
      sx={{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Example />
    </Box>
  </Card>
);

export default About;
