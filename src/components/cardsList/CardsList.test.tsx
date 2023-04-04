import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';

describe('CardsList component tests', () => {
  it('should render CardsList', () => {
    const mockItems = [
      {
        id: '1',
        alt_description: 'A little bit confused cat',
        created_at: '2023-03-13T08:03:37.262Z',
        urls: {
          reqular: 'https://i.pinimg.com/564x/e3/34/61/e33461bbf48f290b67ce02366c72628c.jpg',
        },
        color: '#000000',
        likes: 55,
        user: {
          username: 'punksAreAlive',
        },
      },
      {
        id: '2',
        alt_description: 'A little bit confused cat',
        created_at: '2023-03-13T08:03:37.262Z',
        urls: {
          reqular: 'https://i.pinimg.com/564x/e3/34/61/e33461bbf48f290b67ce02366c72628c.jpg',
        },
        color: '#000000',
        likes: 55,
        user: {
          username: 'punksAreAlive',
        },
      },
    ];

    render(<CardsList items={mockItems} />);
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });
});
