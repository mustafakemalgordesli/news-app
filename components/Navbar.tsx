import Image from 'next/image'
import React from 'react'

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`, {
    next: { revalidate: 1000, },
    cache: 'force-cache'
  })

  const data = await res.json()

  if (data.success) return data.categories
  return null
}

const Navbar = async () => {

  const data = await getData()

  return (
    <>
      <nav className="bg-slate-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Image
              src='/webewer.1466ce8c.png'
              width={45}
              height={45}
              className="h-8 mr-1"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Webewer</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-400 hover:bg-white focus:outline-none focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm border rounded-lg bg-white border-gray-600 placeholder-gray-400 text-gray-700  focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm rounded-lg bg-white border-gray-600 placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            </div>

          </div>
        </div>
      </nav>

      {
        data &&
        <nav className="bg-gray-100">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center overflow-hidden">
              <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                {
                  data.map((item: any) =>
                    <CategoryItem key={item.id} title={item.title} slug={item.slug} />
                  )
                }
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default Navbar

function CategoryItem({ title, slug }: { title: string, slug: string }) {
  return <li>
    <a href={`/category/${slug}`} className="text-black hover:underline">{title}</a>
  </li>
}