import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './reducer/CartSlice'

const store = configureStore({
    reducer:{
        Cart1:CartSlice
    },
})

export default store