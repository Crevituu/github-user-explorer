import { Link } from 'react-router-dom';

function RepoItem({ repo }) {
  return (
    <li>
      <Link
        to={`/repo/${repo.owner.login}/${repo.name}`}
        className="card flex flex-col gap-2 p-4 transition-shadow hover:shadow-md focus:outline-none
          focus:ring-2 focus:ring-brand-300"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate font-semibold text-brand-600">{repo.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-slate-500">
            ⭐ {repo.stargazers_count}
          </span>
        </div>

        {repo.description && (
          <p className="line-clamp-2 text-sm text-slate-500">{repo.description}</p>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          {repo.language && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
              {repo.language}
            </span>
          )}
          <span>Atualizado em {new Date(repo.updated_at).toLocaleDateString('pt-BR')}</span>
        </div>
      </Link>
    </li>
  );
}

export default RepoItem;
