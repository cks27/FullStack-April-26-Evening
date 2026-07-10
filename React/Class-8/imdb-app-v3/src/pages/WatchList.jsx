import React, { useEffect, useState } from 'react'
import WatchListCard from '../components/WatchListCard';

const WatchList = () => {

  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const watchlist = JSON.parse(window.localStorage.getItem('watchlist') || '[]');
    setWatchlist(watchlist);
  }, []);

  const addMovieToWatchList = (movie) => {
    setWatchlist((prevState) => [...prevState, movie]);
  }

  return (
    <div className='max-w-3xl'>
      <h1 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900'>
        My <span className='text-amber-500'>WatchList</span>
      </h1>
      {
        watchlist.map((movie) => {
          return <WatchListCard key={movie.id} movie={movie} />
        })
      }
    </div>
  )
}

export default WatchList
