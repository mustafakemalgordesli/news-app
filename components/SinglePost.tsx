import React from 'react'
import Image from 'next/image'

const SinglePost = ({ item }: any) => {
  return (
    <div className='flex-col flex max-w-screen-lg mx-auto w-full mb-5'>
      <div className='mx-10 flex flex-col flex-1 gap-8'>
        <div className='' >

          <h1 className='text-lg font-bold py-3'>{item.title}</h1>

          {/* <div>{item.createdAt.getDay} - </div> */}
          <Image
            width={1000}
            height={500}

            className="mx-auto rounded-xl mb-5 aspect-16/8"
            src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + item.image} alt=""
          />
          <p className='text-lg font-normal text-justify'>
            {item.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePost