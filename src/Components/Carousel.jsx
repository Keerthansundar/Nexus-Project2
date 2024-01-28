import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Carousel() {
    const slides = [
        {
          url: './Images/nature1.avif',
        },
        {
          url: './Images/nature2.avif',
        },
        {
          url: './Images/nature3.avif',
        },
    
        {
          url: './Images/nature4.avif',
        },
        {
          url: './Images/nature5.avif',
        },
      ];

    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        
        <div className=' absolute max-w-[1400px] h-[350px] w-full px-4 mx-10  group -z-10 hover:z-20 '>
            <div className=" absolute w-[1370px] h-full bg-black-rgba rounded-3xl "></div>
            <div className=" absolute  w-full h-full flex flex-col gap-4 justify-center items-center text-white ">
                <h1 className='text-5xl font-bold  '>Book your stay with Tripster</h1> 
                <p className=' font-medium text-xl'>1,480,086 rooms around the world are waiting for you!</p>
            </div>


            <div className=' absolute w-[1100px] bg-zinc-200 h-[120px] z-10 -bottom-16 ml-[150px] rounded-full shadow-lg shadow-gray-300'>
                <form className='flex gap-10 pl-[70px] pr-[70px] py-[20px] '>
                  <div>
                    <h1 className='text-xl font-semibold pl-5 pb-2'>Location</h1>
                    <input type='text' placeholder='Where are you going' className=' outline-none rounded-3xl px-3 text-base font-normal h-[40px] bg-slate-100'></input>
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold pl-5 pb-2'>Chech-In</h1>
                    <input type='text' placeholder='Add date' className='outline-none rounded-3xl px-3 text-base font-normal h-[40px]  bg-slate-100'></input>
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold pl-5 pb-2'>Chech-Out</h1>
                    <input type='text' placeholder='Add date' className='outline-none rounded-3xl px-3 text-base font-normal h-[40px]  bg-slate-100'></input>
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold pl-5 pb-2'>Guests</h1>
                    <input type='text' placeholder='Number of guests' className='outline-none rounded-3xl px-3 text-base font-normal h-[40px] bg-slate-100'></input>
                  </div>
                </form>       
            </div>



          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-[350px] rounded-3xl bg-center bg-cover duration-500 '
          >
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Carousel