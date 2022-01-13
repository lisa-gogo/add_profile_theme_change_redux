import { createSlice } from "@reduxjs/toolkit";

const initialStateVlaue = {name:"",age:0,email:"lisa710junyi@gmail.com"}

export const userSlice = createSlice({
    name:"user",
    initialState:{value:initialStateVlaue},
    reducers:{
        login:(state,action) =>{
            state.value = action.payload;
        },

        logout: (state)=>{
            state.value = initialStateVlaue
        }


    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;