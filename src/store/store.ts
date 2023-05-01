import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
import { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cardsSlice from './features/cards/cardsSlice';
import usersSlice from './features/users/usersSlice';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

export const rootReducer = combineReducers({
  cards: cardsSlice,
  users: usersSlice,
});

export function setupStore(preloadedState?: PreloadedState<AppState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
  });
}

export const store = setupStore();

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
