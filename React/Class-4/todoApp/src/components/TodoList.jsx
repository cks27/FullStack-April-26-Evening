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
        if (inpTask.trim().length === 0) {
            return;
        }
        const newTask = {
            id: uuid(),
            task: inpTask
        }

        setTodos([...todos, newTask]);
        setInpTask("");
    }

    // id=2
    const deleteTodo = (id) => {
        // todos - prevState
        // newTodosArr - new state or latest state
        
        /* 
            ---------Bad Way of Updating the state specially when 
                     the new state depends on the prevState.
        */
        // const newTodosArr = todos.filter((todo) => todo.id !== id);
        // setTodos(newTodosArr);
        
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }

    const inputTaskChangeHandler = (event) => {
        setInpTask(event.target.value);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={inputTaskChangeHandler} type="text" placeholder='Add Todo' value={inpTask } />
            <button onClick={addTodoHandler}>Add Todo</button>
            <ul>
                {
                    todos.map((todo) => {
                        return <Todo
                            key={todo.id}
                            todo={todo}
                            deleteTodo={ deleteTodo }
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList