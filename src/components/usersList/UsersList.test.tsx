import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsersList from './UsersList';
import { renderWithProviders } from '../../utils/test/testUtils';

describe('UsersList component test', () => {
  it('should render users list', () => {
    renderWithProviders(<UsersList />);
    expect(screen.getByTestId('usersList')).toBeInTheDocument();
  });
});
