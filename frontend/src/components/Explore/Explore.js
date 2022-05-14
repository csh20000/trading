import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeCards } from '../../reducers/cardReducer';
import ExploreCard from './ExploreCard';

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCards());
  }, [dispatch]);

  return (
    <>
      <h2>Explore</h2>
      <p>EEEE</p>
      <p>HELLO</p>
      <p>HELLO</p>
      <ExploreCard />
    </>
  );
};

export default Explore;
