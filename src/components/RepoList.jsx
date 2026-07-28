import RepoItem from './RepoItem.jsx';
import EmptyState from './EmptyState.jsx';

function RepoList({ repos }) {
  if (repos.length === 0) {
    return (
      <EmptyState
        title="Nenhum repositório público encontrado"
        description="Este usuário ainda não possui repositórios públicos."
      />
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}

export default RepoList;
