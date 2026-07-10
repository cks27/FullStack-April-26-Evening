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

// https://www.themoviedb.org/movie/1280738
// https://www.themoviedb.org/movie/1339713
// https://www.themoviedb.org/movie/1108427

// movie/{id}
// How would i write a endpoint or route which has dynamic part
// Here the id is request parameter