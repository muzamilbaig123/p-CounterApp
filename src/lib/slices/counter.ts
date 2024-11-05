import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    value: number
}

const initialNumber:initialStateType = {
    value: 0
}

const myCounterApp = createSlice({
    name: "Counter Application",
    initialState: initialNumber,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value > 0 ? state.value -= 1 : state.value; 
        }

    }
})

export const { increment, decrement } = myCounterApp.actions;

export default myCounterApp.reducer