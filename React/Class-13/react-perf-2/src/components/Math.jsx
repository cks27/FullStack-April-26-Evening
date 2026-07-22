import React, { useMemo } from 'react'

const createLargeArray = () => {
    console.log('creating large array');
    const arr = [];
    for (let i = 0; i < 1000000; i++){
        arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    console.log('computing sum...')
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const Math = () => {

    const largeArray = useMemo(()=>createLargeArray(), []);
    const totalSum = useMemo(()=> sum(largeArray), [largeArray]);

    return (
        <div>
            <h2>Total Sum : { totalSum }</h2>
        </div>
    )
}

export default Math