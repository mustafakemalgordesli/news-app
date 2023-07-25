import React from 'react'
import Image from 'next/image'

function BlogCard({ blog }: { blog: any }) {
  return (
      <div className="m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img className="rounded-t-lg" src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + blog.image} alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content.slice(0, 30)}...</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      


      <div className="px-6 pt-2 pb-1">
        <div className="font-bold text-xl mb-1">{blog.title.length >= 15 ? blog.title.slice(0, 15) + "..." : blog.title}</div>
        <p className="text-gray-700 text-base overflow-hidden mb-1">
          {blog.content.slice(0, 30)}...
        </p>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Read More</button>
      </div>
    </div>
  )
}


export default BlogCard