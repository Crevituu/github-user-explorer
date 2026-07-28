import { useEffect, useState } from 'react';
import { fetchRepoDetails } from '../services/githubApi.js';

/**
 * Fetches a single repository's details for the given owner/repoName pair.
 * Kept as its own hook so the RepoDetails page works even when accessed
 * directly via URL (i.e. it does not depend on the search context).
 */
export function useRepoDetails(owner, repoName) {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRepoDetails(owner, repoName);
        if (isActive) setRepo(data);
      } catch (err) {
        if (isActive) setError(err.message || 'Ocorreu um erro inesperado.');
      } finally {
        if (isActive) setLoading(false);
      }
    }

    if (owner && repoName) load();

    return () => {
      isActive = false;
    };
  }, [owner, repoName]);

  return { repo, loading, error };
}
