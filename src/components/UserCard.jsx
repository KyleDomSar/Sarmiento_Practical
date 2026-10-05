import { Link } from 'react-router-dom'
import Button from './Button'

function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
}) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-100 font-bold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold text-slate-900 dark:text-white">{name}</h2>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{email}</p>
          <span className="mt-3 inline-flex max-w-full truncate rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {company}
          </span>
        </div>

        <Button
          label={isFavorite ? 'Remove' : 'Favorite'}
          onClick={onToggleFavorite}
          variant={isFavorite ? 'danger' : 'primary'}
          className="shrink-0 px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Team member #{id}
        </span>
        <Link
          to={"/users/" + id}
          className="font-semibold text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
        >
          View Details →
        </Link>
      </div>
    </article>
  )
}

export default UserCard