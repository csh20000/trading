import React from 'react';
// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const GetCardData = () => (
  axios.get('http://localhost:3003/api/cards')
    .then((response) => response.json()).then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error))
);

const cardInfo = () => (
  <>
    <Button onClick={GetCardData}>cards button</Button>
    <p>Cards text</p>
  </>
);

export default cardInfo;

/*
const [cards, setCards] = useState([]);

const GetCardData = () => (
  axios.get('http://localhost:3003/api/cards')
    .then((response) => response.json()).then((response) => {
      console.log(response);
      setCards(response);
    })
    .catch((error) => console.log(error))
);
useEffect(() => {
  GetCardData();
}, []);

const cardInfo = () => (
  <>
    <Button onClick={GetCardData}>cards button</Button>
    <p>Cards text</p>
    <p>{cards.map((item) => <li>{item.name}</li>)}</p>
  </>
);

export default cardInfo;
*/
