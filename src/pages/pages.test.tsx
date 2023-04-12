import React from 'react';
import '@testing-library/jest-dom';
import { Main } from '../pages';
import mockedData from '../assets/images.json';
import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../utils/test/testUtils';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedData),
  })
) as jest.Mock;

describe('Main page tests', () => {
  it('should render Main page with cards', async () => {
    await act(async () => {
      renderWithProviders(<Main />);
    });

    expect(fetch).toBeCalled();
  });
});
