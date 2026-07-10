import React from 'react'

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const WatchListCard = ({ movie }) => {
  return (
    <article className='flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md mb-4'>
      <div className='relative shrink-0 w-36 sm:w-44 overflow-hidden bg-gray-100'>
        <img
          className='h-full w-full object-cover'
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className='flex flex-1 flex-col justify-center gap-2 p-4 sm:p-5 min-w-0'>
        <h3 className='text-base sm:text-lg font-semibold leading-snug text-gray-900 line-clamp-2'>
          {movie.title}
        </h3>

        {movie.overview && (
          <p className='text-sm leading-relaxed text-gray-600 line-clamp-3'>
            {movie.overview}
          </p>
        )}

        {movie.release_date && (
          <p className='text-xs font-medium text-gray-500'>
            Release Date: <span className='text-gray-700'>{movie.release_date}</span>
          </p>
        )}
      </div>
    </article>
  )
}

export default WatchListCard
