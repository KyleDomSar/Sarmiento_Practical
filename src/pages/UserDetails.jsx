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
      <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="min-h-64 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-200 bg-white p-8 shadow-xl dark:border-rose-900/50 dark:bg-slate-900">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-rose-500">Error</span>
          <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">User Not Found</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">No user exists with ID {id}.</p>
          <Link to="/users" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500">Back to Users</Link>
        </div>
      </main>
    )
  }

  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <main className="min-h-[calc(100vh-72px)] bg-transparent px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <Link to="/users" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">← Back to Users</Link>
        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="bg-slate-950 p-8 text-white md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-blue-500 text-2xl font-black">{initials}</div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Team Member #{user.id}</p>
                <h1 className="mt-2 text-3xl font-black md:text-4xl">{user.name}</h1>
              </div>
            </div>
          </div>
          <div className="grid gap-4 p-8 md:grid-cols-3 md:p-10">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Email</p>
              <p className="mt-2 break-words font-semibold text-slate-900 dark:text-white">{user.email}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Company</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{user.company}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Role</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{user.role}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default UserDetails