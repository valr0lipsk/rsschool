import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserCard from './UserCard';
import { IoFemale, IoMale, IoMaleFemale } from 'react-icons/io5';

describe('UserCard component tests', () => {
  const mockedData = {
    id: '2',
    name: 'catslover45',
    dateOfBirth: '1994-03-20T17:51:53.221Z',
    country: 'Poland',
    sex: 'female',
    promo: false,
  };

  it('should render user card', () => {
    render(<UserCard {...mockedData} />);
    expect(screen.getByText(mockedData.name)).toBeInTheDocument();
  });

  it('should return correct icon for female', () => {
    const userCard = new UserCard(mockedData);

    const sexIconFemale = userCard.getSexIcon('female');
    expect(sexIconFemale).toStrictEqual(<IoFemale />);
  });

  it('should return correct icon for male', () => {
    const userCard = new UserCard(mockedData);

    const sexIconMale = userCard.getSexIcon('male');
    expect(sexIconMale).toStrictEqual(<IoMale />);
  });

  it('should return correct icon for other', () => {
    const userCard = new UserCard(mockedData);

    const sexIconOther = userCard.getSexIcon('other');
    expect(sexIconOther).toStrictEqual(<IoMaleFemale />);
  });
});
