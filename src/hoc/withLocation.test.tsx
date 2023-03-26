import React from 'react';
import { Header } from '../components/header/Header';
import { withLocation } from './withLocation';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('withLocation HOC tests', () => {
  it('should render withLocation', () => {
    const MockWithLocationComponent = withLocation(Header);
    render(<MockWithLocationComponent />, { wrapper: BrowserRouter });
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
