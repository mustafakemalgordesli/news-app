"use client"

import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const HeroBanner = () => {

  const slides = [
    {
      url: '/1.jpg'
    },
    {
      url: '/2.jpg'
    },
    {
      url: '/1.jpg'
    },
    {
      url: '/3.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-screen-xl mx-auto w-full py-16 px-4 relative h-[780px] group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-xl bg-center ng-cover duration-500'>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft 
          size={30}
          onClick={prevSlide}
          />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight 
          size={30}
          onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner