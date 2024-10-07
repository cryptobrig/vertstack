import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import UserList from './UserList';
import * as api from '../utils/api';

vi.mock('../utils/api', () => ({
  fetchData: vi.fn(() => new Promise(() => {})), // This will create a promise that never resolves
  sanitizeInput: vi.fn((input) => input),
}));

describe('UserList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', async () => {
    await act(async () => {
      render(<UserList />);
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
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        company: { name: 'Company B' },
      },
    ];

    (api.fetchData as ReturnType<typeof vi.fn>).mockResolvedValue(mockUsers);

    render(<UserList />);

    await waitFor(() => {
      expect(
        screen.queryByText('Loading user data...'),
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Company B')).toBeInTheDocument();
  });

  it('handles error state', async () => {
    (api.fetchData as ReturnType<typeof vi.fn>).mockRejectedValue(
      new Error('Failed to fetch'),
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/Error fetching user data/)).toBeInTheDocument();
    });
  });
});
