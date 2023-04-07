import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ImageItem, SearchResponse } from 'utils/types';

export interface CardsState {
  searchValue: string | null;
  cards: ImageItem[];
  isLoading: boolean;
  error: string | undefined;
  selectedCard: ImageItem | undefined;
}

const initialState: CardsState = {
  searchValue: '',
  cards: [],
  isLoading: false,
  error: undefined,
  selectedCard: undefined,
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

      // if (!response) throw new Error('Something went wrong');

      const data: SearchResponse = await response.json();
      return data.results;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
        return rejectWithValue(e.message);
      }
    }
  }
);

export const fetchCardById = createAsyncThunk(
  'cards/fetchCardById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/${id}`, { headers: headers });
      if (!response) throw new Error('Something went wrong');

      const data: ImageItem = await response.json();
      return data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    saveSearchValue(state, action: PayloadAction<string | null>) {
      state.searchValue = action.payload;
    },
    fetchCardsSUC(state, action: PayloadAction<ImageItem[]>) {
      state.isLoading = false;
      state.cards = action.payload;
      state.error = undefined;
    },
    fetchCardsERR(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.cards = [];
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload || [];
      state.isLoading = false;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.cards = [];
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchCardById.pending, (state) => {
      state.selectedCard = undefined;
      state.error = undefined;
    });
    builder.addCase(fetchCardById.fulfilled, (state, action) => {
      state.selectedCard = action.payload;
    });
    builder.addCase(fetchCardById.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { saveSearchValue, fetchCardsERR, fetchCardsSUC } = cardsSlice.actions;

export default cardsSlice.reducer;
