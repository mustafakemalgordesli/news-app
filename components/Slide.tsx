"use client"

import React, { useState } from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { data } from '@/lib/data'
import Image from 'next/image'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slide = () => {
  return (
    <div className="relative flex items-center overflow-hidden mx-auto max-w-7xl overflow-x-hidden p-4 pb-0">
      {/* <MdChevronLeft
      className='opacity-50 cursor-pointer hover:opacity-100' 
      onClick={sliderLeft} size={40}/> */}
      <div id='HomeSlide' className='w-full h-[240px] overflow-y-hidden overflow-hidden pb-1 hover:overflow-x-scroll whitespace-nowrap scroll-smooth'>
        {data.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="inline-block h-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden" key={item.id}>
            <Image
              className='w-[340px] h-[235px] object-cover p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl'
              key={item.id}
              src={item.image} alt='/'
              width={340}
              // fill
              height={235}
            />
          </div>
        ))}
      </div>
      {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40}/> */}
    </div>
  )
}

export default Slide