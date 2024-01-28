import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function SignUp() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-xl text-center'>
        <button className="absolute top-4 right-4"><Link to="/Home">X</Link></button>
        <h1 className='text-3xl font-bold mb-4'>Join Us today!</h1>
        <p className='text-xl font-light mb-6'>Sign up now to become a member</p>
        <form className='text-lg font-normal'>
          <input
            type='text'
            placeholder='Enter name'
            className='w-full h-12 mb-4 px-4 rounded border-2'
          />
          <input
            type='text'
            placeholder='Enter email'
            className='w-full h-12 mb-4 px-4 rounded border-2'
          />
          <input
            type='password'
            placeholder='Choose your password'
            className='w-full h-12 mb-4 px-4 rounded border-2'
          />
          <input
            type='password'
            placeholder='Confirm your password'
            className='w-full h-12 mb-4 px-4 rounded border-2'
          />
          <button className='w-full h-12 mb-6 bg-gray-900 hover:bg-black text-white rounded'>
            <Link to="/Home">Signup</Link>
          </button>
          <div className='flex flex-col items-center'>
            <p className='mb-2'>Already a member?</p>
            <Link to="/Login" className='text-blue-700'>
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
