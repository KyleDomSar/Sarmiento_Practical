import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import users from '../data/users'

function Home() {
  useEffect(() => {
    document.title = 'Home | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-2xl" />
          <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              React + Tailwind CSS
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Your team,
              <span className="block text-blue-400">all in one place.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              A clean team directory for browsing members, searching profiles, saving favorites, and checking individual details.
            </p>
            <Link
              to="/users"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-950/40 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Browse Team →
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Team Members</p>
            <p className="mt-2 text-4xl font-black text-slate-900 dark:text-white">{users.length}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Profiles in the local directory</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Smart Search</p>
            <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Find people faster</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Search by name, email, or company.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Favorites</p>
            <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Save your picks</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Keep important team members easy to find.</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home