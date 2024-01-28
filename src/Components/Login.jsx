import React from 'react';
import {Link} from 'react-router-dom';


function Login() {
 
  return (
    <div className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-baseline'>
      <div className='h-[500px] w-[400px] bg-white mt-[100px]  rounded-3xl shadow-xl shadow-slate-300 text-center font-bold text-3xl py-[20px]'>
        <button  className="absolute top-4 right-4"><Link to="/Home">X</Link></button>
        <h1 >Welcome Back!</h1>
        <p className=' text-xl font-light mt-[8px]'>Log in to access your accounts</p>
        <form className='text-lg font-normal'>
          <input type='text' placeholder='Enter email' className='w-[300px] h-[40px] rounded-lg mt-[60px] px-[10px] py-[20px] border-2 '></input>
          <input type='password' placeholder='Enter Your password'  className='w-[300px] h-[40px] rounded-lg mt-[30px] px-[10px] py-[20px] border-2'></input>
          <button className='w-[300px] h-[40px] rounded-lg mt-[50px] mb-[10px] border-2 bg-gray-900 hover:bg-black text-white'><Link to="/Home">Log in</Link></button>
          <div className='flex gap-3 items-center justify-center'><p>Not a member?</p> <Link to="/SignUp" className='text-blue-700' >SignUp Here</Link></div>
        </form>
        
      </div>
    </div>
  )
}

export default Login