import React from 'react'
import {blog} from '@/lib/data'
import Image from 'next/image'

type Props = {
  id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
}

const SinglePost = ({id, title, desc, content, createdAt}: Props) => {
  return (

    <div className='flex-col flex max-w-screen-lg mx-auto w-full gap-10 mb-10'>
      <div className='mx-10 flex flex-col flex-1 mt-50 gap-8 '>
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
    </div>
  )
}

export default SinglePost