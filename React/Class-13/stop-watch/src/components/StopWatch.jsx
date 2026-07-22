import React from 'react'
import { useState, useRef } from 'react'
import { formatSecondsTohHhMmSs } from '../utils/formatTime';

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);

    const timerIdRef = useRef();

    const startTimerHandler = () => {
        timerIdRef.current = setInterval(() => {
            setSeconds((prevState) => prevState + 1);
        }, 1000);
    }

    const stopTimerHandler = () => {
        clearInterval(timerIdRef.current);
    }

    const resetTimerHandler = () => {
        setSeconds(0);
    }

    return (
        <div>
            <h2>Time : { formatSecondsTohHhMmSs(seconds)}</h2>
            <button onClick={startTimerHandler}>Start</button>
            <button onClick={stopTimerHandler}>Stop</button>
            <button onClick={resetTimerHandler}>Reset</button>
        </div>
    )
}

export default StopWatch