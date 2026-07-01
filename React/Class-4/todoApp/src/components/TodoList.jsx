import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

const TodoList = () => {

    const [inpTask, setInpTask] = useState("");

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    const [todos, setTodos] = useState(initialTodos);

    // It will be executed 
    // 1. After the first render(mounting)
    // 2. It will be executed each time when any component state is updated.(updation)
    useEffect(() => {
        console.log('1. Inside useEffect without dependency array');
    });


    // It will be executed 
    // 1. Just after the first render
    // 2. It will not be executed further i.e it is just executed once after the mounting phase.
    useEffect(() => {
        console.log('2. Inside useEffect with empty dependency array');
    }, []);

    // It will be executed
    // 1. just after the first render
    // 2. Whenever the `todos` state change.
    useEffect(() => {
        // Syncing the `todos` to the localStorage has nothing to do with the react.
        // It is just a side effect.
        // We are handling this side effect using `useEffect` hook provided by react.
        console.log('3. Inside 3rd useEffect')
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // It will be executed 
    // 1. After the first render
    // 2. After the inpTask has changed.
    useEffect(() => {
        console.log('4. Inside useEffect with [inpTask] as dependency array');
    }, [inpTask]);

    // It will be executed
    // 1. After the first render
    // 2. inputTask or todos changes
    useEffect(() => {
        console.log('5. Inside useEffect with [inpTask, todos] as dependency array');
    }, [inpTask, todos]);

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