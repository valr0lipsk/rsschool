import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notification from './Notification';

describe('Notification component test', () => {
  it('should render notification component', () => {
    render(<Notification type="success" text="test notification" />);
    expect(screen.getByText('test notification')).toBeInTheDocument();
  });
});
