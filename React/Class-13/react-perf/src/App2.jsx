import React, { useEffect } from 'react'
import { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router';

const App2 = () => {

    const [HomePage, setHomePage] = useState(null);
    const [AboutPage, setAboutPage] = useState(null);
    const [ContactPage, setContactPage] = useState(null);
    const [DashboardPage, setDashboardPage] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
        import('./pages/HomePage').then((module) =>setHomePage(()=> module.default));
    }, []);


    const loadHomePage = () => {
        // Async
        import('./pages/HomePage').then((module) =>setHomePage(()=> module.default));
    }

    const loadAboutPage = () => {
        import('./pages/AboutPage').then((module) =>setAboutPage(()=> module.default));
    }

    const loadDashboardPage = () => {
        import('./pages/DashboardPage').then((module) => setDashboardPage(() => module.default));
    }

    const loadContactPage = () => {
        import('./pages/ContactPage').then((module) => setContactPage(() => module.default));
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link onClick={loadHomePage} to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link onClick={loadAboutPage} to="/about">About Page</Link>
                    </li>
                    <li>
                        <Link onClick={loadContactPage} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={loadDashboardPage}  to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={HomePage ? <HomePage/> : <p>Loading Home Page</p> } />
                <Route path="/about" element={AboutPage ? <AboutPage/> : <p>Loading About Page</p>} />
                <Route path="/contact" element={ContactPage ? <ContactPage /> : <p>Loading contact</p>} />
                <Route path="/dashboard" element={DashboardPage ? <DashboardPage /> : <p>Loading dashboard</p>} />
            </Routes>
        </div>
    )
}

export default App2