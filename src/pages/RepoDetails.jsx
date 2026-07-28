import { Link, useParams } from 'react-router-dom';
import { useRepoDetails } from '../hooks/useRepoDetails.js';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

function RepoDetails() {
  const { owner, repoName } = useParams();
  const { repo, loading, error } = useRepoDetails(owner, repoName);

  return (
    <div className="flex flex-col gap-6">
      <Link to="/" className="w-fit text-sm text-brand-500 hover:underline">
        ← Voltar para a busca
      </Link>

      {loading && <Loader label="Carregando repositório..." />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && repo && (
        <section className="card flex flex-col gap-4 p-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{repo.name}</h1>
            <p className="text-sm text-slate-400">por {repo.owner?.login}</p>
          </div>

          {repo.description && <p className="text-slate-600">{repo.description}</p>}

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
              ⭐ {repo.stargazers_count} estrelas
            </span>
            {repo.language && (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                {repo.language}
              </span>
            )}
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
              🍴 {repo.forks_count} forks
            </span>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-fit"
          >
            Ver no GitHub ↗
          </a>
        </section>
      )}
    </div>
  );
}

export default RepoDetails;
