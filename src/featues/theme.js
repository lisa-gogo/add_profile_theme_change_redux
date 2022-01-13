import { createSlice } from "@reduxjs/toolkit";

const initialStateVlaue = '';

export const themeSlice = createSlice({
    name:"theme",
    initialState:{value:initialStateVlaue},
    reducers:{
       changeColor:(state,action) =>{
            state.value = action.payload;
        },



    }
})

export const {changeColor} =themeSlice.actions;
export default themeSlice.reducer;