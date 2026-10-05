import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = '404 | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl py-12">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          404 ERROR
        </p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-600 dark:text-slate-300">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
