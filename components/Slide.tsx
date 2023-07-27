"use client"

import React, { useState } from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
// import { data } from '@/lib/mockData'
import Image from 'next/image'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Slide = ({ data }: { data: any }) => {

  // const sliderLeft = () => {
  //   const slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // }

  // const sliderRight = () => {
  //   const slider = document.getElementById('slider')
  //   slider.scrollLeft = slider.scrollLeft ? slider.scrollLeft + 500
  // }

  return (
    <div className="relative flex items-center overflow-hidden mx-auto max-w-7xl overflow-x-hidden p-4 pb-0">
      {/* <MdChevronLeft
      className='opacity-50 cursor-pointer hover:opacity-100' 
      onClick={sliderLeft} size={40}/> */}
      <div id='HomeSlide' className='w-full h-[245px] overflow-y-hidden overflow-hidden hover:overflow-x-scroll whitespace-nowrap scroll-smooth'>
        {data.map((item: any) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="inline-block h-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden" key={item.id}>
            <Image
              className='w-[340px] h-[235px] object-cover p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl'
              src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + item.image} alt='blog image'
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