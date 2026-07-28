function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white/60 py-14 text-center">
      <span className="text-3xl" aria-hidden="true">
        
      </span>
      <p className="text-base font-semibold text-slate-700">{title}</p>
      {description && <p className="max-w-sm text-sm text-slate-400">{description}</p>}
    </div>
  );
}

export default EmptyState;
