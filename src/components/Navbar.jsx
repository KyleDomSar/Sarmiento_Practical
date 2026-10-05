import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar({ darkMode, onToggleDarkMode, favoriteCount }) {
  const linkClass = ({ isActive }) =>
    isActive ? 'font-semibold underline' : 'hover:underline'

  return (
    <nav className="bg-blue-600 px-6 py-4 text-white dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="text-xl font-bold">
          Team Directory App
        </NavLink>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/users" className={linkClass}>
              Users
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </div>

          <span className="text-sm font-medium">
            Favorites: {favoriteCount}
          </span>

          <Button
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
            onClick={onToggleDarkMode}
            variant="primary"
            className="min-w-28"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar