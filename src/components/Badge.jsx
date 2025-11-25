export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-primary-500/10 via-white to-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary-700 shadow-sm transition hover:-translate-y-[1px] hover:shadow-soft dark:from-primary-500/15 dark:via-slate-900 dark:to-accent/10 dark:text-primary-200">
      {children}
    </span>
  );
}
