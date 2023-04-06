import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './features/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
