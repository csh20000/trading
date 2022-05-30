import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import {
  CardMedia, Typography, Grid, // CardHeader,
} from '@mui/material';
import rogerXWhitebeard from '../../assets/images/Roger_X_Whitebeard.jpg';
import TransformColor from './TransformColor';
import TransformIcon from './TransformIcon';

/*
const OnePieceCard = ({ card }) => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: '100%',
      maxHeight: '100%',
      border: 5,
      borderColor: TransformColor(card.rarity),
    }}
  >
    <CardHeader
      action={
      }
    />
      <Typography
        sx={{
          fontSize: '1.2rem',
          textAlign: 'left',
          fontFamily: 'Calibri',
          color: 'black',
        }}
      >
        {card.name}
      </Typography>
    </CardHeader>
    <CardMedia
      component="img"
      image={rogerXWhitebeard}
      alt="placeholder card img"
      sx={{
        maxWidth: '90%',
        marginLeft: '5%',
      }}
    />
    <Typography
      sx={{
        maxWidth: '90%',
        marginLeft: '5%',
      }}
    >
      {card.type}
    </Typography>
    <Typography
      sx={{
        fontSize: '1.4rem',
        textAlign: 'left',
        fontFamily: 'Roboto',
        color: 'black',
      }}
    >
      {card.description}
    </Typography>
    <Typography>{card.rarity}</Typography>

  </Card>
);
*/

const OnePieceCard = ({ card }) => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: '100%',
      maxHeight: '100%',
      border: 5,
      borderColor: TransformColor(card.rarity),
    }}
  >
    <Grid
      container
    >
      <Grid item xs={11}>
        <Typography
          sx={{
            fontSize: '1.2rem',
            textAlign: 'left',
            fontFamily: 'Calibri',
            color: 'black',
          }}
        >
          {card.name}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        {TransformIcon(card.type)}
      </Grid>
    </Grid>
    <CardMedia
      component="img"
      image={rogerXWhitebeard}
      alt="placeholder card img"
      sx={{
        maxWidth: '90%',
        marginLeft: '5%',
      }}
    />
    <Typography
      sx={{
        maxWidth: '90%',
        marginLeft: '5%',
      }}
    >
      {card.type}
    </Typography>
    <Typography
      sx={{
        fontSize: '1.4rem',
        textAlign: 'left',
        fontFamily: 'Roboto',
        color: 'black',
      }}
    >
      {card.description}
    </Typography>
    <Typography>
      {card.rarity}
    </Typography>

  </Card>
);

const exploreCard = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <>
      {cards.map((card) => (
        <Grid item xs={5.5}>
          <OnePieceCard card={card} />
        </Grid>
      ))}
    </>
  );
};

export default exploreCard;
