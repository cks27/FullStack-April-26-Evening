import React, { useState } from 'react'

const Counter = (props) => {

    const [count, setCount] = useState(props.initialVal || 0);

    const incrementCountHandler = () => {
        setCount(count + 1);
    }

    const decrementCountHandler = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }

    const resetCountHandler = () => {
        setCount(props.initialVal || 0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCountHandler}>++</button>
            <button onClick={decrementCountHandler} disabled={ count===0 }>--</button>
            <button onClick={resetCountHandler}>Reset</button>
        </div>
    )
}

export default Counter