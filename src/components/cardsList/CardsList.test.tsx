import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';
import data from '../../assets/cards.json';

describe('CardsList component tests', () => {
  it('should render CardsList', () => {
    const mockItems = data;

    render(<CardsList items={mockItems} />);
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });
});
