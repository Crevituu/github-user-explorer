import { useState } from 'react';

function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" role="search">
      <label htmlFor="github-username" className="sr-only">
        Nome de usuário do GitHub
      </label>
      <input
        id="github-username"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Buscar usuário do GitHub (ex: octocat)"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5
          text-sm text-slate-800 shadow-sm placeholder:text-slate-400
          focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
        autoComplete="off"
      />
      <button type="submit" className="btn-primary shrink-0" disabled={loading || !value.trim()}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  );
}

export default SearchBar;
