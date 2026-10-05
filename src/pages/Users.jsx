import { useEffect, useMemo, useState } from 'react'
import usersData from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favoriteUsers')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch {
      return []
    }
  })
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadUsers = async () => {
      try {
        setLoading(true)
        setError('')

        await new Promise((resolve) => setTimeout(resolve, 800))
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

  useEffect(() => {
    localStorage.setItem('favoriteUsers', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggleFavorite = (id) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    )
  }

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

  if (loading) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
        <Loader />
      </main>
    )
  }

  if (error) {
    return (
      <main className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Users</h1>
        <ErrorMessage message={error} />
      </main>
    )
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Users</h1>

      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, email, or company..."
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          aria-label="Search users"
        />

        <button
          type="button"
          onClick={() => setShowFavoritesOnly((current) => !current)}
          className="rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          {showFavoritesOnly ? 'Show All Users' : 'Show Favorites'}
        </button>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="rounded-lg border border-gray-200 p-6 text-center text-gray-600 dark:border-slate-700 dark:text-slate-300">
          No users found.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favoriteIds.includes(user.id)}
              onToggleFavorite={() => toggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Users
