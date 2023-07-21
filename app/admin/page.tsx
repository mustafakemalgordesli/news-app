import { cookies } from 'next/headers';
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';

async function getData(token: string, page: any = 1) {

    if (!token) {
        throw new Error('Token not found')
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/post/list?page=${page}&page_max=10`, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 1 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (!data.success) {
        throw new Error('Failed to fetch data')
    }

    return data.posts
}

export default async function Admin() {

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || ""

    const posts = await getData(tokenValue)

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
                            Show Status
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((item: any) =>
                            <TableItem key={item.id} blog={item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const TableItem = ({ blog }: { blog: any }) => {
    return <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {blog.id}
        </th>
        <td className="px-6 py-4">
            {blog.title}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {blog.category.title}
        </td>
        <td className="px-6 py-4 flex justify-center items-center">
            {
                blog.image !== "" ? <Image src={process.env.NEXT_PUBLIC_IMAGE_SERVICE + blog.image} width={75} height={50} alt="blog image" /> : null
            }
        </td>
        <td className='bg-gray-50 dark:bg-gray-800'>
            {
                blog.show_status.toString()
            }
        </td>
        <td className='px-6 py-4  align-middle'>
            <Link href={`/admin/${blog.slug}`} className="text-purple-700 mx-2 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Details</Link>
            <Link href={`/admin/update/${blog.slug}`} className="text-yellow-400 mx-2 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Update</Link>
            <button type="button" className="text-red-700 mx-2 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        </td>
    </tr>
}
