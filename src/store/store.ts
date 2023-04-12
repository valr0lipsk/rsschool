import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './features/cards/cardsSlice';
import usersSlice from './features/users/usersSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
