import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeCards } from '../../reducers/cardReducer';
import { initializeUsers } from '../../reducers/userReducer';
import Introgrid from './Introgrid';
import Showcase from './Showcase';
import Explanation from './Explanation';
import TopCost from './TopCost';
import ExtraResources from './ExtraResources';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCards());
    dispatch(initializeUsers());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundBlendMode: 'color-burn' }}>
      <Introgrid />
      <Showcase />
      <TopCost />
      <Explanation />
      <ExtraResources />
    </Box>
  );
};

export default Home;
