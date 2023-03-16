import React from 'react';
import { Header } from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';

describe('Header tests', () => {
  it('should render header', () => {
    const loc = location;
    render(
      <MemoryRouter>
        <Header location={loc} />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
