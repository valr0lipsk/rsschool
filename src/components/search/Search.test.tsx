import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
import { renderWithProviders } from '../../utils/test/testUtils';

describe('Search tests', () => {
  it('should render search input', () => {
    renderWithProviders(<Search />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should update value on user input', () => {
    renderWithProviders(<Search />);
    const search = screen.getByRole('searchbox');
    fireEvent.change(search, { target: { value: 'abcd' } });
    expect(search).toHaveValue('abcd');
  });
});
