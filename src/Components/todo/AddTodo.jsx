import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/reducer/CartSlice'

function AddTodo() {
       
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const add = ()=>{
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <>
    <div className='flex justify-center space-x-3 flex-wrap w-[50%] mx-auto rounded-xl  items-center p-4  bg-gray-500'>
     <input type="text" placeholder='Add Todo' value={input} onChange={(e)=>setInput(e.target.value)} className='p-2  rounded bg-red-600 text-white border-none outline-none' />
     <button className='bg-black p-2 text-white rounded' onClick={add} > Add Todo</button>
    </div>
    </>
  )
}

export default AddTodo