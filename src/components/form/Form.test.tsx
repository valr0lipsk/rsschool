import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { renderWithProviders } from '../../utils/test/testUtils';

describe('Form component test', () => {
  const user = userEvent.setup();
  beforeEach(() => {
    renderWithProviders(<Form />);
  });

  it('should render form', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('clicking the button triggers form validation', async () => {
    await user.click(screen.getByRole('button'));
    expect(screen.getAllByText('Value should not be empty')).toHaveLength(6);
  });

  it('should upload file with input file', async () => {
    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Image') as HTMLInputElement;
    await waitFor(() =>
      fireEvent.change(imageInput, {
        target: { files: [file] },
      })
    );

    if (imageInput.files) {
      expect(imageInput.files[0]).toStrictEqual(file);
    }
  });

  // it('should add new user', async () => {
  //   const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
  //   const imageInput = screen.getByLabelText('Image') as HTMLInputElement;
  //   await waitFor(() =>
  //     fireEvent.change(imageInput, {
  //       target: { files: [file] },
  //     })
  //   );

  //   user.click(screen.getByLabelText('Male'));
  //   user.click(screen.getByLabelText("I've read user agreement"));
  //   user.selectOptions(screen.getByLabelText('Country'), 'Canada');
  //   user.type(screen.getByLabelText('Nickname'), 'abcde');
  //   user.type(screen.getByLabelText('Date of birth'), '2023-03-28T14:52');

  //   await user.click(screen.getByRole('button'));

  //   const notification = await screen.findByText('User was added');
  //   expect(notification).toBeInTheDocument();
  // });
});
