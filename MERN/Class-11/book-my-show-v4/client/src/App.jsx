import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import CreateTheatrePage from './pages/CreateTheatrePage'
import ShowTheatresPage from './pages/ShowTheatresPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/theatres/create" element={<CreateTheatrePage />} />
        <Route path="/theatres" element={<ShowTheatresPage />} />
      </Routes>
    </Layout>
  )
}

export default App
