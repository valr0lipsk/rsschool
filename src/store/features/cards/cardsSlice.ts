import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageItem } from 'types';

export interface CardsState {
  searchValue: string | null;
  cards: ImageItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CardsState = {
  searchValue: '',
  cards: [],
  isLoading: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetchCards(state, action: PayloadAction<string | null>) {
      state.isLoading = true;
      state.searchValue = action.payload;
    },
    fetchCardsSUC(state, action: PayloadAction<ImageItem[]>) {
      state.isLoading = false;
      state.cards = action.payload;
      state.error = null;
    },
    fetchCardsERR(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.cards = [];
      state.error = action.payload;
    },
  },
});

export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
