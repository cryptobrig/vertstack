import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has accessible images', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
    });
  });

  it('has accessible links', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
    const link = screen.getByText('View API Example');
    expect(link).toHaveAttribute('href', '/api-example');
    expect(link).toHaveClass('button-link');
  });

  it('has proper heading structure', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});
