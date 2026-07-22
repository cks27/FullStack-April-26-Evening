import React, { lazy, Suspense, useEffect } from 'react'
import { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router';

const App = () => {

    const HomePage = lazy(() => import('./pages/HomePage'));
    const AboutPage = lazy(() => import('./pages/AboutPage'));
    const ContactPage = lazy(() => import('./pages/ContactPage'));
    const DashboardPage = lazy(() => import('./pages/DashboardPage'));

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
                <Route path='/' element={ 
                    <Suspense fallback={<p>Loading Home page</p>}>
                        <HomePage/>
                    </Suspense>
                } />
                 <Route path='/about' element={ 
                    <Suspense fallback={<p>Loading about page</p>}>
                        <AboutPage/>
                    </Suspense>
                } />
                 <Route path='/contact' element={ 
                    <Suspense fallback={<p>Loading contact page</p>}>
                        <ContactPage/>
                    </Suspense>
                } />
                 <Route path='/dashboard' element={ 
                    <Suspense fallback={<p>Loading dashboard page</p>}>
                        <DashboardPage/>
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}

export default App