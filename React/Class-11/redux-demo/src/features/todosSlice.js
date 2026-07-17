import { createSlice } from '@reduxjs/toolkit';

// Data flow - https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

export const todosSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: ['Buy Groceries', 'Learn Redux']
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions; 