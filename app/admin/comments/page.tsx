import { cookies } from 'next/headers';
import * as React from "react";
import Pagination from '@/components/Pagination';
import CommentTableItem from "@/components/CommentTableItem"

async function getData(token: string, page: any = 1) {

    if (!token) {
        throw new Error('Token not found')
    }

    const url = process.env.NEXT_PUBLIC_API_URL + `/comment/list?page_max=10&page=${page}`

    console.log(url)

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-cache"
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
                        <CommentTableItem key={item.id} comment={item} token={tokenValue} />
                    )
                }
            </tbody>
        </table>
        <Pagination route={"/admin/comments?page="} total_page={total_page} currentPage={Number(page) || 1} />
    </div>
    )
}

