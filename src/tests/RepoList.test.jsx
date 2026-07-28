import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepoList from '../components/RepoList.jsx';

const repos = [
  {
    id: 1,
    name: 'my-repo',
    description: 'A sample repository',
    stargazers_count: 5,
    language: 'JavaScript',
    updated_at: '2024-01-01T00:00:00Z',
    owner: { login: 'octocat' },
  },
];

describe('RepoList', () => {
  it('renders a list item for each repository', () => {
    render(
      <MemoryRouter>
        <RepoList repos={repos} />
      </MemoryRouter>,
    );

    expect(screen.getByText('my-repo')).toBeInTheDocument();
    expect(screen.getByText('A sample repository')).toBeInTheDocument();
  });

  it('shows an empty state when there are no repositories', () => {
    render(
      <MemoryRouter>
        <RepoList repos={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/nenhum repositório público encontrado/i)).toBeInTheDocument();
  });
});
