import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../redux/reducer/LoginSlice';

const Login = () => {
  const [UserData, setUserData] = useState({
    email:'',
    password:''
  });

  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("test")
      dispatch(Add(UserData))
    // Handle login logic here
  };
  const LoginData = useSelector((a)=> a.Login)
  // console.log(LoginData)

//   LoginData.email?.forEach((email, index) => {
//     console.log(`${index + 1}: ${email}`);
// });
 
  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={UserData.email}
              onChange={(e)=>setUserData({...UserData,email:e.target.value}) }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={UserData.password}
              onChange={(e)=>setUserData({...UserData,password:e.target.value}) }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
         
        
        
    </>
  );
};

export default Login;
