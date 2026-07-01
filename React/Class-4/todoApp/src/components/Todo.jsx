import React, { useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({todo, deleteTodo}) => {

  const deleteTodoHandler = () => {
    deleteTodo(todo.id);
  }

  useEffect(() => {
    console.log('TODO: Inside useEffect with empty dependency array--', todo.task);
    return () => {
      console.log('Cleaning up');
    }
  }, []);

  return (
    <li>
      {todo.task}
      <FaTrashAlt onClick={deleteTodoHandler} />
    </li>
  )
}

export default Todo