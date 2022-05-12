import Box from '@mui/material/Box';
import Introgrid from './Introgrid';
import Showcase from './Showcase';
import Explanation from './Explanation';
import TopCost from './TopCost';

const Home = () => (
  <Box sx={{ backgroundBlendMode: 'color-burn' }}>
    <Introgrid />
    <Showcase />
    <TopCost />
    <Explanation />
  </Box>
);

export default Home;
