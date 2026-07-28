export const SORT_OPTIONS = [
  { value: 'stars-desc', label: 'Estrelas (maior → menor)' },
  { value: 'stars-asc', label: 'Estrelas (menor → maior)' },
  { value: 'name-asc', label: 'Nome (A → Z)' },
  { value: 'name-desc', label: 'Nome (Z → A)' },
  { value: 'updated-desc', label: 'Atualização (mais recente)' },
];

export const DEFAULT_SORT = 'stars-desc';

/**
 * Pure function that returns a NEW sorted array of repositories.
 * Keeping it pure (no mutation of the input array) makes it easy to test
 * and safe to reuse from any component or hook.
 */
export function sortRepos(repos, sortOption) {
  const list = [...repos];

  switch (sortOption) {
    case 'stars-asc':
      return list.sort((a, b) => a.stargazers_count - b.stargazers_count);
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case 'updated-desc':
      return list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    case 'stars-desc':
    default:
      return list.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}
