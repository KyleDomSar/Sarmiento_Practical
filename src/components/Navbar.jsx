import { Link } from 'react-router-dom'

function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <nav className="bg-blue-600 px-6 py-4 text-white dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link to="/" className="text-xl font-bold">
          Team Directory App
        </Link>

        <div className="flex items-center gap-4">
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

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-lg bg-white/15 px-3 py-2 text-sm hover:bg-white/25"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
