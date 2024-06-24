import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders the heading', () => {
  render(<Dashboard />);
  const h1 = screen.getByText(/My Dashboard/i);
  expect(h1).toBeInTheDocument();
});
