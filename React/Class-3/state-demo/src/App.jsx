import React from 'react';
import { v4 as uuid } from 'uuid';
import Product from './components/Product';
import "./App.css";
import Counter from './components/Counter';
import User from './components/User';
import TodoList from './components/TodoList';

const App = () => {

  const products = [
    {
      id: uuid(),
      name: "Macbook Pro",
      price: 100
    },
    {
      id: uuid(),
      name: "Macbook Air",
      price: 200
    },
    {
      id: uuid(),
      name: "Iphone",
      price: 200
    },
    {
      id: uuid(),
      name: "Airbuds",
      price: 150
    }
  ]

  return (
    <div>
      {/* {
        products.map((product) => {
          return <Product
            key={product.id}
            name={product.name}
            price={product.price}
          />
        })
      } */}
      {/* <Counter initialVal={ 10 } />
      <Counter initialVal={ 20 } />
      <Counter /> */}
      {/* <User
        name="Max"
        age={30}
        location="Mumbai"
        picture="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
        email="max@gmail.com"
      />

      <User
        name="John"
        age={15}
        location="Delhi"
        picture="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
        email="john@gmail.com"
      /> */}

      <TodoList/>
    </div>
  )
}

export default App