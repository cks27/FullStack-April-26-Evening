import React from 'react'

const Movie = ({movie}) => {
  return (
      <figure className='border-2 border-gray-200 w-xs'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
          <figcaption>
              <h3>{movie.title}</h3>
              <h4>{movie.vote_average}</h4>
              <h4>Release Date: {movie.release_date}</h4>
          </figcaption>
    </figure>
  )
}

export default Movie