import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Happy = () => {

    const [isHappy, toggleIsHappy] = useToggle(true);

    return (
        <div>
            <h2>{isHappy ? '😄' : '😢'}</h2>
            <button onClick={toggleIsHappy}>Toggle Happy</button>
        </div>
    )
}

export default Happy