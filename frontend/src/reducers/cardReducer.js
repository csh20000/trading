import { createSlice } from '@reduxjs/toolkit';
import cardsService from '../services/cardsService';

const cardSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    setCards(state, action) {
      return action.payload;
    },
    toggleCardAvailability(state, action) {
      const id = action.payload;
      const cardToChange = state.find((card) => card.id === id);
      const changedCard = { ...cardToChange, cardAmount: cardToChange.cardAmount - 1 };
      return state.map((card) => (card.id !== id ? card : changedCard));
    },
  },
});

export const { toggleCardAvailability, setCards } = cardSlice.actions;

export const initializeCards = () => async (dispatch) => {
  const cards = await cardsService.getCards();
  dispatch(setCards(cards));
};

export default cardSlice.reducer;
