import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

describe('Modal tests', () => {
  const isOpen = true;
  const fn = jest.fn();
  const user = userEvent.setup();

  it('should render modal', () => {
    render(<Modal isOpen={isOpen} title="Test modal" onClose={fn} />);
    expect(screen.getByText('Test modal')).toBeInTheDocument();
  });

  it('should not render modal when isOpen=false', () => {
    render(<Modal isOpen={false} title="Test modal" onClose={fn} />);
    expect(screen.queryByText('Test modal')).toBeNull();
  });

  it('should close modal by clicking on backdrop', async () => {
    render(<Modal isOpen={isOpen} title="Test modal" onClose={fn} />);
    const backdrop = await screen.getByTestId('backdrop');

    await user.click(backdrop);
    expect(fn).toBeCalled();
  });
});
