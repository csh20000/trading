import { createSlice } from '@reduxjs/toolkit';
import usersService from '../services/usersService';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const initializeUsers = () => async (dispatch) => {
  const users = await usersService.getUsers();
  dispatch(setUsers(users));
};

export default userSlice.reducer;
