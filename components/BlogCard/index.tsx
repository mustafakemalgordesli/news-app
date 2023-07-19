import React from 'react'

function BlogCard() {
  return (
    <div class="rounded overflow-hidden shadow-lg w-full max-w-[325px] sm:max-w-[275px] max-h-[350px] mx-auto">
      <img class="w-full" src="/image-1.jpg" alt="Mountain" />
      <div class="px-6 pt-2 pb-1">
        <div class="font-bold text-xl mb-1">Mountain</div>
        <p class="text-gray-700 text-base overflow-hidden mb-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </p>
        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Read More</button>
      </div>

    </div>
  )
}

export default BlogCard