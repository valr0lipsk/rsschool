import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card component tests', () => {
  it('should render card component', () => {
    const data = {
      id: '1',
      title: 'A little bit confused cat',
      author: 'punksAreAlive',
      views: '30',
      likes: '5',
      createdAt: '2023-03-13T08:03:37.262Z',
      img: 'https://i.pinimg.com/564x/e3/34/61/e33461bbf48f290b67ce02366c72628c.jpg',
    };
    render(<Card {...data} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
