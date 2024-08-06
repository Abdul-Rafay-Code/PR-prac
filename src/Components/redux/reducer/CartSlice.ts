import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}



export const CartSlice = createSlice({
    name: 'Cart1',
    initialState,
    reducers: {
        addTodo: (state:any, action:any) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state:any, action:any) => {
            state.todos = state.todos.filter((todo:any) => todo.id !== action.payload )
        },

        editTodo: (state:any,action:any)=>{
            const index = state.todos.findIndex((todo:any)=> todo.id === action.payload.id)
            state.todos[index].text = action.payload.text
        }
    }
})

export const {addTodo, removeTodo,editTodo} = CartSlice.actions

export default CartSlice.reducer;