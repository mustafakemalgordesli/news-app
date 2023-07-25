import React from 'react'
import {blog} from '@/lib/data'
import Image from 'next/image'
import Comment from '@/components/CommentForm'
import SinglePost from '@/components/SinglePost'

type Props = {
  id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
}


const page = ({id, title, desc, content, createdAt}: Props) => {
  return (
    <div>
      <SinglePost
      />
      <Comment/>
    </div>
  )
}

export default page