import React from 'react'
import Comment from '@/components/CommentForm'
import SinglePost from '@/components/SinglePost'
import { notFound } from 'next/navigation'
import axios from 'axios'
import CommentList from '@/components/CommentList'


const getData = async (id: string) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/post/detail?id=${id}`
  console.log(url)
  const res = await axios.get(url)
  if (res.data.success) return res.data.data
  return null
}

export default async function BlogDetailPage({ params }: any) {

  const data = await getData(params.id)


  // if (!data) {
  //   notFound()
  // }

  return (
    <>
      {
        data ?
          <div>
            <SinglePost item={data} />
            <Comment post_id={data.id} />
            <CommentList post_id={data.id} />
          </div >
          : <section className="flex justify-center items-center bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
              </div>
            </div>
          </section>
      }
    </>
  )
}
