import React from 'react'

const TempratureDisplay = ({ tempInp }) => {
    const tempInF = (9 / 5) * tempInp + 32;
    return (
        <div>
            <h2>Temperature : { tempInF } <sup>&deg;</sup> F </h2>
        </div>
    )
}

export default TempratureDisplay