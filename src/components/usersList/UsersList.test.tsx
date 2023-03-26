import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import users from '../../assets/users.json';
import UsersList from './UsersList';

describe('UsersList component test', () => {
  it('should render users list', () => {
    render(<UsersList users={users} />);
    expect(screen.getByTestId('usersList')).toBeInTheDocument();
  });
});
