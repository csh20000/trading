import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import { initializeCards } from '../../reducers/cardReducer';
import ExploreCard from './ExploreCard';

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCards());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        mt: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12}>
        <h2>Explore</h2>
      </Grid>
      <ExploreCard />

    </Grid>
  );
};

export default Explore;
