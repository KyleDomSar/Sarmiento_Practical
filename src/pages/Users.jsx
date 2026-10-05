import { useEffect, useState } from 'react'
import usersData from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
      } catch (err) {
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

  if (loading) {
    return (
      <main className="p-6">
        <h1 className="mb-6 text-3xl font-bold">Users</h1>
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

      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company}
          />
        ))}
      </div>
    </main>
  )
}

export default Users
