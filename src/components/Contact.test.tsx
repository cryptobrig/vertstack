import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('contains informative content', () => {
    render(<Contact />);
    expect(screen.getByText(/contact page/i)).toBeInTheDocument();
  });
});
