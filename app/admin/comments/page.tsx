import { cookies } from 'next/headers';
import * as React from "react";
import Pagination from '@/components/Pagination';

async function getData(token: string, page: any = 1) {

    if (!token) {
        throw new Error('Token not found')
    }

    const url = process.env.NEXT_PUBLIC_API_URL + `/comment/list?page_max=10&page=${page}`

    console.log(url)

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 10 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    if (!data.success) {
        throw new Error('Failed to fetch data')
    }

    return data
}

export default async function Admin({ searchParams }: any) {

    const page = searchParams?.page || 1

    const cookieStore = cookies()

    const token = cookieStore.get('token')

    const tokenValue: string = token?.value || ""

    const { total_page, posts: comments } = await getData(tokenValue, page)

    return (<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 mb-5">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Username
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800 max-w-[350px]">
                        Comment
                    </th>
                    <th>
                        Show Status
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((item: any) =>
                        <TableItem key={item.id} comment={item} />
                    )
                }
            </tbody>
        </table>
        <Pagination route={"/admin/comments?page="} total_page={total_page} currentPage={Number(page) || 1} />
    </div>
    )
}

const TableItem = ({ comment }: { comment: any }) => {
    return <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
            {comment.id}
        </th>
        <td className="px-6 py-4">
            {comment.user_name}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {comment.text}
        </td>
        <td className="px-6 py-4">
            {JSON.stringify(comment.show_status)}
        </td>
        <td className='px-6 py-4 align-middle bg-gray-50 dark:bg-gray-800'>
            <button type="button" className="text-purple-700 mx-2 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Change Visibility</button>
            <button type="button" className="text-red-700 mx-2 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        </td>
    </tr>
}
