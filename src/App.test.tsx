import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, VERT Stack! text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, VERT Stack!/i);
  expect(textElement).toBeInTheDocument();
});
