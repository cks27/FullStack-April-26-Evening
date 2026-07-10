import React, {useContext} from 'react';
import { Link } from 'react-router';
import CountContext from '../context/counter-context';
import WatchListContext from '../context/watch-list';

const Layout = (props) => {

    const { watchList } = useContext(WatchListContext);

    return (
        <div className='min-h-screen flex flex-col w-[90%] max-w-7xl mx-auto bg-gray-50 text-gray-900 antialiased'>
            <header className='sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-gray-200'>
                <nav className='flex items-center justify-between py-4'>
                    <Link to="/" className='text-2xl font-extrabold tracking-tight text-amber-500 no-underline'>
                        MovieDB
                    </Link>
                    <ul className='flex gap-2 list-none m-0 p-0'>
                        <li>
                            <Link
                                to="/"
                                className='inline-block px-5 py-2 rounded-full text-sm font-medium text-gray-500 no-underline transition-colors hover:text-gray-900 hover:bg-gray-100'
                            >
                                Trending Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/watchlist"
                                className='inline-block px-5 py-2 rounded-full text-sm font-medium text-gray-500 no-underline transition-colors hover:text-gray-900 hover:bg-gray-100'
                            >
                                WatchList <sup className='text-sm'>{ watchList.length }</sup>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className='flex-1 py-8 pb-12'>
                {props.children}
            </main>

            <footer className='border-t border-gray-200 py-6 text-center'>
                <p className='m-0 text-sm text-gray-500'>All rights reserved &copy; 2026</p>
            </footer>
        </div>
    )
}

export default Layout
