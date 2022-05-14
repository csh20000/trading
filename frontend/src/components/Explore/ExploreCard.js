import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';

const OnePieceCard = ({ card }) => (
  <Card
    variant="outlined"
  >
    <div>
      {card.name}
      {card.rarity}
      {card.description}
    </div>
  </Card>
);

const exploreCard = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <>
      {cards.map((card) => <OnePieceCard key={card.id} card={card} />)}
    </>
  );
};

export default exploreCard;
