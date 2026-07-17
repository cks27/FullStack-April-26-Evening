import React from 'react'
import { Routes, Route, Link } from 'react-router';
import HomePage from './pages/HomePage';
import WatchList from './pages/WatchList';
import Layout from './components/Layout';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/movies/:id' element={<MovieDetails/> } />
      </Routes>
    </Layout>
  )
}

export default App
