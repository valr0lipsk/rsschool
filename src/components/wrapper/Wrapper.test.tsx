import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from './Wrapper';

describe('Wrapper component tests', () => {
  it('should render Wrapper', () => {
    render(<Wrapper />);
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });
});
