import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card component tests', () => {
  it('should render card component', () => {
    const data = {
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
    };
    render(<Card {...data} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
