import CreateBlogForm from '@/components/CreateBlogForm';
import { cookies } from 'next/headers';

export default function Add() {

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || "";

    return <CreateBlogForm token={tokenValue} />
}