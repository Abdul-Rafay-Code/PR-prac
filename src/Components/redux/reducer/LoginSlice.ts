import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'Login',
    initialState:{
          auth:true,
          LoginDetails:{
            email:[],
            password:[]
          }
    },
    reducers:{
        Add:(state:any,action:any)=>{
            state.LoginDetails.email.push(action.payload.email);
            state.LoginDetails.password.push(action.payload.password);
        },
        Del:(state,action)=>{},
    }
})

export const { Add} = LoginSlice.actions
export default LoginSlice.reducer;