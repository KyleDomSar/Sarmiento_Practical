function Loader() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-4">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-400"
        aria-hidden="true"
      />
      <div className="text-center">
        <p className="font-semibold text-slate-800 dark:text-white">Loading...</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">Preparing the team directory</p>
      </div>
    </div>
  )
}

export default Loader