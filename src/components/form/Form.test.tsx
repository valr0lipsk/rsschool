import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component test', () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  it('should render form', () => {
    render(<Form handleSubmit={handleSubmit} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('clicking the button triggers form validation', async () => {
    render(<Form handleSubmit={handleSubmit} />);

    await user.click(screen.getByRole('button'));
    expect(screen.getAllByText('Value should not be empty')).toHaveLength(4);
  });
});
