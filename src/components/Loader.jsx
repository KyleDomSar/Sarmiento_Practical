function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        aria-hidden="true"
      />
      <p className="text-sm text-gray-600 dark:text-slate-300">Loading...</p>
    </div>
  )
}

export default Loader
