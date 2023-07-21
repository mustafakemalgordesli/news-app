import CreateCategoryForm from '@/components/Forms/CreateCategoryForm';
import { cookies } from 'next/headers';

export default function Add() {

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || "";

    return <CreateCategoryForm token={tokenValue} />
}