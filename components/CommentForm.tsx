"use client"

import React, { useState } from 'react'
import axios from "axios"
import { useParams, useRouter, useSearchParams } from "next/navigation";

const Comment = ({ post_id }: { post_id: number }) => {

  const [title, SetTitle] = useState("")

  const [userName, SetUserName] = useState("")

  const [comment, SetComment] = useState("")

  const params = useParams()
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const res = await axios.post(`/api/comment/create`, formData)

    const { success } = res.data

    if (success) {
      SetComment("")
      SetTitle("")
      SetUserName("")
      const nextUrl = searchParams.get("next");
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push(nextUrl ?? `/blog/${params.id}`);
      router.refresh();
    } else {
      // Make your shiny error handling with a great user experience
      alert("Could not add comment");
    }
  };


  return (
    <form className='max-w-screen-lg mx-auto' onSubmit={handleSubmit}>
      <div className="m-5 border border-gray-200 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 ">
        <div className='text-lg font-bold px-4 my-3'>Yorum Yap</div>
        <div className="mb-3 px-4">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Ad:</label>
          <input type="text" name="user_name" id="user_name" value={title} onChange={e => SetTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ad" required />
        </div>
        <div className="mb-3 px-4">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">E-mail:</label>
          <input type="email" id="title" name="title" value={userName} onChange={e => SetUserName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required />
        </div>

        <div className="px-4 mb-3 bg-gray-100 rounded-t-lg dark:bg-gray-800">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Yorum:</label>
          <textarea id="text" name="text" value={comment} onChange={e => SetComment(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Yorum Yaz..." required></textarea>
        </div>
        <input type="text" hidden name="post_id" id="post_id" value={post_id} />
        <input type="text" hidden name="show_status" id="show_status" value={"true"} />
        <div className="flex items-center justify-between px-4 mb-3 dark:border-gray-600">
          <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Gönder
          </button>
        </div>
      </div>
    </form>
  )
}

export default Comment