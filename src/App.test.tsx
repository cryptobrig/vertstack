// App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders Hello, VERT Stack! text', () => {
    render(<App />);
    const textElement = screen.getByText(/Hello, VERT Stack!/i);
    expect(textElement).toBeInTheDocument();
  });
});
