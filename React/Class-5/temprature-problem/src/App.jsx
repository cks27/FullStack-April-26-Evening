import React, { useState } from 'react'
import TempratureInp from './components/TempratureInp'
import TempratureDisplay from './components/TempratureDisplay'

const App = () => {

  const [tempInp, setTempInp] = useState(0);

  const updateTemperature = (tempInC) =>{
    setTempInp(tempInC);
  }

  return (
    <div>
      <h1>Temperature App</h1>
      <TempratureInp updateTemperature={ updateTemperature } />
      <TempratureDisplay tempInp={ tempInp } />
    </div>
  )
}

export default App