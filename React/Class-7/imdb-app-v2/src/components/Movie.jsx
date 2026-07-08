import React from 'react';
import { useNavigate } from 'react-router';

const Movie = ({ movie }) => {

    const navigate = useNavigate();

    const showMovieDetailsHandler = () => {
        navigate(`/movies/${movie.id}`);
    }

    return (
        <figure onClick={showMovieDetailsHandler} className='group w-[220px] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-lg cursor-pointer'>
            <div className='relative aspect-2/3 overflow-hidden bg-gray-100'>
                <img
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                />
            </div>
            <figcaption className='p-4'>
                <h3 className='mb-2 text-[0.95rem] font-semibold leading-snug line-clamp-2 text-gray-900'>{movie.title}</h3>
                <h4 className='inline-block mb-2 px-2.5 py-1 rounded-full text-xs font-bold text-gray-900 bg-amber-400'>{movie.vote_average}</h4>
                <h4 className='text-xs text-gray-500'>Release Date: {movie.release_date}</h4>
            </figcaption>
        </figure>
    )
}

export default Movie
