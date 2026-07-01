import React from 'react';
import { v4 as uuid } from 'uuid';
import "./App.css";
import TodoList from './components/TodoList';

const App = () => {

  return (
    <div>
      <TodoList/>
    </div>
  )
}

export default App