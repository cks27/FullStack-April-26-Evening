import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 data-testid="counter-display">Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incr</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Decr</button>
        </div>
    )
}

export default Counter