import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ImageItem, SearchResponse } from 'utils/types';

export interface CardsState {
  searchValue: string | null;
  cards: ImageItem[];
  isLoading: boolean;
  error: string | null;
  selectedCard: ImageItem | null;
}

const initialState: CardsState = {
  searchValue: '',
  cards: [],
  isLoading: false,
  error: null,
  selectedCard: null,
};

const API_URL = 'https://api.unsplash.com/search/photos?per_page=12&query=';
const headers = {
  'Accept-Version': 'v1',
  Authorization: 'Client-ID -koZUPVraluRNEJJQ30ltdBlnZ_E2K6MxfUBcKzdzdg',
};

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (search: string | null, { rejectWithValue }) => {
    try {
      const currentURL = search ? API_URL + search : API_URL + 'all';
      const response = await fetch(currentURL, { headers: headers });

      if (!response) throw new Error('Something went wrong');

      const data: SearchResponse = await response.json();
      return data.results;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // fetchCards(state, action: PayloadAction<string | null>) {
    //   state.isLoading = true;
    //   state.searchValue = action.payload;
    // },
    saveSearchValue(state, action: PayloadAction<string | null>) {
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
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload || [];
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { saveSearchValue, fetchCardsERR, fetchCardsSUC } = cardsSlice.actions;

export default cardsSlice.reducer;
