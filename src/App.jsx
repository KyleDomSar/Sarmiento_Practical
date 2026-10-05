import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favoriteUsers')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('favoriteUsers', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggleFavorite = (id) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    )
  }

  return (
    <BrowserRouter>
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((current) => !current)}
        favoriteCount={favoriteIds.length}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users"
          element={
            <Users
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
