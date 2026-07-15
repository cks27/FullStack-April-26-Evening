import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counterSlice';
import todosSliceReducer from '../features/todosSlice';

export const store = configureStore({
    reducer: {
        counterState: counterSliceReducer,
        todoList: todosSliceReducer
    }
});
