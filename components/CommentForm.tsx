import React from 'react'

const Comment = () => {
  return (
    <form className='max-w-screen-lg mx-auto w-full'>
      <div className="m-10 mb-4 border border-gray-200 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 ">
        <div className='text-lg font-bold p-5'>Yorum Yap</div>
        <div className="mb-6 pr-5 pl-5 mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ad</label>
          <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ad" required />
        </div>
        <div className="mb-6 p-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
        </div>

        <div className="px-4 py-2 bg-gray-100 rounded-t-lg dark:bg-gray-800">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yorum</label>
          <textarea id="comment" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Yorum Yaz..." required></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Gonder
          </button>
        </div>
      </div>
    </form>
  )
}

export default Comment