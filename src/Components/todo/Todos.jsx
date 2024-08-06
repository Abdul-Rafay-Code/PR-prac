import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,editTodo } from '../redux/reducer/CartSlice'

function Todos() {
 
  const data = useSelector(state => state.Cart1.todos)
 
  const dispatch = useDispatch()
  // const [fullValue,setFullValue] = useState()
// console.log(fullValue)

  const handleEdit = (arr,index,item)=>{
    const Val = prompt('Enter Edit Value')
    const spread = [...arr]
    let editSpread = spread[index]
    let final = {...editSpread,text:Val}
    // console.log(final)
    // setFullValue(final) 
    dispatch(editTodo(final))

  }
  
 
 
        

  return (
    <div className='flex justify-center flex-col  items-center mt-5 flex-wrap space-y-3'>
      {data.map((item,index,arr)=>{

        return (
          <>
          <div className="flex justify-center items-center mt-5 flex-wrap space-x-3" key={item.id}>
        <p className='bg-slate-300 p-3 rounded'>{item.text}</p>
        <button className='bg-slate-300 p-3 rounded' onClick={()=>dispatch(removeTodo(item.id))} >Delete</button>
        <button className='bg-slate-300 p-3 rounded' onClick={()=>handleEdit(arr,index,item)} >Edit</button>
        </div>
          </>
        )
      })}
      </div>
  )
}

export default Todos