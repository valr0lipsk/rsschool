import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Card component tests', () => {
  const user = userEvent.setup();
  const fn = jest.fn();
  const mockItem = {
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

  it('should render card component', () => {
    render(<Card {...mockItem} onClick={fn} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should handle click on card', async () => {
    render(<Card {...mockItem} onClick={fn} />);
    const card = screen.getByTestId('card');
    await user.click(card);

    expect(fn).toBeCalled();
  });
});
