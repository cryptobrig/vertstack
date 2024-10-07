import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('contains informative content', () => {
    render(<About />);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
});
