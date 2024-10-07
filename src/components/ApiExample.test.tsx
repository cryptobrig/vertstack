import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ApiExample from './ApiExample';
import * as api from '../utils/api';

vi.mock('../utils/api', () => ({
  fetchData: vi.fn(() => new Promise(() => {})), // This will create a promise that never resolves
  sanitizeInput: vi.fn((input) => input),
}));

describe('ApiExample', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await act(async () => {
      render(<ApiExample />);
    });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has proper heading structure', async () => {
    await act(async () => {
      render(<ApiExample />);
    });
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('contains informative content', async () => {
    await act(async () => {
      render(<ApiExample />);
    });
    expect(screen.getByText(/API Integration Example/i)).toBeInTheDocument();
  });

  it('shows loading state initially', async () => {
    await act(async () => {
      render(<ApiExample />);
    });
    expect(screen.getByText('Loading user data...')).toBeInTheDocument();
  });

  it('renders user data after loading', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        company: { name: 'Company A' },
      },
    ];

    (api.fetchData as ReturnType<typeof vi.fn>).mockResolvedValue(mockUsers);

    render(<ApiExample />);

    await waitFor(() => {
      expect(
        screen.queryByText('Loading user data...'),
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('handles error state', async () => {
    (api.fetchData as ReturnType<typeof vi.fn>).mockRejectedValue(
      new Error('Failed to fetch'),
    );

    render(<ApiExample />);

    await waitFor(() => {
      expect(screen.getByText(/Error fetching user data/)).toBeInTheDocument();
    });
  });
});
