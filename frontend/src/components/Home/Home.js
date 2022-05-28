import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeCards } from '../../reducers/cardReducer';
import Introgrid from './Introgrid';
import Showcase from './Showcase';
import Explanation from './Explanation';
import TopCost from './TopCost';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCards());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundBlendMode: 'color-burn' }}>
      <Introgrid />
      <Showcase />
      <TopCost />
      <Explanation />
    </Box>
  );
};

export default Home;
