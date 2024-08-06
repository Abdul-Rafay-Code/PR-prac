import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name:'SignUp',
    initialState:{
        auth:true,
        SignUpDetails:{
          email:'',
          password:''
        }
    },
    reducers:{
       Add:(state,action)=>{},
       Del:(state,action)=>{},
    } 
})

export default SignupSlice.reducer;