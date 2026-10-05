function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="mt-2 text-sm text-gray-700">{company}</p>
        </div>

        <button
          type="button"
          onClick={onToggleFavorite}
          className="rounded px-3 py-1 text-sm"
        >
          {isFavorite ? "★ Favorite" : "☆ Favorite"}
        </button>
      </div>

      <a
        href={`/users/${id}`}
        className="mt-4 inline-block font-medium text-blue-600 hover:underline"
      >
        View Details
      </a>
    </div>
  )
}

export default UserCard
