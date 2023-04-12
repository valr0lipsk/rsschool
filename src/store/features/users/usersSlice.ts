import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'utils/types';

export interface UsersState {
  items: User[];
}

const initialState: UsersState = {
  items: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser(state, action: PayloadAction<User>) {
      state.items.push(action.payload);
    },
  },
});

export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;
