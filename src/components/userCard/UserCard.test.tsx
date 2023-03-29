import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserCard from './UserCard';

describe('UserCard component tests', () => {
  const mockedData = {
    id: '2',
    nickname: 'catslover45',
    dateOfBirth: '1994-03-20T17:51:53.221Z',
    country: 'Poland',
    sex: 'female',
    isAgree: false,
  };

  it('should render user card', () => {
    render(<UserCard {...mockedData} />);
    expect(screen.getByText(mockedData.nickname)).toBeInTheDocument();
  });
});
