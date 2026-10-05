function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300">{email}</p>
          <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">{company}</p>
        </div>

        <button
          type="button"
          onClick={onToggleFavorite}
          className="rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          {isFavorite ? "★ Favorite" : "☆ Favorite"}
        </button>
      </div>

      <a
        href={`/users/${id}`}
        className="mt-4 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        View Details
      </a>
    </div>
  )
}

export default UserCard
