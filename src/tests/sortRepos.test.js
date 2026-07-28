import { describe, expect, it } from 'vitest';
import { sortRepos } from '../utils/sortRepos.js';

const repos = [
  { name: 'beta', stargazers_count: 10, updated_at: '2024-01-01T00:00:00Z' },
  { name: 'alpha', stargazers_count: 30, updated_at: '2024-03-01T00:00:00Z' },
  { name: 'gamma', stargazers_count: 20, updated_at: '2024-02-01T00:00:00Z' },
];

describe('sortRepos', () => {
  it('sorts by stars descending by default', () => {
    const result = sortRepos(repos, 'stars-desc');
    expect(result.map((r) => r.name)).toEqual(['alpha', 'gamma', 'beta']);
  });

  it('sorts by stars ascending', () => {
    const result = sortRepos(repos, 'stars-asc');
    expect(result.map((r) => r.name)).toEqual(['beta', 'gamma', 'alpha']);
  });

  it('sorts by name ascending', () => {
    const result = sortRepos(repos, 'name-asc');
    expect(result.map((r) => r.name)).toEqual(['alpha', 'beta', 'gamma']);
  });

  it('sorts by name descending', () => {
    const result = sortRepos(repos, 'name-desc');
    expect(result.map((r) => r.name)).toEqual(['gamma', 'beta', 'alpha']);
  });

  it('sorts by most recently updated', () => {
    const result = sortRepos(repos, 'updated-desc');
    expect(result.map((r) => r.name)).toEqual(['alpha', 'gamma', 'beta']);
  });

  it('does not mutate the original array', () => {
    const original = [...repos];
    sortRepos(repos, 'name-asc');
    expect(repos).toEqual(original);
  });
});
