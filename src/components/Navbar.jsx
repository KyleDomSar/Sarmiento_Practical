import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar({ darkMode, onToggleDarkMode, favoriteCount }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'rounded-lg bg-white/15 px-3 py-2 font-semibold text-white'
      : 'rounded-lg px-3 py-2 text-blue-100 hover:bg-white/10 hover:text-white'

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 px-4 py-4 text-white shadow-lg backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500 text-lg font-black shadow-lg shadow-blue-950/30">
            TD
          </span>
          <span>
            <span className="block text-base font-bold">Team Directory</span>
            <span className="block text-xs text-slate-400">Team Directory App</span>
          </span>
        </NavLink>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/users" className={linkClass}>Users</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </div>

          <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200">
            Favorites: {favoriteCount}
          </span>

          <Button
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
            onClick={onToggleDarkMode}
            variant="primary"
            className="min-w-28 border-white/30 bg-white/10 hover:bg-white/20"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar