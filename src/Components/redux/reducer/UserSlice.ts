import { createSlice } from "@reduxjs/toolkit";

const UserSLice = createSlice({
    name:'User',
    initialState:{
        id: 1,
        title: 'Abc'
             
    },
    reducers:{
        Add:(state,action)=>{
            state.title = action.payload;
        },
        del:(state,action)=>{},
    },
}) 

export const { Add } = UserSLice.actions

export default UserSLice.reducer