"use client"

import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const HeroBanner = ({ slides }: { slides: any }) => {

  // const slides = [
  //   {
  //     url: '/1.jpg'
  //   },
  //   {
  //     url: '/2.jpg'
  //   },
  //   {
  //     url: '/1.jpg'
  //   },
  //   {
  //     url: '/3.jpg'
  //   }
  // ]

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
    <div className='w-full mx-auto max-w-7xl p-2 px-4 relative aspect-16/7 mb-5 group'>
      <div style={{ backgroundImage: `url(${slides[currentIndex]?.image})` }} className='relative flex items-center justify-center bg-cover w-full h-full rounded-xl bg-center ng-cover duration-500'>
        <div className='flex items-center content-center justify-center'>
          <div className="my-auto px-4 text-xl font-semibold text-white">
            <p className='h-full w-full bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-3'>{slides[currentIndex]?.title}</p>
          </div>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer select-none'>
          <BsChevronCompactLeft
            size={30}
            onClick={prevSlide}
          />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer select-none'>
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