import React from 'react';
import { screen } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test/testUtils';
import mockedData from '../../assets/images.json';
import userEvent from '@testing-library/user-event';

describe('CardsList component tests', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    renderWithProviders(<CardsList />, {
      preloadedState: {
        cards: {
          items: mockedData,
          error: undefined,
          isLoading: false,
          searchValue: null,
          selectedCard: undefined,
        },
      },
    });
  });

  it('should render CardsList', () => {
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });

  it('should open modal', async () => {
    const cards = screen.getAllByRole('img');
    await user.click(cards[1]);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
