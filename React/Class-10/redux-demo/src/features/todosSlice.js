import { createSlice } from '@reduxjs/toolkit';

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