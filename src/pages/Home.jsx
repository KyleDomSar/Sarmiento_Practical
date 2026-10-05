import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import users from '../data/users'

function Home() {
  useEffect(() => {
    document.title = 'Home | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl py-12">
        <section className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
            React + Tailwind CSS
          </p>
          <h1 className="mt-2 text-4xl font-bold">
            Team Directory App
          </h1>
          <p className="mt-4 max-w-2xl text-blue-50">
            Browse team members, search the directory, save favorites, and
            view individual user details.
          </p>

          <Link
            to="/users"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Browse Users
          </Link>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Total Users
            </p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {users.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Search
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              Find users quickly
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Favorites
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              Save your favorites
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
