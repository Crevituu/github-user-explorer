const BASE_URL = 'https://api.github.com';

/**
 * Custom error used to carry an HTTP status alongside a friendly message,
 * so UI components can decide how to react (e.g. 404 -> "user not found").
 */
export class GithubApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'GithubApiError';
    this.status = status;
  }
}

async function request(path) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new GithubApiError('Usuário ou repositório não encontrado.', 404);
    }
    if (response.status === 403) {
      throw new GithubApiError(
        'Limite de requisições da API do GitHub atingido. Tente novamente em instantes.',
        403,
      );
    }
    throw new GithubApiError('Não foi possível completar a requisição.', response.status);
  }

  return response.json();
}

/** Fetches public profile data for a given GitHub username. */
export function fetchUser(username) {
  return request(`/users/${encodeURIComponent(username)}`);
}

/**
 * Fetches up to 100 public repositories for a given GitHub username.
 * The GitHub API caps `per_page` at 100; that's enough for this challenge.
 */
export function fetchUserRepos(username) {
  return request(`/users/${encodeURIComponent(username)}/repos?per_page=100`);
}

/** Fetches details for a single repository, identified by owner/name. */
export function fetchRepoDetails(owner, repoName) {
  return request(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repoName)}`);
}
