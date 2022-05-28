import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const TransformIcon = (type) => {
  if (type === 'Character') {
    return <AccountCircleIcon />;
  }
  if (type === 'Location') {
    return <PlaceIcon />;
  }
  if (type === 'Devil Fruit') { return <RestaurantIcon />; }
  return null;
};

export default TransformIcon;
