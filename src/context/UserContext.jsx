import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { fetchUser, fetchUserRepos } from '../services/githubApi.js';
import { DEFAULT_SORT, sortRepos } from '../utils/sortRepos.js';

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const searchUser = useCallback(async (username) => {
    const trimmed = username.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const [userData, reposData] = await Promise.all([
        fetchUser(trimmed),
        fetchUserRepos(trimmed),
      ]);
      setUser(userData);
      setRepos(reposData);
      setSortOption(DEFAULT_SORT);
    } catch (err) {
      setUser(null);
      setRepos([]);
      setError(err.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedRepos = useMemo(() => sortRepos(repos, sortOption), [repos, sortOption]);

  const value = useMemo(
    () => ({
      user,
      repos: sortedRepos,
      sortOption,
      setSortOption,
      loading,
      error,
      hasSearched,
      searchUser,
    }),
    [user, sortedRepos, sortOption, loading, error, hasSearched, searchUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}
