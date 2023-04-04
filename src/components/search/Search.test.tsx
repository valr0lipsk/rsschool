import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
import userEvent from '@testing-library/user-event';

describe('Search tests', () => {
  const user = userEvent.setup();
  const handleEnter = jest.fn();
  it('should render search input', () => {
    render(<Search handleSearch={handleEnter} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should update value on user input', () => {
    render(<Search handleSearch={handleEnter} />);
    const search = screen.getByRole('searchbox');
    fireEvent.change(search, { target: { value: 'abcd' } });
    expect(search).toHaveValue('abcd');
  });

  it('should trigger enter event', () => {
    render(<Search handleSearch={handleEnter} />);
    const search = screen.getByRole('searchbox');
    fireEvent.submit(search);
    expect(handleEnter).toHaveBeenCalled();
  });
});
