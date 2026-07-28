import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserCard from '../components/UserCard.jsx';

const user = {
  login: 'octocat',
  name: 'The Octocat',
  avatar_url: 'https://example.com/avatar.png',
  bio: 'GitHub mascot',
  email: 'octocat@github.com',
  followers: 100,
  following: 9,
  public_repos: 8,
  html_url: 'https://github.com/octocat',
};

describe('UserCard', () => {
  it('renders the user name, bio and stats', () => {
    render(<UserCard user={user} />);

    expect(screen.getByText('The Octocat')).toBeInTheDocument();
    expect(screen.getByText('GitHub mascot')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText(/octocat@github.com/)).toBeInTheDocument();
  });

  it('falls back to login when name is not available', () => {
    render(<UserCard user={{ ...user, name: null }} />);
    expect(screen.getByText('octocat')).toBeInTheDocument();
  });
});
