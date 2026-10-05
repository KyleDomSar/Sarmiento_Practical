import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = '404 | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">404 Error</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900 dark:text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">The page you are looking for does not exist or may have been moved.</p>
          <Link to="/" className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500">Back to Home</Link>
        </section>
      </div>
    </main>
  )
}

export default NotFound