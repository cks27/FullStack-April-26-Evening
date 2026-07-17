import React, { useContext, useEffect, useState } from 'react'
import WatchListCard from '../components/WatchListCard';
import WatchListContext from '../context/watch-list';
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const WatchList = () => {

  const [search, setSearch] = useState("");
  const { watchList, sortWatchListByVoteAvg } = useContext(WatchListContext);
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All Genre');

  const searchInputChangeHandler = (event) => {
    setSearch(event.target.value);
  }

  const sortAscendingHandler = () => {
    sortWatchListByVoteAvg(true);
  }

  const sortDescHandler = () => {
    sortWatchListByVoteAvg(false);
  }

  useEffect(() => {
    const allGenres = watchList.map((movie) => {
      return movie.genres[0].name;
    });

    const uniqueGenreList = ['All Genre', ...new Set(allGenres)];
    setGenreList(uniqueGenreList);
  }, [watchList]);

  const genreClickHandler = (genre) => {
    setSelectedGenre(genre);
  }

  return (
    <div className='max-w-3xl'>
      <h1 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900'>
        My <span className='text-amber-500'>WatchList</span>
      </h1>
      {
        genreList.map((g, idx) => {
          return <button onClick={()=> genreClickHandler(g)} key={idx} className='border border-1 p-1 mx-2 cursor-pointer'>{ g }</button>
        })
      }
      <input onChange={searchInputChangeHandler} className='w-100 outline-none border border-2 border-gray-400 my-5 p-2' type="text" placeholder='Search Movie'/>
      <h4 className='my-2 flex items-center gap-4 cursor-pointer'>Sort Rating <FaArrowUp onClick={sortAscendingHandler}/> <FaArrowDown onClick={sortDescHandler}/></h4>
      {
        watchList
          .filter((movie) => {
            // selectedGenre = 'Horror'
            if (selectedGenre === 'All Genre') {
              return true;
            }
            return selectedGenre === movie.genres[0].name;
          })
          .filter((movie)=> movie.title.trim().toLowerCase().includes(search.toLowerCase()))
          .map((movie) => {
          return <WatchListCard key={movie.id} movie={movie} />
        })
      }
    </div>
  )
}

export default WatchList
