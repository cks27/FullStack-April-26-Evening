import React, { memo } from 'react'

const CounterActions = memo(({ incrementBy10 }) => {
    console.log('CounterActions-rendered');
    return (
        <div>
            <button onClick={()=> incrementBy10()}>increment By 10</button>
        </div>
    )
})

export default CounterActions