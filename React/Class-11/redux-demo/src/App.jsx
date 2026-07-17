import React from 'react'
import ProductList from './components/ProductList'
import ProductListOptimised from './components/ProductListOptimised'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';
import { addTodo } from './features/todosSlice';

const App = () => {

  const counterState = useSelector((store) => store.counterState);
  const todoList = useSelector((store) => store.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Demo</h1>
      <ul>
        {
          todoList.todos.map((todo, idx) => {
            return <li key={idx}>{ todo }</li>
          })
        }
      </ul>
      <button onClick={()=> dispatch(addTodo('Some Todo which i wanted to add'))}>Add Todo</button>
      <br />
      <hr />
      <h2>Count: {counterState.count}</h2>

      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={()=> dispatch(decrement())}>--</button>
      <button onClick={()=> dispatch(incrementByAmount(10))}>+10</button>
      <ProductListOptimised />
    </div>

  )
}

export default App