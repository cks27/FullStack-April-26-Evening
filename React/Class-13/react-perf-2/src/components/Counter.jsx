import React, { useCallback, useState } from 'react'
import Demo from './Demo';
import CounterActions from './CounterActions';
import Math from './Math';

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('Counter-rendered');

    // creating a function
    const incrementBy10 = useCallback(() => {
        setCount((prevState) => prevState + 10);
    }, []);

    return (
        <div>   
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>++</button>
            {/* Imagine this is a very heavy component */}
            <Demo name="Max" />
            <CounterActions incrementBy10={incrementBy10} />
            <Math/>
      </div>
   
  )
}

export default Counter