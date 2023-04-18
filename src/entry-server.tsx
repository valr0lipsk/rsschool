import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setupStore } from './store';

const store = setupStore();

export default function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
}
