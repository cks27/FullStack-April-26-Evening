import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        // action - {type: 'increment'}
        increment: (state, action) => {
            state.count += 1;
            // This is technically not a direct state update, since redux utilises
            // Immer library to compare prev and new state and do the state updation
        },
        // action - {type:'decrement'}
        decrement: (state, action) => {
            state.count -= 1;
        },
        // action - {type: 'incrementByAmount', payload: x}
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    },
    // actions: {
    //     increment: () => {
    //         return {type: 'counter/increment'}
    //     },
    //     decrement: () => {
    //         return {type: 'counter/decrement'}
    //     },
    //     incrementByAmount: () => {
    //         return {type: 'counter/incrementByAmount', payload: x}
    //     }
    // }
});

// state => { count: 0 } - the whole object is a state
// action => {type: 'Some type', paload/error: }

// Redux toolkit combines all the reducers and generate one single reducer
export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;