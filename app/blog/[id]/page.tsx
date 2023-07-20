import React from 'react'
import {blog} from '@/lib/data'
import Image from 'next/image'
import Comment from '@/components/CommentForm'

type Props = {
  id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
}

const page = ({id, title, desc, content, createdAt}: Props) => {
  return (
    // <div className=''>
    //   <div className='mx-auto h-auto max-w-screen-lg object-cover flex mb-10'>
    //     {blog.map((item) => (
    //     <div className='' key={item.id}>
          
    //       <div className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex'>{item.title}</div>
    //       <div className='mb-3 font-normal text-gray-100 dark:text-gray-400'>{item.desc}</div>

    //       <div>{item.createdAt}</div>
    //       <Image
    //       width={1400}
    //       height={500}
          
    //       className="mx-auto rounded-xl mb-10" 
    //       src={item.image} alt=""
    //       />
    //       <div className='max-w-screen-lg mx-auto w-full flex pb-50 gap-8 flex-1'>{item.content}</div>
    //     </div>
          
    //       ))}

    <div className='flex-col flex max-w-screen-lg mx-auto w-full gap-10'>
      <div className='max-w-screen-lg mx-auto w-full flex flex-col flex-1 mt-50 gap-8'>
      {blog.map((item) => (
        <div className='' key={item.id}>
          
          <h1 className='text-lg font-bold pt-10'>{item.title}</h1>
          
          <div>{item.createdAt}</div>
          <Image
          width={1400}
          height={500}
          
          className="mx-auto rounded-xl mb-10" 
          src={item.image} alt=""
          />
          <p className='text-lg font-normal text-justify'>
            {item.content}
          </p>
        </div> 
          ))}
        
        </div>

        {/* <div className="flex flex-col justify-between p-4 leading-normal mb-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div> */}

      <Comment/>
    </div>
  )
}

export default page