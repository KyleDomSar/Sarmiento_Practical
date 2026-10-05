import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'About | Team Directory App'
  }, [])

  return (
    <main className="min-h-[calc(100vh-72px)] bg-white p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          About
        </h1>
        <p className="mt-4 leading-7 text-gray-600 dark:text-slate-300">
          Team Directory App is a React application built with Tailwind CSS.
          It demonstrates reusable components, local data, client-side
          routing, search, favorites, loading states, error handling, and
          dark mode.
        </p>
      </div>
    </main>
  )
}

export default About
