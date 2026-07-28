import { useUser } from '../context/UserContext.jsx';
import SearchBar from '../components/SearchBar.jsx';
import UserCard from '../components/UserCard.jsx';
import SortSelect from '../components/SortSelect.jsx';
import RepoList from '../components/RepoList.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import EmptyState from '../components/EmptyState.jsx';

function Home() {
  const { user, repos, sortOption, setSortOption, loading, error, hasSearched, searchUser } =
    useUser();

  return (
    <div className="flex flex-col gap-6">
      <SearchBar onSearch={searchUser} loading={loading} />

      {loading && <Loader label="Buscando usuário e repositórios..." />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && !hasSearched && (
        <EmptyState
          title="Busque por um usuário do GitHub"
          description="Digite um nome de usuário acima para ver o perfil e os repositórios públicos."
        />
      )}

      {!loading && !error && hasSearched && user && (
        <>
          <UserCard user={user} />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Repositórios públicos ({repos.length})
            </h2>
            <SortSelect value={sortOption} onChange={setSortOption} />
          </div>

          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
}

export default Home;
