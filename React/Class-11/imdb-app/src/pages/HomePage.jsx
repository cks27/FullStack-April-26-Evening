import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from '../components/Movie';
import Banner from '../components/Banner';

const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMDB_READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${TMDB_BASE_URL}/movie/popular?language=en-US&page=${pageNo}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${IMDB_READ_ACCESS_TOKEN}`
            }
        })
            .then((res) => {
                setMovies(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }, [pageNo]);

    const prevPageHandler = () => {
        if (pageNo <= 0) {
            return;
        }
        setPageNo((prevState) => prevState - 1);
    }

    const nextPageHandler = () => {
        setPageNo((prevState) => prevState + 1);
    }

    return (
        <div>
            <Banner />
            {isLoading && (
                <div className='flex flex-col items-center justify-center gap-4 py-16 text-gray-500'>
                    <div className='size-10 rounded-full border-3 border-gray-200 border-t-amber-500 animate-spin' />
                    <p>Loading...</p>
                </div>
            )}
            {movies && movies.length && <section>
                <section className='flex flex-wrap justify-center gap-6'>
                    {
                        movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />
                        })
                    }
                </section>
                <section className='flex items-center justify-center gap-4 mt-10'>
                    <button
                        className='px-6 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 cursor-pointer shadow-sm transition-colors hover:bg-gray-50 hover:border-amber-400 hover:text-amber-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 disabled:hover:text-gray-500'
                        onClick={prevPageHandler}
                        disabled={pageNo <= 1}
                    >
                        Prev
                    </button>
                    <span className='min-w-20 text-center text-sm font-semibold text-gray-500'>Page {pageNo}</span>
                    <button
                        className='px-6 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 cursor-pointer shadow-sm transition-colors hover:bg-gray-50 hover:border-amber-400 hover:text-amber-600'
                        onClick={nextPageHandler}
                    >
                        Next
                    </button>
                </section>
            </section>}
        </div>
    )
}

export default HomePage

