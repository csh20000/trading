import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    users: userReducer,
  },
});

export default store;
