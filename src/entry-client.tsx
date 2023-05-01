import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { setupStore } from './store';
import './styles/style.css';

const store = setupStore();

hydrate();

async function hydrate() {
  hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
