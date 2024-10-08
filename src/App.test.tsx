import React from 'react';
import { render, screen, act } from '@testing-library/react';
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
vi.mock('./components/ApiExample', () => ({
  default: () => <div>API Example Page</div>,
}));

// Mock React.lazy
vi.mock('react', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof React;
  return {
    ...actual,
    lazy: (factory: () => Promise<{ default: React.ComponentType }>) =>
      factory().then((module) => module.default),
  };
});

describe('App', () => {
  it('renders navigation and home page', async () => {
    await act(async () => {
      render(<App />);
    });

    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('API Example')).toBeInTheDocument();

    // Check if the home page is rendered by default
    expect(await screen.findByText('Home Page')).toBeInTheDocument();
  });

  it('renders the navbar', async () => {
    await act(async () => {
      render(<App />);
    });
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('renders the main container', async () => {
    await act(async () => {
      render(<App />);
    });
    const mainContainer = await screen.findByText('Home Page');
    expect(mainContainer.closest('.container')).toBeInTheDocument();
  });
});
