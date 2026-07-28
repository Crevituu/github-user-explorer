import { SORT_OPTIONS } from "../utils/sortRepos.js";

function SortSelect({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort-repos"
        className="text-sm font-medium text-slate-600"
      >
        Ordenar por
      </label>
      <select
        id="sort-repos"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700
          shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortSelect;
