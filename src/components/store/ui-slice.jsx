import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState:{
        isEmpty: true,
    },
    reducers: {
        setIsNotEmpty(state) {
            state.isEmpty = false;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice