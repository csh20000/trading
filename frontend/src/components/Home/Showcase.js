import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Roger from '../../assets/images/RogerLegendary.webp';
import LaughTale from '../../assets/images/LaughTaleLegendary.webp';
import Nika from '../../assets/images/NikaLegendary.webp';

const LegendaryCard = ({
  name, rarity, image, description,
}) => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: 300,
      boxShadow: '0 8px 40px -12px rgba(200, 200, 0, 0.2)',
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(255, 255, 0, 0.5)',
      },
    }}
  >
    <CardHeader
      title={name}
      titleTypographyProps={{
        fontSize: 20,
      }}
      sx={{
        paddingBottom: '8px',
      }}
    />
    <CardMedia
      component="img"
      image={image}
      alt={name}
      sx={{
        height: '150px',
        objectFit: 'cover',
        width: '90%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
    <CardContent>
      <Typography variant="h6">{rarity}</Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
);

const Showcase = () => (
  <Box sx={{ background: 'linear-gradient(to bottom, #eeeeee, #fafafa)' }}>
    <Typography variant="h4" textAlign="center" sx={{ paddingTop: '10px', paddingBottom: '15px' }}>
      Exclusive Cards
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Box>
        <Typography textAlign="center" variant="h5" paddingBottom="10px">
          Character
        </Typography>
        <LegendaryCard
          name="Gol D. Roger"
          rarity="Legendary"
          image={Roger}
          description="The king of the pirates, the man who conquered the Grand Line"
        />
      </Box>
      <Box>
        <Typography textAlign="center" variant="h5" paddingBottom="10px">
          Devil Fruit
        </Typography>
        <LegendaryCard
          name="Hito Hito No Mi, Model: Nika"
          rarity="Legendary"
          image={Nika}
          description="A mythical Zoan-type that allows for the user to gin Nika's traits and abilities "
        />
      </Box>
      <Box>
        <Typography textAlign="center" variant="h5" paddingBottom="10px">
          Location
        </Typography>
        <LegendaryCard
          name="Laugh Tale"
          rarity="Legendary"
          image={LaughTale}
          description="The final island that holds all the mysteries of the world"
        />
      </Box>
    </Box>
  </Box>
);

export default Showcase;
