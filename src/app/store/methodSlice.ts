import { createSlice } from "@reduxjs/toolkit";

export interface MethodState {
    data: number;
    title: string;
}

const initialState: MethodState = {
    data: 42,
    title: 'YARC (yet another redux counter with redux toolkit)'
}

export const methodSlice = createSlice({
    name: 'method',
    initialState,
    reducers: {
        increament: (state, action) => {
            state.data += action.payload
        },
        decreament: (state, action) => {
            state.data -= action.payload
        }
    }
})

export const {increament, decreament} = methodSlice.actions
export default methodSlice.reducer