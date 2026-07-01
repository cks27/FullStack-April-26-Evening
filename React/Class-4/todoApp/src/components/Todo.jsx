import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({todo, deleteTodo}) => {

  const deleteTodoHandler = () => {
    deleteTodo(todo.id);
  }

  return (
    <li>
      {todo.task}
      <FaTrashAlt onClick={deleteTodoHandler} />
    </li>
  )
}

export default Todo