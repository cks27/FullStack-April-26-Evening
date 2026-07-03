import React from 'react'

const TempratureInp = ({updateTemperature}) => {
    const inputChangeHandler = (event) => {
        updateTemperature(event.target.value);
    }
    return (
        <div>
            <input onChange={inputChangeHandler} type="number" placeholder='Enter temperature in celcius' />
        </div>
    )
}

export default TempratureInp