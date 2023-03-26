import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputWrapper from './InputWrapper';

describe('InputWrapper component tests', () => {
  it('should render input wrapper', () => {
    render(
      <InputWrapper name="test" title="Test">
        <input type="checkbox" id="test" />
      </InputWrapper>
    );

    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('should render error', () => {
    render(
      <InputWrapper name="test" title="Test" error="test error">
        <input type="checkbox" id="test" />
      </InputWrapper>
    );

    expect(screen.getByText('test error')).toBeInTheDocument();
  });
});
