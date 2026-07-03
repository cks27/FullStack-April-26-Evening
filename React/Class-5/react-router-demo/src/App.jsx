import React from 'react';
import { Routes, Route, Link } from 'react-router';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import "./App.css"

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/login' element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default App