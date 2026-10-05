import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Team Directory App
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
