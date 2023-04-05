import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';
import mockedData from '../../assets/images.json';

describe('CardsList component tests', () => {
  it('should render CardsList', () => {
    render(<CardsList items={mockedData} />);
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });
});
