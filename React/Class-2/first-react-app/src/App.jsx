import Person from "./components/Person"

// Functional Component
const App = () => {

  // Generating a random number between 1-10.
  const randomNum = Math.floor(Math.random() * 10 + 1);

  let element = null;
  if (randomNum % 2 === 0) {
    element = <p>{ randomNum } is a even number</p>
  } else {
     element = <p>{ randomNum } is a odd number</p>
  }

  const todos = ["Go Swimming", "Learn React", "Buy Groceries"];

  const persons = [
    {
      name: 'Max',
      age: 25
    },
    {
      name: 'John',
      age: 20
    },
    {
      name: 'Ajay',
      age: 30
    },
  ]

  return (
    <div>
      <h1>First React App</h1>
      {/* {element} */}

      {randomNum % 2 === 0 ? <p>{randomNum} is even</p> : <p>{ randomNum} is odd</p>}

      {randomNum===7 && <img src="https://media.baamboozle.com/uploads/images/137568/1645714885_1840018_gif-url.gif" />}

      <ul>
        {
          todos.map((todo, idx) => {
            return <li key={idx}>{ todo }</li>
          })
        }
      </ul>
      <div>
        {
          persons.map((person, idx) => {
            return <Person
              key={idx}
              name={person.name}
              age={person.age}
            />
          })
        }
      </div>
    </div>
  )
}

export default App