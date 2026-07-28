function Stat({ label, value }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-slate-50 px-3 py-2">
      <span className="text-base font-bold text-slate-800">{value}</span>
      <span className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </span>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <section className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
      <img
        src={user.avatar_url}
        alt={`Avatar de ${user.login}`}
        className="mx-auto h-24 w-24 shrink-0 rounded-full border border-slate-200 sm:mx-0"
      />

      <div className="flex-1 space-y-3 text-center sm:text-left">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            {user.name || user.login}
          </h1>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-brand-500 hover:underline"
          >
            @{user.login}
          </a>
        </div>

        {user.bio && <p className="text-sm text-slate-600">{user.bio}</p>}

        {user.email && (
          <p className="text-sm text-slate-500">
            <span className="font-medium">E-mail:</span> {user.email}
          </p>
        )}

        <div className="flex justify-center gap-3 sm:justify-start">
          <Stat label="Seguidores" value={user.followers} />
          <Stat label="Seguindo" value={user.following} />
          <Stat label="Repositórios" value={user.public_repos} />
        </div>
      </div>
    </section>
  );
}

export default UserCard;
