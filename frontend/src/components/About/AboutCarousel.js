import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const items = [
  {
    name: 'Name #1',
    description: 'Descrip 1',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
  {
    name: 'placeholder 3',
    description: 'world so hello',
  },
];

const Item = ({ item }) => (
  <Box>
    <Typography
      sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}
    >
      {item.name}
    </Typography>
    <Typography
      sx={{ textAlign: 'center' }}
    >
      {item.description}
    </Typography>
  </Box>
);

const Example = () => (
  <Carousel
    NextIcon={<ArrowForwardIosRoundedIcon />}
    PrevIcon={<ArrowBackIosNewRoundedIcon />}
    animation="slide"
    duration={500}
    autoPlay
    indicators
  >
    {
      items.map((item, i) => <Item index={i} item={item} />)
    }
  </Carousel>
);

export default Example;
