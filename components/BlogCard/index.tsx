import React from 'react'
import Image from 'next/image'

function BlogCard() {
  return (
    <div className="rounded overflow-hidden shadow-lg w-full max-h-[325px] sm:max-w-[275px] sm:max-h-[350px] mx-auto">
      <div className='w-[285px] h-[184px] relative'>
        <Image src="/image-1.jpg" alt="Mountain" fill />
      </div>
      <div className="px-6 pt-2 pb-1">
        <div className="font-bold text-xl mb-1"></div>
        <p className="text-gray-700 text-base overflow-hidden mb-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </p>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Read More</button>
      </div>
    </div>
  )
}

export default BlogCard