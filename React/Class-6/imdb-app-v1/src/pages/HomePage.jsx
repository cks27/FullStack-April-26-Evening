import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from '../components/Movie';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
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
            {isLoading && <p>Loading...</p>}
            {movies && movies.length && <section>
                <section className='flex flex-wrap justify-center gap-4'>
                    {
                        movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />
                        })
                    }
                </section>
                <section className='flex justify-center gap-4 mt-5'>
                    <button className='border cursor-pointer' onClick={prevPageHandler}>Prev</button>
                    <span>{ }</span>
                    <button className='border cursor-pointer' onClick={nextPageHandler}>Next</button>
                </section>
            </section>}
        </div>
    )
}

export default HomePage


