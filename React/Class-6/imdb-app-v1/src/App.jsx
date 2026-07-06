import React from 'react'
import Card from './components/Card'
import { Routes, Route, Link } from 'react-router';
import HomePage from './pages/HomePage';
import WatchList from './pages/WatchList';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Trending Movies</Link></li>
            <li><Link to="/watchlist">WatchList</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>

      </main>

      <footer>
        <p>All rights reserved &copy; 2026 </p>
      </footer>
    </div>
  )
}

export default App