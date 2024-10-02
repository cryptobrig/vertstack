import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the components
vi.mock('./components/Home', () => ({
  default: () => <div>Home Page</div>,
}));
vi.mock('./components/About', () => ({
  default: () => <div>About Page</div>,
}));
vi.mock('./components/Contact', () => ({
  default: () => <div>Contact Page</div>,
}));

describe('App', () => {
  it('renders navigation and home page', () => {
    render(<App />);

    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check if the home page is rendered by default
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
