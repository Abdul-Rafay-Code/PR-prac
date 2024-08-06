import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../../../Components/redux/reducer/UserSlice'

const Dashboard = ({children}) => {

   const userSlice = useSelector((a)=> a)
   console.log(userSlice) 
   const dispatch = useDispatch() 

   const HandleUpdate = ()=>{
        dispatch(Add('Abdul Rafay'))
   }

  return (
    <>
    <div className='text-5xl text-blue-500 font-bold flex items-center justify-center h-24'>{userSlice?.User?.title}
      <button onClick={HandleUpdate} className='bg-red-500 p-2 rounded' >UpDate</button>
    </div>
    <div className="text-5xl text-blue-500 font-bold">
    {children}
    </div>
    </>
  )
}

export default Dashboard