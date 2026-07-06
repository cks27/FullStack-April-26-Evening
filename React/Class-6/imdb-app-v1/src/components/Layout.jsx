import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
    return (
        <div className='w-[80%] mx-auto'>
            {/* Header */}
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Trending Movies</Link></li>
                        <li><Link to="/watchlist">WatchList</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                {props.children}
            </main>

            
            {/* Footer */}
            <footer>
                <p>All rights reserved &copy; 2026 </p>
            </footer>
        </div>
    )
}

export default Layout