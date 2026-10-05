import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usersData from '../data/users'

function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundUser = usersData.find((item) => item.id === Number(id))
      setUser(foundUser || null)
    }, 0)

    return () => clearTimeout(timer)
  }, [id])

  useEffect(() => {
    if (user) {
      document.title = user.name
    } else if (user === null) {
      document.title = 'User Not Found'
    }
  }, [user])

  if (user === undefined) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl">
          <p className="text-gray-600 dark:text-slate-300">Loading user...</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Not Found
          </h1>
          <p className="mt-2 text-gray-600 dark:text-slate-300">
            No user exists with ID {id}.
          </p>
          <Link
            to="/users"
            className="mt-6 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to Users
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/users"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to Users
        </Link>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            User #{user.id}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h1>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-slate-400">Email</p>
              <p className="text-gray-900 dark:text-white">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-slate-400">Company</p>
              <p className="text-gray-900 dark:text-white">{user.company}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-slate-400">Role</p>
              <p className="text-gray-900 dark:text-white">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserDetails
