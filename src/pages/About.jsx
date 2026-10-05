import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'About | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:p-10">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">About the project</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Simple directory, polished experience.</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            Team Directory App is a React application built with Tailwind CSS. It demonstrates reusable components, local data, client-side routing, search, favorites, loading states, error handling, and dark mode.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Built with</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">React, Vite, Tailwind CSS, and React Router</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Data source</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Local data stored in src/data/users.js</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About