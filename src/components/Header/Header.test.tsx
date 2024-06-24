import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import {BrowserRouter} from 'react-router-dom'

test('renders the header', async() => {
    await act(async () => {
        await render(<Header />, {wrapper: BrowserRouter});
      });
  const header = screen.getByText(/Home/i);
  expect(header).toBeInTheDocument();
});
