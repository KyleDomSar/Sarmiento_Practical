import { useEffect, useMemo, useState } from 'react'
import usersData from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function Users({ favoriteIds, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  useEffect(() => {
    let isMounted = true
    const loadUsers = async () => {
      try {
        setLoading(true)
        setError('')
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const data = usersData
        if (isMounted) {
          setUsers(data)
          setLoading(false)
        }
      } catch {
        if (isMounted) {
          setError('Failed to load users.')
          setLoading(false)
        }
      }
    }
    loadUsers()
    return () => {
      isMounted = false
    }
  }, [])

  const filteredUsers = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()
    return users.filter((user) => {
      const matchesSearch =
        !searchTerm ||
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.company.toLowerCase().includes(searchTerm)
      const matchesFavoriteFilter =
        !showFavoritesOnly || favoriteIds.includes(user.id)
      return matchesSearch && matchesFavoriteFilter
    })
  }, [users, search, showFavoritesOnly, favoriteIds])

  useEffect(() => {
    document.title = "Users (" + filteredUsers.length + ")"
  }, [filteredUsers.length])

  if (loading) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 h-10 w-40 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          <Loader />
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-3xl font-black text-slate-900 dark:text-white">Users</h1>
          <ErrorMessage message={error} />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Team Directory</span>
          <div className="mt-2 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Meet the team</h1>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {filteredUsers.length} member{filteredUsers.length !== 1 ? "s" : ""} visible
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, email, or company..."
              className="w-full flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
              aria-label="Search users"
            />
            <button
              type="button"
              onClick={() => setShowFavoritesOnly((current) => !current)}
              className={showFavoritesOnly ? "rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-sm hover:bg-blue-500" : "rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}
            >
              {showFavoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
            </button>
          </div>
        </div>

        {filteredUsers.length === 0 ? (
          <ErrorMessage message="No users found." />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
                isFavorite={favoriteIds.includes(user.id)}
                onToggleFavorite={() => onToggleFavorite(user.id)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Users