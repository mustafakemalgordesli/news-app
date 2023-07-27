import CreateBlogForm from '@/components/Forms/CreateBlogForm';
import { cookies } from 'next/headers';

const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`, {
        next: { revalidate: 10, },
    })

    const data = await res.json()

    if (data.success) return data.categories
    return []
}

export default async function Add() {

    const categories = await getData()

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || "";

    return <CreateBlogForm token={tokenValue} categories={categories} />
}