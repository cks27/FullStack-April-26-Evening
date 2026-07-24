import React from 'react'
import Carousel from './components/Carousel'
import Button from './components/Button'
import Counter from './components/Counter'
import Person from './components/Person'
import withGreeting from './hocs/withGreeting'
import Dashboard from './components/Dashboard'
import withAuth from './hocs/withAuth'
import Happy from './components/Happy'
import Products from './components/Products'

const App = () => {

  const PersonWithGreeting = withGreeting(Person);
  const DashboardWithAuth = withAuth(Dashboard);

  return (
    <div>
      {/* <Carousel /> */}
      {/* <Button /> */}
      {/* <Counter /> */}
      {/* <PersonWithGreeting name="Max" /> */}
      {/* <DashboardWithAuth /> */}
      {/* <Happy /> */}
      <Products/>
    </div>
  )
}

export default App