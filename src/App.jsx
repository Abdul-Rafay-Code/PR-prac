import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Product from './Pages/Home/Products/Product';
import Blog from './Pages/Home/Blog/Blog';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Components/redux/Store';
import Login from './Components/login/Login';
import AddTodo from './Components/todo/AddTodo';
import Todos from './Components/todo/Todos';

function App() {
  const [user, setUser] = useState(false)

  // const login = ()=>{
  //   setUser(true)
  // }

  
  // const logout = ()=>{
  //   setUser(false)
  // }

  return (
    <>
    <Provider store={store}>
    <AddTodo/>
    <Todos/>
    </Provider>
    {/* <Provider store={store}>
    <Router>
      <Navbar user={user} login={login} logout={logout}/>
      <Routes>
        <Route  path='/' element={<Home/>} />

        <Route  path='Blog/' element={
          <ProtectedRoute user={user}>
            {Blog.map((item,index)=>{

              let {title,id,body} = item
              
              return(
                blogItem({title,id,body})
              )
            })}
          </ProtectedRoute>
        } />

        <Route  path='Dashboard/' element={
        <ProtectedRoute  user={user}>
          <Dashboard>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quaerat.</p>
          </Dashboard>
        </ProtectedRoute>
      } />
        <Route path='/Login' element={<Login/>} />
        <Route  path='Product/' element={
        <ProtectedRoute  user={user}>
          <Product/>
        </ProtectedRoute>
       } />
      </Routes>
    </Router>
    </Provider> */}
    </>
  )
}

export default App


// const ProtectedRoute = ({user,children})=>{

//   if(user){
//     return children
//   }
//   else {
//     return <Navigate  to={'/'} />
//   }

// }

// function blogItem({title,id,body}){
//   return (
//     <div  className='flex flex-wrap px-4 lg:px-10 '>
//     <div  className="p-2 md:w-1/4 w-full">
//     <div  className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
//       <h2 className='text-xl text-black font-bold'>{title}</h2>
//       <h2 className='text-lg text-black mb-2'>{id}</h2>
//       <h2 className='text-lg text-black mb-2'>{body}</h2>
//       <div className=" flex  space-x-2 justify-between">
//         <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
//         <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
//       </div>
//     </div>
//   </div>
//   </div>
//   )

// }