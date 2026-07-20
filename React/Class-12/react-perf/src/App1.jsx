import React from 'react'
import { Route, Routes, Link } from 'react-router';
import HomePage from './pages/HomePage';

// static imports
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';

const App1 = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/dashboard" element={ <DashboardPage/> } />
      </Routes>
    </div>
  )
}

export default App1