import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

import { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'utils/types';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
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
