import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

const TodoList = () => {

    const [inpTask, setInpTask] = useState("");

    const [todos, setTodos] = useState([
        {
            id: uuid(),
            task: "Go to Swimming"
        },
        {
            id: uuid(),
            task: "Learn React"
        },
        {
            id: uuid(),
            task: "Watch Movies"
        },
    ]);


    const addTodoHandler = () => {
        const newTask = {
            id: uuid(),
            task: inpTask
        }

        setTodos([...todos, newTask]);
    }

    const inputTaskChangeHandler = (event) => {
        setInpTask(event.target.value);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={inputTaskChangeHandler} type="text" placeholder='Add Todo' />
            <button onClick={addTodoHandler}>Add Todo</button>
            <ul>
                {
                    todos.map((todo) => {
                        return <Todo key={ todo.id } task={todo.task} />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList