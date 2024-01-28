import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';



function Header() {
    const [openModal,setOpenModal]=useState(false);
    const [openSignUp,setSignUp]=useState(false);

  return (
    <div className=" h-[100px] mx-[80px] mt-[10px] rounded-xl  flex px-[50px] pt-[20px] justify-between">
        <div className='flex gap-5'>
            <div className='h-[50px] w-[40px] '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"/></svg>
            </div>
            <h1 className='text-4xl font-bold text-black pt-1'>Tripster</h1>
        </div>
        <div className=' '>
            <ul className=" flex gap-16 text-2xl text-black font-semibold ">
                <div className='flex gap-10 '>
                <button>Home</button>
                <button>About</button>
                </div>
                <div className='flex gap-5 '>
                    <button className='w-[100px] h-[50px]  rounded-xl text-xl bg-gray-100 hover:bg-gray-200 shadow-lg shadow-gray-300' ><Link to="/SignUp" >SignUp</Link></button>
                    <button className='w-[100px] h-[50px]  rounded-xl text-xl  bg-slate-950 hover:bg-gray-600 shadow-lg shadow-gray-300 text-white'> <Link to="/Login" > Login </Link></button>
                </div>
                
            </ul>
        </div>
        

    </div>
  )
}

export default Header