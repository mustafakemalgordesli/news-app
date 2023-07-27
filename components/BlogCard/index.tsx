import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BlogCard({ blog }: { blog: any }) {
    const hrefUrl = `/blog/${blog.id}`
    const date = new Date(blog.publishing_date)
    return (
        <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={hrefUrl} className='relative w-full border-none'>
                <Image width={300} height={200} className="w-full h-[200px] rounded-t-lg object-fit border-none outline-none" src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + blog.image} alt="" />
            </Link>
            <div className="p-3 mt-auto">
                <Link href={hrefUrl}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                </Link>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{blog.content.slice(0, 30)}...</p>
                <Link href={hrefUrl} className="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
                <div className="text-end text-[14px]">{date.getFullYear()}-{date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth()}-{date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}</div>
            </div>
        </div>
    )
}


export default BlogCard