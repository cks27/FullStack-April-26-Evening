import React, { createContext, useEffect, useState } from 'react'

const WatchListContext = createContext({
    watchList: [],
    addToWatchList: () => { },
    sortWatchListByVoteAvg: ()=>{}
})

export const WatchListContextProvider = (props) => {

    const initialWatchList = JSON.parse(window.localStorage.getItem('watchList') || '[]');
    const [watchList, setWatchList] = useState(initialWatchList);

    const addToWatchList = (movie) => {
        setWatchList((prevState) => [...prevState, movie]);
    }

    const sortWatchListByVoteAvg = (sortAsc = true) => {
        if (sortAsc) {
            const sortAscArr = watchList.toSorted((movie1, movie2) => movie1.vote_average - movie2.vote_average);
            setWatchList(sortAscArr);
            return;
        }
        // Sort in descending
        const sortAscArr = watchList.toSorted((movie1, movie2) => movie2.vote_average - movie1.vote_average);
        setWatchList(sortAscArr);
    }

    const context = {
        watchList: watchList,
        addToWatchList: addToWatchList,
        sortWatchListByVoteAvg: sortWatchListByVoteAvg
    }

    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList]);

    return (
        <WatchListContext.Provider value={context}>
            {props.children}
        </WatchListContext.Provider>
    )
}

export default WatchListContext;