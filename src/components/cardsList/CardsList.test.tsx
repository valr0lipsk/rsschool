import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';

describe('CardsList component tests', () => {
  it('should render CardsList', () => {
    render(<CardsList />);
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });
});
